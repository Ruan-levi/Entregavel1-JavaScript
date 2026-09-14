error id: file:///C:/Users/TUF-F16/OneDrive/Desktop/Faculdade/Entregavel1-JavaScript/Java/QuickSort.java:local5
file:///C:/Users/TUF-F16/OneDrive/Desktop/Faculdade/Entregavel1-JavaScript/Java/QuickSort.java
empty definition using pc, found symbol in pc: 
found definition using semanticdb; symbol local5
empty definition using fallback
non-local guesses:

offset: 235
uri: file:///C:/Users/TUF-F16/OneDrive/Desktop/Faculdade/Entregavel1-JavaScript/Java/QuickSort.java
text:
```scala
package Java;

public class QuickSort {

    static void quickSort(int[] num, int inicio, int fim) {
        if (inicio >= fim) return;

        int pivo = num[fim];
        int i = inicio - 1;

        for (int j = inicio; j@@ < fim; j++) {
            if (num[j] <= pivo) {
                i++;
                int temp = num[i];
                num[i] = num[j];
                num[j] = temp;
            }
        }
         num[fim] = num[i + 1];
        num[i + 1] = pivo;

        quickSort(num, inicio, i);
        quickSort(num, i + 2, fim);
    }

    public static void main(String[] args) {
        int[] nums = {7, 2, 9, 4, 1, 5};

        quickSort(nums, 0, nums.length - 1);

        for (int num : nums)
            System.out.print(num + " ");
    }
}
```


#### Short summary: 

empty definition using pc, found symbol in pc: 