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
  //   let a: &str = "hello";
  //   let b: &str = a;
  //   println!("{}", a);
  //   // Should pass
  //   let c: String = "hello".to_string();
  //   // let d: String = c;
  //   println!("{}", c);
  // }`;

  // Should fail
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

  // const chunk = `{
  //       fn fact_iter(n: i64, i: i64, acc: i64) -> i64 {
  //           if (i > n) {
  //               let x : i64 = 5;
  //               return acc;
  //           } else {
  //               return fact_iter(n, i + 1, acc * i);
  //           }
  //       }
  //       fn fact(n: i64) -> i64 {
  //           return fact_iter(n, 1, 1);
  //       };
  //       let x : i64 = fact_iter(4, 1, 1);
  //   }`;

  // const chunk = `{
  //   fn fact_iter(n: i64, i: i64, acc: i64) -> i64 {
  //       if (i > n) {
  //           let x : i64 = 5;
  //           return acc;
  //       } else {
  //           return fact_iter(n, i + 1, acc * i);
  //       }
  //   }
  //   let x : String = fact_iter(3, 1, 1);
  // }`;

  // const chunk = `{
  //     fn func(x) {
  //         5;
  //     }
  // }`;

  // const chunk = `{
  //     {let x : String = "hello";};
  //     let x: i64 = "bye";
  // }`;

  // const chunk = `{
  //   let mut x: i64 = 5;
  //   let mut y: i64 = x;
  //   y;
  //   x;
  // }`;

  // const chunk = `{
  //   let mut x: String = "hello".to_string();
  //   let mut y: String = x;
  //   x = "world".to_string();
  //   y;
  // }`;

  // const chunk = `{
  //   let mut x: String = "hello".to_string();
  //   let mut y: String = x;
  //   x = "world".to_string();
  //   y = "world".to_string();
  // }`;

  // ❌ Mutable borrow while immutable borrow is still active
  // const chunk = `{
  //   let mut x: i64 = 5;
  //   let r1: &i64 = &x;
  //   let r2: &muti64 = &mut x;
  //   println!("r1: {}, r2: {}", r1, r2);
  // }`;

  // ❌ ERROR: a is no longer valid
  // const chunk = `{
  //   let a = String::from("hello");
  //   let b = a; // ownership of the String moves to b
  //   println!("{}", a);
  //   println!("{}", b);
  // }`;

  // ✅ OK: read-only borrow
  // const chunk = `{
  //   let x = 42;
  //   let r = &x;
  //   println!("x: {}, r: {}", x, r);
  // }`;

  // ❌ ERROR: second mutable borrow while `r1` is still active
  // const chunk = `{
  //   let mut s = String::from("hello");
  //   let r1 = &mut s;
  //   let r2 = &mut s;
  //   r1 = String::from("bye");
  //   r2 = String::from("world");
  //   println!("{}", s);
  // }`;

  //   const chunk = `{
  //     let mut s : i64 = 5;
  //     {
  //         let mut r1 : &i64 = &mut s;
  //         r1 = 10;
  // }{
  //         let mut r2 : &i64 = &mut s;
  //         r2 = 20;
  //     }
  //     println!("{}", s);
  //   }`;

  // revert copy [crust]
  // hs[t] [crust]
  // types && ** [type checker]
  // fix borrow checker (move type)

  // ❌ Invalid: Mutable and immutable borrow coexist
  const chunk = `{
    let mut x: i64 = 10;
    let r1: &i64 = &x;
    let r2: &mut i64 = &mut x;
    println!("{}", r1);
  }`;

  await evaluator.evaluateChunk(chunk);
}

main().catch((error) => {
  console.error("An error occurred:", error);
});
