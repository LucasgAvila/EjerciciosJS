/*
25. Encontrar palabras que terminan en "s"
Escribir una función llamada terminanConS que reciba un arreglo de strings y retorne un nuevo arreglo con todas las palabras que terminan con "s" (mayúscula o minúscula).
*/

function terminaConS(arr){
    let cadena = [];
    for(let i = 0; i < arr.length; i++){
      if(arr[i].endsWith('s') || arr[i].endsWith('S')){
        cadena.push(arr[i]);
      }
    }
    return cadena;
  }
  
// código de prueba
console.log(terminanConS(["pruebas", "arroz", "árbol", "tokens"])) // ["pruebas", "tokens"]
console.log(terminanConS(["beta", "delta", "gama"])) // []
console.log(terminanConS([])) // []