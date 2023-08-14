function verificarMultiplo() {
  var numero1 = parseInt(document.getElementById("numero1").value);
  var numero2 = parseInt(document.getElementById("numero2").value);
  var resultado = document.getElementById("resultado");

  if (esMultiplo(numero1, numero2)) {
    resultado.textContent = "El número " + numero1 + " es múltiplo de " + numero2 + ".";
  } else {
    resultado.textContent = "El número " + numero1 + " no es múltiplo de " + numero2 + ".";
  }
}
