error id: file:///C:/Users/TUF-F16/OneDrive/Desktop/Java/javapath_target_761874453/Entregavel1-JavaScript/Java/QuickSort.java:local9
file:///C:/Users/TUF-F16/OneDrive/Desktop/Java/javapath_target_761874453/Entregavel1-JavaScript/Java/QuickSort.java
empty definition using pc, found symbol in pc: 
found definition using semanticdb; symbol local9
empty definition using fallback
non-local guesses:

offset: 417
uri: file:///C:/Users/TUF-F16/OneDrive/Desktop/Java/javapath_target_761874453/Entregavel1-JavaScript/Java/QuickSort.java
text:
```scala
package Java;

public class QuickSort {

    public static void ordenar(int[] nums, int ini, int fim) {
        if (ini < fim) {
            int pivo = dividir(nums, ini, fim);
            ordenar(nums, ini, pivo - 1);
            ordenar(nums, pivo + 1, fim);
        }
    }

    public static int dividir(int[] nums, int ini, int fim) {
        int pivo = nums[fim], i = ini - 1;

        for (int j@@ = ini; j < fim; j++) {
            if (nums[j] <= pivo) {
                i++;
                int temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
            }
        }

        int temp = nums[i + 1];
        nums[i + 1] = nums[fim];
        nums[fim] = temp;

        return i + 1;
    }

    public static void main(String[] args) {
        int[] nums = {7, 2, 9, 4, 1, 5};

        ordenar(nums, 0, nums.length - 1);

        for (int num : nums)
            System.out.print(num + " ");
    }
}
```


#### Short summary: 

empty definition using pc, found symbol in pc: 