/* Mr. Athreya is a beginner in computer programming. He is given an integer D, a decimal value.
Your task is to count the 1&#39;s in the BCD form of each integer N and store the count in an array of size
D+1, where N is in the range of 0&lt;= N &lt;= D.
Example of BCD : Given an integer I=10 , The BCD of I is &#39;1010&#39;, and 1&#39;s count is 2.
NOTE: Can you solve it in O(D) time?
Input Format: An integer D, the decimal value.
Output Format: Print the array of D+1 integers.
Sample Input-1: 3
Sample Output-1: [0, 1, 1, 2]
Sample Input-2: 6
Sample Output-2: [0, 1, 1, 2, 1, 2, 2]*/

let n = 10;
let binary = [];
let output = [];
for (let i = 0; i <= n; i++) {
    binary = i.toString(2);
    let regex = new RegExp(1, 'g');
    let y = binary.match(regex);
    if (y == null) output.push(0);
    else output.push(y.length);
}
console.log(output);
