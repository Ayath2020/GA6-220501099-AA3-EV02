function calcularDescuento(valorCompra, fechaNacimiento, genero) {
  let descuento = 19;

  // Calcula el descuento por género
  if (genero === 'F') {
      descuento += 3;
      const edad = calcularEdad(fechaNacimiento);
      if (edad > 19) {
          descuento += 2;
      }
  } else if (genero === 'M') {
      if (valorCompra > 200000) {
          descuento += 1.5;
      }
      const edad = calcularEdad(fechaNacimiento);
      if (edad > 23) {
          descuento += 3;
      }
  }

  return descuento;
}

function calcularEdad(fechaNacimiento) {
  const hoy = new Date();
  const fechaNac = new Date(fechaNacimiento);
  let edad = hoy.getFullYear() - fechaNac.getFullYear();
  const mes = hoy.getMonth() - fechaNac.getMonth();
  if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNac.getDate())) {
      edad--;
  }
  return edad;
}
