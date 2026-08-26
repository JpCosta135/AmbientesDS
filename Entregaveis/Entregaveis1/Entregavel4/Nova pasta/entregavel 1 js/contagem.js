function validarListaDeNotas(notas) {
  if (!Array.isArray(notas)) {
    throw new Error("A entrada deve ser uma lista de notas.");
  }

  for (const nota of notas) {
    if (typeof nota !== "number" || Number.isNaN(nota)) {
      throw new Error("Todas as notas devem ser números válidos.");
    }

    if (nota < 0 || nota > 10) {
      throw new Error("As notas devem estar entre 0 e 10.");
    }
  }
}

function contarAprovacoes(notas) {
  validarListaDeNotas(notas);
  return notas.filter((nota) => nota >= 7).length;
}

if (typeof window !== "undefined") {
  const quantidade = parseInt(prompt("Número de notas:"), 10);
  const notas = [];

  for (let i = 0; i < quantidade; i++) {
    const nota = Number(prompt("Nota do aluno:"));
    notas.push(nota);
  }

  document.write("Número de aprovações: " + contarAprovacoes(notas));
}

module.exports = contarAprovacoes;
