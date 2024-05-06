/*
Escribir una función llamada sumarRango que reciba dos argumentos: número inicial y número final. La función debe retornar la suma de los números en ese rango (incluyéndolos).

Nota: puedes asumir que el número inicial va a ser menor o igual que el número final.
*/
  
function sumarRango(num1, num2){
    let rango = num1;
     for(let i = num1 + 1; i <= num2; i++){
       rango += i
     }
     return rango;
   }
   
   // código de prueba
   console.log(sumarRango(0, 10)) // 55
   console.log(sumarRango(12, 14)) // 39
   console.log(sumarRango(5, 5)) // 0