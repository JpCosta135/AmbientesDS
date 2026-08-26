const contarAprovacoes = require("./contagem");

test("conta notas aprovadas", () => {
  expect(contarAprovacoes([5, 7, 8, 10])).toBe(3);
});

test("não conta notas abaixo de 7", () => {
  expect(contarAprovacoes([1, 2, 6.9])).toBe(0);
});

test("lança erro para nota menor que 0", () => {
  expect(() => contarAprovacoes([-1, 7])).toThrow("As notas devem estar entre 0 e 10.");
});

test("lança erro para nota maior que 10", () => {
  expect(() => contarAprovacoes([7, 11])).toThrow("As notas devem estar entre 0 e 10.");
});
