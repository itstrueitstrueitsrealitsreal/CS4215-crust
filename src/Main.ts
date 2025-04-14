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
  //     {let x : String = "hello".to_string();};
  //     let x: String = "bye".to_string();
  // }`;

  // copy type, should work
  // const chunk = `{
  //   let mut x: i64 = 5;
  //   let mut y: i64 = x;
  //   y;
  //   x;
  // }`;

  // not copy type, should fail bc ownership is moved
  // const chunk = `{
  //   let mut x: String = "hello".to_string();
  //   let mut y: String = x;
  //   y;
  //   x;
  // }`;

  // const chunk = `{
  //   let mut x: String = "hello".to_string();
  //   let mut y: String = x;
  //   x = "world".to_string();
  //   y;
  // }`;

  // reassigning to moved value should work
  // const chunk = `{
  //   let mut x: String = "hello".to_string();
  //   let mut y: String = x;
  //   x = "world".to_string();
  //   y = "world".to_string();
  // }`;

  // ❌ Mutable borrow while immutable borrow is still active
  // const chunk = `{
  //   let mut x: i64 = 5;
  //   let r1: & i64 = &x;
  //   let r2: &mut i64 = &mut x;
  //   println!("r1: {}, r2: {}", r1, r2);
  // }`;

  // ❌ ERROR: a is no longer valid
  // const chunk = `{
  //     let a : String = "hello".to_string();
  //     let b : String = a;
  //     println!("{}", a);
  //     println!("{}", b);
  //   }`;

  // double print then move should work
  // const chunk = `{
  //   let a : String = "hello".to_string();
  //   println!("{}", a);
  //   println!("{}", a);
  //   let b : String = a;
  // }`;

  //   const chunk = `{
  //   // Part 1: Basic ownership and mutation
  //   let mut original: String = "hello".to_string();
  //   println!("Original value: {}", original);

  //   // Part 2: Mutable borrowing and dereferencing
  //   let mut_ref: &mut String = &mut original;
  //   *mut_ref = "modified".to_string();  // Modify through mutable reference
  //   println!("After mutation through reference: {}", *mut_ref);
  // }`;

  // will fail bc lifetime not implemented
  // const chunk = `{
  //   // Part 1: Basic ownership and mutation
  //   let mut original: String = "hello".to_string();
  //   println!("Original value: {}", original);

  //   // Part 2: Mutable borrowing and dereferencing
  //   let mut_ref: &mut String = &mut original;
  //   *mut_ref = "modified".to_string();  // Modify through mutable reference
  //   println!("After mutation through reference: {}", *mut_ref);

  //   // Part 3: Immutable borrowing after mutable borrow is done
  //   // Now we can use original again or create new borrows
  //   println!("Original value after modification: {}", original);

  //   // Part 4: Multiple immutable borrows
  //   let ref1: &String = &original;
  //   let ref2: &String = &original;
  //   println!("Immutable borrows: {}, {}", *ref1, *ref2);

  //   // Part 5: Nested references and dereferencing
  //   let nested_ref: &&String = &&original;
  //   println!("Value through nested reference: {}", **nested_ref);

  //   // Part 6: Mixed ownership patterns
  //   let mut another: String = "another value".to_string();
  //   let another_ref: &String = &another;
  //   println!("Another value: {}", *another_ref);

  //   // We can still read the original
  //   println!("Original: {}, Another: {}", original, another);
  // }`;

  // ✅ OK: read-only borrow
  // const chunk = `{
  //   let x : i64 = 42;
  //   let r : & i64 = &x;
  //   let r1 : & i64 = &x;
  //   println!("x: {}, r: {}, r1: {}", x, r, r1);
  // }`;

  // ❌ ERROR: second mutable borrow while `r1` is still active
  // const chunk = `{
  //   let mut s : String = "hello".to_string();
  //   let r1 : &mut String = &mut s;
  //   let r2 : &mut String = &mut s;
  //   *r1 = "world".to_string();
  //   *r2 = "world".to_string();
  //   println!("{}", s);
  // }`;

  // const chunk = `{
  //   let mut s : i64 = 5;
  //   {
  //       let mut r1 : &mut i64 = &mut s;
  //   }{
  //       let mut g1 : &mut i64 = &mut s;
  //   }
  //   println!("{}", s);
  // }`;

  // const chunk = `{
  //     let mut s : i64 = 5;
  //     let mut t : i64 = 10;
  //     {
  //         let mut r1 : &mut i64 = &mut s;
  //         let mut g1 : &mut i64 = &mut t;

  //         g1 = r1;
  //         r1;
  //     }
  //     println!("{}", s);
  //   }`;

  // ❌ Invalid: Mutable and immutable borrow coexist
  // const chunk = `{
  //   let mut x: i64 = 10;
  //   let r1: &i64 = &x;
  //   let r2: &mut i64 = &mut x;
  //   println!("{}", r1);
  // }`;

  // OK: multiple shared references
  // const chunk = `{
  //     let x: i64 = 10;
  //     let r1: &i64 = &x;
  //     let r2: &&i64 = &r1;
  //     println!("r2: {}", **r2);
  // }`;

  // ❌ `x` is already mutably borrowed by `r1`
  // const chunk = `{
  //   let mut x: i64 = 42;
  //   let r1: &mut i64 = &mut x;
  //   let r2: &&&mut i64 = &&&mut x;
  //   println!("{}", r1);
  // }`;

  // const chunk = `{
  //   let mut x: i64 = 5;

  //   {
  //       let r1: &mut i64 = &mut x;
  //       *r1 = *r1 + 1;
  //   }

  //   let r2: &&mut i64 = &&mut x;
  //   **r2 = **r2 + 2;

  //   println!("{}", x); // prints 8
  // }`;

  // const chunk = `{
  //   fn print_value(x: &i64) {
  //     println!("Value: {}", x);
  //   }
  //   let a: i64 = 10;
  //   print_value(&a);
  //   println!("Still accessible: {}", a);
  // }`;

  // const chunk = `{
  //   fn modify(x: &mut i64) {
  //     *x = *x + 1; // TODO: FIX!!
  //   }
  //   let mut a: i64 = 10;
  //   modify(&mut a);
  //   modify(&mut a);
  // }`;

  // ❌ second mutable borrow while `r1` is still alive
  // const chunk = `{
  //   fn double_mut(x: &mut i64) {
  //     let r1: &mut i64 = x;
  //     let r2: &mut i64 = x;

  //     *r1 = *r1 + 1;
  //     *r2 = *r2 + 2;
  //   }
  //   let mut num: i64 = 10;
  //   double_mut(&mut num);
  // }`;

  // ❌ Error: use after move
  // const chunk = `{
  //   fn take(x: String) {
  //     println!("{}", x);
  //   }
  //   let a: String = "hello".to_string();
  //   take(a);
  //   println!("{}", a);
  // }`;

  // const chunk = `{
  //   let mut value: i64 = 10;
  //   let mut r1: &mut i64 = &mut value;
  //   let r2: &mut &mut i64 = &mut r1;

  //   **r2 = **r2 + 5;

  //   println!("{}", value); // 15
  // }`;

  // reassigning borrow to same variable should work
  // const chunk = `{
  //     let mut x: i64 = 10;
  //     let mut y: i64 = 10;
  //     let mut r: &mut i64 = &mut x;
  //     r = &mut x;
  //     println!("{}", x);
  // }`;

  // const chunk = `{
  //   let mut x: i64 = 10;
  //   let mut r: &mut i64 = &mut x;
  //   let mut r1: &mut i64 = r;
  //   println!("{}", r);
  // }`;

  // const chunk = `{
  //   let mut x: i64 = 0;
  //   let r: &mut i64 = &mut x;
  //   while (*r < 5) {
  //       *r = 1;
  //   }
  //   println!("{}", x);
  // }`;

  // const chunk = `{
  //   let mut x: i64 = 0;

  //   while (x < 5) {
  //       {
  //           let r: &mut i64 = &mut x;
  //           *r = 6;
  //           println!("r = {}", r);
  //       }

  //       println!("x = {}", x);
  //   }
  // }`;

  // const chunk = `{
  //     let mut s: String = "hello".to_string();

  //     if (true) {
  //         let r: &mut String = &mut s;
  //         println!("{}", r);
  //     }

  //     println!("{}", s);
  // }`;

  // const chunk = `{
  //   let s: String = "hello".to_string();

  //   if (false) {
  //       let r: &mut String = &mut s;
  //       println!("{}", s);
  //   }

  //   println!("{}", s);
  // }`;

  // ❌ Error: cannot use `s` because it is mutably borrowed
  // const chunk = `{
  //   let mut s: String = "start".to_string();
  //   let mut t: String = "bye".to_string();
  //   let mut count: i64 = 0;

  //   // declare the mutable reference outside the loop
  //   let mut r: &mut String = &mut t;

  //   while (count < 3) {
  //       // create a mutable borrow
  //       r = &mut s;
  //       // try to use s again while it's still borrowed
  //       println!("Value of s: {}", s);
  //       count += 1;
  //   }
  // }`;

  const chunk = `{
    let mut s: String = "start".to_string();
    let mut count: i64 = 0;

    while (count < 3) {
        {
            let r: &mut String = &mut s;
            println!("Modified: {}", r);
        } 
        // borrow ends here

        // ✅ now allowed
        println!("Safe to use s: {}", s);
        count += 1;
    }
  }`;

  await evaluator.evaluateChunk(chunk);
}

main().catch((error) => {
  console.error("An error occurred:", error);
});
