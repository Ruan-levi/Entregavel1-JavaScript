package Java;

public class MaxDivCom {
    public static void main(String[] args) {
        int a = 48;
        int b = 18;

        while (b != 0) {
            int resto = a % b;

            a = b;
            b = resto;
        }
        System.out.println("O MDC é: " + a);
    }
}