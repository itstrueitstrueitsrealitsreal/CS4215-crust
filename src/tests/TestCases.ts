// Define the TestCase interface
export interface TestCase {
  name: string;
  code: string;
  expectedOutput: string[];
}

// Export the test cases array
export const testCases: TestCase[] = [
  // If-else statement
  {
    name: "If-else statement",
    code: `{
      let x: i64 = 10;
      let y: i64 = 20;
      
      if (x < y) {
        println!("x is less than y");
      } else {
        println!("x is greater than or equal to y");
      }
    }`,
    expectedOutput: ["x is less than y", "Result: undefined"],
  },
  // Basic while loop
  {
    name: "Basic while loop",
    code: `{
      let mut i: i64 = 0;
      let mut sum: i64 = 0;
      
      while (i < 5) {
        sum = sum + i;
        i = i + 1;
      }
      println!("Sum of 0 to 4 is: {}", sum);
    }`,
    expectedOutput: ["Sum of 0 to 4 is: 10", "Result: undefined"],
  },

  // While loop with break
  {
    name: "While loop with break",
    code: `{
      let mut i: i64 = 0;
      
      while (true) {
        if (i >= 5) {
          break;
        }
        i = i + 1;
      }
      
      println!("Final value of i: {}", i);
    }`,
    expectedOutput: ["Final value of i: 5", "Result: undefined"],
  },

  // Nested blocks with shadowing
  {
    name: "Nested blocks with shadowing",
    code: `{
      let x: i64 = 10;
      {
        let x: i64 = 20;
        {
          let x: i64 = 30;
          println!("Innermost x: {}", x);
        }
        println!("Middle x: {}", x);
      }
      println!("Outer x: {}", x);
    }`,
    expectedOutput: [
      "Innermost x: 30",
      "Middle x: 20",
      "Outer x: 10",
      "Result: undefined",
    ],
  },
  // Functions with multiple parameters
  {
    name: "Functions with multiple parameters",
    code: `{
      fn max(a: i64, b: i64) -> i64 {
        if (a > b) {
          return a;
        } else {
          return b;
        }
      }
      
      fn min(a: i64, b: i64) -> i64 {
        if (a < b) {
          return a;
        } else {
          return b;
        }
      }
      
      let x: i64 = 15;
      let y: i64 = 30;
      
      println!("Max of {} and {} is {}", x, y, max(x, y));
      println!("Min of {} and {} is {}", x, y, min(x, y));
    }`,
    expectedOutput: [
      "Max of 15 and 30 is 30",
      "Min of 15 and 30 is 15",
      "Result: undefined",
    ],
  },

  // Basic variable declaration
  {
    name: "Basic variable declaration and primitive types",
    code: `{
        let x: i64 = 42;
        let y: bool = true;
        let s: &str = "hello";
        println!("x: {}, y: {}, s: {}", x, y, s);
      }`,
    expectedOutput: ["x: 42, y: true, s: hello", "Result: undefined"],
  },

  // Copy types behavior
  {
    name: "Copy types behavior",
    code: `{
        let mut x: i64 = 5;
        let mut y: i64 = x;  // Copy happens here
        y = 10;              // Modifying y
        println!("x: {}, y: {}", x, y);  // x should still be 5
      }`,
    expectedOutput: ["x: 5, y: 10", "Result: undefined"],
  },

  // Move semantics with non-copy types
  {
    name: "Move semantics with non-copy types",
    code: `{
        let a: String = "hello".to_string();
        let b: String = a;
        // Using a after move should fail
        println!("{}", a);
      }`,
    expectedOutput: [
      "Error: Cannot immutably borrow 'a' because it has been moved",
    ],
  },

  // Multiple immutable borrows
  {
    name: "Multiple immutable borrows",
    code: `{
        let x: i64 = 42;
        let r: &i64 = &x;
        let r1: &i64 = &x;
        println!("x: {}, r: {}, r1: {}", x, r, r1);
      }`,
    expectedOutput: ["x: 42, r: 42, r1: 42", "Result: undefined"],
  },
  // Mutable and immutable borrow conflict
  {
    name: "Mutable and immutable borrow conflict",
    code: `{
        let mut x: i64 = 10;
        let r1: &i64 = &x;
        let r2: &mut i64 = &mut x;  // Should fail - can't have mutable borrow while immutable exists
        println!("{}", r1);
      }`,
    expectedOutput: [
      "Error: Cannot mutably borrow 'x' while it is immutably borrowed",
    ],
  },

  // Function borrowing
  {
    name: "Function borrowing",
    code: `{
        fn modify(x: &mut i64) {
          *x = *x + 1;
        }
        
        let mut a: i64 = 10;
        modify(&mut a);
        modify(&mut a);
        println!("Result: {}", a);
      }`,
    expectedOutput: ["Result: 12", "Result: undefined"],
  },
  // Scopes and lifetimes
  {
    name: "Scopes and lifetimes",
    code: `{
        let mut s: String = "start".to_string();
        
        {
          let r: &mut String = &mut s;
          *r = "modified".to_string();
        } // r goes out of scope here
        
        // Now we can use s again
        println!("Final value: {}", s);
      }`,
    expectedOutput: ["Final value: modified", "Result: undefined"],
  },

  // Dereferencing copy types
  {
    name: "Dereferencing copy types",
    code: `{
        let x: i64 = 42;
        let r: &i64 = &x;
        let val: i64 = *r;
        let val1: i64 = *r;
        println!("x: {}, val: {}, val1: {}", x, val, val1);
      }`,
    expectedOutput: ["x: 42, val: 42, val1: 42", "Result: undefined"],
  },
  // Function with multiple borrowed parameters
  {
    name: "Multiple borrowed parameters",
    code: `{
        fn sum(a: &i64, b: &i64) -> i64 {
          return *a + *b;
        }
        
        let x: i64 = 5;
        let y: i64 = 10;
        let result: i64 = sum(&x, &y);
        println!("Sum: {}", result);
      }`,
    expectedOutput: ["Sum: 15", "Result: undefined"],
  },
  // Returning references from functions
  {
    name: "Returning references",
    code: `{
        fn get_ref(x: &i64) -> &i64 {
          return x;
        }
        
        let x: i64 = 42;
        let r: &i64 = get_ref(&x);
        println!("Referenced value: {}", *r);
      }`,
    expectedOutput: ["Referenced value: 42", "Result: undefined"],
  },
  {
    name: "Mixed reference access patterns",
    code: `{
      let mut value: i64 = 50;
      
      {
        let r1: &i64 = &value;
        let r2: &i64 = &value;
        println!("Immutable refs: {} and {}", *r1, *r2);
        
        // r1 and r2 go out of scope here
      }
      
      {
        let r3: &mut i64 = &mut value;
        *r3 = 60;
        
        // This would fail in Rust - can't have both mut and immut refs
        // let r4: &i64 = &value;
        // println!("Mixed refs: {} and {}", *r3, *r4);
        
        println!("After mutable ref: {}", *r3);
        // r3 goes out of scope
      }
      
      println!("Final value: {}", value);
    }`,
    expectedOutput: [
      "Immutable refs: 50 and 50",
      "After mutable ref: 60",
      "Final value: 60",
      "Result: undefined",
    ],
  },
  {
    name: "References without lifetimes",
    code: `{
      let mut value: i64 = 42;
      {
        // Work with references in an inner scope
        let r1: &mut i64 = &mut value;
        *r1 = 100;
        
        // Use the reference
        println!("Inside scope: {}", *r1);
      }
      // Original value is modified
      println!("After scope: {}", value);
    }`,
    expectedOutput: [
      "Inside scope: 100",
      "After scope: 100",
      "Result: undefined",
    ],
  },
  {
    name: "Reference reassignment",
    code: `{
      fn double(x: &mut i64) {
        *x = (*x) * 2;
      }
      
      let mut a: i64 = 5;
      let mut b: i64 = 10;
      
      let mut r: &mut i64 = &mut a;
      double(r);
      
      r = &mut b;
      double(r);
      
      // Release borrows
      let _unused: i64 = 0;
      println!("a: {}, b: {}", a, b);
    }`,
    expectedOutput: ["a: 10, b: 20", "Result: undefined"],
  },
  {
    name: "Variable shadowing with references",
    code: `{
      let x: i64 = 10;
      {
        let x: i64 = 20;  // Shadows the outer x
        let r: &i64 = &x;
        println!("Inner reference: {}", *r);
      }
      println!("Outer value: {}", x);
    }`,
    expectedOutput: [
      "Inner reference: 20",
      "Outer value: 10",
      "Result: undefined",
    ],
  },
  {
    name: "Multiple reference reassignments",
    code: `{
      let mut a: i64 = 1;
      let mut b: i64 = 2;
      let mut c: i64 = 3;
      
      let mut r: &mut i64 = &mut a;
      *r = 10;
      
      r = &mut b;
      *r = 20;
      
      r = &mut c;
      *r = 30;
      
      println!("Values: {}, {}, {}", a, b, c);
    }`,
    expectedOutput: ["Values: 10, 20, 30", "Result: undefined"],
  },
  {
    name: "Sequential mutability",
    code: `{
      let mut x: i64 = 5;
      
      {
        let r1: &i64 = &x;
        println!("Immutable borrow: {}", *r1);
        // r1 goes out of scope
      }
      
      {
        let r2: &mut i64 = &mut x;
        *r2 = 10;
        println!("After mutable borrow: {}", *r2);
        // r2 goes out of scope
      }
      
      println!("Final value: {}", x);
    }`,
    expectedOutput: [
      "Immutable borrow: 5",
      "After mutable borrow: 10",
      "Final value: 10",
      "Result: undefined",
    ],
  },
  {
    name: "Function with multiple reference parameters",
    code: `{
      fn update(a: &mut i64, b: &mut i64, c: &i64) {
        *a = *a + *c;
        *b = *b + *c;
      }
      
      let mut x: i64 = 10;
      let mut y: i64 = 20;
      let z: i64 = 5;
      
      update(&mut x, &mut y, &z);
      
      println!("Updated values: x={}, y={}, z={}", x, y, z);
    }`,
    expectedOutput: ["Updated values: x=15, y=25, z=5", "Result: undefined"],
  },
  {
    name: "Multiple mutable references in different scopes",
    code: `{
      let mut value: i64 = 100;
      
      {
        let r1: &mut i64 = &mut value;
        *r1 = 200;
        println!("First mutation: {}", *r1);
      }
      
      {
        let r2: &mut i64 = &mut value;
        *r2 = 300;
        println!("Second mutation: {}", *r2);
      }
      
      println!("Final value: {}", value);
    }`,

    expectedOutput: [
      "First mutation: 200",
      "Second mutation: 300",
      "Final value: 300",
      "Result: undefined",
    ],
  },
  {
    name: "Test 1",
    code: `{
    let a: &str = "hello";
    let b: &str = a;
    println!("{}", a);
    // Should pass
    let c: String = "hello".to_string();
    println!("{}", c);
  }`,
    expectedOutput: ["hello", "hello", "Result: undefined"],
  },
  //   {
  //     name: "Test 2",
  //     code: `{
  //       let fact_iter = |n, i, acc| {
  //           if i > n {
  //               return acc;
  //           } else {
  //               return fact_iter(n, i + 1, acc * i);
  //           }
  //       };
  //       let fact = |n| {
  //           return fact_iter(n, 1, 1);
  //       };
  //       fact(4);
  //   }`,
  //     expectedOutput: ["Result: undefined"],
  //   },
  {
    name: "Factorial",
    code: `{
        fn fact_iter(n: i64, i: i64, acc: i64) -> i64 {
            if (i > n) {
                let x : i64 = 5;
                return acc;
            } else {
                return fact_iter(n, i + 1, acc * i);
            }
        }
        fn fact(n: i64) -> i64 {
            return fact_iter(n, 1, 1);
        };
        let x : i64 = fact_iter(4, 1, 1);
    }`,
    expectedOutput: ["Result: 24"],
  },
  // {
  //   name: "Factorial, assignment",
  //   code: `{
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
  //   }`,
  //   expectedOutput: [],
  // },
  // {
  //   name: "Factorial, assignment wrong type",
  //   code: `{
  //     fn fact_iter(n: i64, i: i64, acc: i64) -> i64 {
  //         if (i > n) {
  //             let x : i64 = 5;
  //             return acc;
  //         } else {
  //             return fact_iter(n, i + 1, acc * i);
  //         }
  //     }
  //     let x : String = fact_iter(3, 1, 1);
  //   }`,
  //   expectedOutput: [],
  // },
  // {
  //   name: "Function declaration",
  //   code: `{
  //     fn func(x: i64) -> i64 {
  //         return 5;
  //     }
  //   }`,
  //   expectedOutput: [],
  // },
  // {
  //   name: "Function declaration",
  //   code: `{
  //     fn func(x: i64) -> i64 {
  //         return 5;
  //     }
  //   }`,
  //   expectedOutput: [],
  // },
  // {
  //   name: "Variable scope",
  //   code: `{
  //     {let x : String = "hello".to_string();};
  //     let x: String = "bye".to_string();
  //   }`,
  //   expectedOutput: [],
  // },
  // {
  //   name: "Copy type assignment",
  //   code: `{
  //     let mut x: i64 = 5;
  //     let mut y: i64 = x;
  //     y;
  //     x;
  //   }`,
  //   expectedOutput: [],
  // },
  // {
  //   name: "Move type assignment, should fail borrow check",
  //   code: `{
  //     let mut x: String = "hello".to_string();
  //     let mut y: String = x;
  //     y;
  //     x;
  //   }`,
  //   expectedOutput: [],
  // },
  // {
  //   name: "Move type assignment 2, should fail borrow check",
  //   code: `{
  //     let a : String = "hello".to_string();
  //     let b : String = a;
  //     println!("{}", a);
  //     println!("{}", b);
  //   }`,
  //   expectedOutput: [],
  // },
  // {
  //   name: "Reassigning to moved variable",
  //   code: `{
  //     let mut x: String = "hello".to_string();
  //     let mut y: String = x;
  //     x = "world".to_string();
  //     y = "world".to_string();
  //   }`,
  //   expectedOutput: [],
  // },
  // {
  //   name: "❌ Mutable borrow while immutable borrow is still active",
  //   code: `{
  //     let mut x: i64 = 5;
  //     let r1: & i64 = &x;
  //     let r2: &mut i64 = &mut x;
  //     println!("r1: {}, r2: {}", r1, r2);
  //   }`,
  //   expectedOutput: [],
  // },
  // {
  //   name: "Double print then move should work",
  //   code: `{
  //     let a : String = "hello".to_string();
  //     println!("{}", a);
  //     println!("{}", a);
  //     let b : String = a;
  //   }`,
  //   expectedOutput: [],
  // },
  // {
  //   name: "Double print then move should work",
  //   code: `{
  //     let a : String = "hello".to_string();
  //     println!("{}", a);
  //     println!("{}", a);
  //     let b : String = a;
  //   }`,
  //   expectedOutput: [],
  // },

  // //   const chunk = `{
  // //   // Part 1: Basic ownership and mutation
  // //   let mut original: String = "hello".to_string();
  // //   println!("Original value: {}", original);

  // //   // Part 2: Mutable borrowing and dereferencing
  // //   let mut_ref: &mut String = &mut original;
  // //   *mut_ref = "modified".to_string();  // Modify through mutable reference
  // //   println!("After mutation through reference: {}", *mut_ref);
  // // }`;

  // // will fail bc lifetime not implemented
  // // const chunk = `{
  // //   // Part 1: Basic ownership and mutation
  // //   let mut original: String = "hello".to_string();
  // //   println!("Original value: {}", original);

  // //   // Part 2: Mutable borrowing and dereferencing
  // //   let mut_ref: &mut String = &mut original;
  // //   *mut_ref = "modified".to_string();  // Modify through mutable reference
  // //   println!("After mutation through reference: {}", *mut_ref);

  // //   // Part 3: Immutable borrowing after mutable borrow is done
  // //   // Now we can use original again or create new borrows
  // //   println!("Original value after modification: {}", original);

  // //   // Part 4: Multiple immutable borrows
  // //   let ref1: &String = &original;
  // //   let ref2: &String = &original;
  // //   println!("Immutable borrows: {}, {}", *ref1, *ref2);

  // //   // Part 5: Nested references and dereferencing
  // //   let nested_ref: &&String = &&original;
  // //   println!("Value through nested reference: {}", **nested_ref);

  // //   // Part 6: Mixed ownership patterns
  // //   let mut another: String = "another value".to_string();
  // //   let another_ref: &String = &another;
  // //   println!("Another value: {}", *another_ref);

  // //   // We can still read the original
  // //   println!("Original: {}, Another: {}", original, another);
  // // }`;

  // {
  //   name: "✅ OK: multiple read-only borrows",
  //   code: `{
  //     let x : i64 = 42;
  //     let r : & i64 = &x;
  //     let r1 : & i64 = &x;
  //     println!("x: {}, r: {}, r1: {}", x, r, r1);
  //   }`,
  //   expectedOutput: [],
  // },
  // {
  //   name: "❌ ERROR: second mutable borrow while `r1` is still active",
  //   code: `{
  //     let mut s : String = "hello".to_string();
  //     let r1 : &mut String = &mut s;
  //     let r2 : &mut String = &mut s;
  //     *r1 = "world".to_string();
  //     *r2 = "world".to_string();
  //     println!("{}", s);
  //   }`,
  //   expectedOutput: [],
  // },
  // {
  //   name: "2 mutable borrows in same scopes should pass",
  //   code: `{
  //   let mut s : i64 = 5;
  //   {
  //       let mut r1 : &mut i64 = &mut s;
  //       let mut g1 : &mut i64 = &mut s;
  //   }
  //   println!("{}", s);
  //   }`,
  //   expectedOutput: [],
  // },
  // {
  //   name: "2 mutable borrows in seperate scopes should pass",
  //   code: `{
  //   let mut s : i64 = 5;
  //   {
  //       let mut r1 : &mut i64 = &mut s;
  //   }{
  //       let mut g1 : &mut i64 = &mut s;
  //   }
  //   println!("{}", s);
  //   }`,
  //   expectedOutput: [],
  // },
  // {
  //   name: "Reading from moved reference type should fail, DIFF BEHAVIOUR FROM ACTUAL RUST",
  //   code: `{
  //     let mut s : i64 = 5;
  //     let mut t : i64 = 10;
  //     {
  //         let mut r1 : &mut i64 = &mut s;
  //         let mut g1 : &mut i64 = &mut t;

  //         g1 = r1;
  //         r1;
  //     }
  //     println!("{}", s);
  //   }`,
  //   expectedOutput: [],
  // },
  // {
  //   name: "OK: transitive borrowing allowed",
  //   code: `{
  //     let x: i64 = 10;
  //     let r1: &i64 = &x;
  //     let r2: &&i64 = &r1;
  //     println!("r2: {}", **r2);
  //   }`,
  //   expectedOutput: [],
  // },
  // {
  //   name: "❌ `x` is already mutably borrowed by `r1`",
  //   code: `{
  //     let mut x: i64 = 42;
  //     let r1: &mut i64 = &mut x;
  //     let r2: &&&mut i64 = &&&mut x;
  //     println!("{}", r1);
  //   }`,
  //   expectedOutput: [],
  // },

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
  //     *x = *x + 1;
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

  // const chunk = `{
  //   let mut s: String = "start".to_string();
  //   let mut count: i64 = 0;

  //   while (count < 3) {
  //       {
  //           let r: &mut String = &mut s;
  //           println!("Modified: {}", r);
  //       }
  //       // borrow ends here

  //       // ✅ now allowed
  //       println!("Safe to use s: {}", s);
  //       count += 1;
  //   }
  // }`;

  // copy deref allowed
  // const chunk = `{
  //   let x: i64 = 42;
  //   let r: &i64 = &x;
  //   let val: i64 = *r;
  //   let val1: i64 = *r;
  //   println!("{}", x);
  //   println!("{}", val);
  //   println!("{}", val1);
  // }`;

  // cannot borrow `r` as mutable, as it is not declared as mutable
  // const chunk = `{
  //   let mut x: i64 = 42;
  //   let r: &mut i64 = &mut x;
  //   let s: &mut &mut i64 = &mut r;
  //   *r = 10;
  // }`;
];
