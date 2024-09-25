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

//let age = 22;
//let canVote = (age > 18);
//console.log(canVote)


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

/*function canVote(age){
    Result = (age>18);
    return Result;
}

let Output = canVote(25);
console.log(Output)*/


/*function canVote(age){ // Using if-else
    if(age>18){
        return true;
    }
    else{
        return false;
    }
}

let Output = canVote(15)
console.log(Output)*/

//IF-ELSE

/*if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}*/

// For loop
for (let i = 0; i < 5; i++) { //updation i++ runs after the output is printed if the condition is true.
    console.log(i); // Outputs 0 to 4
}

// While loop
let j = 0;
while (j < 5) {
    console.log(j); // Outputs 0 to 4
    j++;
}

let totalUsers = users. length; //To avoid hard coding

