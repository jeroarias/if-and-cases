
    let menu = prompt("ESTE ES EL MENU DE HOY \n-SANCOCHO\n -BANDEJA PAISA\n -LECHONA\n -TAMAL\n ELIJE UNO:");
    switch (menu) {
        case "SANCOCHO":
            console.log("SU PLATO ESTARA EN 20 MN");
            break;
        case "BANDEJA PAISA":
            console.log("SU PLATO ESTARA EN 30 MN");
            break;
        case "LECHONA":
            console.log("sSU PLATO ESTARA EN 10 MN");
            break;
        case "TAMAL":
            console.log("SU PLATO ESTARA EN 1 HR")
            break;
        default:
            console.log("SU PLATO NO ESTA EN EL MENU")
            break;
    }