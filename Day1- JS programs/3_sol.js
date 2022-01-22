/*If the citizen's income was not higher than Rs.85,528, the tax was equal to 18% of the income minus 556 Rupees and 50Paise .
If the income was higher than this amount, the tax was equal to Rs.14,839 and 50paise,plus 32% of the surplus over Rs.85,528.
Your task is to write a tax calculator.
Conditions:
a. It should accept one floating-point value: the income.
b. Next, it should print the calculated tax, rounded to full Rupees. There's a function
named round() which will do the rounding for you
c. Note: this happy country never returns money to its citizens. If the calculated tax
is less than zero, it only means no tax at all (the tax is equal to zero). Take this
into consideration during your calculations.
d. Only one input value is allowed and outputs a result, so you need to complete it
with some smart calculations.
Test your code using the data we've provided. */

let income = 1000;
let tax = 0;
if (income < 85528) {
    tax = Math.round(0.18 * income - 556.5).toFixed(1);
} else {
    tax = Math.round(14839 + 0.32 * (income - 85528)).toFixed(1);
}
if (tax < 0) tax = Number(0).toFixed(1);
console.log(tax);
