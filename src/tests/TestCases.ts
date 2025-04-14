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
    expectedOutput: ["x is less than y"]
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
    expectedOutput: ["Sum of 0 to 4 is: 10"]
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
    expectedOutput: ["Final value of i: 5"]
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
    expectedOutput: ["Innermost x: 30", "Middle x: 20", "Outer x: 10"]
  },
  
  // Function with early return
  // {
  //   name: "Function with early return",
  //   code: `{
  //     fn is_positive(x: i64) -> bool {
  //       if (x <= 0) {
  //         return false;
  //       }
  //       return true;
  //     }
      
  //     println!("Is 5 positive? {}", is_positive(5));
  //     println!("Is -3 positive? {}", is_positive(-3));
  //   }`,
  //   expectedOutput: ["Is 5 positive? true", "Is -3 positive? false"]
  // },
  
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
    expectedOutput: ["Max of 15 and 30 is 30", "Min of 15 and 30 is 15"]
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
    expectedOutput: ["x: 42, y: true, s: hello"]
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
    expectedOutput: ["x: 5, y: 10"]
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
    expectedOutput: ["Cannot immutably borrow 'a' because it has been moved"]
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
    expectedOutput: ["x: 42, r: 42, r1: 42"]
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
    expectedOutput: ["Cannot mutably borrow 'x' while it is immutably borrowed"]
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
    expectedOutput: ["Result: 12"]
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
    expectedOutput: ["Final value: modified"]
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
    expectedOutput: ["x: 42, val: 42, val1: 42"]
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
    expectedOutput: ["Sum: 15"]
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
    expectedOutput: ["Referenced value: 42"]
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
    expectedOutput: ["Immutable refs: 50 and 50", "After mutable ref: 60", "Final value: 60"]
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
    expectedOutput: ["Inside scope: 100", "After scope: 100"]
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
    expectedOutput: ["a: 10, b: 20"]
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
    expectedOutput: ["Inner reference: 20", "Outer value: 10"]
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
    expectedOutput: ["Values: 10, 20, 30"]
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
    expectedOutput: ["Immutable borrow: 5", "After mutable borrow: 10", "Final value: 10"]
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
    expectedOutput: ["Updated values: x=15, y=25, z=5"]
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
    
    expectedOutput: ["First mutation: 200", "Second mutation: 300", "Final value: 300"]
  },
];