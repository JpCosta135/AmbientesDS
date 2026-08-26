import java.util.Scanner;

public class Primo {

    public boolean ehPrimo() {
        Scanner input = new Scanner(System.in);
        System.out.print("Número de termos: ");
        int numero = input.nextInt();

        int n = 0;
        if (n <= 1) return false;

        for (int i = 2; i <= Math.sqrt(n); i++) {
            if (n % i == 0) {
                return false;
            }
        }
        return true;
    }
}