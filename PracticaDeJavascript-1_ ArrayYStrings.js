/*STRING: PRÁCTICA #1*/

/* Declara una variable llamada miRefrán.*/
let miRefran;

/*En otra línea asigna un refrán a esa variable.*/
miRefran = "Ojo por ojo, diente por diente";
console.log(miRefran);

/* Declara una variable llamada longitudRefran y asigna 
a esa variable la cantidad de letras de miRefran.*/
let longitudRefran = miRefran.length;
console.log(longitudRefran);

/*En otra línea asigna a la variable novenaLetra el valor 
de la novena letra del refrán. */
let novenaLetra = miRefran.charAt(8);
console.log(novenaLetra);

/*n otra línea asigna a la variable ultimaLetra el valor 
de la última letra del refrán. */
let ultimaLetra = miRefran[miRefran.length - 1];
console.log(ultimaLetra);

/*Busca el índice de la cadena “que” en tu refrán y asignalo 
a la variable índicePalabra. Si el índice es menor que cero 
busca cualquier otra preposición hasta que sea mayor a 0 */
let indicePalabra = miRefran.indexOf("por");
console.log(indicePalabra);

/*Reemplaza la preposición encontrada por la cadena “xxx” */
let remplazaRefran = miRefran.replace("por", "xxx");
console.log(remplazaRefran);

/*Convierte a mayúsculas todos los caracteres de tu refrán.*/
let mayusculasRefran = miRefran.toUpperCase();
console.log(mayusculasRefran);

/*ARRAY: PRÁCTICA #1*/

/*En esta tarea, nos gustaría que crearas un array de tres elementos, 
almacenados dentro de una variable llamada myArray. Los artículos pueden 
ser lo que quieras, ¿qué tal tus comidas o bandas favoritas? */

let comidasFavoritas = ["majao", "pizza", "paella"];
console.log(comidasFavoritas);

/*A continuación, modifica los dos primeros elementos del array utilizando 
una notación y asignación de corchetes simples []. */

comidasFavoritas[0] = "Pasta";
comidasFavoritas[1] = "Sandwich";
console.log(comidasFavoritas);

/*Luego agrega un nuevo elemento al comienzo de la matriz.*/

comidasFavoritas.unshift("Churrasco");
console.log(comidasFavoritas);

/*Luego crea una variable de tipo string donde puedas leer todos 
los elementos de tu array , separados por guiones*/

let comidasString = comidasFavoritas.join("-");
console.log(comidasString);

/*Practica avanzada. Crea un array con varios elementos de diferentes tipos. 
La regla es que por lo menos un elemento pertenezca a cada tipo de dato primitivo 
que acabamos de ver. Recuerdas cuales eran?*/

let elementosPrimitivos = [
  8,
  "palabra",
  true,
  undefined,
  null,
  Symbol("cadena"),
  2545874125358963588855n,
  comidasFavoritas[2],
];
console.log(elementosPrimitivos);

/*ARRAY: PRÁCTICA #2*/
/*
Ahora pasemos a otra tarea. Aquí te pasamos una cadena para trabajar.
let myString = 'Javascript+es+super+cool';
1 Convierta la cadena en un array, eliminando los caracteres + en el proceso.
2 Guarde el resultado en una variable llamada myArray.
*/

let myString = "Javascript+es+super+cool";
let myArray = myString.split("+");
console.log(myArray);

/*3 Almacene la longitud del array en una variable llamada arrayLength. */

let arrayLength = myArray.length;
console.log(arrayLength);

/*4 Almacene el último elemento del array en una variable llamada lastItem. */

let lastItem = myArray[arrayLength - 1];
console.log(lastItem);

/*5 Crea un nuevo array que tenga los elementos ordenados en orden inverso que myArray. 
Almacenalos en un una variable llamada myInverseArray. */

let myInverseArray = myArray.reverse();
console.log(myInverseArray);

/*6 Agrega un elemento al final de myInverseArray. */

console.log(myInverseArray.push("of Course"));
console.log(myInverseArray);
