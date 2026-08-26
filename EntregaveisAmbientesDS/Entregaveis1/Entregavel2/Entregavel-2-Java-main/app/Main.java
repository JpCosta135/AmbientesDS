import java.awt.BorderLayout;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.SwingConstants;
public class Main {
    public static void main(String[] args) {
        System.out.println("Main iniciou");

        JFrame janela = new JFrame("Teste CheerpJ");
        janela.setSize(500, 300);
        janela.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        JLabel texto = new JLabel("FUNCIONOU: Java com interface gráfica", SwingConstants.CENTER);

        JButton botao = new JButton("Clique aqui");
        botao.addActionListener(e -> texto.setText("Botão clicado com sucesso"));

        JPanel painel = new JPanel(new BorderLayout());
        painel.add(texto, BorderLayout.CENTER);
        painel.add(botao, BorderLayout.SOUTH);

        janela.setContentPane(painel);
        janela.setVisible(true);

        System.out.println("Janela exibida");
        Contagem c = new Contagem();
        c.contagem(new byte[]{7, 5, 10, 8, 4});

        AlgFund3 a = new AlgFund3();
        a.soma(new int[]{10, 20, 30, 40});

        Fibonacci f = new Fibonacci();
        System.out.print("Fibonacci: ");
        f.gerar(8);
        System.out.println();

        Primo p = new Primo();
        int valorPrimo = 17;
        System.out.println("Valor de n: " + valorPrimo);
        System.out.println("É primo? " + p.ehPrimo(valorPrimo));

        MDC m = new MDC();
        int aValor = 48;
        int bValor = 18;
        System.out.println("Valor de a: " + aValor);
        System.out.println("Valor de b: " + bValor);
        System.out.println("MDC = " + m.mdc(aValor, bValor));

        int[] numeros = {10, 7, 8, 9, 1, 5};
        QuickSort.quicksort(numeros, 0, numeros.length - 1);
        System.out.print("QuickSort: ");
        for (int num : numeros) {
            System.out.print(num + " ");
        }
        System.out.println();
    }
}

class Contagem {
    public void contagem(byte[] notas) {
        byte contagem = 0;

        System.out.println("Número de notas: " + notas.length);

        for (byte nota : notas) {
            System.out.println("Nota do aluno: " + nota);
            if (nota >= 0 && nota <= 10) {
                contagem++;
            }
        }

        System.out.println("Número de aprovações: " + contagem);
    }
}

class AlgFund3 {
    public void soma(int[] numeros) {
        long soma = 0;

        System.out.println("Quantidade de números: " + numeros.length);

        for (int numero : numeros) {
            System.out.println("Número: " + numero);
            soma += numero;
        }

        System.out.println("Soma = " + soma);
    }
}

class Fibonacci {
    public void gerar(int n) {
        int a = 0;
        int b = 1;
        int i = 2;
        int c;

        if (n == 1) {
            System.out.print(a);
        } else if (n >= 2) {
            System.out.print(a + ", " + b);

            while (i < n) {
                c = a + b;
                System.out.print(", " + c);
                a = b;
                b = c;
                i++;
            }
        }
    }
}

class Primo {
    public boolean ehPrimo(int n) {
        if (n <= 1) return false;

        for (int i = 2; i <= Math.sqrt(n); i++) {
            if (n % i == 0) {
                return false;
            }
        }

        return true;
    }
}

class MDC {
    public int mdc(int a, int b) {
        int resto;

        while (b != 0) {
            resto = a % b;
            a = b;
            b = resto;
        }

        return a;
    }
}

class QuickSort {
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
