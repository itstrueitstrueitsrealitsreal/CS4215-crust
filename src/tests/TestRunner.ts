import { CrustEvaluator } from "../CrustEvaluator";
import { IRunnerPlugin } from "conductor/dist/conductor/runner/types";
import { TestCase } from "./TestCases";

/**
 * Enhanced TestConductor that captures outputs for testing
 */
export class TestConductor implements IRunnerPlugin {
  outputs: string[] = [];
  errors: string[] = [];
  originalConsoleLog = console.log;
  originalConsoleError = console.error;

  // Only capture actual program output, not debugging logs
  sendOutput(output: string): void {
    this.outputs.push(output);
    this.originalConsoleLog(output);
  }

  sendError(error: any): void {
    const errorMsg = error instanceof Error ? error.message : String(error);
    this.errors.push(`Error: ${errorMsg}`);
    this.outputs.push(`Error: ${errorMsg}`); // Add to outputs for test validation
    this.originalConsoleError(`Error: ${errorMsg}`);
  }

  // Stub implementations for required methods
  requestFile() {
    return Promise.resolve(undefined);
  }
  requestChunk() {
    return Promise.resolve("");
  }
  requestInput() {
    return Promise.resolve("");
  }
  tryRequestInput() {
    return undefined;
  }
  updateStatus() {}
  hostLoadPlugin() {}
  registerPlugin() {
    return {} as any;
  }
  unregisterPlugin() {}
  registerModule() {
    return {} as any;
  }
  unregisterModule() {}
  importAndRegisterExternalPlugin() {
    return Promise.resolve({} as any);
  }
  importAndRegisterExternalModule() {
    return Promise.resolve({} as any);
  }
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
export async function runTest(test: TestCase): Promise<{
  success: boolean;
  expected?: string[];
  actual?: string[];
}> {
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

  // Check if the number of outputs matches expected outputs
  if (test.expectedOutput.length !== conductor.outputs.length) {
    console.log(
      `❌ Expected ${test.expectedOutput.length} outputs but got ${conductor.outputs.length}`
    );
    console.log(`Expected: ${test.expectedOutput}`);
    console.log(`Actual: ${conductor.outputs}`);
    return {
      success: false,
      expected: test.expectedOutput,
      actual: conductor.outputs,
    };
  }

  // Check outputs in order with exact matching
  for (let i = 0; i < test.expectedOutput.length; i++) {
    if (conductor.outputs[i] !== test.expectedOutput[i]) {
      console.log(`❌ Output at position ${i} doesn't match:`);
      console.log(`Expected: "${test.expectedOutput[i]}"`);
      console.log(`Actual: "${conductor.outputs[i]}"`);
      return {
        success: false,
        expected: test.expectedOutput,
        actual: conductor.outputs,
      };
    }
  }

  console.log(`✅ Test passed!`);
  return { success: true };
}

function fail() {
  console.log(`❌ Test failed!`);
  return false;
}

function pass() {
  console.log(`✅ Test passed!`);
  return true;
}

/**
 * Runs multiple tests and returns a summary of the results
 */
export async function runTests(tests: TestCase[]): Promise<{
  passed: number;
  failed: number;
  failedTests: string[];
  failedDetails: {
    [testName: string]: { expected: string[]; actual: string[] };
  };
}> {
  let passed = 0;
  let failed = 0;
  const failedTests: string[] = [];
  const failedDetails: {
    [testName: string]: { expected: string[]; actual: string[] };
  } = {};

  for (const test of tests) {
    try {
      const result = await runTest(test);
      if (result.success) {
        passed++;
      } else {
        failed++;
        failedTests.push(test.name);
        if (result.expected && result.actual) {
          failedDetails[test.name] = {
            expected: result.expected,
            actual: result.actual,
          };
        }
      }
    } catch (error) {
      console.error(`Error running test ${test.name}:`, error);
      failed++;
      failedTests.push(test.name);
    }
  }

  return { passed, failed, failedTests, failedDetails };
}
