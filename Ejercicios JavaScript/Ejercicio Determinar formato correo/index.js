function verificarCorreo() {
  var email = document.getElementById("email").value;
  var resultado = document.getElementById("resultado");

  if (validarCorreo(email)) {
    resultado.textContent = "El correo electrónico es válido.";
  } else {
    resultado.textContent = "El correo electrónico no cumple con el patrón establecido.";
  }
}
