function verificarPrimo() {
  var numero = parseInt(document.getElementById("numero").value);
  var resultado = document.getElementById("resultado");

  if (!isNaN(numero)) {
    var esPrimo = esNumeroPrimo(numero); // Llama a la función esNumeroPrimo del archivo functions.js

    if (esPrimo) {
      resultado.textContent = "El número " + numero + " es primo.";
    } else {
      resultado.textContent = "El número " + numero + " no es primo.";
    }
  } else {
    resultado.textContent = "Por favor, ingrese un número válido.";
  }
}
