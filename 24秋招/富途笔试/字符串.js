public class Main {
  public static void main(String[] args) {
      System.out.println(countSubstrings("raefadr"));  // 输出: 3
  }

  public static int countSubstrings(String s) {
      int count = 0;
      int start = 0; // 子串的开始位置
      boolean hasR = false, hasE = false;

      for (int end = 0; end < s.length(); end++) {
          char c = s.charAt(end);
          if (c == 'r') {
              hasR = true;
          } else if (c == 'e') {
              hasE = true;
          } else if (c == 'd') {
              // 当遇到字符'd'时，需要重新设置子串的开始位置和状态变量
              start = end + 1;
              hasR = false;
              hasE = false;
          }

          // 如果子串包含'r'和'e'，则增加计数
          if (hasR && hasE) {
              count++;
              // 由于是连续子串，所以在包含'r'和'e'的子串被计数后，需要将'e'的状态设置为false，以避免重复计算
              hasE = false;
          }
      }

      return count;
  }
}