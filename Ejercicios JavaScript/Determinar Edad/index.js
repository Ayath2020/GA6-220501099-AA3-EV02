function calcularEdad() {
  var fechaNacimiento = document.getElementById("fechaNacimiento").value;
  var edad = obtenerEdad(fechaNacimiento);
  document.getElementById("resultado").innerText = "Edad: " + edad;
}
