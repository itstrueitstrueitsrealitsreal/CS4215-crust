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
  //   x = 10;
  //   y;
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

//   const chunk = `{
//   // Part 1: Basic ownership and mutation
//   let mut original: String = "hello".to_string();
//   println!("Original value: {}", original);
  
//   // Part 2: Mutable borrowing and dereferencing
//   let mut_ref: &mut String = &mut original;
//   *mut_ref = "modified".to_string();  // Modify through mutable reference
//   println!("After mutation through reference: {}", *mut_ref);
// }`;
  const chunk = `{
  // Part 1: Basic ownership and mutation
  let mut original: String = "hello".to_string();
  println!("Original value: {}", original);
  
  // Part 2: Mutable borrowing and dereferencing
  let mut_ref: &mut String = &mut original;
  *mut_ref = "modified".to_string();  // Modify through mutable reference
  println!("After mutation through reference: {}", *mut_ref);
  
  // Part 3: Immutable borrowing after mutable borrow is done
  // Now we can use original again or create new borrows
  println!("Original value after modification: {}", original);
  
  // Part 4: Multiple immutable borrows
  let ref1: &String = &original;
  let ref2: &String = &original;
  println!("Immutable borrows: {}, {}", *ref1, *ref2);
  
  // Part 5: Nested references and dereferencing
  let nested_ref: &&String = &&original;
  println!("Value through nested reference: {}", **nested_ref);
  
  // Part 6: Mixed ownership patterns
  let mut another: String = "another value".to_string();
  let another_ref: &String = &another;
  println!("Another value: {}", *another_ref);
  
  // We can still read the original
  println!("Original: {}, Another: {}", original, another);
}`;

  // ✅ OK: read-only borrow
  // const chunk = `{
  //   let x = 42;
  //   let r = &x;

  //   println!("x: {}, r: {}", x, r);
  // }`;

  await evaluator.evaluateChunk(chunk);
}

main().catch((error) => {
  console.error("An error occurred:", error);
});