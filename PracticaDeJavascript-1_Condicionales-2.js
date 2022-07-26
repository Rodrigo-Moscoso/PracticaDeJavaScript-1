/*
Utilizando prompt() y alert() simula una calculadora que acepte 2 parámetros 
numéricos y 1 tipo de operación, usa los parámetros y condicionales para calcular 
el resultado y mostrarlo en la consola
*/

let valor1 = parseInt(prompt("Intruduzca el 1er valor númerico"));
let valor2 = parseInt(prompt("Intruduzca el 2do valor númerico"));
let operador = prompt(
  "Intruduzca la operción aritmetica que desea realizar: + - * /"
);

if (operador == "+") {
  resultado = valor1 + valor2;
  alert(resultado);
}
if (operador == "-") {
  resultado = valor1 - valor2;
  alert(resultado);
}
if (operador == "*") {
  resultado = resultado = valor1 * valor2;
  alert(resultado);
}
if (operador == "/") {
  resultado = resultado = valor1 / valor2;;
  alert(resultado);
}
