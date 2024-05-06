/* 
Escribir una función llamada password que reciba un string y retorne un nuevo string realizando los siguientes cambios:

Las mayúsculas se reemplazan por minúsculas.
Se eliminan los espacios en blanco.
Reemplaza el caracter “a” por “4”.
Reemplaza el caracter “e” por “3”.
Reemplaza el caracter “i” por “1”.
Reemplaza el carater “o” por “0”.
*/

function password(str){
    str = str.toLowerCase();
    
     str = str.split('a').join('4');
     str = str.split('e').join('3');
     str = str.split('i').join('1');
     str = str.split('o').join('0'); 
    
    //eliminar espacios en blanco
     str = str.split(' ').join('')
      return str;
  }
  
  // código de prueba
  console.log(password("hola")) // "h0l4"
  console.log(password("esta es una prueba")) // "3st43sun4pru3b4"
  console.log(password("")) // ""