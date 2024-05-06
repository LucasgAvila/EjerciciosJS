/*
24. Encontrar palabras que empiecen por "a"

Escribir una función llamada empiezanConA que reciba un arreglo de strings y retorne un nuevo arreglo con todas las palabras que empiecen por "a" (mayúscula o minúscula).
*/

function empiezaConA(arr){
    let cadena = [];
    for(let i = 0; i < arr.length; i++){
      if(arr[i].startsWith('a') || arr[i].startsWith('A')){
        cadena.push(arr[i]);
      }
    }
    return cadena;
  }
  
  // código de prueba
  console.log(empiezaConA(["beta", "alfa", "Arbol", "gama"])) // ["alfa", "Arbol"]
  console.log(empiezaConA(["beta", "delta", "gama", "Adela"])) // []
  console.log(empiezaConA([])) // []