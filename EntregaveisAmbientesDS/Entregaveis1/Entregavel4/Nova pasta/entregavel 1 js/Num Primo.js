let numero = parseInt(prompt("Digite um número para verificar se é primo:"));

if (ehPrimo(numero)) {
  document.write(numero + " é um número primo.");
} else {
  document.write(numero + " não é um número primo.");
}

function ehPrimo(n) {
  if (n <= 1) return false;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}
