/*
26. Imprimir una matriz
Escribir una función llamada imprimirMatriz que reciba una matriz (un arreglo de arreglos) e imprima todos los elementos del arreglo.
*/

function imprimirMatriz(arr){
    let resultado = '';
      for (let i = 0; i < arr.length; i++) {
        resultado += arr[i].join('\n') + '\n';
      }
      return resultado;
    }
    
// código de prueba

console.log(imprimirMatriz([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]))
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9