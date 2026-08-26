import java.util.Scanner;

public class Principal {
    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);


        while (true) {
            try {
                System.out.println("\n--- Nova Tentativa de Compra ---");

                System.out.print("Digite sua idade: ");
                int idadeDigitada = input.nextInt();
                input.nextLine();
                System.out.print("Digite o filme (ex: TERROR, COMEDIA): ");
                String filmeDigitado = input.nextLine().toUpperCase();


                Processador p1 = new Processador(idadeDigitada, filmeDigitado);

                 p1.calculaDesconto(idadeDigitada, 20.0, filmeDigitado);

                 System.out.println("Sucesso! Aproveite o filme.");


                break;

        } catch(IllegalArgumentException e){
            System.out.println(e.getMessage());
        }
              catch(MenorIdade e){
            System.out.println(e.getMessage());

        } catch(Exception e){
            System.out.println(e.getMessage());

        }
    }











    }
}
