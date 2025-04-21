// Define the TestCase interface
export interface TestCase {
  name: string;
  code: string;
  expectedOutput: string[];
}

// result undefined string
const undefinedResultString = "Result: undefined";

// Export the test cases array
export const testCases: TestCase[] = [
  // If-else statement
  {
    name: "If-else statement",
    code: `
      let x: i64 = 10;
      let y: i64 = 20;
      
      if (x < y) {
        println!("x is less than y");
      } else {
        println!("x is greater than or equal to y");
      }
    `,
    expectedOutput: ["x is less than y", undefinedResultString],
  },
  // Basic while loop
  {
    name: "Basic while loop",
    code: `
      let mut i: i64 = 0;
      let mut sum: i64 = 0;
      
      while (i < 5) {
        sum = sum + i;
        i = i + 1;
      }
      println!("Sum of 0 to 4 is: {}", sum);
    `,
    expectedOutput: ["Sum of 0 to 4 is: 10", undefinedResultString],
  },

  // While loop with break
  {
    name: "While loop with break",
    code: `
      let mut i: i64 = 0;
      
      while (true) {
        if (i >= 5) {
          break;
        }
        i = i + 1;
      }
      
      println!("Final value of i: {}", i);
    `,
    expectedOutput: ["Final value of i: 5", undefinedResultString],
  },

  // Nested blocks with shadowing
  {
    name: "Nested blocks with shadowing",
    code: `
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
    `,
    expectedOutput: [
      "Innermost x: 30",
      "Middle x: 20",
      "Outer x: 10",
      undefinedResultString,
    ],
  },
  // Functions with multiple parameters
  {
    name: "Functions with multiple parameters",
    code: `
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
    `,
    expectedOutput: [
      "Max of 15 and 30 is 30",
      "Min of 15 and 30 is 15",
      undefinedResultString,
    ],
  },

  // Basic variable declaration
  {
    name: "Basic variable declaration and primitive types",
    code: `
        let x: i64 = 42;
        let y: bool = true;
        let s: &str = "hello";
        println!("x: {}, y: {}, s: {}", x, y, s);
      `,
    expectedOutput: ["x: 42, y: true, s: hello", undefinedResultString],
  },

  // Copy types behavior
  {
    name: "Copy types behavior",
    code: `
        let mut x: i64 = 5;
        let mut y: i64 = x;  // Copy happens here
        y = 10;              // Modifying y
        println!("x: {}, y: {}", x, y);  // x should still be 5
      `,
    expectedOutput: ["x: 5, y: 10", undefinedResultString],
  },

  // Move semantics with non-copy types
  {
    name: "Move semantics with non-copy types",
    code: `
        let a: String = "hello".to_string();
        let b: String = a;
        // Using a after move should fail
        println!("{}", a);
      `,
    expectedOutput: [
      "Error: Cannot immutably borrow 'a' because it has been moved",
    ],
  },

  // Multiple immutable borrows
  {
    name: "Multiple immutable borrows",
    code: `
        let x: i64 = 42;
        let r: &i64 = &x;
        let r1: &i64 = &x;
        println!("x: {}, r: {}, r1: {}", x, r, r1);
      `,
    expectedOutput: ["x: 42, r: 42, r1: 42", undefinedResultString],
  },
  // Mutable and immutable borrow conflict
  {
    name: "Mutable and immutable borrow conflict",
    code: `
        let mut x: i64 = 10;
        let r1: &i64 = &x;
        let r2: &mut i64 = &mut x;  // Should fail - can't have mutable borrow while immutable exists
        println!("{}", r1);
      `,
    expectedOutput: [
      "Error: Cannot mutably borrow 'x' while it is immutably borrowed",
    ],
  },

  // Function borrowing
  {
    name: "Function borrowing",
    code: `
        fn modify(x: &mut i64) {
          *x = *x + 1;
        }
        
        let mut a: i64 = 10;
        modify(&mut a);
        modify(&mut a);
        println!("Result: {}", a);
      `,
    expectedOutput: ["Result: 12", undefinedResultString],
  },
  // Scopes and lifetimes
  {
    name: "Scopes and lifetimes",
    code: `
        let mut s: String = "start".to_string();
        
        {
          let r: &mut String = &mut s;
          *r = "modified".to_string();
        } // r goes out of scope here
        
        // Now we can use s again
        println!("Final value: {}", s);
      `,
    expectedOutput: ["Final value: modified", undefinedResultString],
  },

  // Dereferencing copy types
  {
    name: "Dereferencing copy types",
    code: `
        let x: i64 = 42;
        let r: &i64 = &x;
        let val: i64 = *r;
        let val1: i64 = *r;
        println!("x: {}, val: {}, val1: {}", x, val, val1);
      `,
    expectedOutput: ["x: 42, val: 42, val1: 42", undefinedResultString],
  },
  // Function with multiple borrowed parameters
  {
    name: "Multiple borrowed parameters",
    code: `
        fn sum(a: &i64, b: &i64) -> i64 {
          return *a + *b;
        }
        
        let x: i64 = 5;
        let y: i64 = 10;
        let result: i64 = sum(&x, &y);
        println!("Sum: {}", result);
      `,
    expectedOutput: ["Sum: 15", undefinedResultString],
  },
  // Returning references from functions
  {
    name: "Returning references",
    code: `
        fn get_ref(x: &i64) -> &i64 {
          return x;
        }
        
        let x: i64 = 42;
        let r: &i64 = get_ref(&x);
        println!("Referenced value: {}", *r);
      `,
    expectedOutput: ["Referenced value: 42", undefinedResultString],
  },
  {
    name: "Mixed reference access patterns",
    code: `
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
    `,
    expectedOutput: [
      "Immutable refs: 50 and 50",
      "After mutable ref: 60",
      "Final value: 60",
      undefinedResultString,
    ],
  },
  {
    name: "References without lifetimes",
    code: `
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
    `,
    expectedOutput: [
      "Inside scope: 100",
      "After scope: 100",
      undefinedResultString,
    ],
  },
  {
    name: "Reference reassignment",
    code: `
      fn double(x: &mut i64) {
        *x = (*x) * 2;
      }

      let mut a: i64 = 5;
      let mut b: i64 = 10;
      {
        let mut r: &mut i64 = &mut a;
        double(r);
        
        r = &mut b;
        double(r);
      }
      
      // Release borrows
      let _unused: i64 = 0;
      println!("a: {}, b: {}", a, b);
    `,
    expectedOutput: ["a: 10, b: 20", undefinedResultString],
  },
  {
    name: "Variable shadowing with references",
    code: `
      let x: i64 = 10;
      {
        let x: i64 = 20;  // Shadows the outer x
        let r: &i64 = &x;
        println!("Inner reference: {}", *r);
      }
      println!("Outer value: {}", x);
    `,
    expectedOutput: [
      "Inner reference: 20",
      "Outer value: 10",
      undefinedResultString,
    ],
  },
  {
    name: "Multiple reference reassignments",
    code: `
      let mut a: i64 = 1;
      let mut b: i64 = 2;
      let mut c: i64 = 3;
      {
        let mut r: &mut i64 = &mut a;
        *r = 10;

        r = &mut b;
        *r = 20;

        r = &mut c;
        *r = 30;
      }
      println!("Values: {}, {}, {}", a, b, c);
    `,
    expectedOutput: ["Values: 10, 20, 30", undefinedResultString],
  },
  {
    name: "Sequential mutability",
    code: `
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
    `,
    expectedOutput: [
      "Immutable borrow: 5",
      "After mutable borrow: 10",
      "Final value: 10",
      undefinedResultString,
    ],
  },
  {
    name: "Function with multiple reference parameters",
    code: `
      fn update(a: &mut i64, b: &mut i64, c: &i64) {
        *a = *a + *c;
        *b = *b + *c;
      }

      let mut x: i64 = 10;
      let mut y: i64 = 20;
      let z: i64 = 5;

      update(&mut x, &mut y, &z);

      println!("Updated values: x={}, y={}, z={}", x, y, z);
    `,
    expectedOutput: ["Updated values: x=15, y=25, z=5", undefinedResultString],
  },
  {
    name: "Multiple mutable references in different scopes",
    code: `
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
    `,

    expectedOutput: [
      "First mutation: 200",
      "Second mutation: 300",
      "Final value: 300",
      undefinedResultString,
    ],
  },
  {
    name: "Test 1",
    code: `
      let a: &str = "hello";
      let b: &str = a;
      println!("{}", a);
      // Should pass
      let c: String = "hello".to_string();
      println!("{}", c);
    `,
    expectedOutput: ["hello", "hello", undefinedResultString],
  },
  //   {
  //     name: "Lambda function (NOT SUPPORTED)",
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
  //     expectedOutput: [undefinedResultString],
  //   },
  {
    name: "Factorial",
    code: `
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
        }
        fact(4);
    `,
    expectedOutput: ["Result: 24"],
  },
  {
    name: "Factorial, assignment",
    code: `
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
        let x : i64 = fact(4);
    `,
    expectedOutput: ["Result: 24"],
  },
  {
    name: "Factorial, assignment wrong type",
    code: `
      fn fact_iter(n: i64, i: i64, acc: i64) -> i64 {
          if (i > n) {
              let x : i64 = 5;
              return acc;
          } else {
              return fact_iter(n, i + 1, acc * i);
          }
      }
      let x : String = fact_iter(3, 1, 1);
    `,
    expectedOutput: [
      "Error: Type error in variable declaration for 'x'; declared type: String, actual type: i64",
    ],
  },
  {
    name: "Function declaration",
    code: `
      fn func(x: i64) -> i64 {
          return 5;
      }
    `,
    expectedOutput: [undefinedResultString],
  },
  {
    name: "Variable scope",
    code: `
      { let x : String = "hello".to_string(); }
      let x: String = "bye".to_string();
    `,
    expectedOutput: ["Result: bye"],
  },
  {
    name: "Copy type assignment",
    code: `
      let mut x: i64 = 5;
      let mut y: i64 = x;
      y;
      x;
    `,
    expectedOutput: ["Result: 5"],
  },
  {
    name: "Move type assignment, should fail borrow check",
    code: `
      let mut x: String = "hello".to_string();
      let mut y: String = x;
      y;
      x;
    `,
    expectedOutput: ["Error: Cannot read from 'x' because it has been moved"],
  },
  {
    name: "Move type assignment 2, should fail borrow check",
    code: `
      let a : String = "hello".to_string();
      let b : String = a;
      println!("{}", a);
      println!("{}", b);
    `,
    expectedOutput: [
      "Error: Cannot immutably borrow 'a' because it has been moved",
    ],
  },
  {
    name: "Reassigning to moved variable",
    code: `
      let mut x: String = "hello".to_string();
      let mut y: String = x;
      x = "world".to_string();
      y = "world".to_string();
    `,
    expectedOutput: ["Result: world"],
  },
  {
    name: "❌ Mutable borrow while immutable borrow is still active",
    code: `
      let mut x: i64 = 5;
      let r1: & i64 = &x;
      let r2: &mut i64 = &mut x;
      println!("r1: {}, r2: {}", r1, r2);
    `,
    expectedOutput: [
      "Error: Cannot mutably borrow 'x' while it is immutably borrowed",
    ],
  },
  {
    name: "Double print then move should work",
    code: `
      let a : String = "hello".to_string();
      println!("{}", a);
      println!("{}", a);
      let b : String = a;
    `,
    expectedOutput: ["hello", "hello", "Result: hello"],
  },

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

  {
    name: "✅ OK: multiple read-only borrows",
    code: `
      let x : i64 = 42;
      let r : &i64 = &x;
      let r1 : &i64 = &x;
      println!("x: {}, r: {}, r1: {}", x, r, r1);
    `,
    expectedOutput: ["x: 42, r: 42, r1: 42", undefinedResultString],
  },
  {
    name: "❌ ERROR: second mutable borrow while `r1` is still active",
    code: `
      let mut s : String = "hello".to_string();
      let r1 : &mut String = &mut s;
      let r2 : &mut String = &mut s;
      *r1 = "world".to_string();
      *r2 = "world".to_string();
      println!("{}", s);
    `,
    expectedOutput: [
      "Error: Cannot mutably borrow 's' while it is already mutably borrowed",
    ],
  },
  {
    name: "2 mutable borrows in same scopes should fail",
    code: `
      let mut s : i64 = 5;
      {
          let mut r1 : &mut i64 = &mut s;
          let mut g1 : &mut i64 = &mut s;
      }
      println!("{}", s);
    `,
    expectedOutput: [
      "Error: Cannot mutably borrow 's' while it is already mutably borrowed",
    ],
  },
  {
    name: "2 mutable borrows in seperate scopes should pass",
    code: `
      let mut s : i64 = 5;
      {
          let mut r1 : &mut i64 = &mut s;
          *r1 = 10;
      }{
          let mut g1 : &mut i64 = &mut s;
      }
      println!("{}", s);
    `,
    expectedOutput: ["10", undefinedResultString],
  },
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
  {
    name: "OK: transitive borrowing allowed",
    code: `
      let x: i64 = 10;
      let r1: &i64 = &x;
      let r2: &&i64 = &r1;
      println!("r2: {}", **r2);
    `,
    expectedOutput: ["r2: 10", undefinedResultString],
  },
  {
    name: "❌ `x` is already mutably borrowed by `r1`",
    code: `
      let mut x: i64 = 42;
      let r1: &mut i64 = &mut x;
      let r2: &&&mut i64 = &&&mut x;
      println!("{}", r1);
    `,
    expectedOutput: [
      "Error: Cannot mutably borrow 'x' while it is already mutably borrowed",
    ],
  },
  {
    name: "Seperate scope multiple mutable borrow, and mutate",
    code: `
      let mut x: i64 = 5;
      {
          let r1: &mut i64 = &mut x;
          *r1 = *r1 + 1;
      }
      {
        let r2: &&mut i64 = &&mut x;
        **r2 = **r2 + 2;
      }

      println!("{}", x); // prints 8
    `,
    expectedOutput: ["8", undefinedResultString],
  },
  {
    name: "Immutable borrows in function",
    code: `
      fn print_value(x: &i64) {
        println!("Value: {}", x);
      }
      let a: i64 = 10;
      print_value(&a);
      println!("Still accessible: {}", a);
    `,
    expectedOutput: [
      "Value: 10",
      "Still accessible: 10",
      undefinedResultString,
    ],
  },
  {
    name: "Mutable borrow in function",
    code: `
      fn modify(x: &mut i64) {
        *x = *x + 1;
      }
      let mut a: i64 = 10;
      modify(&mut a);
      modify(&mut a);
      println!("Result: {}", a);
    `,
    expectedOutput: ["Result: 12", undefinedResultString],
  },
  {
    name: "❌ Mutable borrow in function with double mutable borrow, CHECK ACTUAL RUST",
    code: `
      fn double_mut(x: &mut i64) {
        let r1: &mut i64 = x;
        let r2: &mut i64 = x;

        *r1 = *r1 + 1;
        *r2 = *r2 + 2;
      }
      let mut num: i64 = 10;
      double_mut(&mut num);
    `,
    expectedOutput: ["Error: Cannot read from 'x' because it has been moved"],
  },
  {
    name: "❌ Error: use after move",
    code: `
      fn take(x: String) {
        println!("{}", x);
      }
      let a: String = "hello".to_string();
      take(a);
      println!("{}", a);
    `,
    expectedOutput: [
      "Error: Cannot immutably borrow 'a' because it has been moved",
    ],
  },
  {
    name: "Nested mutable references, one mutate",
    code: `
      let mut value: i64 = 10;
      {
        let mut r1: &mut i64 = &mut value;
        let r2: &mut &mut i64 = &mut r1;
        **r2 = **r2 + 5;
      }

      println!("{}", value); // 15
    `,
    expectedOutput: ["15", undefinedResultString],
  },
  {
    name: "Nested mutable references, overlapping mutates",
    code: `
      let mut value: i64 = 10;
      let mut r1: &mut i64 = &mut value;
      let r2: &mut &mut i64 = &mut r1;

      *r1 = *r1 + 5;
      **r2 = **r2 + 5;

      println!("{}", value);
    `,
    expectedOutput: ["Error: Cannot mutate 'r1' while it is mutably borrowed"],
  },
  {
    name: "Reassigning mutable borrow to same variable",
    code: `
      let mut x: i64 = 10;
      {
        let mut r: &mut i64 = &mut x;
        r = &mut x;
      }
      println!("{}", x);
    `,
    expectedOutput: ["10", undefinedResultString],
  },
  {
    name: "Reassigning mutable borrow to same variable",
    code: `
      let mut x: i64 = 10;
      let mut r: &mut i64 = &mut x;
      let mut r1: &mut i64 = r;
      println!("{}", r);
    `,
    expectedOutput: [
      "Error: Cannot immutably borrow 'r' because it has been moved",
    ],
  },
  {
    name: "❌ Mutable borrow while immutable borrow is still active",
    code: `
      let mut x: i64 = 5;
      let r1: &i64 = &x;
      let r2: &mut i64 = &mut x;
      println!("r1: {}, r2: {}", r1, r2);
    `,
    expectedOutput: [
      "Error: Cannot mutably borrow 'x' while it is immutably borrowed",
    ],
  },

  {
    name: "Mutable borrow and deref in while loop",
    code: `
      let mut x: i64 = 0;

      while (x < 5) {
        {
          let r: &mut i64 = &mut x;
          *r = 6;
          println!("r = {}", r);
        }

          println!("x = {}", x);
      }
    `,
    expectedOutput: ["r = 6", "x = 6", undefinedResultString],
  },
  {
    name: "Mutable borrow in if statement",
    code: `
      let mut s: String = "hello".to_string();

      if (true) {
          let r: &mut String = &mut s;
          println!("{}", r);
      }

      println!("{}", s);
    `,
    expectedOutput: ["hello", "hello", undefinedResultString],
  },
  {
    name: "❌ Error: cannot use `s` because it is mutably borrowed",
    code: `
      let mut s: String = "start".to_string();
      let mut t: String = "bye".to_string();
      let mut count: i64 = 0;

      // declare the mutable reference outside the loop
      let mut r: &mut String = &mut t;

      while (count < 3) {
          // create a mutable borrow
          r = &mut s;
          // try to use s again while it's still borrowed
          println!("Value of s: {}", s);
          count += 1;
      }
    `,
    expectedOutput: [
      "Error: Cannot immutably borrow 's' while it is mutably borrowed",
    ],
  },
  {
    name: "Mutable borrow in while loop",
    code: `
      let mut s: String = "start".to_string();
      let mut count: i64 = 0;

      while (count < 2) {
          {
              let r: &mut String = &mut s;
              println!("Modified: {}", r);
          }
          // borrow ends here

          // ✅ now allowed
          println!("Safe to use s: {}", s);
          count += 1;
      }
    `,
    expectedOutput: [
      "Modified: start",
      "Safe to use s: start",
      "Modified: start",
      "Safe to use s: start",
      undefinedResultString,
    ],
  },
  {
    name: "Dereferencing copy types allowed",
    code: `
      let x: i64 = 42;
      let r: &i64 = &x;
      let val: i64 = *r;
      let val1: i64 = *r;
      println!("{}", x);
      println!("{}", val);
      println!("{}", val1);
    `,
    expectedOutput: ["42", "42", "42", undefinedResultString],
  },
  {
    name: "Cannot borrow `r` as mutable, as it is not declared as mutable",
    code: `
      let mut x: i64 = 42;
      let r: &mut i64 = &mut x;
      let s: &mut &mut i64 = &mut r;
      *r = 10;
    `,
    expectedOutput: [
      "Error: Cannot mutably borrow 'r' because it is immutable",
    ],
  },
];
