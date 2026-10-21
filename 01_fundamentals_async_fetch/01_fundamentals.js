
let score = 10;
score = 15;

const pi = 3.14;
//pi = 3.15;

let data = "Hello";
console.log(typeof data);

data = 42;

console.log(typeof data);

// Primitive Types:
let age = 25;           // Number
let name = "Astrid";    // String
let isStudent = true;   // Boolean
let emptyValue = null;  // null (intentional "nothing")
let notDefined;         // undefined (declared but no value yet)


let text = "Welcome to Stockholm!";

console.log(text.length);
console.log(text.toUpperCase());

const city = "Gothenburg";
const greeting = `Hello ${name}!
Welcome to ${city}.`; // In java """ """

console.log(greeting);



// Arithmetic Operators: +, -, *, /, %, **

console.log(5 - 2);
console.log(5 % 2);  // 1 (Remainder)
console.log(2 ** 3); // 8 (2 to the power of 3)

// Comparison: >, <, >=, <=
console.log(5>2);

// Strict Equality (===) vs Loose Equality (==)
console.log(5 === "5"); // false (checks value AND type)
console.log(5 == "5");  // true (checks only value)

// Ternary Operator: shorthand for if...else
let userAge = 20;
let status = (userAge >= 18) ? "Adult" : "Minor";

console.log(status); // "Adult"


// Conditional Statements (if, switch)

let hour = 14;

if (hour < 12){
    console.log("Good morning");
} else if (hour < 18) {
    console.log("Good afternoon");
} else {
    console.log("Good evening");
}

let day = "Monday";
switch (day) {
    case "Monday":
        console.log("Start of the week!");
        break;
    case "Friday":
        console.log("Weekend is near!");
        break;
    default:
        console.log("Just another day.");
}

// Loops (for, for...of, for...in)
// for (initialization; condition; update) {
//   // Code to run on each iteration
// }

for (let i = 1; i <= 3; i++) {
    console.log("Count: " + i);
}

const colors = ["Red", "Green", "Blue"];
for (const color of colors) {
    console.log(color); // Best for Arrays
}

const personObj = { name: "Astrid", age: 25 };
for (const key in personObj) {
    console.log(key + ": " + personObj[key]); // Best for Objects
}


// *Function Declaration* AKA Methods in Java (Hoisted)

console.log(greetUser("Astrid"));

function greetUser (userName){
    return "Hello, " + userName + "!";
}

// Function Expression (Not Hoisted)
const addNumbers = function(a, b) {
  return a+b;
};

console.log(addNumbers(5,10));

// Arrow Functions (Modern Syntax)
const double = (number) => number * 2;
console.log(double(10)); // 20


// Default Parameters
function welcome(userName = "Guest") {
    console.log("Welcome, " + userName + "!");
}

welcome("Lukas");
welcome();



// Rest Parameters (treating multiple arguments as an array)
function sumAll(...numbers) {
    let total = 0;

    for (const number of numbers) {
        total += number;
    }

    return total;
}

function sumAll2 (...numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}

console.log(sumAll(1, 2, 3, 4, 5));


// Callback Functions: passing a function as an argument

function processInput(userName, callback) {
    callback(userName);
}

processInput("Astrid", (n) => console.log("Callback hello to " + n) );
processInput("Astrid", (n) => console.log(n.toUpperCase()));

// Arrays.
let fruits = ["Apple", "Banana"];
fruits.push("Orange");  // ["Apple", "Banana", "Orange"]
fruits.pop(); // ["Apple", "Banana"]
fruits.splice(1, 1);   // Removes 1 element at index 1 ["Apple"]

fruits.forEach(fruit => console.log("Fruit: " + fruit));


// Functional Methods (don't change original array)

const numbers = [10, 20, 30, 40];
const doubled = numbers.map(n => n * 2);
const large = numbers.filter(n => n > 25);
const sum = numbers.reduce((total, n) => total + n, 0);

// FIND: Returns the first element that matches a condition
const found = numbers.find(n => n > 25); // 30

// FINDINDEX: Returns the index of the first element that matches a condition
const index = numbers.findIndex(n => n > 25); // 2
// if the index is not found, it returns -1


//Objects and JSON

const car = {
    brand: "Volvo",
    model: "XC60",
    year: 2022
};

// Accessing Properties
console.log(car.brand);
console.log(car["model"]);

// Modifying Properties
car.year = 2023;
car.color = "Silver"; // Adding new
delete car.model;      // Deleting


//JSON

const jsonString = JSON.stringify(car); // Object to String
const backToObject = JSON.parse(jsonString); // String back to Object



//Error Handling

// Basic try...catch...finally block
try {
    // Code that might cause an error
    let x = y + 10; // y is not defined
} catch (error) {
    console.log("Error caught: " + error.message);
} finally {
    console.log("This always runs.");
}


function validateUser(name, age) {
    if (!name) {
        throw new Error("Name is required!"); // Execution stops here and jumps to 'catch'
    }
    if (age < 0) {
        throw new Error("Age cannot be negative!");
    }
    return `User ${name} is valid.`;
}

// Case 1: Catching a manual error (Invalid Name)
try {
    console.log(validateUser("", 25));
} catch (error) {
    console.log("Validation failed: " + error.message); // "Name is required!"
}

// Case 2: Catching a manual error (Invalid Age)
try {
    console.log(validateUser("Johan", -5));
} catch (error) {
    console.log("Validation failed: " + error.message); // "Age cannot be negative!"
}


// Case 3: Success
try {
    console.log(validateUser("Astrid", 28)); // "User Astrid is valid."
} catch (error) {
    console.log("Validation failed: " + error.message);
}

// Current date and time
const now = new Date();
console.log("Current Date:", now);

const birthday = new Date(1995, 4, 15); // May 15, 1995
console.log("Birthday Year:", birthday.getFullYear()); // 1995

// Formatting with toLocaleString()
// This is used to make the date human-readable based on region
console.log("Default Local Format:", now.toLocaleString());

// Specific format (English - USA)
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
console.log("US Format:", now.toLocaleString("en-US", options));