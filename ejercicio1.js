/*
1. Contraseña válida
Escribir una función llamada contrasenaValida que reciba un string y retorne true si el string es igual a "2Fj(jjbFsuj" o "eoZiugBf&g9". De lo contrario debe retornar false.
 */

function contrasenaValida(str){
    return str === "2Fj(jjbFsuj" || str === "eoZiugBf&g9" ? "Este texto es: " + true : "Este texto es: " + false;
  }
   
  // código de prueba
  console.log(contrasenaValida("2Fj(")) // true
   console.log(contrasenaValida("2 wegwwq3ggswgwgwj")) 
  console.log(contrasenaValida("2Fj(jjbFsuj")) // true
  console.log(contrasenaValida("eoZiugBf&g9")) // true
  console.log(contrasenaValida("hola")) // false
  console.log(contrasenaValida("")) // false

  //Con arrow function
  const contrasenaValida = (str) =>
  str === "2Fj(jjbFsuj" || str === "eoZiugBf&g9" ? "Este texto es: " + true
  : "Este texto es: " + false;
