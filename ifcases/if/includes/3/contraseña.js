
    let contraseña = prompt("INGRSE SU CONTRASEÑA:");
    if (contraseña.length >= 8 && contraseña.length <= 15 && contraseña.includes(" ")) {
        alert("SU CONTRASEÑA ES VALIDA")
    } else {
        alert("SU CONTRASEÑA NO ES VALIDA")
    }