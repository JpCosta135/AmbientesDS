const gerarFibonacci = require("./fibonacci");

test("gera fibonacci com 1 termo", () => {
  expect(gerarFibonacci(1)).toEqual([0]);
});

test("gera fibonacci com 6 termos", () => {
  expect(gerarFibonacci(6)).toEqual([0, 1, 1, 2, 3, 5]);
});

test("retorna lista vazia para 0 termos", () => {
  expect(gerarFibonacci(0)).toEqual([]);
});

test("lança erro para quantidade negativa", () => {
  expect(() => gerarFibonacci(-1)).toThrow("A quantidade de termos não pode ser negativa.");
});

test("lança erro para quantidade decimal", () => {
  expect(() => gerarFibonacci(2.5)).toThrow("A quantidade de termos deve ser um número inteiro.");
});
