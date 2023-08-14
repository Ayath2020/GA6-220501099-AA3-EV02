QUnit.test("Pruebas unitarias - Verificar correo electrónico", function (assert) {
  // Prueba 1: Correo electrónico válido
  assert.ok(validarCorreo("ejemplo@dominio.com"), "El correo electrónico es válido");
  
  // Prueba 2: Correo electrónico inválido
  assert.notOk(validarCorreo("correoinvalido"), "El correo electrónico no cumple con el patrón establecido");
});
