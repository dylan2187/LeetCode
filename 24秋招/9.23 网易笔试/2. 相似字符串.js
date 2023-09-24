// import java.util.*;

// // 注意类名必须为 Main, 不要有任何 package xxx 信息
// public class Main {
//     public static void main(String[] args) {
//         Scanner scanner = new Scanner(System.in);
//         int n = scanner.nextInt(); // 字符串数量
//         scanner.nextLine(); // 消耗换行符

//         Map<String, Integer> frequencyMap = new HashMap<>();

//         for (int i = 0; i < n; i++) {
//             String s = scanner.nextLine();
//             // 对字符串s排序，以便统计相似字符串的出现次数
//             char[] charArray = s.toCharArray();
//             Arrays.sort(charArray);
//             String sortedS = new String(charArray);

//             // 更新相似字符串的出现次数
//             frequencyMap.put(sortedS, frequencyMap.getOrDefault(sortedS, 0) + 1);
//         }

//         long similarPairs = 0;
//         for (int count : frequencyMap.values()) {
//             // 计算相似字符串的组合数，C(n, 2)
//             similarPairs += (long) count * (count - 1) / 2;
//         }

//         System.out.println(similarPairs);
//     }
// }


function countSimilarPairs() {
    let frequencyMap = new Map();
    let n = await askQuestion("");
    n = parseInt(n);

    for (let i = 0; i < n; i++) {
        let s = await askQuestion("");
        // Sort string s to count occurrences of similar strings
        let sortedS = [...s].sort().join('');

        // Update count of similar strings
        let count = frequencyMap.get(sortedS);
        frequencyMap.set(sortedS, count ? count + 1 : 1);
    }

    let similarPairs = 0;
    for (let count of frequencyMap.values()) {
        // Calculate combinations of similar strings, C(n, 2)
        similarPairs += count * (count - 1) / 2;
    }

    rl.close();

    return similarPairs;
}

countSimilarPairs().then(console.log).catch(console.error);