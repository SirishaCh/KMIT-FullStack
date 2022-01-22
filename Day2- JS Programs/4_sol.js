/* There are some Special Numbers between 0 to 10^N. A number is called special, if all the digits in that
number should be different. i.e., No two digits are same. You are given an integer N, Your task is to find
the count of special numbers (X) between 0&lt;= X &lt; 10^N.
Input Format: An integer N
Output Format: Print an integer, Count of special numbers.
Sample Input-1: 1
Sample Output-1: 10
Sample Input-1: 2
Sample Output-1: 91
Explanation:
Special Number between 0&lt;= X &lt; 10^2.
Exclude 11, 22, 33, 44, 55, 66, 77, 88, 99, =&gt; count is 9
Total Count is 100=&gt; Special Numbers count is 100-9 = 91. */

let n = 3;
let output = Math.pow(10, n);
let x = [],
    op = new Map();
let tot = 0;
for (let i = 1; i < Math.pow(10, n); i++, tot = 0) {
    if (i > 10) {
        let str = i.toString();
        x = str.split('');
        x.forEach((e) => {
            let regex = new RegExp(e, 'g');
            op.set(e, str.match(regex).length);
            tot += op.get(e);
        });
        if (tot > str.length) output--;
    }
}
console.log(output);
