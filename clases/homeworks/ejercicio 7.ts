/* eslint-disable @typescript-eslint/no-unused-vars */

function suma(a: number, b: number): number {
  return a + b;
}
// ===========================================================
// Ejercicio: Logra que esta funcion tambien concatene strings
// ===========================================================

type ValidTypes = string | number;

function suma2<T extends ValidTypes>(a: T, b: T) {
  if (typeof a === "string" && typeof b === "string") return a + b;
  if (typeof a === "number" && typeof b === "number") return a + b;
}

// https://learn.microsoft.com/es-es/training/modules/typescript-generics/3-use-methods-properties-generic-type
function suma3<T extends ValidTypes>(a: T, b: T) {
  let result: ValidTypes = "";

  if (typeof a === "string" && typeof b === "string") {
    result = a + b;
  } else if (typeof a === "number" && typeof b === "number") {
    result = a + b;
  }

  return result;
}

const resultSuma2 = suma2("hola", "!");
const resultadoSuma2 = suma2<number>(5, 10);

const resultSuma3 = suma2<string>("chau", "!");
const resultadoSuma3 = suma2(20, 30);
