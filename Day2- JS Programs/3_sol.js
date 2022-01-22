/* You have given N bricks. You need to construct a staircase as follows:
1. =
2. ==
3. ===
4. ====
Where = indicates one brick. Another condition is row-1 should have 1 brick, row-2 should have 2 bricks
and so on. i.e., i-th row should have 'i' bricks. Your task is to find out total number of staircases can be
formed with the given condition.
Input Format: An integer N
Output Format: Print an integers, number of staircases

Sample Input-1: 5
Sample Output-1: 2
Explanation:
row-1: =
row-2: ==
row-3: ==
Only 2 rows satisfy the condition.
Sample Input-2: 8
Sample Output-2: 3
Explanation:
row-1: =
row-2: ==
row-3: ===
row-4: ==
Only 3 rows satisfy the condition.*/

let input = 4;
let input1 = input;
let j = 1;
let counter = 0;

if (input == 0) console.log(0);

for (let i = 1; input1 > 0; i++, j = 1) {
    if (input1 == 1) {
        console.log('=');
        break;
    }
    while (j <= i) {
        j++;
    }
    input1 -= j - 1;
    console.log('='.repeat(j - 1));
    counter++;
}

console.log(counter);
