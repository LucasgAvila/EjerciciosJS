/*
30. Número de asteriscos en una matriz
Escribir una función llamada numAsteriscos que reciba una matriz (un arreglo de arreglos) y retorne el número de asteriscos:
*/

function numAsteriscos(arr){
    let contador = 0;
   for(let i = 0; i < arr.length; i++){
     for(let j = 0; j < arr[i].length; j++){
       if(arr[i][j] === '*'){
         contador++
       }
     }
   }
   return contador;
 }
 
 // código de prueba
 console.log(numAsteriscos([
   ['*', '', '*'],
   ['', '*', ''],
   ['*', '', '*']
 ]))