<script>
let num1 = parseInt(prompt("Digite o primeiro número:"));
let num2 = parseInt(prompt("Digite o segundo número:"));
let resultado = mdc(num1, num2);
document.write("O máximo divisor comum de " + num1 + " e " + num2 + " é: " + resultado);  

function mdc(a, b) {
  while (b !== 0) {
    let resto = a % b;
    a = b;
    b = resto;
  }
  return a;
}
</script>
