/*
Escribir una función llamada numeroDeAes que reciba un string y retorne el número de veces que aparece la letra "a":
*/

function numeroDeAes(str){
    let cadena = str.split('');
    let texto = 0;
    for(let i = 0; i < cadena.length; i++){
      if(cadena[i] === 'a'){
        texto++
      }
    }
    return texto;
  }
  
  // código de prueba
  console.log(numeroDeAes("abracadabra")) // 5
  console.log(numeroDeAes("etinol")) // 0
  console.log(numeroDeAes("")) // 0