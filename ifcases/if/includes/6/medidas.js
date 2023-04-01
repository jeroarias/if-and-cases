    
    let longitud = parseFloat(prompt("INGRESA LA MEDIA"))
    let original = prompt("INGRSE LA UNIDAD MEDIA DE LONGITUD")
    let destino = prompt("INGRSE LA UNIDAD DE MEDIA DE DESTINO")
    switch (destino) {
        case "mm":
            resultado = longitud / 1000;
            console.log("su nueva medida es", resultado, "mm")
            break;
        case "cm":
            resultado = longitud / 100;
            console.log("su nueva medida es", resultado, "cm")
            break;
        case "m":
            resultado = longitud / 10;
            console.log("su nueva medida es", resultado, "m")
            break;
        case "km":
            resultado = longitud / 1000;
            console.log("su nueva medida es", resultado, "km")
            break;
        default:
            console.log('Unidad de medida de origen inválida');
            break;
    }
    switch (original) {
        case "mm":
            resultado = longitud * 1000;
            console.log("su nueva medida es", resultado, "mm")
            break;
        case "cm":
            resultado = longitud * 100;
            console.log("su nueva medida es", resultado, "cm")
            break;
        case "m":
            resultado = longitud * 10;
            console.log("su nueva medida es", resultado, "m")
            break;
        case "km":
            resultado = longitud * 1000;
            console.log("su nueva medida es", resultado, "km")
            break;
        default:
            console.log('Unidad de medida de origen inválida');
            break;
    }