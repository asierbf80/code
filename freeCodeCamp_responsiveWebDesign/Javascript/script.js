// Comentarios de una linea
/* Comentarios de varias líneas */

/* En Javascript hay ocho tipos de datos diferentes:
      - undefined             - null
      - boolean               - string
      - symbol                - bigint
      - number                - object

Las variables permiten a los ordenadores almacenar y manipular datos de manera dinámica. */
var myName;
myName = "Asier"; //Podemos inicializar así la variable o:

/* Uno de los problemas de las variables (var) esque se pueden sobrescribir al declarar variables:
  var camper = "James";
  var camper = "David";
  console.log(camper);
Originalmente, se declara la variable camper como James y después se muestra como David. Para que esto
no ocurra, se encuentra la palabra (let). Donde la variable con el mismo nombre sólo se puede declarar
una vez.
  let camper = "James";
  let camper = "David";
Esto crea un error en la consola.
También se puede declarar una variable constante como (const) pero son solo de lectura.
Es común que los desarrolladores usen identificadores de variables en mayúsculas para valores inmutables
minúsculas o camelCase para valores mutables. */
var myNumber = 14;

var sum = 1 + 2; //Así se suma
var res = 2 - 1; //Así se resta
var mult = 2 * 1; //Así se multiplica
var divs = 1 / 2; //Así se divide

// Para sumar o restar uno a un número se puede hacer de dos maneras:
var i = 7;          var j = 7;
i = i + 1;          j = j - 1;
//o
i++;                j--;

var myStr = "FirstLine\n\t\\SecondLine\nThirdLine"
/* Salida de myStr:
FirstLine
	\SecondLine
ThirdLine
*/

// Para ver la longitud de una cadena, podemos usar:
var lastNameLength;
var lastName= "....";
lastNameLength = lastName.length;

// Para ver la primera letra de una cadena, usamos:
const firstName = "Charles";
const firstLetter = firstName[0];

/* Los valores de un String son inmutables, es decir, no se pueden cambiar uno a uno.
Si se quiere cambiar el valor ha de asignarse de nuevo. */

/* Si queremos obtener la última letra de la variable, usamos:
  const lastName = "Lovelace";
  const lastLetterOfLastName = lastName[lastName.length - 1] */

// Con los array de JS podemos almacenar varios datos en un solo lugar.
const sandwich = ["peanut butter", "jelly", "bread"];

// También podemos anidar arrays (Arreglo multidimensional).
const teams = [["Bulls", 23],["White Sox", 45]];

// Podemos acceder a los datos de los arrays usando índices.
const array = [50, 60, 70];
array[0];
const data = array[1];

// A diferencia de los Strings, los arrays sí son mutables.
const ourArray = [50, 40, 30];
ourArray[0] = 15;
// ourArray ahora tiene el valor de [15,40,30];


/* Un arreglo multidimensional es como un array de arrays. Cuando usas corchetes para
acceder a los arrays, el primer par se refiere a las entradas en el arreglo externo y
cada par adicional se refiere al siguiente nivel de entradas. */
const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14]
];

arr[3]; // [[10, 11, 12], 13, 14]
arr[3][0]; // [10, 11, 12]
arr[3][0][1]; // 11

// La función .push() toma uno o más parámetros y los empuja al final del array.
const arr1 = [1, 2, 3];
arr1.push(4);
// Ahora arr1 tiene el valor de [1, 2, 3, 4]

// La función .pop() elimina el último elemento del array y devuelve ese elemento.
const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr);
// En la consola primero se muestra el valor 6 y después el valor [1, 4]

/* La función .shift() funciona igual que .pop(), pero elimina el primer elemento en
lugar del último */
const ourArray = ["Stimpson", "J", ["cat"]];
const removedFromOurArray = ourArray.shift();

/* La función .unshift() funciona igual que .push() pero en lugar de añadir el elemento
al final del array, lo añade al principio. */
const ourArray = ["Stimpson", "J", "cat"];
ourArray.unshift("Happy");

// En JS podemos dividir nuestro código en partes reutilizables llamadas funciones:
function functionName(){
  console.log("Hello World");
}

functionName();

/* Podemos utilizar una declaración de devolución (return) para enviar un valor fuera
de una función */
function plusThree(num){
  return num + 3;
}
const answer = plusThree(5);
// La variable answer tiene como valor 8.

/* En JS, el ámbito se refiere a la visibilidad de las variables. Las variables fuera de
una función tienen un ámbito Global. Esto indica que pueden ser observadas desde cualquier
lugar en el código. Las variables declaradas sin las palabras let o const, se crean
automáticamente en el ámbito global. */
let myGlobal = 10;

function fun1(){
  oopsGlobal = 5;
}
// myGlobal es una variable global, así como la variable oopsGlobal

/* Las variables declaradas en una función, así como los parámetros de la función,
tienen un ámbito local. Esto significa que sólo son visibles dentro de la función.
Variable local de la función llamada loc: */
function myTest{
  const loc = "foo";
  console.log(loc);
}

/* Es posible tener variables locales y globales con el mismo nombre. En este caso,
la variable local prevalece sobre la variable global. */

// Cuando una función no tiene returnm la devolucion es undefined.

/* Cuando almacenamos valores con el operador de asignación (=), todo a la derecha del signo
se resuelve antes de asignar el valor. Esto significa que podemos tomar el valor devuelto de
una función y asignarlo a una variable. */
let ourSum = sum(5,12);

/* Otro tipo de datos son los booleanos (true o false). */
/* Sentencias if:
    si (la condición es verdadera){
      la sentencia es ejecutada
    }
  */
myVal = 10;
if (myVal == 10){
  return "Equal";
}
  return "Not equal";
/* El operador igualdad (==) permite:
  3 == 3 True
  3 == '3' True
  3 == "3" True
  El operador estricta igualdad (===):
  3 === 3 True
  3 === '3' False
*/
// En JS puedes determinar el tipo de una variable o valor, con el operador typeof.
typeof 3 //number
typeof '3' //string

// El operador desigualdad (!=) es lo opuesto al operador igualdad.
// El operador de estricta desigualdad (!==) funciona igual al de estricta igualdad.
// El operador mayor que (>) compara los valores de 2 números.
// El operador mayor o igual que (>=) compara el valor de 2 números.
// El operador menor que (<) compara los valores de 2 números.
// El operador menor o igual que (<=) compara el valor de 2 números.
// El operador and (&&) devuelve true si los operandos a la izquierda y derecha son verdaderos.
// El operador or (||) devuelve true si uno de los operandos es true.

// Con la sentencia else, se puede ejecutar un bloque alternativo.
if (num > 10){
  return "Bigger than 10";
} else {
  return "10 or less";
}

/* Si hay múltiples condiciones se pueden encadenar sentencias if. El orden es importante.
Se pueden encadenar para crear una lógica compleja.
*/
if (num > 15) {
  return "Bigger than 15";
} else if (num < 5) {
  return "Smaller than 5";
} else {
  return "Between 5 and 15";
}
/* En el caso de que sean muchas opciones para elegir, lo mejor es usar una declaración switch.
Las sentencias se ejecutan desde el valor case hasta que se encuentra un break.
*/
