import java.util.Arrays;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        int[] nums = new int[n];
        for (int i = 0; i < n; i++) {
            nums[i] = in.nextInt();
        }
        System.out.println(solution(n, nums));
    }

    public static int solution(int n, int[] nums) {
        // 被2、3、5整除，最大的数
        // 末尾必须是0，各位数和必须是3的倍数
        Arrays.sort(nums);
        if (nums[0] != 0) {
            return -1;
        }
        int sum = Arrays.stream(nums).sum();
        int pt = 1;
        while (sum % 3 != 0 && pt < n) {
            int cur = nums[pt];
            sum -= cur;
            pt++;
        }
        // 定位到pt
        if (pt >= n || sum <= 0) {
            return -1;
        }
        StringBuilder sb = new StringBuilder();
        for (int i = n - 1; i >= pt; i--) {
            sb.append(nums[i]);
        }
        sb.append(0);
        return Integer.parseInt(sb.toString());
    }
}