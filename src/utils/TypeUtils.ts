export type Type =
  | "bool"
  | "char"
  | "&str"
  | "String"
  | "i64"
  | "()"
  | FunctionType;

export interface FunctionType {
  params: Type[];
  returnType: Type;
}

// Helper function to check if a type is a function type
export function isFunctionType(type: Type): type is FunctionType {
  return typeof type === "object" && "params" in type && "returnType" in type;
}

// Function to parse a type annotation string into a Type object
export function parseType(typeAnnotation: string): Type {
  // Handle basic types
  switch (typeAnnotation) {
    case "bool":
    case "char":
    case "&str":
    case "String":
    case "i64":
    case "()":
      return typeAnnotation;
  }

  // Handle function types (if represented in the form "fn(param1, param2) -> returnType")
  if (typeAnnotation.startsWith("fn(") && typeAnnotation.includes(") -> ")) {
    const paramsPart = typeAnnotation.substring(
      3,
      typeAnnotation.indexOf(") -> ")
    );
    const returnTypePart = typeAnnotation.substring(
      typeAnnotation.indexOf(") -> ") + 5
    );

    // Parse parameter types
    const paramTypes: Type[] =
      paramsPart.trim() === ""
        ? []
        : paramsPart.split(",").map((param) => parseType(param.trim()));

    // Parse return type
    const returnType = parseType(returnTypePart.trim());

    return {
      params: paramTypes,
      returnType: returnType,
    };
  }

  throw new Error(`Unrecognized type annotation: ${typeAnnotation}`);
}

// Helper function to check if two types are equal
export function isTypeEqual(type1: Type, type2: Type): boolean {
  // If both are primitive types, simple comparison
  if (typeof type1 === "string" && typeof type2 === "string") {
    return type1 === type2;
  }

  // If one is primitive and the other is not, they can't be equal
  if (typeof type1 !== typeof type2) {
    return false;
  }

  // Both are function types
  if (isFunctionType(type1) && isFunctionType(type2)) {
    // Check if they have the same number of parameters
    if (type1.params.length !== type2.params.length) {
      return false;
    }

    // Check if all parameter types are equal
    for (let i = 0; i < type1.params.length; i++) {
      if (!isTypeEqual(type1.params[i], type2.params[i])) {
        return false;
      }
    }

    // Check if return types are equal
    return isTypeEqual(type1.returnType, type2.returnType);
  }

  return false;
}

// Helper function to convert a type to a string representation for error messages
export function typeToString(type: Type): string {
  if (typeof type === "string") {
    return type;
  }

  if (isFunctionType(type)) {
    const paramsStr = type.params
      .map((param) => typeToString(param))
      .join(", ");
    const returnTypeStr = typeToString(type.returnType);
    return `fn(${paramsStr}) -> ${returnTypeStr}`;
  }

  return JSON.stringify(type);
}

export function isCopyType(type: Type): boolean {
  // Check if the type is a primitive type or a reference type
  return (
    type === "bool" || type === "char" || type === "&str" || type === "i64"
  );
}
