// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
let n = 16;
let c = [];
let cum,
    cum1,
    z = 0,
    counter = 0;
let flag = false;

for (let i = 2; i < n; i++) {
    counter = 0;
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
