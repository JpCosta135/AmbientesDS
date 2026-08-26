function verificarNumeroPrimo(numero) {
  if (!Number.isInteger(numero)) {
    throw new Error("O número deve ser inteiro.");
  }

  if (numero <= 1) {
    return false;
  }

  for (let divisor = 2; divisor <= Math.sqrt(numero); divisor++) {
    if (numero % divisor === 0) {
      return false;
    }
  }

  return true;
}

if (typeof window !== "undefined") {
  const numero = parseInt(prompt("Digite um número para verificar se é primo:"), 10);

  if (verificarNumeroPrimo(numero)) {
    document.write(numero + " é um número primo.");
  } else {
    document.write(numero + " não é um número primo.");
  }
}

module.exports = verificarNumeroPrimo;
