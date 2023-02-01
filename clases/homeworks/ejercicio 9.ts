/* eslint-disable @typescript-eslint/no-unused-vars */

function suma(a: string, b: string): string;
function suma(a: string, b: number): string;
function suma(a: number, b: string): string;
function suma(a: number, b: number): number {
  return a + b;
}

let resultado = suma(2, 2);
//cambien los parametros para ver su comportamiento haciendo hover sobre resultado
let resultado2 = suma("4", 4);
let resultado3 = suma(6, "6");
let resultado4 = suma("8", "8");

//Aplicar lo mismo para el resto de las operaciones matematicas!
