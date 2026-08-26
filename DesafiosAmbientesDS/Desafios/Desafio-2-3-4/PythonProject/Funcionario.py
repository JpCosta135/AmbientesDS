
class Funcionario:

    def __init__(self, nome, data_contratacao, salario):
        self.nome = nome
        self.data_contratacao = data_contratacao
        self.salario = salario

    def aumentar_salario(self, salario, percentual):
        self.salario += salario * percentual

    def mostrar_mensagem(self):
        print("Dados do Funcionario:")
        print(self.nome)
        print(self.data_contratacao)
        print(self.salario)


