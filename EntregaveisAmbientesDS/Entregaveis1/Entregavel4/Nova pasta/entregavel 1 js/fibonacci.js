function gerarFibonacci(quantidadeTermos) {
  if (!Number.isInteger(quantidadeTermos)) {
    throw new Error("A quantidade de termos deve ser um número inteiro.");
  }

  if (quantidadeTermos < 0) {
    throw new Error("A quantidade de termos não pode ser negativa.");
  }

  const sequencia = [];

  if (quantidadeTermos === 0) {
    return sequencia;
  }

  sequencia.push(0);

  if (quantidadeTermos === 1) {
    return sequencia;
  }

  sequencia.push(1);

  for (let i = 2; i < quantidadeTermos; i++) {
    sequencia.push(sequencia[i - 1] + sequencia[i - 2]);
  }

  return sequencia;
}

if (typeof window !== "undefined") {
  const quantidadeTermos = parseInt(prompt("Número de termos:"), 10);
  document.write(gerarFibonacci(quantidadeTermos).join(", "));
}

module.exports = gerarFibonacci;
