/* 2. Mr. Chammak Chandra has an portrait photo with size M*N pixels, where M is the length of the
portrait and N is width of the portrait. You are given an integer S in pixels, Your task is to help Mr.
Chammak Chandra to find the actual values [M, N] using the following specifications:
- The size of portrait should be equal to S. i.e., S = M*N.
- N is always smaller than in M, i.e., N &lt;= M
- The diffrence between length and width, (M-N) should be minimum.
And print the result as a pair [M, N]
NOTE: S is always a positive integer.
Input Format: Line-1 -> An integer S, size of the portrait.
Output Format: Print the result as a pair of integers.
Sample Input-1: 24
Sample Output-1: [6, 4]
Sample Input-2: 550
Sample Output-2: [25, 22]*/

let input = 24;
let m = 0,
    n = 0,
    cum = 0;
let arr = [];
for (let i = 2; i < input; i++) {
    if (n % i == 0) arr.push(i);
}
quickSort(arr);
function quickSort(array) {
    for (let j = 0; j < arr.length; j++) {
        for (let k = j + 1; k < arr.length; k++) {}
    }
}
