export const binop_microcode = {
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
    "%": (x, y) => {
      if (!is_number(x) || !is_number(y)) {
        throw new Error("% expects two numbers, got: " + [x, y]);
      }
      return x % y;
    },
    "<<": (x, y) => {
      if (!is_number(x) || !is_number(y)) {
        throw new Error("<< expects two numbers, got: " + [x, y]);
      }
      return x << y;
    },
    ">>": (x, y) => {
      if (!is_number(x) || !is_number(y)) {
        throw new Error(">> expects two numbers, got: " + [x, y]);
      }
      return x >> y;
    },
    "&": (x, y) => {
      if (!is_number(x) || !is_number(y)) {
        throw new Error("& expects two numbers, got: " + [x, y]);
      }
      return x & y;
    },
    "^": (x, y) => {
      if (!is_number(x) || !is_number(y)) {
        throw new Error("^ expects two numbers, got: " + [x, y]);
      }
      return x ^ y;
    },
    "|": (x, y) => {
      if (!is_number(x) || !is_number(y)) {
        throw new Error("| expects two numbers, got: " + [x, y]);
      }
      return x | y;
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

  export const unop_microcode = {
    "+": (x) => {
      if (!is_number(x)) throw new Error("Unary + expects a number");
      return x; // Unary plus is usually a no-op
    },
    "-": (x) => {
      if (!is_number(x)) throw new Error("Unary - expects a number");
      return -x;
    },
    "!": (x) => {
      if (!is_boolean(x)) throw new Error("Unary ! expects a boolean");
      return !x;
    },
  };

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