/* eslint-disable @typescript-eslint/no-unused-vars */

function suma(a: number, b: number): number {
  return a + b;
} //que pasa si yo quisiera concatenar strings con esta funcion?

function suma2(a: number | string, b: number | string): number | string | void {
  if (typeof a === "number" && typeof b === "number") return a + b;
  if (typeof a === "string" && typeof b === "string") return a + b;
}
