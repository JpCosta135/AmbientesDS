const calcularMDC = require("./mdc");

test("calcula mdc de 10 e 5", () => {
  expect(calcularMDC(10, 5)).toBe(5);
});

test("calcula mdc de 12 e 8", () => {
  expect(calcularMDC(12, 8)).toBe(4);
});

test("calcula mdc com número negativo", () => {
  expect(calcularMDC(-12, 8)).toBe(4);
});

test("lança erro quando algum valor não é inteiro", () => {
  expect(() => calcularMDC(10.5, 5)).toThrow("Os valores devem ser números inteiros.");
});
