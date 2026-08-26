import java.util.Scanner;

public class MDC {
    static void main(String[] args) {
        MDC m1 = new MDC();
       System.out.println(m1.mdc());  

    }


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
