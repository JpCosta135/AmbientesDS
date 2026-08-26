const somarNumeros = require("./soma");

test("soma uma lista de números positivos", () => {
  expect(somarNumeros([1, 2, 3])).toBe(6);
});

test("soma uma lista com números negativos", () => {
  expect(somarNumeros([-1, -2, 3])).toBe(0);
});

test("lança erro quando a entrada não é uma lista", () => {
  expect(() => somarNumeros("1,2,3")).toThrow("A entrada deve ser uma lista de números.");
});

test("lança erro quando a lista contém valor inválido", () => {
  expect(() => somarNumeros([1, "a", 3])).toThrow("Todos os valores devem ser números válidos.");
});
