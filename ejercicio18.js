/*
Escribir una función llamada max que reciba un arreglo de números y retorne el número máximo:

Nota: Intentarlo hacer sin el método Math.max de JavaScript.
*/

function maxResult(array){
    let maxNum = array[0];
    for (let i = 1; i < array.length; i++) {
        if(array[i] > maxNum){
            maxNum = array[i]
        }
    } return maxNum;
}

// código de prueba
console.log(maxResult([3, 9, 6])) // 9
console.log(maxResult([67, 35, 54, 26])) // 67
console.log(maxResult([5, 9, 2, 4, 5, 7])) // 9