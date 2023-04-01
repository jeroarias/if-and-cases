
    let numero1 = parseInt(prompt("DEME EL PRIMER NUMERO"));
    let numero2 = parseInt(prompt("DEME EL SEGUNDO NUMERO"));
    switch (true) {
        case numero1 > numero2:
            console.log(numero1, "ES MAYOR QUE", numero2);

            break;
        case numero2 > numero1:
            console.log(numero2, "ES MAYOR QUE", numero1)

            break;

        default:
            console.log("SUS NUMERO SON IGUALES");

            break;
    }