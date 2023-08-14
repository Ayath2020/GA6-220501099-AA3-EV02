QUnit.test("Obtener edad - Fecha de nacimiento válida", function(assert) {
  var fechaNacimiento = "1990-01-01";
  var edad = obtenerEdad(fechaNacimiento);
  assert.equal(edad, 33, "La edad calculada es correcta");
});

QUnit.test("Obtener edad - Cumpleaños aún no alcanzado en el año actual", function(assert) {
  var fechaNacimiento = "2000-12-25";
  var edad = obtenerEdad(fechaNacimiento);
  assert.equal(edad, 22, "La edad calculada es correcta");
});

QUnit.test("Obtener edad - Fecha de nacimiento en el futuro", function(assert) {
  var fechaNacimiento = "2025-05-10";
  var edad = obtenerEdad(fechaNacimiento);
  assert.equal(edad, -2, "La edad calculada es correcta");
});

QUnit.test("Obtener edad - Mismo mes y día pero diferente año", function(assert) {
  var fechaNacimiento = "1995-06-19";
  var edad = obtenerEdad(fechaNacimiento);
  assert.equal(edad, 28, "La edad calculada es correcta");
});

QUnit.test("Obtener edad - Mismo año pero diferente mes y día", function(assert) {
  var fechaNacimiento = "1992-12-31";
  var edad = obtenerEdad(fechaNacimiento);
  assert.equal(edad, 30, "La edad calculada es correcta");
});
