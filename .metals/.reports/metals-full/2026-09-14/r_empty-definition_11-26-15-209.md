error id: file:///C:/Users/TUF-F16/OneDrive/Desktop/Faculdade/Entregavel1-JavaScript/Java/PrimoJava.java:java/lang/System#out.
file:///C:/Users/TUF-F16/OneDrive/Desktop/Faculdade/Entregavel1-JavaScript/Java/PrimoJava.java
empty definition using pc, found symbol in pc: java/lang/System#out.
empty definition using semanticdb
empty definition using fallback
non-local guesses:

offset: 231
uri: file:///C:/Users/TUF-F16/OneDrive/Desktop/Faculdade/Entregavel1-JavaScript/Java/PrimoJava.java
text:
```scala
package Java;
public class PrimoJava {
    public static void main(String[] args) {
        int numero = 7; // Número a ser verificado
        boolean ehPrimo = verfPrimo(numero);

        if (ehPrimo) {
            System.o@@ut.println(numero + " é um número primo.");
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

empty definition using pc, found symbol in pc: java/lang/System#out.