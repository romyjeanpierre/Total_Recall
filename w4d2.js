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

//* III. Arrays & Control flow
//*A. Talk about it:
/*What are the things in an array called?
Any data stored in an array is called an element */

/*Do Arrays guarantee those things will be in order?
Items in the array are not guaranteed to be a specific order, other than the order they were placed. */

/*What real-life thing could you model with an array?
contacts stored in our phones 


//* B. Easy Does It
/*Create an array that contains three quotes and store it in a variable called quotes*/
const movieQuotes = ["You can't handle the truth!", "I'll be back.", "I see dead people."]; 
console.log(movieQuotes);



//* C. Accessing elements
//Given the following array const randomThings = [1, 10, "Hello", true]
const randomThings = [1, 10, "Hello", true];
console.log(randomThings);
//How do you access the 1st element in the array?
console.log(randomThings[0]);
/*Change the value of "Hello"to "World"
Check the value of the array to make sure it updated the array. How? Why, yes! console.log();*/
randomThings[2] = "World";
console.log(randomThings);




//* D. Change values
//Given the following array 
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

//What would you write to access the 3rd element of the array?
console.log (ourClass[3]);

//Change the value of "Github" to "Octocat"
ourClass[4] = "Octocat";
console.log(ourClass);

//Add a new element, "Cloud City" to the array
ourClass.push("Cloud City");
console.log(ourClass);


//* E. Mix It Up
//Note: You don't really need .splice()for these. You could use it, but there are simpler array methods that are more appropriate.

//Given the following array
const myArray = [5, 10, 500, 20]

//Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
myArray.push("Aegon", "protein")
console.log(myArray);

//Remove the 5 from the beginning of the array.
myArray.shift();
console.log(myArray);

//Add the string "Bob Marley"to the beginning of the array.
myArray.unshift("Bob Marley");
console.log(myArray);

//Remove the string of your choice from the end of the array.
myArray.splice(4, 1);
console.log(myArray);

//Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse()method return anything? the reverse method reverses the order of the array leaving the first element of the array last and the last becomes the first. The original array is now mutated. Mutate an array means the changing of the original array
myArray.reverse();
console.log(myArray);


//* F. Biggie Smalls
/*Create a variable that contains an integer.
Write an if ... else statement that:
console.log()s "little number" if the number is entered is less than 100
console.log()s big number if the number is greater than or equal to 100.*/
let num2 = 444 
if (num2 < 100) {
    console.log("little number");
} else  {
    console.log("big number");
}


//* G. Monkey in the Middle
/*Write an if ... else if ... else statement:
console.log()little number if the number entered is less than 5.
If the number entered is more than 10, log big number.
Otherwise, log "monkey".*/
let childAge = 7
if (childAge < 5) {
    console.log('little number');
} else if (childAge > 10) {
    console.log('big number');
}
else {
    console.log('monkey')
}

//*H. What's in Your Closet?
/*Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.*/
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];
 // What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.

 console.log(`Kristyn is rocking that ${kristynsCloset[2]} today!`);

//Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
kristynsCloset[5] = ("raybans");
console.log(kristynsCloset);

//Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.
kristynsCloset.splice(5, 1, "stained knit hat");
console.log(kristynsCloset);

//Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.
console.log (`${thomsCloset[0][0]}`);

//In the same way, access one item from Thom's pants array.
console.log (`${thomsCloset[1][1]}`);

//Access one item from Thom's accessories array.
console.log (`${thomsCloset[2][2]}`);

//Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
console.log(`Thom is rocking a ${thomsCloset[0][0]}, ${thomsCloset[1][1]} and ${thomsCloset[2][2]}.`)

//Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
thomsCloset[1][2] = 'Footie Pajamas';
console.log(thomsCloset);

//* IV. Functions
//* A. printGreeting
/*Do you think you could write a function called printGreeting with a parameter name that returns a greeting with the argument interpolated into the greeting?*/
printGreeting("slimer");
function printGreeting(name) {
    console.log(`Hello there, ${name}! `)
}

//* B. printCool
/*Write a function printCool that accepts one parameter, name as an argument. The function should print the name and a message saying that that person is cool.*/
printCool("Captain Reynolds");
function printCool(name) {
    console.log(`"${name} is cool"`)
}

//* C. calculateCube
/*Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.*/

function calculateCube(side){
    let calculateCube = side ** 3;
    console.log(calculateCube);      
}
calculateCube(5)

//* D. isVowel
/*Write a function isVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case. Test your function on every vowel and make sure it's working. In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.*/
/*function isVowel(character){
    if(character =="a" || character == "e" || character == "i" || character "o" || character "u"){
        return true
    } else {
        return false
    }
}*/
//* E. getTwoLengths
/*Write a function getTwoLengthsthat accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.*/

//* F. getMultipleLengths
/*Write a function getMultipleLengthsthat accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.*/

//* G. maxOfThree
/*Define a function maxOfThreethat takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. Be sure to test it with larger values in each of the three locations.*/
/*Did you use Google and find Math.max()? If so, great job! Very resourceful—keep looking stuff up! However, for this particular question, we need you to submit a solution that does not use Math.max()*/

//*H. printLongestWord
/*Write a function printLongestWordthat accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.*/

