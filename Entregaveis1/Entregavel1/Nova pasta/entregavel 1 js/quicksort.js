<script>
let numeros = prompt("Digite uma lista de números separados por vírgula:").split(",").map(Number);

function quicksort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let pivo = arr[arr.length - 1];  
  let esquerda = [];
  let direita = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivo) {
      esquerda.push(arr[i]);
    } else {
      direita.push(arr[i]);
    }
  }

  return [...quicksort(esquerda), pivo, ...quicksort(direita)];
}

let numeros = [10, 7, 8, 9, 1, 5];
document.write(quicksort(numeros)); 
</script>
