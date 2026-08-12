package Java;

public class ContagemJava {
   public static void main(String[] args) {
    double[] numeros = {1, 2.4, 3, 4, 5, 6, 7.6, 8, 9, 10};
    int contador = 0;
    int i;

    for (i = 0; i < numeros.length; i++) {
        if (numeros[i] % 1 == 0) {
            contador++;
        } else {
            System.out.println("O número " + numeros[i] + " não é inteiro.");
        }
    }
    System.out.println("Quantidade de números inteiros: " + contador);
   }
}