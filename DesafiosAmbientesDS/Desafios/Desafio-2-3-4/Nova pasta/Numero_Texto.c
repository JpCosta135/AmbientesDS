 #include <stdio.h>

char *unidades[] = {"zero", "um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove"};
char *especiais[] = {
        "dez", "onze", "doze", "treze", "quatorze",
        "quinze", "dezesseis", "dezessete", "dezoito", "dezenove"
    };
char *dezenas[] = {"", "", "vinte", "trinta", "quarenta", "cinquenta", "sessenta", "setenta", "oitenta", "noventa"};
char *centenas[] = {
    "", "cento", "duzentos", "trezentos", "quatrocentos",
    "quinhentos", "seiscentos", "setecentos", "oitocentos", "novecentos"
};

 int entrada() {
    if (scanf("%d", &numero) != 1) {
    printf("Entrada inválida\n");
    return -1;
}
     int numero;
     printf("Digite um número de 0 a 999999: ");
     scanf("%d", &numero);
        return numero;
 }
 void escreve_ate_999(int numero) {
    if (numero >= 0 && numero <= 9) {
        printf("%s", unidades[numero]);
    }
    else if (numero >= 10 && numero <= 19) {
        printf("%s", especiais[numero - 10]);
    }
    else if (numero >= 20 && numero <= 99) {
        int dezena = numero / 10;
        int unidade = numero % 10;

        if (unidade == 0) {
            printf("%s", dezenas[dezena]);
        } else {
            printf("%s e %s", dezenas[dezena], unidades[unidade]);
        }
    }
    else if (numero == 100) {
        printf("cem");
    }
    else if (numero >= 101 && numero <= 999) {
        int centena = numero / 100;
        int dezena = (numero % 100) / 10;
        int unidade = numero % 10;

        if (dezena == 0 && unidade == 0) {
            printf("%s", centenas[centena]);
        } else if (dezena == 0) {
            printf("%s e %s", centenas[centena], unidades[unidade]);
        } else if (dezena == 1) {
            printf("%s e %s", centenas[centena], especiais[unidade]);
        } else if (unidade == 0) {
            printf("%s e %s", centenas[centena], dezenas[dezena]);
        } else {
            printf("%s e %s e %s", centenas[centena], dezenas[dezena], unidades[unidade]);
        }
    }
}
 void saida(int numero) {
      if (numero < 0 || numero > 999999) {
        printf("Número fora do intervalo permitido\n");
        return;
    }

    if (numero <= 999) {
        escreve_ate_999(numero);
        printf("\n");
        return;
    }

    int milhar = numero / 1000;
    int resto = numero % 1000;

    if (milhar == 1) {
        printf("mil");
    } else {
        escreve_ate_999(milhar);
        printf(" mil");
    }

    if (resto != 0) {
        if (resto < 100 || resto % 100 == 0) {
            printf(" e ");
        } else {
            printf(" ");
        }
        escreve_ate_999(resto);
    }

    printf("\n");
}

 
int main() {
    int numero = entrada();
    saida(numero);
    return 0;
}
