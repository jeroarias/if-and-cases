
  let producto = prompt("INGRESA EL PRODUCTO");

  switch (producto) {
    case "crema":
      console.log("PAGA IVA");
      break;
    case "vino":
      console.log("PAGA IVA");
      break;
    case "arroz":
      console.log("NO PAGA IVA");
      break;
    case "lentejas":
      console.log("PAGA IVA");
      break;
    default:
      console.log("PORFAVOR INGRESE UN PRODUCTO VALIDO");
      break;
  }