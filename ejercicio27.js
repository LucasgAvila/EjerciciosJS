/*
Escribir una función llamada numerosAPalabras que reciba un arreglo de números (cada número en el rango de 0 a 0) y retorne un nuevo arreglo convirtiendo cada número a su versión en palabras
*/

function numerosAPalabras(arr){
    const digitos = {
        0: 'cero',
        1: 'uno',
        2: 'dos',
        3: 'tres',
        4: 'cuatro',
        5: 'cinco',
        6: 'seis',
        7: 'siete',
        8: 'ocho',
        9: 'nueve'
    };
  let cadena = [];
  
  for(let i = 0; arr.length; i++){
    let num = arr[i];
    if(num >= 0 && num <= 9){
      cadena.push(digitos[num])
    }
  }
  return cadena;
}

// código de prueba
console.log(numerosAPalabras([0, 1, 2, 3, 4])) // ["cero", "uno", "dos", "tres", "cuatro"]
console.log(numerosAPalabras([5, 6, 7, 8, 9])) // ["cinco", "seis", "siete", "ocho", "nueve"]


function numeroAPalabras(arr){
  let cadena = [];
  for(let i = 0; i < arr.length; i++){
    switch(arr[i]){
      case 0:
      cadena.push("cero")
      break;
      case 1:
      cadena.push("uno")
      break;
        case 2:
      cadena.push("dos")
      break;
        case 3:
      cadena.push("tres")
      break;
        case 4:
      cadena.push("cuatro")
      break;
        case 5:
      cadena.push("cinco")
      break;
        case 6:
      cadena.push("seis")
      break;
        case 7:
      cadena.push("siete")
      break;
        case 8:
      cadena.push("ocho")
      break;
      case 9:
      cadena.push("nueve")
      break;
    }
  }
    return cadena;
}

console.log(numeroAPalabras([0, 1, 2, 3, 4])) // ["cero", "uno", "dos", "tres", "cuatro"]
console.log(numeroAPalabras([5, 6, 7, 8, 9])) // ["cinco", "seis", "siete", "ocho", "nueve"]
