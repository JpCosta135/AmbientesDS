import java.util.Scanner;

public class MDC {
    int a, b;
    int resto;

    public int mdc() {
        Scanner input = new Scanner(System.in);

        System.out.print("Valor de a: ");
        a = input.nextInt();
        System.out.print("Valor de b: ");
        b = input.nextInt();

        while (b != 0) {
            resto = a % b;
            a = b;
            b = resto;
        }
        return a;
    }
}