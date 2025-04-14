// Define the TestCase interface
export interface TestCase {
  name: string;
  code: string;
  expectedOutput: string[];
}

// Export the test cases array
export const testCases: TestCase[] = [
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
];