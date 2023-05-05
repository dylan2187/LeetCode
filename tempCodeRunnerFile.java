public class Main {
    public static void main(String[] args) {
        int[] arr = {1,2 };
        int result = countOperations(arr);
        System.out.println(result); // 输出 11
    }

    public static int countOperations(int[] arr) {
        int res = 0;
        int mod = 1000000007; // 等价于1e9+7
        while (arr.length > 0) {
            if (arr[0] == 0) {
                // 删除 arr 数组的第一个元素
                int[] tmpArr = new int[arr.length - 1];
                System.arraycopy(arr, 1, tmpArr, 0, arr.length - 1);
                arr = tmpArr;
                res++;
            } else {
                // 在 arr 数组末尾添加 a[0]-1 个 a[0]-1
                for (int i = 0; i < arr[0]; i++) {
                    arr = Arrays.copyOf(arr, arr.length + 1);
                    arr[arr.length - 1] = arr[0] - 1;
                }
                // 将 a[0] 减 1
                arr[0]--;
                res++;
            }
            res %= mod;
        }
        return res;
    }
}
