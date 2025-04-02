import { ConductorError } from "conductor/dist/common/errors";
import { IModulePlugin } from "conductor/dist/conductor/module";
import { ModuleClass } from "conductor/dist/conductor/module/types/ModuleClass";
import { Chunk, RunnerStatus } from "conductor/dist/conductor/types";
import { IPlugin } from "conductor/dist/conduit";
import { PluginClass } from "conductor/dist/conduit/types";
import { CrustEvaluator } from "./CrustEvaluator";
import { IRunnerPlugin } from "conductor/dist/conductor/runner/types";

// Mock implementation of IRunnerPlugin for testing purposes
class MockConductor implements IRunnerPlugin {
  requestFile(fileName: string): Promise<string | undefined> {
    throw new Error("Method not implemented.");
  }
  requestChunk(): Promise<Chunk> {
    throw new Error("Method not implemented.");
  }
  requestInput(): Promise<string> {
    throw new Error("Method not implemented.");
  }
  tryRequestInput(): string | undefined {
    throw new Error("Method not implemented.");
  }
  sendError(error: ConductorError): void {
    throw new Error("Method not implemented.");
  }
  updateStatus(status: RunnerStatus, isActive: boolean): void {
    throw new Error("Method not implemented.");
  }
  hostLoadPlugin(pluginName: string): void {
    throw new Error("Method not implemented.");
  }
  registerPlugin<Arg extends any[], T extends IPlugin>(
    pluginClass: PluginClass<Arg, T>,
    ...arg: Arg
  ): NoInfer<T> {
    throw new Error("Method not implemented.");
  }
  unregisterPlugin(plugin: IPlugin): void {
    throw new Error("Method not implemented.");
  }
  registerModule<T extends IModulePlugin>(moduleClass: ModuleClass<T>): T {
    throw new Error("Method not implemented.");
  }
  unregisterModule(module: IModulePlugin): void {
    throw new Error("Method not implemented.");
  }
  importAndRegisterExternalPlugin(location: string): Promise<IPlugin> {
    throw new Error("Method not implemented.");
  }
  importAndRegisterExternalModule(location: string): Promise<IModulePlugin> {
    throw new Error("Method not implemented.");
  }
  name?: string;
  destroy?(): void {
    throw new Error("Method not implemented.");
  }
  sendOutput(output: string): void {
    console.log(output);
  }
}

async function main() {
    const conductor = new MockConductor();
    const evaluator = new CrustEvaluator(conductor);

    // const chunk = `{
    //     let fact_iter = |n, i, acc| {
    //         if i > n {
    //             return acc;
    //         } else {
    //             return fact_iter(n, i + 1, acc * i);
    //         }
    //     };
    //     let fact = |n| {
    //         return fact_iter(n, 1, 1);
    //     };
    //     fact(4);
    // }`;

    const chunk = `{
        fn fact_iter(n: i32, i: i32, acc: i32) -> i32 {
            if (i > n) {
                let x = 5;
                return acc;
            } else {
                return fact_iter(n, i + 1, acc * i);
            }
        }
        fn fact(n: i32) -> i32 {
            return fact_iter(n, 1, 1);
        }
        fact_iter(5, 1, 1);
    }`;

    // const chunk = `{
    //     fn func(x) {
    //         5;
    //     }
    // }`;


    await evaluator.evaluateChunk(chunk);
}

main().catch((error) => {
    console.error("An error occurred:", error);
});
