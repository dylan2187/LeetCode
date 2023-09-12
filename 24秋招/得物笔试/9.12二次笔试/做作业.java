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
        System.out.println(maxHomework(n, nums));
    }

        public static int maxHomework(int n, int[] arr) {
        int[] dp = new int[n];
        dp[0] = arr[0];
        if (n > 1) {
            dp[1] = Math.max(arr[0], arr[1]);
        }
        for (int i = 2; i < n; i++) {
            if (i == 2) {
                dp[i] = Math.max(dp[i-2] + arr[i], arr[i]);
            } else {
                dp[i] = Math.max(dp[i-2] + arr[i], dp[i-3] + arr[i]);
            }
        }
        return dp[n-1];
    }
}