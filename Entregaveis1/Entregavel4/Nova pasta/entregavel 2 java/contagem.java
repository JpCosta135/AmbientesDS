import java.util.Scanner;

public class Contagem {


    public void contagem(){
        Scanner input = new Scanner(System.in);
        System.out.println("Número de notas");
        byte n = input.nextByte();
        System.out.println("Nota do aluno:");
        byte nota = input.nextByte();

        byte contagem = 0;
        byte i = 0;
        while (i < n) {
            i++;

            if (nota >= 0 && nota <= 10) {
                contagem++;
            }
        }
        System.out.println("Número de aprovações: " + contagem);
        input.close();
    }












}
