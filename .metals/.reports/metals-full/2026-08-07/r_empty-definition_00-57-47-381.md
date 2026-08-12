error id: file:///C:/Users/TUF-F16/OneDrive/Desktop/Java/javapath_target_761874453/Entregavel1-JavaScript/PrimoJava.java:java/lang/System#
file:///C:/Users/TUF-F16/OneDrive/Desktop/Java/javapath_target_761874453/Entregavel1-JavaScript/PrimoJava.java
empty definition using pc, found symbol in pc: java/lang/System#
empty definition using semanticdb
empty definition using fallback
non-local guesses:

offset: 211
uri: file:///C:/Users/TUF-F16/OneDrive/Desktop/Java/javapath_target_761874453/Entregavel1-JavaScript/PrimoJava.java
text:
```scala
public class PrimoJava {
    public static void main(String[] args) {
        int numero = 7; // Número a ser verificado
        boolean ehPrimo = verfPrimo(numero);

        if (ehPrimo) {
            Sys@@tem.out.println(numero + " é um número primo.");
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


```


#### Short summary: 

empty definition using pc, found symbol in pc: java/lang/System#