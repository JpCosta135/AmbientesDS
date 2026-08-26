const verificarNumeroPrimo = require("./numPrimo");

test("2 deve ser primo", () => {
  expect(verificarNumeroPrimo(2)).toBe(true);
});

test("7 deve ser primo", () => {
  expect(verificarNumeroPrimo(7)).toBe(true);
});

test("10 não deve ser primo", () => {
  expect(verificarNumeroPrimo(10)).toBe(false);
});

test("1 não deve ser primo", () => {
  expect(verificarNumeroPrimo(1)).toBe(false);
});

test("lança erro quando o número não é inteiro", () => {
  expect(() => verificarNumeroPrimo(2.5)).toThrow("O número deve ser inteiro.");
});
