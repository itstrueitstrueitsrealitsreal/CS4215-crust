import { push } from "./utils/Common";
import { binop_microcode, unop_microcode } from "./utils/OpMicrocodeUtil";

export function run(instrs: any[]): any {
  OS = [];
  PC = 0;
  E = global_environment;
  RTS = [];
  stringPool = {}; // Reset string pool for this run

  while (!(instrs[PC].tag === "DONE")) {
    const instr = instrs[PC++];
    microcode[instr.tag](instr);
    // console.log(instr);
    // console.log("Operand Stack (OS):", OS);
  }
  // If the operand stack is empty, return undefined; otherwise, convert the top value.
  const top = peek(OS, 0);
  return top === undefined ? undefined : address_to_JS_value(top);
}

// return the last element of given array without changing the array
const peek = (array, address) => array.slice(-1 - address)[0];

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
const Reference_tag = 14; // ADDED CHANGE
const MutableReference_tag = 15; // ADDED CHANGE
// Record<string, tuple(number, string)< where the key is the hash of the string
// and the value is a tuple of the address of the string and the string itself
let stringPool = {}; // ADDED CHANGE

/* *************************
 * HEAP
 * *************************/
// HEAP is an array of bytes (JS ArrayBuffer)
const word_size = 8;
const mega = 2 ** 20;

// heap_make allocates a heap of given size (in megabytes)and returns a DataView of that, see https://www.javascripture.com/DataView
const heap_make = (bytes) => {
  if (bytes % 8 !== 0) throw new Error("heap bytes must be divisible by 8");
  const data = new ArrayBuffer(bytes);
  const view = new DataView(data);
  return view;
};

const HEAP = heap_make(1000000);
// free is the next free index in HEAP
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
const heap_get_size = (address) =>
  HEAP.getUint16(address * word_size + size_offset);
// child index starts at 0
const heap_get_child = (address, child_index) =>
  heap_get(address + 1 + child_index);
const heap_set_child = (address, child_index, value) =>
  heap_set(address + 1 + child_index, value);
const heap_set_byte_at_offset = (address, offset, value) =>
  HEAP.setUint8(address * word_size + offset, value);
const heap_get_byte_at_offset = (address, offset) =>
  HEAP.getUint8(address * word_size + offset);

const heap_allocate_Number = (n) => {
  const number_address = heap_allocate(Number_tag, 2); // 2 words
  heap_set(number_address + 1, n); // store in next word
  return number_address;
};
const heap_allocate_Builtin = (id) => {
  const address = heap_allocate(Builtin_tag, 1);
  heap_set_byte_at_offset(address, 1, id);
  return address;
};
// block frame [1 byte tag, 4 bytes unused, 2 bytes #children, 1 byte unused]
const heap_allocate_Blockframe = (env) => {
  const address = heap_allocate(Blockframe_tag, 2);
  heap_set(address + 1, env);
  return address;
};
const heap_get_Blockframe_environment = (address) => heap_get_child(address, 0);
// environment frame [1 byte tag, 4 bytes unused, 2 bytes #children, 1 byte unused] followed by the addresses of its values
const heap_allocate_Frame = (number_of_values) =>
  heap_allocate(Frame_tag, number_of_values + 1);
// environment [1 byte tag, 4 bytes unused, 2 bytes #children, 1 byte unused] followed by the addresses of its frames
const heap_allocate_Environment = (number_of_frames) =>
  heap_allocate(Environment_tag, number_of_frames + 1);
const heap_empty_Environment = heap_allocate_Environment(0);
// access environment given by address using a "position", i.e. a pair of frame index and value index
const heap_get_Environment_value = (env_address, position) => {
  const [frame_index, value_index] = position;
  const frame_address = heap_get_child(env_address, frame_index);
  return heap_get_child(frame_address, value_index);
};
const heap_set_Environment_value = (env_address, position, value) => {
  //display(env_address, "env_address:")
  const [frame_index, value_index] = position;
  const frame_address = heap_get_child(env_address, frame_index);
  heap_set_child(frame_address, value_index, value);
};

// the number of children is one less than the size
// except for number nodes:
//                 they have size 2 but no children
const heap_get_number_of_children = (address) =>
  heap_get_tag(address) === Number_tag ? 0 : heap_get_size(address) - 1;

// access 2 bytes in heap, using address and offset
const heap_set_2_bytes_at_offset = (
  address: number,
  offset: number,
  value: number
) => HEAP.setUint16(address * word_size + offset, value);

const heap_get_2_bytes_at_offset = (
  address: number,
  offset: number,
  value?: any
) => HEAP.getUint16(address * word_size + offset);

// ADDED CHANGE
const heap_set_4_bytes_at_offset = (
  address: number,
  offset: number,
  value: number
) => HEAP.setUint32(address * word_size + offset, value);

// ADDED CHANGE
const heap_get_4_bytes_at_offset = (
  address: number,
  offset: number,
  value?: any
) => HEAP.getUint32(address * word_size + offset);

// for debugging: return a string that shows the bits
// of a given word
const word_to_string = (word) => {
  const buf = new ArrayBuffer(8);
  const view = new DataView(buf);
  view.setFloat64(0, word);
  let binStr = "";
  for (let i = 0; i < 8; i++) {
    binStr += ("00000000" + view.getUint8(i).toString(2)).slice(-8) + " ";
  }
  return binStr;
};
// extend a given environment by a new frame:
// create a new environment that is bigger by 1 frame slot than the given environment.
// copy the frame Addresses of the given environment to the new environment.
// enter the address of the new frame to end of the new environment
const heap_Environment_extend = (frame_address, env_address) => {
  const old_size = heap_get_size(env_address);
  const new_env_address = heap_allocate_Environment(old_size);
  let i;
  for (i = 0; i < old_size - 1; i++) {
    heap_set_child(new_env_address, i, heap_get_child(env_address, i));
  }
  heap_set_child(new_env_address, i, frame_address);
  return new_env_address;
};

// Add reference allocation functions
const heap_allocate_Reference = (inner, frameIndex, valueIndex) => {
  const reference_address = heap_allocate(Reference_tag, 4);  // 4 words: tag + 3 values
  heap_set(reference_address + 1, inner);             // Store inner value/address
  heap_set(reference_address + 2, frameIndex);        // Store frame index
  heap_set(reference_address + 3, valueIndex);        // Store value index
  return reference_address;
};

const heap_allocate_MutableReference = (inner, frameIndex, valueIndex) => {
  const reference_address = heap_allocate(MutableReference_tag, 4);  // 4 words
  heap_set(reference_address + 1, inner);             // Store inner value/address
  heap_set(reference_address + 2, frameIndex);        // Store frame index
  heap_set(reference_address + 3, valueIndex);        // Store value index
  return reference_address;
};

// Add helper functions to check and extract reference data
const is_Reference = (address) => heap_get_tag(address) === Reference_tag;
const is_MutableReference = (address) => heap_get_tag(address) === MutableReference_tag;
const is_AnyReference = (address) => is_Reference(address) || is_MutableReference(address);

const heap_get_Reference_inner = (address) => heap_get(address + 1);
const heap_get_Reference_frameIndex = (address) => heap_get(address + 2);
const heap_get_Reference_valueIndex = (address) => heap_get(address + 3);

// all values (including literals) are allocated on the heap.
// We allocate canonical values for true, false, undefined, null, and unassigned
// and make sure no such values are created at runtime
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

// strings:
// [1 byte tag, 4 byte hash to stringPool,
// 2 bytes #children, 1 byte unused]
// Note: #children is 0

// Hash any string to a 32-bit unsigned integer
const hashString = (str) => {
  let hash = 5381;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) + hash + char;
    hash = hash & hash;
  }
  return hash >>> 0;
};

const heap_allocate_String = (string: string): number => {
  const hash = hashString(string);
  const a = stringPool[hash];

  if (a !== undefined) {
    var i; // using var to ensure i is available after the loop
    for (i = 0; i < a.length; i++) {
      if (a[i].string === string) return a[i].address;
    }
    const address = heap_allocate(String_tag, 2);
    heap_set_4_bytes_at_offset(address, 1, hash);
    heap_set_2_bytes_at_offset(address, 5, i);
    a[i] = { address, string };
    return address;
  }

  const address = heap_allocate(String_tag, 2);
  heap_set_4_bytes_at_offset(address, 1, hash);
  heap_set_2_bytes_at_offset(address, 5, 0);
  stringPool[hash] = [{ address, string }];
  return address;
};

const heap_get_string_hash = (address) =>
  heap_get_4_bytes_at_offset(address, 1);

const heap_get_string_index = (address) =>
  heap_get_2_bytes_at_offset(address, 5);

const heap_get_string = (address) =>
  stringPool[heap_get_string_hash(address)][heap_get_string_index(address)]
    .string;
// builtins: builtin id is encoded in second byte
// [1 byte tag, 1 byte id, 3 bytes unused,
//  2 bytes #children, 1 byte unused]
// Note: #children is 0

const is_Builtin = (address) => heap_get_tag(address) === Builtin_tag;

const heap_get_Builtin_id = (address) => heap_get_byte_at_offset(address, 1);

// closure
// [1 byte tag, 1 byte arity, 2 bytes pc, 1 byte unused,
//  2 bytes #children, 1 byte unused]
// followed by the address of env
// note: currently bytes at offset 4 and 7 are not used;
//   they could be used to increase pc and #children range

const heap_allocate_Closure = (arity, pc, env) => {
  const address = heap_allocate(Closure_tag, 2);
  heap_set_byte_at_offset(address, 1, arity);
  heap_set_2_bytes_at_offset(address, 2, pc);
  heap_set(address + 1, env);
  return address;
};

const heap_get_Closure_arity = (address) => heap_get_byte_at_offset(address, 1);

const heap_get_Closure_pc = (address) => heap_get_2_bytes_at_offset(address, 2);

const heap_get_Closure_environment = (address) => heap_get_child(address, 0);

const is_Closure = (address) => heap_get_tag(address) === Closure_tag;

// block frame
// [1 byte tag, 4 bytes unused,
//  2 bytes #children, 1 byte unused]

const is_Blockframe = (address) => heap_get_tag(address) === Blockframe_tag;

// call frame
// [1 byte tag, 1 byte unused, 2 bytes pc,
//  1 byte unused, 2 bytes #children, 1 byte unused]
// followed by the address of env

const heap_allocate_Callframe = (env, pc) => {
  const address = heap_allocate(Callframe_tag, 2);
  heap_set_2_bytes_at_offset(address, 2, pc);
  heap_set(address + 1, env);
  return address;
};

const heap_get_Callframe_environment = (address) => heap_get_child(address, 0);

const heap_get_Callframe_pc = (address) =>
  heap_get_2_bytes_at_offset(address, 2);

const is_Callframe = (address) => heap_get_tag(address) === Callframe_tag;

// pair
// [1 byte tag, 4 bytes unused,
//  2 bytes #children, 1 byte unused]
// followed by head and tail addresses, one word each
const heap_allocate_Pair = (hd, tl) => {
  const pair_address = heap_allocate(Pair_tag, 3);
  heap_set_child(pair_address, 0, hd);
  heap_set_child(pair_address, 1, tl);
  return pair_address;
};

const is_Pair = (address) => heap_get_tag(address) === Pair_tag;

// creating global runtime environment
const primitive_object = {};
const primitive_values = Object.values(primitive_object);
const frame_address = heap_allocate_Frame(primitive_values.length);
for (let i = 0; i < primitive_values.length; i++) {
  const primitive_value = primitive_values[i];
  if (typeof primitive_value === "object" && "id" in primitive_value) {
    heap_set_child(
      frame_address,
      i,
      heap_allocate_Builtin((primitive_value as { id: number }).id)
    );
  } else if (typeof primitive_value === "undefined") {
    heap_set_child(frame_address, i, Undefined);
  } else {
    heap_set_child(frame_address, i, heap_allocate_Number(primitive_value));
  }
}
// const global_environment = heap_Environment_extend(
// 	frame_address,
// 	heap_empty_Environment,
// );
const global_environment = heap_empty_Environment;

// machine registers
let OS; // JS array (stack) of words (Addresses, word-encoded literals, numbers)
let PC; // JS number
let E; // heap Address
let RTS; // JS array (stack) of Addresses
HEAP; // (declared above already)

const microcode = {
  LDC: (instr) => push(OS, JS_value_to_address(instr.val)),
  UNOP: (instr) => {
    const value = OS.pop();
    
    // For reference operators (&mut or &)
    if (instr.sym === "&" || instr.sym === "&mut") {
      if (instr.varInfo) {
        // Create a reference object
        const refObj = {
          kind: instr.sym === "&mut" ? "mutable_reference" : "reference",
          inner: address_to_JS_value(value), // Keep the full value structure
          frameIndex: instr.varInfo.frameIndex,
          valueIndex: instr.varInfo.valueIndex
        };
        
        // Store the reference
        push(OS, JS_value_to_address(refObj));
        return;
      }
    }
    
    // For dereference operator (*)
    if (instr.sym === "*") {
      const jsValue = address_to_JS_value(value);
      
      if (typeof jsValue === "object" && jsValue !== null &&
          (jsValue.kind === "reference" || jsValue.kind === "mutable_reference")) {
        
        // For nested references
        if (typeof jsValue.inner === "object" && jsValue.inner !== null && 
            (jsValue.inner.kind === "reference" || jsValue.inner.kind === "mutable_reference")) {
          // Return the inner reference structure to be dereferenced again
          push(OS, JS_value_to_address(jsValue.inner));
          return;
        }
        
        // For simple references to values
        if (jsValue.frameIndex !== undefined && jsValue.valueIndex !== undefined) {
          const actualValue = heap_get_Environment_value(E, [jsValue.frameIndex, jsValue.valueIndex]);
          push(OS, actualValue);
          return;
        }
        
        // If we get here, we have a reference but no frame info - try using the inner value directly
        if (jsValue.inner !== undefined) {
          console.log("Using inner value directly:", jsValue.inner);
          push(OS, JS_value_to_address(jsValue.inner));
          return;
        }
      }
      
      console.warn("Not a proper reference for dereferencing:", jsValue);
      throw new Error(`Cannot dereference non-reference type: ${jsValue}`);
    }
    
    // Normal case for other operators
    push(OS, apply_unop(instr.sym, value));
  },
  BINOP: (instr) => push(OS, apply_binop(instr.sym, OS.pop(), OS.pop())),
  POP: (instr) => OS.pop(),
  JOF: (instr) => {
    const condition = OS.pop();
    if (!address_to_JS_value(condition)) {
      PC = instr.addr;
    }
  },
  GOTO: (instr) => {
    PC = instr.addr;
  },
  ENTER_SCOPE: (instr) => {
    // Push a new block frame and extend the environment with a new frame
    push(RTS, heap_allocate_Blockframe(E));
    const frame_address = heap_allocate_Frame(instr.num);
    E = heap_Environment_extend(frame_address, E);
    for (let i = 0; i < instr.num; i++) {
      heap_set_child(frame_address, i, Unassigned);
    }
  },
  EXIT_SCOPE: (instr) => {
    // Restore environment from the block frame
    E = heap_get_Blockframe_environment(RTS.pop());
  },
  LD: (instr) => {
    const val = heap_get_Environment_value(E, instr.pos);
    if (is_Unassigned(val)) throw new Error("access of unassigned variable");
    push(OS, val);
  },
  ASSIGN: (instr) => {
    heap_set_Environment_value(E, instr.pos, peek(OS, 0));
  },
  LDF: (instr) => {
    const closure_address = heap_allocate_Closure(instr.arity, instr.addr, E);
    push(OS, closure_address);
  },
  // CALL and TAIL_CALL should be implemented following the same conventions.
  CALL: (instr) => {
    const arity = instr.arity;
    const fun = peek(OS, arity);
    //   if (is_Builtin(fun)) {
    //     return apply_builtin(heap_get_Builtin_id(fun));
    //   }
    const frame_address = heap_allocate_Frame(arity);
    for (let i = arity - 1; i >= 0; i--) {
      heap_set_child(frame_address, i, OS.pop());
    }
    OS.pop(); // pop the function
    push(RTS, heap_allocate_Callframe(E, PC));
    E = heap_Environment_extend(
      frame_address,
      heap_get_Closure_environment(fun)
    );
    PC = heap_get_Closure_pc(fun);
  },
  TAIL_CALL: (instr) => {
    const arity = instr.arity;
    const fun = peek(OS, arity);
    //   if (is_Builtin(fun)) {
    //     return apply_builtin(heap_get_Builtin_id(fun));
    //   }
    const frame_address = heap_allocate_Frame(arity);
    for (let i = arity - 1; i >= 0; i--) {
      heap_set_child(frame_address, i, OS.pop());
    }
    OS.pop(); // pop fun
    // No push to RTS for tail calls
    E = heap_Environment_extend(
      frame_address,
      heap_get_Closure_environment(fun)
    );
    PC = heap_get_Closure_pc(fun);
  },
  RESET: (instr) => {
    PC--;
    const top_frame = RTS.pop();
    if (is_Callframe(top_frame)) {
      PC = heap_get_Callframe_pc(top_frame);
      E = heap_get_Callframe_environment(top_frame);
    }
  },
  PRINT: (instr) => {
    const val = OS.pop();
    const jsVal = address_to_JS_value(val);
    // Optionally, check that jsVal is a string.
    if (typeof jsVal !== "string") {
      throw new Error("print! expects a string");
    }
    // Print without a newline:
    process.stdout.write(jsVal); // Node.js; or use console.log with adjustments.
  },
  PRINTLN: (instr) => {
    const val = OS.pop();
    const jsVal = address_to_JS_value(val);
    if (typeof jsVal !== "string") {
      throw new Error("println! expects a string");
    }
    console.log(jsVal);
  },
  TOSTRING: (instr) => {
    const val = OS.pop();
    const jsVal = address_to_JS_value(val);
    const strVal = String(jsVal);
    push(OS, JS_value_to_address(strVal));
  },
  TOOWNED: (instr) => {
    const val = OS.pop();
    const jsVal = address_to_JS_value(val);
    const strVal = String(jsVal);
    push(OS, JS_value_to_address(strVal));
  },
  DEREF_ASSIGN: (instr) => {
    const refValue = OS.pop();  // The reference
    const newValue = OS.pop();  // The new value (FIX: pop it, don't just peek)
    
    // Convert reference to JS object
    const jsRef = address_to_JS_value(refValue);
    
    if (typeof jsRef !== "object" || jsRef === null || 
        (jsRef.kind !== "reference" && jsRef.kind !== "mutable_reference")) {
      throw new Error("Can only assign through mutable references");
    }
    
    if (jsRef.kind !== "mutable_reference") {
      throw new Error("Cannot assign through immutable reference");
    }
    
    // Update the original variable through the reference
    if (jsRef.frameIndex !== undefined && jsRef.valueIndex !== undefined) {
      heap_set_Environment_value(E, [jsRef.frameIndex, jsRef.valueIndex], newValue);
    } else {
      throw new Error("Reference doesn't contain valid location information");
    }
  }
};

const apply_binop = (op, v2, v1) =>
  JS_value_to_address(
    binop_microcode[op](address_to_JS_value(v1), address_to_JS_value(v2))
  );

const apply_unop = (op, v) => {
  const value = address_to_JS_value(v);
  return JS_value_to_address(unop_microcode[op](value));
};

//
// conversions between addresses and JS_value
//
const address_to_JS_value = (x) => {
  // Handle undefined or invalid addresses
  if (x === undefined) return undefined;
  
  // Handle reference types stored in the heap
  if (is_AnyReference(x)) {
    const refKind = is_MutableReference(x) ? "mutable_reference" : "reference";
    const refInner = heap_get_Reference_inner(x);
    const frameIndex = heap_get_Reference_frameIndex(x);
    const valueIndex = heap_get_Reference_valueIndex(x);
    
    return {
      kind: refKind,
      inner: address_to_JS_value(refInner), // RECURSIVE call to handle nested references
      frameIndex: frameIndex,
      valueIndex: valueIndex
    };
  }
  
  // Handle existing types
  if (is_Number(x)) return heap_get(x + 1);
  if (is_Boolean(x)) return is_True(x);
  if (is_String(x)) return heap_get_string(x);
  if (is_Undefined(x)) return undefined;
  if (is_Null(x)) return null;
  
  // Return a reasonable value instead of throwing
  return undefined;
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
// : is_Builtin(x)
// ? "<builtin>"
// : "unknown word tag: " + word_to_string(x);

const JS_value_to_address = (x) => {
  // Basic types
  if (typeof x === "number") return heap_allocate_Number(x);
  if (typeof x === "boolean") return x ? True : False;
  if (typeof x === "string") return heap_allocate_String(x);
  if (x === undefined) return Undefined;
  if (x === null) return Null;
  
  // Handle reference objects
  if (typeof x === "object" && x !== null && x.kind) {
    if (x.kind === "mutable_reference" || x.kind === "reference") {
      // Handle the inner value - it could be another reference
      const innerValue = x.inner;
      const innerAddress = JS_value_to_address(innerValue); // RECURSIVELY convert inner value
      
      // For references to variables (with frame/value indices)
      if (x.frameIndex !== undefined && x.valueIndex !== undefined) {
        if (x.kind === "mutable_reference") {
          return heap_allocate_MutableReference(innerAddress, x.frameIndex, x.valueIndex);
        } else {
          return heap_allocate_Reference(innerAddress, x.frameIndex, x.valueIndex); 
        }
      }
      
      // For references to other references (without frame/value indices)
      // We set default indices of 0, which won't be used when dereferencing
      else {
        if (x.kind === "mutable_reference") {
          return heap_allocate_MutableReference(innerAddress, 0, 0);
        } else {
          return heap_allocate_Reference(innerAddress, 0, 0);
        }
      }
    }
  }
  
  console.warn("Cannot convert JS value to address:", x);
  throw new Error(`Cannot convert JS value to address: ${JSON.stringify(x)}`);
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
