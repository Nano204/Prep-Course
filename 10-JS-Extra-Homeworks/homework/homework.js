// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto) {
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa
  // un par clave-valor en forma de matriz.
  //Ejemplo:
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
}

function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  //Escribe tu código aquí
}

function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
}

function asAmirror(str) {
  //La función recibe una frase.
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
}

function capicua(numero) {
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número es un número que se lee igual de
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

  // 12321
  //i 0 1 2 3 4
  //  1 2 3 2 1
  //      i
  //      5 - 1 - i
  // 2 == 2 --> True ---> !True == False
  // 3 === 1 --> False ---> !False == True
  // var numeroString = numero.toString();
  // for (var i = 0; i < numeroString.length / 2; i++) {
  //   if (numeroString[i] !== numeroString[numeroString.length - 1 - i])
  //     return "No es capicua";
  // }
  // return "Es capicua";

  var numeroString = numero.toString();
  if (numeroString.split("").reverse().join("") === numeroString) {
    return "Es capicua";
  } else {
    return "No es capicua";
  }
}

function deleteAbc(cadena) {
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  // var nuevaCadena = "";
  // for (let i = 0; i < cadena.length; i++) {
  //   const element = cadena[i];
  //   if (element[i] !== "a" && element[i] !== "b" && element[i] !== "c") {
  //     cadena += element;
  //   }
  // }
  // return nuevaCadena;
}

function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  //          i   i + 1

  // ["ABCDE", "AB", "ABCD", "ABC" ]
  // store = "AB"
  // ["AB",   "ABCD", "ABC",  "ABCDE"]

  do {
    var cambios = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i].length > arr[i + 1].length) {
        var store = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = store;
        cambios = true;
      }
    }
  } while (cambios);

  return arr;
}

function buscoInterseccion(arreglo1, arreglo2) {
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  //[1,3,6,7,9]
  //[3,4,6,7,8]
  //[3,6,7]
  var nuevoArreglo = [];
  for (let i = 0; i < arreglo1.length; i++) {
    var element = arreglo1[i];
    for (let j = 0; j < arreglo2.length; j++) {
      if (element === arreglo2[j]) {
        nuevoArreglo.push(element);
      }
    }
  }
  return nuevoArreglo;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  deObjetoAmatriz,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
