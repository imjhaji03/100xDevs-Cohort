// VARIABLES
// Execution happens from 1st line to last line
let firstName = "john"; //can be reassigned
//const age = 30; //const var that cannot be reassigned
var isStudent = false; //older way to declare variable ,function scoped

console.log(firstName)
console.log("firstName") //""prints the actual value inside ""
//console.log(age)
console.log(isStudent) //Value is what gets printed over here..

// DATA TYPES

let number = 42;             // Number
let string = "Hello World";  // String
let isActive = false;        // Boolean
let strings = ["Rahul", "Rajesh", "Rohan"]; // Array
console.log(strings[0]) //Print the valeu at index 0
console.log(strings[5]) //Print Undefined


//OPERATORS

let age = 22;
let canVote = (age > 18);
console.log(canVote)


// FUNCTION DECLARATION (It defines a function, we can use n times.. Like a Helper)

function greet(name) {     //greet is the name of function
    return "Hi," + name;
}

// Function call
let message = greet("Amit"); // "Hello, Amit"
console.log(message)

function Sum(a,b) { // Here Sum is the name of function and a,b are the vairbles used here
    TotalSum = a+b; // Here sum of a+b is performed 
    return TotalSum; // With retrun Keyword, we return the TotalSum 
}

let Answer = Sum(2,3); // Here we assign the value to 2,3 to a,b
console.log(Answer) // Here we print the output 
