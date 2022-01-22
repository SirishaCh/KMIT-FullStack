let s = 2;
let sp = 7;
let counter,
    c = 0;
let a = new Array();

if (s == 0 || s == 1) s = 2;
if (s == 2 && s <= sp) {
    a.push(2);
    s++;
}

for (let i = s; i < sp; i++) {
    counter = 0;
    for (let j = 2; j <= i; j++) {
        if (i % j == 0) counter++;
    }
    if (counter == 1) a.push(i);
}

for (let b = 0; b < a.length; b = b + 2) {
    c = c + a[b] * a[b];
}

console.log(c);
