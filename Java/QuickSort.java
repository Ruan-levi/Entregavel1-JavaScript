public class QuickSort {

    static void quickSort(int[] num, int ini, int fim) {
        if (ini >= fim) return;

        int pivo = num[fim];
        int i = ini - 1;

        for (int j = ini; j < fim; j++) {
            if (num[j] <= pivo) {
                i++;
                int temp = num[i];
                num[i] = num[j];
                num[j] = temp;
            }
        }
         num[fim] = num[i + 1];
        num[i + 1] = pivo;

        quickSort(num, ini, i);
        quickSort(num, i + 2, fim);
    }

    public static void main(String[] args) {
        int[] nums = {7, 2, 9, 4, 1, 5};

        quickSort(nums, 0, nums.length - 1);

        for (int num : nums)
            System.out.print(num + " ");
    }
}