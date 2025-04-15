import { CrustEvaluator } from "../CrustEvaluator";
import { IRunnerPlugin } from "conductor/dist/conductor/runner/types";
import { TestCase } from "./TestCases";

/**
 * Enhanced TestConductor that captures outputs for testing
 */
export class TestConductor implements IRunnerPlugin {
  outputs: string[] = [];
  errors: string[] = [];
  originalConsoleLog: any;
  originalConsoleError: any;
  
  constructor() {
    // Override console.log to capture output
    this.originalConsoleLog = console.log;
    this.originalConsoleError = console.error;
    console.log = (message: any, ...optionalParams: any[]) => {
      const output = String(message);
      this.outputs.push(output);
      this.originalConsoleLog(message, ...optionalParams);
    };
    console.error = (message: any, ...optionalParams: any[]) => {
      const output = String(message);
      this.outputs.push(output);
      this.originalConsoleError(message, ...optionalParams);
    };
  }
  
  sendOutput(output: string): void {
    this.outputs.push(output);
    this.originalConsoleLog(output);
  }
  
  sendError(error: any): void {
    const errorMsg = error instanceof Error ? error.message : String(error);
    this.errors.push(`Error: ${errorMsg}`);
    this.originalConsoleError(`Error: ${errorMsg}`);
  }
  
  // Stub implementations for required methods
  requestFile() { return Promise.resolve(undefined); }
  requestChunk() { return Promise.resolve(""); }
  requestInput() { return Promise.resolve(""); }
  tryRequestInput() { return undefined; }
  updateStatus() {}
  hostLoadPlugin() {}
  registerPlugin() { return {} as any; }
  unregisterPlugin() {}
  registerModule() { return {} as any; }
  unregisterModule() {}
  importAndRegisterExternalPlugin() { return Promise.resolve({} as any); }
  importAndRegisterExternalModule() { return Promise.resolve({} as any); }
  name?: string;
  destroy() {
    // Restore original console.log when done
    console.log = this.originalConsoleLog;
    console.error = this.originalConsoleError;
  }
}

/**
 * Runs a single test case
 */
export async function runTest(test: TestCase): Promise<boolean> {
  console.log(`\n----- Running test: ${test.name} -----`);
  
  const conductor = new TestConductor();
  const evaluator = new CrustEvaluator(conductor);
  
  try {
    await evaluator.evaluateChunk(test.code);
  } catch (error) {
    // Add errors to conductor's outputs so they can be checked
    const errorMessage = error instanceof Error ? error.message : String(error);
    conductor.outputs.push(`Error: ${errorMessage}`);
  }
  
  // Simply check if all expected outputs are in the actual outputs
  let allFound = true;
  for (const expected of test.expectedOutput) {
    if (!conductor.outputs.some(out => out.includes(expected))) {
      console.log(`❌ Expected output not found: "${expected}"`);
      console.log(`Actual outputs:`, conductor.outputs);
      allFound = false;
    }
  }
  
  if (allFound) {
    console.log(`✅ Test passed!`);
    return true;
  } else {
    console.log(`❌ Test failed`);
    return false;
  }
}

/**
 * Runs multiple tests and returns a summary of the results
 */
export async function runTests(tests: TestCase[]): Promise<{
  passed: number;
  failed: number;
  failedTests: string[];
}> {
  let passed = 0;
  let failed = 0;
  const failedTests: string[] = [];
  
  for (const test of tests) {
    try {
      const success = await runTest(test);
      if (success) {
        passed++;
      } else {
        failed++;
        failedTests.push(test.name);
      }
    } catch (error) {
      console.error(`Error running test ${test.name}:`, error);
      failed++;
      failedTests.push(test.name);
    }
  }
  
  return { passed, failed, failedTests };
}