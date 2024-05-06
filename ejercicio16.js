/*
Escribir una función llamada capitalizar que reciba un string y capitalice la primera letra:
*/

function capitalizar(str){
    let cadena = str.charAt(0).toUpperCase();
    for(let i = 1; i < str.length; i++){ //arranco desde el segundo elemento del texto porque solo se va poner en may el 0
        cadena += str.charAt(i);
    }
    return cadena;
}

// código de prueba
console.log(capitalizar("pedro")) // "Pedro"
console.log(capitalizar("hola mundo")) // "Hola mundo"
console.log(capitalizar("")) // ""
