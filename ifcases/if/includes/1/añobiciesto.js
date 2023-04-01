    
    let año = parseInt(prompt("INGRSE EL AÑO"));
    if (año % 4 == 0 && año % 100 != 0 || año % 400 == 0) {
        alert("EL AÑO ES BICIESTO");
    } else {
        alert("EL AÑO NO ES BICIESTO");
    }