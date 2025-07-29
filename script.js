//1. Write a program that take two numbers & add them in a
//new variable. Show the result in your browser.

let x = 3;
let y = 5;
let z = x + y;
// console.log("Sum of", x ,"&", y , "is",z) ;
document.writeln(`<b> Question No: 01 </b> <br>`);
document.writeln(`Sum of ${x} & ${y} is ${z} <br> <br>`);

// 2. Repeat task1 for subtraction, multiplication, division &
// modulus.
let c = x - y;
let d = x * y;
let e = x / y;
let f = x % y;
document.writeln(`<b> Question No: 02 </b><br>`);
document.writeln(`Subtract of ${x} & ${y} is ${c}`, "<br>");
document.writeln(`Multiply of ${x} & ${y} is ${d}`, "<br>");
document.writeln(`Division of ${x} & ${y} is ${e}`, "<br>");
document.writeln(`Modulus of ${x} & ${y} is ${f}`, "<br>");

//3. Do the following using JS Mathematic Expressions
//a. Declare a variable.
document.writeln(`<h3> Question No: 03 </h3>`);
let variable;

// b. Show the value of variable in your browser like “Value after variable declaration is: ??”
document.writeln(`Values after variable declaration is : ${variable} <br>`);

//c. Initialize the variable with some number.
variable = 5;

//d. Show the value of variable in your browser like “Initial value: 5”.
document.writeln(`Initial Value : ${variable} <br>`);

//e. Increment the variable.
variable++;

//f. Show the value of variable in your browser like “Value after increment is: 6”.
document.writeln(`Value after increment is: ${variable} <br>`);

//g. Add 7 to the variable.
variable = variable + 7;

//h. Show the value of variable in your browser like “Value after addition is: 13”.
document.writeln(`Value after addition is: ${variable} <br>`);

//i. Decrement the variable.
variable--;

// j. Show the value of variable in your browser like “Value after decrement is: 12”.
document.writeln(`Value after decrement is:${variable} <br>`);

// k. Show the remainder after dividing the variable’s value by 3. 
let remainder = variable % 3;

// l. Output : “The remainder is : 0”. 
document.writeln(`The Remainder is : ${remainder} <br>`);

//4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output:
let ticketprice = 600;
let totalcost = ticketprice * 5;
document.writeln(`<h3> Question No: 04 </h3>`);
document.writeln(`Total cost to buy 5 ticket to a movie is : ${totalcost}PKR<br>`);

//5. Write a script to display multiplication table of any number in your browser.
document.writeln(`<h3> Question No: 05 </h3>`);
document.writeln(`** TABLE OF 4 **<br>`);
for (let i = 1; i <= 10; i++) {
    document.writeln(`4 × ${i} = ${4 * i}<br>`);
}

//6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
document.writeln(`<h3> Question No: 06 </h3>`);
document.writeln(" <b> 1: Celsius to Fahrenheit <br> </b> ")
//a. Store a Celsius temperature into a variable.
let Celsius = 40;
//b. Convert it to Fahrenheit & output “NNoC is NNoF”.
let tofahr = (Celsius * 9 / 5) + 32;
document.writeln(`${Celsius} °C is ${tofahr} °F<br> `);
document.writeln("<b> 2: Fahrenheit to Celsius<br> </b>")
//c. Now store a Fahrenheit temperature into a variable.
let fahrenheit = 76;
//d. Convert it to Celsius & output “NNoF is NNoC”.
let tocels = (fahrenheit - 32) * 5 / 9;
document.writeln(`${fahrenheit} °F is ${tocels}°C`);

//7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.
const item1Price = 650;
const item2Price = 100;
const item1Qty = 3;
const item2Qty = 7;
const shippingCharges = 100;
document.writeln(`<h3> Question No: 07 </h3>`);

const totalCost = (item1Price * item1Qty) + (item2Price * item2Qty) + shippingCharges;

document.writeln("<h2>Shopping Cart Receipt</h2>");
document.writeln("Price of item 1 = " + item1Price + " PKR<br>");
document.writeln("Quantity of item 1 is " + item1Qty + "<br><br>");

document.writeln("Price of item 2 = " + item2Price + " PKR<br>");
document.writeln("Quantity of item 2 is " + item2Qty + "<br><br>");

document.writeln("Shipping Charges: " + shippingCharges + " PKR<br><br>");
document.writeln("<b>Total cost of your order is: " + totalCost + " PKR</b>");

// 8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser.
const totalMarks = 550;  // total possible8
const obtainedMarks = 450;  // student’s score
const percentage = (obtainedMarks / totalMarks) * 100;   // formula

document.writeln(`<h3> Question No: 08 </h3>`);
document.writeln("<h4>Marks Sheet</h4>");
document.writeln("Total Marks: " + totalMarks + "<br>");
document.writeln("Marks Obtained: " + obtainedMarks + "<br>");
document.writeln("Percentage: " + percentage.toFixed(2) + "%"); // 2‑decimal precision

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. 
document.writeln(`<h3> Question No: 09 </h3>`);
const totalPKR = (10 * 104.80) + (25 * 28);
document.writeln(`<h4>Total Currency in PKR:₨ ${totalPKR}</h4>`);

// 10. Write a program to initialize a variable with some number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression 
document.writeln(`<h3> Question No: 10 </h3>`);
 const result = ((130 + 5) * 10) / 2;
document.writeln(`<b>Result: ${result}</b>`);

//11. The Age Calculator: Forgot how old someone is?
//Calculate it!
//a. Store the current year in a variable.
//b. Store their birth year in a variable.
//c. Calculate their 2 possible ages based on the stored vlues
//Output them to the screen like so: “They are either NN or NNyears old”. 
const currentYear = 2025;
const birthYear = 2001;
const age1 = currentYear - birthYear;    
document.writeln(`<h3> Question No: 11 </h3>`);
document.writeln("<h2>AGE CALCULATOR</h2>");
document.writeln(`<h4> Your age is : ${age1}</h4>`);

 
//12. The Geometrizer: Calculate properties of a circle.
//a. Store a radius into a variable.
//b. Calculate the circumference based on the radius, and
//output “The circumference is NN”.
//(Hint : Circumference of a circle = 2 π r , π = 3.142)
//Calculate the area based on the radius, and output “The
//area is NN”. (Hint : Area of a circle = π r2, π = 3.142)*/
const radius = 20;
const pi = 3.142;
const circumference = 2 * pi * radius;
const area = pi * radius * radius; 

document.writeln(`<h3> Question No: 12 </h3>`);
document.writeln(`<h4>The Geometrizer</h4>`);
document.writeln(`Radius of circle: ${radius}<br>`);
document.writeln(`The circumference is ${circumference}<br>`);
document.writeln(`The area is ${area}`);

//13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more.
//a. Store your favorite snack into a variable
//b. Store your current age into a variable.
//c. Store a maximum age into a variable.
//d. Store an estimated amount per day (as a number).
//e. Calculate how many would you eat total for the rest of your life.
//Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”. 
const favoriteSnack = "Chips";
const currentAge = 24;
const maxAge = 70;
const perDay = 1;
const yearsRemaining = maxAge - currentAge;
const totalSnacks = yearsRemaining * 365 * perDay;
document.writeln(`<h3> Question No: 13 </h3>`);
document.writeln(`<h4>The Lifetime Supply Calculator</h4>`);
document.writeln(`Favourite snake : ${favoriteSnack}<br>`);
document.writeln(`Current Age : ${currentAge}<br>`);
document.writeln(`Estimated Maximum Age : ${maxAge}<br>`);
document.writeln(`Amount of snacks per day : ${perDay}<br>`);
document.writeln(`You will need ${totalSnacks} ${favoriteSnack} to  last you until the ripe old age of ${maxAge}.`);
