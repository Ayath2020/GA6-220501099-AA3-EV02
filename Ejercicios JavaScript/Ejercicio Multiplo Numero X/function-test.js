QUnit.test("Pruebas unitarias - Verificar si el primer número es múltiplo del segundo", 
function (assert) {
  // Prueba 1: Primer número es múltiplo del segundo
  assert.ok(esMultiplo(10, 2), "10 es múltiplo de 2");
  
  // Prueba 2: Primer número no es múltiplo del segundo
  assert.notOk(esMultiplo(7, 3), "7 no es múltiplo de 3");
});
