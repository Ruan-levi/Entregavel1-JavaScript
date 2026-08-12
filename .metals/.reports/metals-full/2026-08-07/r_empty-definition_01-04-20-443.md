error id: file:///C:/Users/TUF-F16/OneDrive/Desktop/Java/javapath_target_761874453/Entregavel1-JavaScript/SomatorioJava.java:java/lang/System#out.
file:///C:/Users/TUF-F16/OneDrive/Desktop/Java/javapath_target_761874453/Entregavel1-JavaScript/SomatorioJava.java
empty definition using pc, found symbol in pc: java/lang/System#out.
empty definition using semanticdb
empty definition using fallback
non-local guesses:

offset: 328
uri: file:///C:/Users/TUF-F16/OneDrive/Desktop/Java/javapath_target_761874453/Entregavel1-JavaScript/SomatorioJava.java
text:
```scala
public class SomatorioJava {
    public static void main(String[] args) {
        int[] vetor = {10, 20, 30, 40, 50};
        int somatorio = 0;

        for (int valor : vetor) {
            somatorio += valor;
        }

        System.out.println("Valores: ");
        for (int valor : vetor) {
            System.@@out.print(valor + " ");
        }
        System.out.println();
        System.out.println("Somatorio: " + somatorio);
    }
}

```


#### Short summary: 

empty definition using pc, found symbol in pc: java/lang/System#out.