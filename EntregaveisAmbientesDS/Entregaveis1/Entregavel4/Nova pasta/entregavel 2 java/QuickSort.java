public class QuickSort {

    public static void quicksort(int[] arr, int inicio, int fim) {
        if (inicio < fim) {
            int posicaoPivo = particionar(arr, inicio, fim);
            quicksort(arr, inicio, posicaoPivo - 1);
            quicksort(arr, posicaoPivo + 1, fim);
        }
    }
    private static int particionar(int[] arr, int inicio, int fim) {
        int pivo = arr[fim];
        int i = inicio - 1;
        
        for (int j = inicio; j < fim; j++) {
            if (arr[j] < pivo) {
                i++;
                trocar(arr, i, j);
            }
        }

        trocar(arr, i + 1, fim);
        return i + 1;
    }

    private static void trocar(int[] arr, int i, int j) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}