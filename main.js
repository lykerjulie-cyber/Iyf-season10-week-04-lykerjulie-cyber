
console.log("=== IYF Week 4 - Juliet Adhiambo's JS Practice ===");

// Task 7.1: Variable Practice
let myName = "Juliet Adhiambo";
let firstName = "Juliet";
let age = 32;
const isStudent = true;
let favoriteColors = ["violet", "green", "juliet", "emerald"];
let todaysDate = new Date();

console.log(`My name is: ${myName}`);
console.log(`I am ${age} years old`);
console.log(`Am I a student? ${isStudent}`);
console.log(`Favorite colors: ${favoriteColors.join(', ')}`);
console.log(`Today is: ${todaysDate.toDateString()}`);

// Task 7.2: Data Types & Operators Challenge
console.log("\n=== Age Calculations for Juliet ===");
const DAYS_IN_YEAR = 365.25;
const HOURS_IN_DAY = 24;

let ageInDays = Math.floor(age * DAYS_IN_YEAR);
let ageInHours = ageInDays * HOURS_IN_DAY;
let yearTurn100 = new Date().getFullYear() + (100 - age);

console.log(`Your age in days: ~${ageInDays} days`);
console.log(`Your age in hours: ~${ageInHours} hours`);
console.log(`You'll turn 100 in the year: ${yearTurn100}`);

// String operations with your name
let fullName = firstName + " Adhiambo";
let greeting = `Hello, ${firstName}! You love ${favoriteColors[0]} and ${favoriteColors[1]}.`;
console.log(greeting);
console.log(`Your name has ${firstName.length} characters.`);
console.log(fullName.toUpperCase());
console.log(fullName.includes("Juliet"));

// Task 7.3: Functions
console.log("\n=== Functions ===");

const calculateArea = (width, height) => width * height;
const celsiusToFahrenheit = (celsius) => (celsius * 9/5) + 32;
const isEven = (number) => number % 2 === 0;

const getInitials = (fullName) => {
    return fullName.split(' ').map(word => word.charAt(0).toUpperCase()).join('');
};

const reverseString = (str) => str.split('').reverse().join('');

const calculateTip = (bill, tipPercent = 15) => {
    return bill * (tipPercent / 100);
};

function greet(name = "Guest", greeting = "Hello") {
    return `${greeting}, ${name}!`;
}

console.log(`Area 5x10: ${calculateArea(5, 10)}`);
console.log(`25°C to F: ${celsiusToFahrenheit(25)}°F`);
console.log(`Is 32 even? ${isEven(age)}`);
console.log(`Initials: ${getInitials(myName)}`);
console.log(`Reverse "Juliet": ${reverseString(firstName)}`);
console.log(greet(firstName, "Karibu"));
console.log(`Tip on $50: $${calculateTip(50)}`);

// Task 7.4: Control Flow
console.log("\n=== FizzBuzz 1-15 ===");
for (let i = 1; i <= 15; i++) {
    if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
}

// Print even numbers 1-50
console.log("\nEven numbers 1-50:");
for (let i = 2; i <= 50; i += 2) {
    console.log(i);
}

// Triangle of stars
let triangle = "\nTriangle:\n";
for (let i = 1; i <= 5; i++) {
    triangle += "*".repeat(i) + "\n";
}
console.log(triangle);

// Mini-Project: Calculator
function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) {
    if (b === 0) return "Error: Cannot divide by zero";
    return a / b;
}
function modulus(a, b) { return a % b; }
function power(a, b) { return a ** b; }

function calculate(num1, operator, num2) {
    switch (operator) {
        case "+": return add(num1, num2);
        case "-": return subtract(num1, num2);
        case "*": return multiply(num1, num2);
        case "/": return divide(num1, num2);
        case "%": return modulus(num1, num2);
        case "**": return power(num1, num2);
        default: return "Invalid operator";
    }
}

console.log("\n=== Calculator Tests ===");
console.log(`32 + 10 = ${calculate(32, "+", 10)}`);
console.log(`32 - 10 = ${calculate(32, "-", 10)}`);
console.log(`32 * 2 = ${calculate(32, "*", 2)}`);
console.log(`32 / 4 = ${calculate(32, "/", 4)}`);
console.log(`32 / 0 = ${calculate(32, "/", 0)}`);
console.log(`10 % 3 = ${calculate(10, "%", 3)}`);
console.log(`2 ** 5 = ${calculate(2, "**", 5)}`);
