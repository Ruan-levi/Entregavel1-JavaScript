package Java;
public class PrimoJava {
    public static void main(String[] args) {
        int numero = 7; // Número a ser verificado
        boolean ehPrimo = verfPrimo(numero);

        if (ehPrimo) {
            System.out.println(numero + " é um número primo.");
        } else {
            System.out.println(numero + " não é um número primo.");
        }
    }

    public static boolean verfPrimo(int numero) {
        if (numero <= 1) {
            return false; // Números menores ou iguais a 1 não são primos
        }

        for (int i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i == 0) {
                return false; // Encontrou um divisor, não é primo
            }
        }

        return true; // Não encontrou divisores, é primo
    }
}

