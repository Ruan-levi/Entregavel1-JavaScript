package Java;
public class Fibonacci {
    public static void main(String[] args) {
        byte num = 10; // Quantidade de numeros na fibonacci
        int[] vetor = new int[num];
        vetor[0] = 0; 
        vetor[1] = 1;

        for (int i = 2; i < num; i++) {
            vetor[i] = vetor[i - 1] + vetor[i - 2];

        }
        for (int i = 0; i < num; i++) {
            System.out.print(vetor[i] + ",");
        }
        
    }
}