error id: file:///C:/Users/TUF-F16/OneDrive/Desktop/Java/javapath_target_761874453/Entregavel1-JavaScript/Java/MaxDivCom.java:local3
file:///C:/Users/TUF-F16/OneDrive/Desktop/Java/javapath_target_761874453/Entregavel1-JavaScript/Java/MaxDivCom.java
empty definition using pc, found symbol in pc: 
found definition using semanticdb; symbol local3
empty definition using fallback
non-local guesses:

offset: 219
uri: file:///C:/Users/TUF-F16/OneDrive/Desktop/Java/javapath_target_761874453/Entregavel1-JavaScript/Java/MaxDivCom.java
text:
```scala
package Java;

public class MaxDivCom {
    public static void main(String[] args) {
        int primeiroNumero = 48;
        int segundoNumero = 18;

        while (segundoNumero != 0) {

            int resto@@ = primeiroNumero % segundoNumero;

            primeiroNumero = segundoNumero;
            segundoNumero = resto;
        }

        System.out.println("O MDC é: " + primeiroNumero);
    }
}
```


#### Short summary: 

empty definition using pc, found symbol in pc: 