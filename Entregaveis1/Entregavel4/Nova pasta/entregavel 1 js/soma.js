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

function somarNumeros(numeros) {
  validarListaDeNumeros(numeros);
  return numeros.reduce((total, numero) => total + numero, 0);
}

if (typeof window !== "undefined") {
  const quantidade = parseInt(prompt("Quantidade de números:"), 10);
  const numeros = [];

  for (let i = 0; i < quantidade; i++) {
    const numero = Number(prompt("Número:"));
    numeros.push(numero);
  }

  document.write("Soma = " + somarNumeros(numeros));
}

module.exports = somarNumeros;
