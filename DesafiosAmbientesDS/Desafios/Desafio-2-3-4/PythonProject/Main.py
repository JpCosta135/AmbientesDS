from Funcionario import Funcionario
from Gerente import Gerente

class Main:
    def executar(self):
        print("Sistema iniciado")


if __name__ == "__main__":
    app = Main()
    app.executar()
    Funcionario1 = Funcionario("Joao", 2024, 2500)
    Gerente1 = Gerente("Jose", 2023, 3500)

    Funcionario1.mostrar_mensagem()
    Gerente1.mostrar_mensagem()

    Funcionario1.aumentar_salario(Funcionario1.salario, 0.2)
    Gerente1.aumentar_salario(Gerente1.salario, 0.3)

    Funcionario1.mostrar_mensagem()
    Gerente1.mostrar_mensagem()

    