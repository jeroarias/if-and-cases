
    let numero1 = parseInt(prompt("INGRSE UN NUMERO MENOR A 16"))
    let numero2 = numero1 / numero1 == 0
    switch (numero2) {
        case true:
            console.log("SU NUMERO ES PRIMO")
            break;
        case false:
            console.log("SU NUMERO NO ES PRIMO")
            break;

        default:
            numero1 > 15
            console.log("SU NUMERO SE PASA DEL LIMITE")

            break;
    }