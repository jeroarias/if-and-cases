
    let lado1 = parseFloat(prompt("DEME EL PRIMER LADO DEL TRIANGULO"));
    let lado2 = parseFloat(prompt("DEME EL SEGUNDO LADO DEL TRIANGULO"));
    let lado3 = parseFloat(prompt("DEME EL TERCER LADO DEL TRIANGULO"));

    if (ladol + lado2 + lado3 == -180) {

        console.log("SI, LA SUMA CORRESPONDE A UN TRIANGULO");
    } else {
        console.log("NO, LA SUMA NO CORRESPONDE A UN TRIANGULO");
    }