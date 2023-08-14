QUnit.test("Prueba de número primo", function (assert) {
  // Prueba 1: Número primo
  var numero1 = 5;
  var esPrimo1 = esNumeroPrimo(numero1);
  assert.ok(esPrimo1, numero1 + " debería ser un número primo");

  // Prueba 2: Número compuesto
  var numero2 = 12;
  var esPrimo2 = esNumeroPrimo(numero2);
  assert.notOk(esPrimo2, numero2 + " no debería ser un número primo");

  // Prueba 3: Número negativo
  var numero3 = -7;
  var esPrimo3 = esNumeroPrimo(numero3);
  assert.notOk(esPrimo3, numero3 + " no debería ser un número primo");

  // Prueba 4: Número cero
  var numero4 = 0;
  var esPrimo4 = esNumeroPrimo(numero4);
  assert.notOk(esPrimo4, numero4 + " no debería ser un número primo");

  // Prueba 5: Número uno
  var numero5 = 1;
  var esPrimo5 = esNumeroPrimo(numero5);
  assert.notOk(esPrimo5, numero5 + " no debería ser un número primo");
});
QUnit.start();
