/* Given a number 'n';, Program to check if it can be written as sum of first few prime
numbers. Print ‘Yes’ if 'n''; can be written as first few prime numbers and ‘No’
otherwise.
For example,
if n is 5 then print ‘Yes’ as it can be written as 2+3,
if n is 41 then print ‘Yes’ as it can be written as 2 + 3 + 5 + 7 + 11 + 13
if n is 11 then print &#39;No&#39; as it cannot be written as sum of first few prime numbers.*/
let n = 11;
let c = [];
let cum = 0,
    cum1 = 0,
    counter = 0;
let flag = false;

for (let i = 2; i < n; i++, counter = 0) {
    for (let j = 2; j <= i; j++) {
        if (i % j == 0) counter++;
    }
    if (counter == 1) c.push(i);
}

for (let j = 0; j < c.length; j++) {
    cum = cum1 = c[j];
    for (let k = j + 1; k < c.length; k++) {
        cum = cum + c[k];
        if (cum == n) {
            flag = true;
            break;
        }
    }
    if (!flag) {
        for (let l = c.length - 1; l >= j; l--) {
            cum1 = cum1 + c[l];
            if (cum1 == n) {
                flag = true;
                break;
            }
        }
    }
}
if (flag) {
    console.log('yes');
} else {
    console.log('no');
}
