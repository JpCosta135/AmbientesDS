<script>
var n = prompt("Número de notas");
var nota;
var contagem = 0;
var i = 0;
while (i < n) {
i = i + 1;
nota = prompt("Nota do aluno:");
if (nota >= 7 && nota <= 10) {
contagem = contagem + 1;
}
}
document.write("Número de aprovações: "
+ contagem);
</script>
