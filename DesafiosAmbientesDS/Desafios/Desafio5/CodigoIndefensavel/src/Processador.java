public class Processador {
    protected int idade;
    protected double preco;
    protected String tipoFilme;
    protected double desconto;

    public Processador(int idade, String tipoFilme) {
        this.idade = idade;
        this.tipoFilme = tipoFilme;
        this.preco = 35;
        this.desconto = 0;
    }

    // Código cheio de problemas: sem tratamento de erro, nomes ruins e difícil de testar
    public void calculaDesconto(int idade, double preco, String tipoFilme) throws MenorIdade {

            if (idade < 0) {
                throw new IllegalArgumentException("Idade negativa");
            }

            if (idade < 18 && tipoFilme.equals("TERROR")) {
                throw new MenorIdade(": idade não permitida!");
            }
        {
                System.out.println("Idade: " + idade + " - Preco: " + preco);
            }
            double desconto = 0;



            if (idade < 12) {
                desconto = preco * 0.5; // Desconto criança
            } else if (idade > 60) {
                desconto = preco * 0.3; // Desconto idoso
            } else {
                desconto = preco;
            }

            // Simula atualização de banco de dados sem try-catch
            System.out.println("Vendido: " + desconto);
            // Imagine que aqui o estoque diminui sem checar se há assentos
    }


}