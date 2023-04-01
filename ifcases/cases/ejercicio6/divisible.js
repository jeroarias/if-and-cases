
    let numero1 = parseInt(prompt("INGRSE EL NUMERO"));
    let numero2 = numero1 % 5 == 0;

    switch (numero2) {
        case true:
            console.log("SU NUMERO ES DIVISIBLE POR 5");
            break;
        case false:
            console.log("SU NUMERO NO ES DIVISIBLE POR 5");
            break;

        default:
            console.log("NO COMPRENDO");
            break;
    }