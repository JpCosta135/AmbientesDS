function validarListaDeNumeros(numeros) {
  if (!Array.isArray(numeros)) {
    throw new Error("A entrada deve ser uma lista de números.");
  }

  for (const numero of numeros) {
    if (typeof numero !== "number" || Number.isNaN(numero)) {
      throw new Error("Todos os valores devem ser números válidos.");
    }
  }
}

function ordenarComQuickSort(numeros) {
  validarListaDeNumeros(numeros);

  if (numeros.length <= 1) {
    return [...numeros];
  }

  const pivo = numeros[numeros.length - 1];
  const menores = [];
  const maioresOuIguais = [];

  for (let i = 0; i < numeros.length - 1; i++) {
    if (numeros[i] < pivo) {
      menores.push(numeros[i]);
    } else {
      maioresOuIguais.push(numeros[i]);
    }
  }

  return [
    ...ordenarComQuickSort(menores),
    pivo,
    ...ordenarComQuickSort(maioresOuIguais),
  ];
}

if (typeof window !== "undefined") {
  const numeros = prompt("Digite uma lista de números separados por vírgula:")
    .split(",")
    .map(Number);

  document.write(ordenarComQuickSort(numeros));
}

module.exports = ordenarComQuickSort;
