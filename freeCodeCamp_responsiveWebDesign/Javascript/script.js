// JAVASCRIPT BÁSICO


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
Las sentencias se ejecutan desde el valor case hasta que se encuentra un break. También se puede
declarar default, que se ejecuta si no hay case. Debe ser el último caso. Si la sentencia break
es omitida en algún caso, los siguientes casos se ejecutan hasta encontrar un break.
*/
switch (lowercaseLetter) {
  case "a":
    console.log("A");
    break;
  case "b":
    console.log("B");
    break;
  default:
    console.log("No hay letra");
    break;
}

/* Es posible que hayas oído el término de objeto (object).
Los objetos son similares a los arrays, excepto que en lugar de usar índices para acceder y
modificar sus datos, accedes a los datos en los objetos a través de propiedades.
Por ejemplo, un objeto de gato:
*/
const cat = {
  "name": "Whiskers",
  "legs": 4,
  "tails": 1,
  "enemies": ["Water","Dogs"]
};
// En este ejemplo, todas las propiedades son strings, pero también puedes usar números.
/* Hay 2 maneras de acceder a las propiedades de un objeto. Mediante puntos (.) o mediante
corchetes ([]).
Cuando conoces el nombre de la propiedad con antelación, utilizas la notación de puntos.
*/
const myObj = {
  prop1: "val1",
  prop2: "val2"
};

const prop1val = myObj.prop1;
const prop2val = myObj.prop2;

/* Si la propiedad del objeto al que se intenta acceder tiene un espacio en el nombre, se
ha de utilizar la conotación de corchetes ([]). Aunque nada te impide usarla tmb sin los
espacios.
*/
var spaceName = myObj["Space Name"];
/* Otro uso de la notación de corchetes es acceder a una propiedad que está almacenada
como el valor de una variable. Ejemplo:
*/
const dogs = {
    Fido: "Mutt",
    Hunter: "Doberman",
    Snoopie: "Beagle"
};

const myDog = "Hunter";
const myBreed = dogs[myDog];
console.log(myBreed);
// El String Doberman se muestra por consola.

/* Después de haber creado un objeto, puedes actualizar sus propiedades en cualquier momento.
Mediante notación de puntos o de corchetes.
*/
const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.name = "Happy Camper";
ourDod.name
// Si la propiedad no está escrita, podemos escribirla mediante puntos o corchetes.

// También podemos eliminar propiedades tal como:
delete myDog.friends;

/*  Los objetos pueden ser considerados como un almacenamiento, es decir, como un diccionario.
Si tienes datos tabulares, puedes utilizar un objeto para hacer una búsqueda de valores, en
lugar de una declaración switch o una encadenación de if/elses. Esto es de utilidad cuando
se sabe que los datos de entrada están limitados a un cierto rango.
*/

/* A veces es útil comprobar si existe una propiedad o no y para ello existe el método
.hasOwnProperty(propname) para determinar si un objeto tiene la propiedad con ese nombre o no.
Devuelve un booleano si encuentra o no la propiedad.
*/
const myObj = {
  top: "hat",
  bottom: "pants"
};

myObj.hasOwnProperty("top"); // true
myObj.hasOwnProperty("middle"); // false

/* Ejercicio: Modifica la función checkObj para verificar si el obj pasado a la función contiene
la propiedad checkProp. Si la propiedad es encontrada, devuelve el valor de la propiedad. Si no,
devuelve "Not Found"
*/
function checkObj(obj,checkProp) {
  if(obj.hasOwnProperty(checkProp)){
    return obj[checkProp];
  }else{
    return "Not Found";
  }
}
// checkObj({gift:"pony", pet:"kitten", bed:"sleigh"},"gift");
// Esto devuelve el string "pony".

/* A veces, es posible que se necesite almacenar datos en una estructura de datos flexible. Un
objeto de JS es una forma de manejar datos flexibles. Permiten combinaciones arbitrarias de
cadenas, números, booleanos, arrays, funciones y objetos.
Por ejemplo:
*/
const ourMusic = [
  {
    "artist": "Daft Punk",
    "title": "Homework",
    "release_year": 1997,
    "formats":[
      "CD",
      "Cassette",
      "LP"
    ],
    "gold": true
  }
];
/* Esto es un arreglo que contiene un objeto en su interior. El objeto tiene varias piezas de
metadatos sobre un álbum. Tambien tiene un arreglo anidado de formats. Si se quiere añadir
más registros de álbumes, se puede hacer añadiendo registros a la parte superior del array.
Los objetos almacenan datos en una propiedad, con formato clave-error. En este ejemplo,
"artist": "Daft Punk" es una propiedad que tiene como clave artist y su valor es Daft Punk.
JavaScript Object Notation (JSON) es un formato de intercambio de datos relacionado, utilizado
para almacenar información.
NOTA: Se debe colocar una coma después de cada objeto en el arreglo, a menos que sea el último.
*/

/* Se puede acceder a las sub propiedades de objetos encadenando la notación de puntos o corchetes.
Por ejemplo:
  ourMusic.formats.CD;
*/
const ourStorage = {
  "desk":{
    "drawer": "stapler"
  },
  "cabinet": {
    "top drawer":{
      "folder1": "a file",
      "folder2": "secrets"
    },
    "bottom drawer": "soda"
  }
};

ourStorage.cabinet["top drawer"].folder2;
ourStorage.desk.drawer;

/* Los objetos pueden contener tantos objetos anidados como así también arreglos anidados. De manera
similar a como se accede a los objetos anidados, la notación de corchetes de arreglos puede ser
encadenada para acceder a arreglos anidados.
Del ejemplo expuesto en fCC:
  ourPets[0].names[1]; // Sería el string Fluffy ya que está en el primer objeto y el segundo en names.
  ourPets[1].names[0]; // Es el string Spot, al estar en el segundo objeto y segundo en names.
*/

/*
Se te da un objeto que representa una parte de tu colección de álbumes musicales. Cada álbum tiene un
número id único como clave y otras propiedades. Empiezas con una función updateRecords la cual toma un
objeto (records) que contiene el álbum musical de la colección, un id, prop (como artist o tracks) y un
valor value.
Completa la función usando las siguientes reglas:
  - La función debe devolver siempre el objeto de colección de registros completo.
  - Si prop no es "tracks" y value no es una cadena vacía, actualiza o establece la propiedad prop del
  album a value.
  - Si prop es "tracks" pero el album no tiene una propiedad "tracks", crea un array vacío y agrégale
  value a él.
  - Si prop es "tracks" y value no es una cadena vacía, agrega value al final del array de tracks.
  - Si value es una cadena vacía, elimina esa propiedad prop del álbum.
*/

// Configuración
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Cambia solo el código debajo de esta línea
function updateRecords(records, id, prop, value) {
  if(prop != 'tracks' && value != ""){
    records[id][prop] = value;
  }else if(prop === 'tracks' && records[id].hasOwnProperty('tracks') == false){
    records[id][prop] = [value];
  }else if(prop === 'tracks' && value != ""){
    records[id][prop].push(value);
  }else if(value === ""){
    delete records[id][prop];
  }
  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');

/*
- updateRecords(recordCollection, 5439, "artist", "ABBA"), artist debe ser la cadena ABBA.
- updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"), tracks debe tener la cadena
 Take a Chance on Me como último elemento.
- updateRecords(recordCollection, 2548, "artist", ""), artist no se debe establecido.
- updateRecords(recordCollection, 1245, "tracks", "Addicted to Love"), tracks debe tener la cadena
 Addicted to Love como último elemento.
- updateRecords(recordCollection, 2468, "tracks", "Free"), tracks debe tener la cadena
 1999 como el primer elemento.
- updateRecords(recordCollection, 2548, "tracks", ""), tracks no se debe establecido.
- updateRecords(recordCollection, 1245, "albumTitle", "Riptide"), albumTitle debe ser
la cadena Riptide.
*/

/*
    BUCLES
Podemos ejecutar el mismo código múltiples veces usando un bucle.
El primer tipo de bucle que aprenderemos se llama bucle while (ejecuta una condición específica mientras
que esta sea verdadera y deteniendose cuando deja de serlo.)
*/
const ourArray = [];
let i = 0;

while(i < 5){
  ourArray.push(i);
  i++;
}
// En este ejemplo, el bucle se ejecuta 5 veces y añade los números del 0 al 4 en ourArray

/*
Como hemos visto antes, se puede ejecutar el mismo código múltiples veces usando un bucle. El bucle más
común de JS es el bucle for (que se ejecuta por un número espífico de veces).

for(a; b; c) a es la sentencia de inicialización. b es la sentencia condicional. c es la expresión final.
La sentencia de inicialización se ejecuta 1 sola vez antes de que comience el bucle.
La sentencia condicional es evaluada al principio de cada iteración del bucle y continuará siempre y cuando sea true. Cuando sea False
dejará de ejecutarse.
La expresión final se ejecuta al final de cada iteración del bucle, antes de la siguiente comprobación de condición y se utiliza
normalmente para incrementar o disminuir tu contador del bucle.
*/
const ourArray = [];

for (let i = 0; i < 5; i++) {
  ourArray.push(i);
}
// El valor de ourArray tiene el valor [0,1,2,3,4]


// Los bucles for no tienen porqué iterar de uno en uno a la vez. Al cambiar la expresión final, podemos contar con números pares o impares.
for(let i = 0; i < 10; i += 2){
  ourArray.push(i);
}
// El array ahora contiene [0,2,4,6,8]

/* También se puede contar hacia atrás, definiendo las condiciones adecuadas.
  (i > 0; i -= 2)
*/

/*
Algo común en JS es iterar a través del contenido de un arreglo. Una manera de hacerlo es con el bucle for. Este código muestra cada elemento
del array arr en la consola.
Recordar que los array tienen una indexación basada en cero, lo que significa que el último índice del array es igual a su longitud - 1
(length - 1). El siguiente bucle se detiene cuando i es igual a length. En este caso, la última iteración es i === 4, es decir, cuando i se
convierte en igual a arr.length - 1 y resultados 6 a la consola. Entonces i aumenta a 5 y el bucle termina i < arr.length es false.
*/
const arr = [10,9,8,7,6];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

/*
Si tienes un array multidimensional, puedes utilizar la misma lógica que aprendimos anteriormente para recorrer tanto el array como cualquier
sub-array.
El ejemplo siguiente imprime cada sub-elemento dentro de arr uno a la vez.
Para el bucle interior comprobamos el .length de arr[i], ya que arr[i] es en sí mismo un array.
*/
const arr = [
  [1,2],[3,4],[5,6]
];

for(let i = 0; i < arr.length; i++){
  for(let j = 0; j < arr[i].length; j++){
    console.log(arr[i][j]);
  }
}

/*
El siguiente bucle es do...while. Primero hace una pasada por el código sin importar el bucle y luego lo continua ejecutando mientras la
condición sea true.
*/
const ourArray = [];
let i = 0;

do {
  ourArray.push(i);
  i++;
} while (i < 5);

/*
La recursión es el concepto de que una función puede expresarse en términos de sí misma. Para ayudar a comprender esto, comenzamos pensando
en la siguiente tarea:
multiplica los primeros n elementos de un array para crear el producto de esos elementos. Usando un bucle for podemos hacer:
  function multiply(arr, n) {
    let product = 1;
    for (let i = 0; i < n; i++) {
      product *= arr[i];
    }
    return product;
  }

Sin embargo, podemos observar que: multiply(arr,n) == multiply(arr,n-1) * arr[n-1].
Por lo que podemos reescribir el código de manera que nunca necesitemos hacer uso del bucle reescribiendo la función multiply en términos
de sí misma.
*/
function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
  }

/*
La versión recursiva de multiply se desglosa tal que:
  ·En el caso base, donde n sea menor o igual a 0 (n <= 0), devuelva 1 (return 1)
  ·Para valores más grandes que n, llama a multiply pero con un valor de n - 1. Llamando de nuevo a la función hasta que n <= 0.
Las funciones recursivas deben tener un caso base cuando devuelven sin tener que llamar a la función de nuevo (en este caso n <= 0), de lo
contrario nunca podrán terminar de ejecutarse.
 */

/*
Tenemos un array de objetos que representan a diferentes personas listadas. Una función lookUpProfile que recibe un nombre y propiedad como
argumentos, debe verificar si el nombre es el firstName y la propiedad es una propiedad de ese contacto. Si ambos son verdaderos, devuelve
el valor de esa propiedad. Si alguno no corresponde: No such "".
*/
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  for (let i = 0; i < contacts.length; i++){
    if(contacts[i].firstName === name){
      if(contacts[i].hasOwnProperty(prop)){
        return contacts[i][prop];
      }
      return "No such property";
    }

  }
  return "No such contact";
}

/*
Los números aleatorios son útiles para crear comportamientos aleatorios.
JS tiene una función Math.random() que genera un número decimal entre 0 y 1(exclusivo).
La función puede devolver un 0 pero nunca un 1.
Es mejor si usamos mejor números enteros en vez de números decimales.
  · Generamos un decimal con Math.random()
  · Multiplicamos por 20 ese valor
  · Utilizamos la función Math.floor() para redondear el número hacia abajo a su número entero más cercano.
  Por ello, el número está entre 0 y 19.

Podemos generar un número entero aleatorio en vez de entre 0 y un número cualquiera, entre un valor min y max.
Tal que:
  Math.floor(Math.random() * (max - min + 1)) + min

Otra función en JS es parseInt().
Analiza la cadena y devulve un entero. Si el primer carácter del string no se puede convertir a número, entonces es NaN.
  const a = parseInt("007");

La función parseInt analiza una cadena y devuelve un entero. Al recibir un segundo argumento, especifica en la base en la que se encuentra el
número (decimal, binario, etc). Valor entre [2,36]
*/

/*
El operador condicional o ternario, puede utilizarse como una expresión if-else de una sola línea.
La sintáxis es
  a ? b : c [a(condicion),b(código true),c(código false)]
*/
function findGreater(a, b) {
  if(a > b) {
    return "a is greater";
  }
  else {
    return "b is greater or equal";
  }
}
// Sería entonces:
function findGreater(a, b) {
  return a > b ? "a is greater" : "b is greater or equal";
}

/*
Se pueden utilizar múltiples operadores condicionales:
function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal"
    : (a > b) ? "a is greater"
    : "b is greater";
}
*/


// Utilizando la recursión:
function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
console.log(countup(5));
// El valor [1,2,3,4,5] se mostrará en consola.

function countdown(n){
  if(n < 1){
    return [];
  }else{
    const arr = countdown(n - 1);
    arr.unshift(n);
    return arr;
  }
}
console.log(countdown(3));
/* El valor [3,2,1] se mostrará por consola.
   Tambíen vale
function countdown(n){
   return n < 1 ? [] : [n].concat(countdown(n - 1));
}
*/

/*
Hemos definido una función llamada rangeOfNumbers con dos parámetros. La función debe devolver un arreglo de enteros que comienza con
el número representado por el parámetro startNum y termina con el número representado por el parámetro endNum. El número inicial será
siempre menor o igual que el número final. Tu función debe utilizar recursión, llamándose a sí misma, y no utilizar bucles de ningún tipo.
También debe funcionar en el caso que startNum y endNum sean iguales.
*/
function rangeOfNumbers(startNum, endNum) {
  if(endNum - startNum === 0){
    return [startNum];
  }else{
    let arr = rangeOfNumbers(startNum, endNum - 1);
    arr.push(endNum);
    return arr;
  }
};
