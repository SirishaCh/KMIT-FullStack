/*1. Password Generator:
Write a program, which generates a random password for the user. Ask the user how long they want their password to be,
and how many letters and numbers they want in their password. Have a mix of upper and lowercase letters, as well as
numbers and symbols. The password should be a minimum of 6 characters long.  */
const prompt = require('prompt');

prompt.start();
let p_gen = [];
let p = prompt.get(
    `Please enter the following values as comma separated values in the same order to generate a random password :
1. Length of the password - any value greater than or equal to 6
2. Number of letters[a-z|A-Z] in the password
3. Number of numbers[0-9] in the password
4. Number of symbols/special characters in the password`
);
p_gen = p.split(',');
p.forEach((e) => console.log(e));
