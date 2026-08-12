package Java;
public class SomatorioJava {
    public static void main(String[] args) {
        int[] vetor = {10, 20, 30, 40, 50};
        int somatorio = 0;

        for (int valor : vetor) {
            somatorio += valor;
        }

        System.out.println("Valores: ");
        for (int valor : vetor) {
            System.out.print(valor + " ");
        }
        System.out.println();
        System.out.println("Somatorio: " + somatorio);
    }
}
