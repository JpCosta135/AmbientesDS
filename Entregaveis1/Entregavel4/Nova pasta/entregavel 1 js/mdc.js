function calcularMDC(primeiroNumero, segundoNumero) {
  if (!Number.isInteger(primeiroNumero) || !Number.isInteger(segundoNumero)) {
    throw new Error("Os valores devem ser números inteiros.");
  }

  let a = Math.abs(primeiroNumero);
  let b = Math.abs(segundoNumero);

  while (b !== 0) {
    const resto = a % b;
    a = b;
    b = resto;
  }

  return a;
}

if (typeof window !== "undefined") {
  const primeiroNumero = parseInt(prompt("Digite o primeiro número:"), 10);
  const segundoNumero = parseInt(prompt("Digite o segundo número:"), 10);
  const resultado = calcularMDC(primeiroNumero, segundoNumero);

  document.write(
    "O máximo divisor comum de " +
      primeiroNumero +
      " e " +
      segundoNumero +
      " é: " +
      resultado
  );
}

module.exports = calcularMDC;

 