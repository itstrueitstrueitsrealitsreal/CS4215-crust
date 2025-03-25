export function run(instrs: any[]): any {
  OS = [];
  PC = 0;
  // E = global_environment;
  // RTS = [];
  // stringPool = {}; // ADDED CHANGE
  //print_code()
  while (!(instrs[PC].tag === "DONE")) {
    //heap_display()
    //display(PC, "PC: ")
    //display(instrs[PC].tag, "instr: ")
    //print_OS("\noperands:            ");
    //print_RTS("\nRTS:            ");
    const instr = instrs[PC++];
    //display(instrs[PC].tag, "next instruction: ")
    microcode[instr.tag](instr);
  }
  //display(OS, "\nfinal operands:           ")
  //print_OS()
  return address_to_JS_value(peek(OS, 0));
}
// creating global runtime environment
// const primitive_object = {};
// const primitive_values = Object.values(primitive_object);
// const frame_address = heap_allocate_Frame(primitive_values.length);

// for (let i = 0; i < primitive_values.length; i++) {
// 	const primitive_value = primitive_values[i];
// 	if (
// 		typeof primitive_value === "object" &&
// 		primitive_value.hasOwnProperty("id")
// 	) {
// 		heap_set_child(frame_address, i, heap_allocate_Builtin(primitive_value.id));
// 	} else if (typeof primitive_value === "undefined") {
// 		heap_set_child(frame_address, i, Undefined);
// 	} else {
// 		heap_set_child(frame_address, i, heap_allocate_Number(primitive_value));
// 	}
// }

// const global_environment = heap_Environment_extend(
// 	frame_address,
// 	heap_empty_Environment,
// );

/* **********************
 * using arrays as stacks
 * **********************/

// add values destructively to the end of
// given array; return the array
const push = (array, ...items) => {
  // fixed by Liew Zhao Wei, see Discussion 5
  for (let item of items) {
    array.push(item);
  }
  return array;
};

// return the last element of given array
// without changing the array
const peek = (array, address) => array.slice(-1 - address)[0];

/* *************************
 * HEAP
 * *************************/

// HEAP is an array of bytes (JS ArrayBuffer)

const word_size = 8;
const mega = 2 ** 20;

// heap_make allocates a heap of given size
// (in megabytes)and returns a DataView of that,
// see https://www.javascripture.com/DataView
const heap_make = (bytes) => {
  if (bytes % 8 !== 0) throw new Error("heap bytes must be divisible by 8");
  const data = new ArrayBuffer(bytes);
  const view = new DataView(data);
  return view;
};

// we randomly pick a heap size of 1000000 bytes
const HEAP = heap_make(1000000);

// free is the next free index in HEAP
// we keep allocating as if there was no tomorrow
let free = 0;

// for debugging: display all bits of the heap
// const heap_display = () => {
// 	display("", "heap:");
// 	for (let i = 0; i < free; i++) {
// 		display(
// 			word_to_string(heap_get(i)),
// 			stringify(i) + " " + stringify(heap_get(i)) + " ",
// 		);
// 	}
// };

// heap_allocate allocates a given number of words
// on the heap and marks the first word with a 1-byte tag.
// the last two bytes of the first word indicate the number
// of children (addresses) that follow the tag word:
// [1 byte tag, 4 bytes payload (depending on node type),
//  2 bytes #children, 1 byte unused]
// Note: payload depends on the type of node
const size_offset = 5;
const heap_allocate = (tag, size) => {
  // size in words
  const address = free;
  free += size; // in words (8 bytes)
  HEAP.setUint8(address * word_size, tag); // byteOffset, value
  HEAP.setUint16(address * word_size + size_offset, size);
  return address;
};
// get and set a word in heap at given address
const heap_get = (address) => HEAP.getFloat64(address * word_size);

const heap_set = (address, x) => HEAP.setFloat64(address * word_size, x);

const heap_get_tag = (address) => HEAP.getUint8(address * word_size);

const heap_allocate_Number = (n) => {
  const number_address = heap_allocate(Number_tag, 2); // 2 words
  heap_set(number_address + 1, n); // store in next word
  return number_address;
};
// environment frame
// [1 byte tag, 4 bytes unused,
//  2 bytes #children, 1 byte unused]
// followed by the addresses of its values

const heap_allocate_Frame = (number_of_values) =>
  heap_allocate(Frame_tag, number_of_values + 1);

// values

// All values are allocated on the heap as nodes. The first
// word of the node is a header, and the first byte of the
// header is a tag that identifies the type of node

const False_tag = 0;
const True_tag = 1;
const Number_tag = 2;
const Null_tag = 3;
const Unassigned_tag = 4;
const Undefined_tag = 5;
const Blockframe_tag = 6;
const Callframe_tag = 7;
const Closure_tag = 8;
const Frame_tag = 9;
const Environment_tag = 10;
const Pair_tag = 11;
const Builtin_tag = 12;
const String_tag = 13; // ADDED CHANGE

// Record<string, tuple(number, string)< where the key is the hash of the string
// and the value is a tuple of the address of the string and the string itself
let stringPool = {}; // ADDED CHANGE

// all values (including literals) are allocated on the heap.

// We allocate canonical values for
// true, false, undefined, null, and unassigned
// and make sure no such values are created at runtime

// boolean values carry their value (0 for false, 1 for true)
// in the byte following the tag
const False = heap_allocate(False_tag, 1);
const is_False = (address) => heap_get_tag(address) === False_tag;
const True = heap_allocate(True_tag, 1);
const is_True = (address) => heap_get_tag(address) === True_tag;

const is_Boolean = (address) => is_True(address) || is_False(address);
const is_Number = (address) => heap_get_tag(address) === Number_tag;
const is_String = (address) => heap_get_tag(address) === String_tag;

const Null = heap_allocate(Null_tag, 1);
const is_Null = (address) => heap_get_tag(address) === Null_tag;

const Unassigned = heap_allocate(Unassigned_tag, 1);
const is_Unassigned = (address) => heap_get_tag(address) === Unassigned_tag;

const Undefined = heap_allocate(Undefined_tag, 1);
const is_Undefined = (address) => heap_get_tag(address) === Undefined_tag;

// machine registers
let OS; // JS array (stack) of words (Addresses,
//        word-encoded literals, numbers)
let PC; // JS number
let E; // heap Address
let RTS; // JS array (stack) of Addresses
HEAP; // (declared above already)

const microcode = {
  LDC: (instr) => push(OS, JS_value_to_address(instr.val)),
  // UNOP: (instr) => push(OS, apply_unop(instr.sym, OS.pop())),
  BINOP: (instr) => push(OS, apply_binop(instr.sym, OS.pop(), OS.pop())),
  POP: (instr) => OS.pop(),
};

const apply_binop = (op, v2, v1) =>
  JS_value_to_address(
    binop_microcode[op](address_to_JS_value(v1), address_to_JS_value(v2))
  );

const binop_microcode = {
  "+": (x, y) => {
    if (!is_number(x) || !is_number(y)) {
      throw new Error("+ expects two numbers, got: " + [x, y]);
    }
    return x + y;
  },
  "*": (x, y) => {
    if (!is_number(x) || !is_number(y)) {
      throw new Error("* expects two numbers, got: " + [x, y]);
    }
    return x * y;
  },
  "-": (x, y) => {
    if (!is_number(x) || !is_number(y)) {
      throw new Error("- expects two numbers, got: " + [x, y]);
    }
    return x - y;
  },
  "/": (x, y) => {
    if (!is_number(x) || !is_number(y)) {
      throw new Error("/ expects two numbers, got: " + [x, y]);
    }
    return x / y;
  },
  "<": (x, y) => {
    if (!is_number(x) || !is_number(y)) {
      throw new Error("< expects two numbers, got: " + [x, y]);
    }
    return x < y;
  },
  "<=": (x, y) => {
    if (!is_number(x) || !is_number(y)) {
      throw new Error("<= expects two numbers, got: " + [x, y]);
    }
    return x <= y;
  },
  ">": (x, y) => {
    if (!is_number(x) || !is_number(y)) {
      throw new Error("> expects two numbers, got: " + [x, y]);
    }
    return x > y;
  },
  ">=": (x, y) => {
    if (!is_number(x) || !is_number(y)) {
      throw new Error(">= expects two numbers, got: " + [x, y]);
    }
    return x >= y;
  },
  "==": (x, y) => {
    // Allow equality comparison for numbers
    if (is_number(x) && is_number(y)) {
      return x === y;
    }
    // Allow equality comparison for booleans
    if (is_boolean(x) && is_boolean(y)) {
      return x === y;
    }
    throw new Error(
      "== expects both operands to be of the same type, got: " + [x, y]
    );
  },
  "!=": (x, y) => {
    // Allow inequality comparison for numbers
    if (is_number(x) && is_number(y)) {
      return x !== y;
    }
    // Allow inequality comparison for booleans
    if (is_boolean(x) && is_boolean(y)) {
      return x !== y;
    }
    throw new Error(
      "!= expects both operands to be of the same type, got: " + [x, y]
    );
  },
  "&&": (x, y) => {
    if (!is_boolean(x) || !is_boolean(y)) {
      throw new Error("&& expects two booleans, got: " + [x, y]);
    }
    return x && y;
  },
  "||": (x, y) => {
    if (!is_boolean(x) || !is_boolean(y)) {
      throw new Error("|| expects two booleans, got: " + [x, y]);
    }
    return x || y;
  },
};

//
// conversions between addresses and JS_value
//
const address_to_JS_value = (x) => {
  if (is_Number(x)) return heap_get(x + 1);
  if (is_Boolean(x)) return is_True(x);
  if (is_Undefined(x)) return undefined;
  if (is_Null(x)) return null;
  // Add other type conversions as needed
  throw new Error(`Cannot convert address ${x} to JS value`);
};
// is_Boolean(x)
// 	? is_True(x)
// 		? true
// 		: false
// 	: is_Number(x)
// 	? heap_get(x + 1)
// 	: is_Undefined(x)
// 	? undefined
// 	: is_Unassigned(x)
// 	? "<unassigned>"
// 	: is_Null(x)
// 	? null
// 	: is_String(x); // ADDED CHANGE
// ? heap_get_string(x) // ADDED CHANGE
// : is_Pair(x)
// ? [
// 		address_to_JS_value(heap_get_child(x, 0)),
// 		address_to_JS_value(heap_get_child(x, 1)),
//   ]
// : is_Closure(x)
// ? "<closure>"
// : is_Builtin(x)
// ? "<builtin>"
// : "unknown word tag: " + word_to_string(x);
const JS_value_to_address = (x) => {
  if (typeof x === "number") return heap_allocate_Number(x);
  if (typeof x === "boolean") return x ? True : False;
  if (x === undefined) return Undefined;
  if (x === null) return Null;
  // Add other type conversions as needed
  throw new Error(`Cannot convert JS value ${x} to address`);
};
// const JS_value_to_address = (x) =>
//   is_boolean(x)
//     ? x
//       ? True
//       : False
//     : is_number(x)
//     ? heap_allocate_Number(x)
//     : is_undefined(x)
//     ? Undefined
//     : is_null(x)
//     ? Null
//     : is_string(x); // ADDED CHANGE
// ? heap_allocate_String(x) // ADDED CHANGE
// : is_pair(x)
// ? heap_allocate_Pair(
// 		JS_value_to_address(head(x)),
// 		JS_value_to_address(tail(x)),
//   )
// : "unknown word tag: " + word_to_string(x);

const is_boolean = (value: any): boolean => {
  return typeof value === "boolean";
};
const is_number = (value: any): boolean => {
  return typeof value === "number";
};
const is_undefined = (value: any): boolean => {
  return value === undefined;
};
const is_string = (value: any): boolean => {
  return typeof value === "string";
};
const is_null = (value: any): boolean => {
  return value === null;
};
