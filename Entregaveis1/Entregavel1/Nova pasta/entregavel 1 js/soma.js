<script>
var n = prompt("Quantidade de números:");
var numero;
var soma = 0;
var i = 0;
while (i < n) {
i = i + 1;
numero = parseInt(prompt("Número:"));
soma = soma + numero;
}
document.write("Soma = " + soma);
</script>
