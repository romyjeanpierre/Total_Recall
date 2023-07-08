/* 
//* I. Variables & Datatypes 
//* A. Q + A
1) How do we assign a value to a variable? 
using the assignment operator (=)

2) How do we change the value of a variable? 
using the "let" keyword 

3)How do we assign an existing variable to a new variable?
copy the value of one variable to another variable 
ex: let case1 = negligence; 
let case2 = case1; 

4)Remind me, what are declare, assign, and define? 
creating a variable is called declaring a variable. One can declare a variable using var, const, or let 
We assign a value to the declared variable using the equal sign, otherwise the value is considered undefined.
ex: let x is a declaration
let x; this is an example of declaration
let x = 50; this is an example of defining and assigning a value to the declaration

5) What is pseudocoding and why should you do it? "Pseudocode is an informal way of programming description that does not require a strict programming language syntax. it's used for creating an outline or rough draft of a program.
we should should do it because it is understood by programmers of all type. It also enables the programmer to concentrate only on the algorithm part of the code development."

6) What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
depends on the level of experience, but generally the majority of the time will be spent solving the problem then typing the code.
*/

//* B. Strings
/*For all other questions that involve writing code, you can solve them via the following instructions.*/

//Create a variable called firstVariable
//Assign it the value of the string "Hello World"

let firstVariable = "Hello World";
console.log(firstVariable);


//Change the value of this variable to some number
firstVariable = 100;
console.log(firstVariable);
//Store the value of firstVariable in a new variable called secondVariable
let secondVariable = firstVariable
console.log(secondVariable);

//Change the value of secondVariable to any string.
secondVariable = "I have a feeling we're not in Kansas anymore."
console.log(secondVariable); 

//What is the value of firstVariable? 
console.log(firstVariable); // output is 100

//Create a variable called yourName and set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated.
//ex: Hello, my name is Jean Valjean
const yourName = 'Romy Jean-Pierre'; 
console.log("Hello, name is " + yourName);


// *C. Booleans
/*Using the provided variable definitions, replace the blanks so that all log statements print true in the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print true to the console*/

  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a <= b);
  console.log(c != d);
  console.log('Name' == 'Name');

// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log(false && false && false && false && false || true);
console.log(false >= false)
console.log(e === 'Kevin');
console.log(a + b == c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a * a == d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 <= '48');

//*D. The farm
/*Declare a variable animal. Set it to be either "cow" or something else
Write code that will print out "mooooo" if the it is equal to cow
Change your code so that if the variable animal is anything other than a cow, it will print "Hey! You're not a cow."
Commit*/

let animal = "cow";
if (animal= "cow"){
    console.log("mooooo");
}
else{
    console.log("false");
}
 if ("chicken"){
 console.log("Hey! You're not a cow");
}

//*E. Driver's Ed
/*Make a variable that holds a person's age; be semantic
Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."*/

let myAge = 40; 
if (myAge >= 16) {
    console.log("Here are the keys!");
}
else {
    console.log  ("Sorry, you're too young.");
}


//* II. Loops
/*Remember: USE let when you initialize your for loops!

This is GOOD: for(let i = 0; i < 100; i++)

This is NO GOOD: for(i = 0; i < 100; i++)*/

//* A. The basics
//Write a loop that will print out all the numbers from 0 to 10, inclusive

for(let counter = 0; counter <=10; counter++) 
{
    console.log(counter);
}

//Write a loop that will print out all the numbers from 10 up to and including 400
for(let i = 10; i <= 400; i++) {console.log(i);}


//Write a loop that will print out every third number starting with 12 and going no higher than 4000

for(let counter = 12; counter <= 4000; counter += 3) {
console.log(counter);
}

//* B. Get even
/*Print out the numbers that are within the range of 1 - 100
Adjust your code to add a message next to even numbers only that says: "<-- is an even number"*/

let X = 1; 

while(X <= 100) {
    if (X % 2 === 0){
        console.log(`${X} <-- is an even number`);
    } else {

    console.log(`${X} `);
    }
   X++;  
}

//* C. Give me Five
//For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
//Add to the code to print out "I found a number. Three is a crowd" if the number is a multiple of three
//For numbers divisible by both three and five, be sure your code prints both messages

for(let num = 0; num <= 100; num ++) {
    console.log(num);
     if (num % 3 ===0 & num % 5 ===0){
            console.log(`I found a ${num} . High five! I found a number ${num}. Three is a crowd`);
    }
    else if (num % 5 === 0){
        console.log(`I found a ${num} . High five!`);
    }  else if(num % 3 === 0) {
        console.log(`I found a number ${num}. Three is a crowd`);
    } 
}

//* D. Savings account
/*1. Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
Check your work! Your bank_account should have $55 in it.*/
let bank_account = 0;
for(let i = 1; i <= 10; i++) {
    console.log (bank_account += i); 
}

/*2. You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
Check your work! Your bank_account should have $10,100 in it. */   
let bank_account1 = 0;
for(let i = 1; i <= 100; i++) {
    console.log (bank_account1 += i*2); 
}