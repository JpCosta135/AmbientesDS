const ordenarComQuickSort = require("./quicksort");

test("ordena números em ordem crescente", () => {
  expect(ordenarComQuickSort([10, 7, 8, 9, 1, 5])).toEqual([1, 5, 7, 8, 9, 10]);
});

test("ordena lista vazia", () => {
  expect(ordenarComQuickSort([])).toEqual([]);
});

test("ordena números repetidos", () => {
  expect(ordenarComQuickSort([3, 1, 3, 2])).toEqual([1, 2, 3, 3]);
});

test("não altera a lista original", () => {
  const numeros = [3, 1, 2];
  ordenarComQuickSort(numeros);

  expect(numeros).toEqual([3, 1, 2]);
});

test("lança erro para entrada inválida", () => {
  expect(() => ordenarComQuickSort("3,1,2")).toThrow("A entrada deve ser uma lista de números.");
});
