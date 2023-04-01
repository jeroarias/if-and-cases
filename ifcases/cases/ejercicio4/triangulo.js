let angulo1 = parseFloat(prompt("INGRESE EL PRIMER ANGULO"));
let angulo2 = parseFloat(prompt("INGRESE EL SEGUNDO ANGULO"));
let angulo3 = parseFloat(prompt("INGRESE EL TERCER ANGULO"));
let si = angulo1 + angulo2 + angulo3 == 180
switch (si) {
    case true:
        console.log("SUS ANGULOS FORMAN A UN TRIANGULO");
        break;
    case false:
        console.log("SUS ANGULOS NO FORMAN UN TIRANGULO");
        break;

    default:
        console.log("NO LOGRO ENTENDER");
        break;
}