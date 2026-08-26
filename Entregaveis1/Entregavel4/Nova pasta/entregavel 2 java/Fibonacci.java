import java.util.Scanner;

public class Fibonacci {

    public void gerar() {

        Scanner input = new Scanner(System.in);
        System.out.println("digite a quantidade de termos");
        int n = input.nextInt();
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
