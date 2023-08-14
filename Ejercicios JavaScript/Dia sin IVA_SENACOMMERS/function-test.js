QUnit.test("Compra de una mujer menor de 19 años", function(assert) {
  const valorCompra = 100000;
  const fechaNacimiento = "2005-06-19";
  const genero = "F";
  
  const descuento = calcularDescuento(valorCompra, fechaNacimiento, genero);
  assert.equal(descuento, 22, "Descuento calculado correctamente");
});

QUnit.test("Compra de una mujer mayor de 19 años", function(assert) {
  const valorCompra = 100000;
  const fechaNacimiento = "1990-03-15";
  const genero = "F";
  
  const descuento = calcularDescuento(valorCompra, fechaNacimiento, genero);
  assert.equal(descuento, 24, "Descuento calculado correctamente");
});

QUnit.test("Compra de un hombre menor de 23 años y compra inferior a 200,000 pesos", function(assert) {
  const valorCompra = 150000;
  const fechaNacimiento = "2006-10-05";
  const genero = "M";
  
  const descuento = calcularDescuento(valorCompra, fechaNacimiento, genero);
  assert.equal(descuento, 19, "Descuento calculado correctamente");
});

QUnit.test("Compra de un hombre menor de 23 años y compra superior a 200,000 pesos", function(assert) {
  const valorCompra = 250000;
  const fechaNacimiento = "2000-07-22";
  const genero = "M";
  
  const descuento = calcularDescuento(valorCompra, fechaNacimiento, genero);
  assert.equal(descuento, 20.5, "Descuento calculado correctamente");
});

QUnit.test("Compra de un hombre mayor de 23 años y compra inferior a 200,000 pesos", function(assert) {
  const valorCompra = 150000;
  const fechaNacimiento = "1995-09-12";
  const genero = "M";
  
  const descuento = calcularDescuento(valorCompra, fechaNacimiento, genero);
  assert.equal(descuento, 22, "Descuento calculado correctamente");
});

QUnit.test("Compra de un hombre mayor de 23 años y compra superior a 200,000 pesos", function(assert) {
  const valorCompra = 250000;
  const fechaNacimiento = "1993-04-28";
  const genero = "M";
  
  const descuento = calcularDescuento(valorCompra, fechaNacimiento, genero);
  assert.equal(descuento, 23.5, "Descuento calculado correctamente");
});

QUnit.test("Calcular edad", function(assert) {
  const fechaNacimiento = "1990-03-15";
  const edad = calcularEdad(fechaNacimiento);
  
  assert.equal(edad, 33, "Edad calculada correctamente");
});
