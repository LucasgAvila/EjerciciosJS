/*
  5. Número de Likes
Escribe una función llamada likes que reciba un número y retorne un string utilizando el formato de K para miles y M para millones.

Por ejemplo:

1400 se convierte en 1K
34,567 se convierte en 34K
7’456,345 se convierte en 7M.
Si el número es menor a 1000 se debe devolver el mismo número como un string.
*/

function likes (num) {
    /*let division = num / 1000;
   console.log("division: ", division);
     let redondeo = Math.floor(division);
   console.log("redondeo:" ,redondeo);
     let numToString = redondeo.toString();
   console.log("numToString: " , numToString);
     let resultado = numToString + "K"
    console.log("resultado: " ,resultado);
   */
   let final = (Math.floor(num / 10000 * 10)).toString() + "Ks";
   let finalK = (Math.floor(num / 1000)).toString() + "K";
   let finalM = (Math.floor(num / 1000000)).toString() + "M";
   
   if(num >= 1000 && num <= 99999){
     return console.log('El usuario tiene: ' + finalK + ' seguidores.')
   }
   else if(num > 100000 && num < 999999) {
     return console.log('El usuario tiene: ' + final + ' segdores.')
   }
   else if(num >= 1000000){
     return console.log('El usuario tiene: ' + finalM + ' de seguidores.')
   }else {
     console.log('El usuario tiene ' + num + ' seguidores')
   }
  }
 
 // código de prueba
 console.log(likes(983)) // "983"
 console.log(likes(98)) // "983"
 console.log(likes(1900)) // "1K"
 console.log(likes(54000)) // "54K"
 console.log(likes(120800)) // "120K"
 console.log(likes(151820)) // "120K"
 console.log(likes(25222444)) // "25M"
 console.log(likes(49222444)) // "25M"
 /*
 
 
 console.log(likes(54000)) // "54K"
 console.log(likes(983)) // "983"
 console.log(likes(120800)) // "120K"
 console.log(likes(25222444)) // "25M"
 */


 /*
 function likes(num){
  if(num < 1000){
    return 'El usuario tiene ' + num + ' seguidores.';
  }else if(num >= 1000 && num <= 99999){
    let formato = Math.floor(num / 1000) + 'K'
    return 'El usuario tiene ' + formato + ' seguidores'; 
  }else if (num >= 10000 && num <= 999999){
    let formato = Math.floor(num / 10000) + 'Ks'
    return 'El usuario tiene ' + formato + ' seguidores'; 
  }else if(num >= 1000000){
    let formato = Math.floor(num / 100000) + 'M'
    return 'El usuario tiene ' + formato + ' seguidores'; 
  } else {
    return 'El usuario tiene ' + num + ' seguidores.';
  }
}
 */