/*
22. Encontrar posiciones de números pares
Escribir una función llamada posiciones que reciba un arreglo de números y retorne un nuevo arreglo con las posiciones donde se encuentran números pares.
*/

function posiciones(arr){
    let cadena = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 1){
        cadena.push(arr[i])
        }
  }
    return cadena;
}

// código de prueba
console.log(posiciones([1, 2, 3, 4, 5, 6])) // [1, 3, 5]
console.log(posiciones([])) // []