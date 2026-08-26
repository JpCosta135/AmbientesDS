
 
numero_fator1 = int(input("Digite um número para calcular seus fatores: "))
numero_fator2 = int(input("Digite outro número para calcular seus fatores: "))
 
 

def fatores(numero_fator1, numero_fator2):
  fatores_comuns = []
  for i in range(1, min(numero_fator1, numero_fator2) + 1):
    if numero_fator1 % i == 0 and numero_fator2 % i == 0:
      fatores_comuns.append(i)
  return fatores_comuns
 
 
 
print(f"Os fatores comuns de {numero_fator1} e {numero_fator2} são:"+str(fatores(numero_fator1, numero_fator2)))
 
   

 
 
 
 
 
 
 
 
 