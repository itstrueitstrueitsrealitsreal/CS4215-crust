export type Type =
  | "bool"
  | "char"
  | "&str"
  | "String"
  | "i64"
  | "()"
  | FunctionType
  | ReferenceType
  | MutableReferenceType
  | DereferenceType;

export interface FunctionType {
  params: Type[];
  returnType: Type;
}
export interface ReferenceType {
  kind: "reference";
  inner: Type; // The type being referenced
}

export interface MutableReferenceType {
  kind: "mutable_reference";
  inner: Type; // The type being mutably referenced
}

export interface DereferenceType {
  kind: "dereference";
  inner: Type; // The type being dereferenced
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
  console.log("Parsing type:", typeAnnotation);
  // Handle mutable reference types (e.g., &mut T)
  if (typeAnnotation.startsWith("&mut")) {
    console.log("Parsing mutable reference type:", typeAnnotation.substring(4).trim());
    const innerType = parseType(typeAnnotation.substring(4).trim());
    return { kind: "mutable_reference", inner: innerType };
  }

  if (typeAnnotation.startsWith("&")) {
    console.log("Parsing reference type:", typeAnnotation.substring(1).trim());
    const innerType = parseType(typeAnnotation.substring(1).trim());
    return { kind: "reference", inner: innerType };
  }

  // Handle dereference types (e.g., *T)
  if (typeAnnotation.startsWith("*")) {
    console.log("Parsing dereference type:", typeAnnotation.substring(1).trim());
    const innerType = parseType(typeAnnotation.substring(1).trim());
    console.log("Parsed dereference type:", innerType);
    return { kind: "dereference", inner: innerType };
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
  console.log("comparing types:", type1, type2);
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

  // Both are reference types
  if (
    isReferenceType(type1) &&
    isReferenceType(type2) &&
    isTypeEqual(type1.inner, type2.inner)
  ) {
    return true;
  }

  // Both are mutable reference types
  if (
    isMutableReferenceType(type1) &&
    isMutableReferenceType(type2) &&
    isTypeEqual(type1.inner, type2.inner)
  ) {
    return true;
  }

  // Both are dereference types
  if (
    isDereferenceType(type1) &&
    isDereferenceType(type2) &&
    isTypeEqual(type1.inner, type2.inner)
  ) {
    return true;
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
  if (isReferenceType(type)) {
    return `&${typeToString(type.inner)}`;
  }

  if (isMutableReferenceType(type)) {
    return `&mut ${typeToString(type.inner)}`;
  }

  if (isDereferenceType(type)) {
    return `*${typeToString(type.inner)}`;
  }

  return JSON.stringify(type);
}

export function isCopyType(type: Type): boolean {
  // Check if the type is a primitive type or a reference type
  return (
    type === "bool" || type === "char" || type === "&str" || type === "i64"
  );
}

export function isReferenceType(type: Type): type is ReferenceType {
  return typeof type === "object" && 'kind' in type && type.kind === "reference";
}

export function isMutableReferenceType(type: Type): type is MutableReferenceType {
  return typeof type === "object" && 'kind' in type && type.kind === "mutable_reference";
}

export function isDereferenceType(type: Type): type is DereferenceType {
  return typeof type === "object" && 'kind' in type && type.kind === "dereference";
}