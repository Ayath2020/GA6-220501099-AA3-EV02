function realizarCompra() {
  const valorCompra = document.getElementById("valorCompra").value;
  const fechaNacimiento = document.getElementById("fechaNacimiento").value;
  const genero = document.getElementById("genero").value;

  const descuento = calcularDescuento(valorCompra, fechaNacimiento, genero);
  const montoPretendido = parseFloat(valorCompra);
  const descuentoValor = (descuento / 100) * montoPretendido;
  const totalPagado = montoPretendido - descuentoValor;

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "Monto pretendido de compra: $" + montoPretendido.toFixed(2) + "<br>" +
      "Descuento aplicado: " + descuento.toFixed(2) + "%<br>" +
      "Descuento en valor: $" + descuentoValor.toFixed(2) + "<br>" +
      "Total pagado: $" + totalPagado.toFixed(2);
}
