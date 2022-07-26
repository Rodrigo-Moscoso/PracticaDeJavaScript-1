/*
Un restaurante te ha pedido que escribas una expresión condicional 
en la que verifique si una persona tiene edad para comprar una cerveza.
Como lo harias?

Recuerda que puedes usar los metodos prompt() y alert() en la consola 
para capturar valores y enviar mensajes de alerta.

Pasa tu codigo a un archivo separado de JS con VSC o Repl.it y verifica 
que funcione.
*/

let edad = prompt("Intruduzca su Edad si quiere tomar una birra Señorito");

if (edad >= 18) {
  alert("Ud. es una persona apta para refrescase con bebidas alcoholicas");
} else {
  alert("Ud. es un niño aún, pregunte a su papá si le puede invitar una birra");
}
