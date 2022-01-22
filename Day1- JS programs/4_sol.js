/*A company wants to transmit data over the telephone line , but they are concerned that their lines are tapped. All of their data is transmitted as four-digit integers.
They decided to encrypt a four digit number as follows:
a. They will replace each digit by ((digit+7)mod 10).
b. They will then swap the first digit with the third digit and the second digit with the
fourth.
The resulting four digit number is the encrypted number.
Write a program that can do an encryption operation. The program must take one input.
The input is a positive integer between 1000 and 9999 (including both) which will be encrypted depending on the input. */

let input = 1000;
let inputCopy = input;
let str = [],
    total = '',
    arr = [];
if (input >= 1000 && input <= 9999) {
    str = inputCopy.toString().split('');
    str.forEach((e) => {
        arr.push((parseInt(e) + 7) % 10);
    });
    total = arr[2].toString() + arr[3].toString() + arr[0].toString() + arr[1].toString();
    total = parseInt(total);
}
console.log(total);
