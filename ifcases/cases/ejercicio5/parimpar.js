
    let numero1 = parseInt(prompt("INGRSE UN NUMERO"));
    let numero2 = numero1 % 2 == 0;

    switch (numero2) {
        case true:
            console.log("EL NUMERO ES PAR");
            break;
        case false:
            console.log("EL NUMERO ES IMPAR");
            break;

        default:
            break;
    }