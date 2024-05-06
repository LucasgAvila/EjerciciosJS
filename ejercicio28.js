/*
28. Traducir palabras a números
Escribir una función llamada palabrasANumeros que reciba un arreglo de strings y retorne un nuevo arreglo traduciendo cada palabra a su versión numérica (del 0 al 9). Si la palabra no es un número traducir a -1.
*/

function palabrasANumeros(arr){
    let cadena = [];
    
    for(let i = 0; i < arr.length; i++){
        switch (arr[i]) {
            case "cero":
                cadena.push(0)
                break;
            case "uno":
                cadena.push(1)
                break;
            case "dos":
                cadena.push(2)
                break;
            case "tres":
                cadena.push(3)
                break;
            case "cuatro":
                cadena.push(4);
                break;
            case "cinco":
                cadena.push(5);
                break;
            case "seis":
                cadena.push(6);
                break;
            case "siete":
                cadena.push(7);
                break;
            case "ocho":
                cadena.push(8);
                break
            case "nueve":
                cadena.push(9)
                break;
            case "what?":
                cadena.push(-1);
            break;
        }
    }
    return cadena;
}

// escribe tu función acá

// código de prueba
console.log(["cero", "uno", "dos", "tres", "what?", "cuatro"]) // [0, 1, 2, 3, -1, 4]
console.log(["cinco", "seis", "siete", "ocho", "nueve"]) // [5, 6, 7, 8, 9]