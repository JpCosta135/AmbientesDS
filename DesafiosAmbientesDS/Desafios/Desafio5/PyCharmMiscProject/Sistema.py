def proc(self, x, y, z):
    # x: idade do cliente, y: valor da entrada, z: lista de assentos ocupados
    if x < 0:
        print("idade invalida")
        return

    # Lógica de negócio misturada com manipulação de dados
    if "A1" in z:
        print("Ocupado")
    else:
        # Cálculo de preço direto no meio do código
        res = y
        if x < 12:
            res = y * 0.5

        z.append("A1")
        print(f"Finalizado: {res}")
        # Se y vier como String ou None, o programa vai crashar feio aqui