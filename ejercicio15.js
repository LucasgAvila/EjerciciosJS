/*
Escribir una función llamada transcribir que reciba un string (una cadena de ADN) y retorne otro string (su complemento ARN).

Los complementos son los siguientes:

G -> C
C -> G
T -> A
A -> U
*/

function transcribir(str){
    cadena = '';
    for(let i = 0; i < str.length; i++){
        switch (str[i]) {
            case "G":
                cadena += "C";
                break;
            case "C":
                cadena += "G"
                break;
            case "T":
                cadena += "A"
                break;
            case "A":
                cadena += "U"
                break;
        }
    }
    return cadena;
}



// código de prueba
console.log(transcribir("ACGT")) // "UGCA"
console.log(transcribir("ACGTGGTCTTAA")) // "UGCACCAGAAUU"
