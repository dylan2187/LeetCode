使用Java11完成下面这道题
Mike在一家律师事务所工作，他的老板Harvey分配给他N 个新案件，每个案件都有自己的利益值。Harvey要求他将连续案件分组，让所有组的利益值总额最大化。一组的利益值由该组内案件个别利益值的最大与最小值之间的差额决定。Harvey知道这对 Mike来说将是一项很轻松的任务，因此，他要求Mike记住一点，如果一组内只有单个案件，其利益值将视为零。
您现在有一个整数input1，代表案件数量，还有整数数组input2，代表案件的利益值。您的任务是，帮助Mike查找和返回所有组中的最大利益值。
样例1：
input1：5
input2：{1，3，2，4，5}
输出：5
样例2：
input1：1
input2：{5}
输出：0