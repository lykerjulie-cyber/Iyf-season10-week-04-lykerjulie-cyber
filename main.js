// Variable declarations practice
let name = "Your Name"; 
let age = 25;
const birthYear = 1999;

// typeof operator
console.log(typeof name);    // string
console.log(typeof age);     // number
console.log(typeof true);    // boolean

// let vs const
let score = 100;
score = 150;  // Works!
console.log("Updated score:", score);

const PI = 3.14159;
// PI = 3;  // Error! const cannot be reassigned - uncomment to test
console.log("PI value:", PI);
// Exercise: Variable Practice
console.log("--- Variable Practice Exercise ---");

// 1. Your name (string)
let myName = "Alex Kim"; 
console.log("My name is:", myName);
console.log("Type of myName:", typeof myName);

// 2. Your age (number) 
let myAge = 22;
console.log("My age is:", myAge);
console.log("Type of myAge:", typeof myAge);

// 3. Whether you're a student (boolean)
let isStudent = true;
console.log("Am I a student?", isStudent);
console.log("Type of isStudent:", typeof isStudent);

// 4. Your favorite colors (array - preview for next lesson)
let favoriteColors = ["blue", "black", "forest green"];
console.log("My favorite colors are:", favoriteColors);
console.log("Type of favoriteColors:", typeof favoriteColors); // Note: arrays are type "object"

// 5. Today's date (use new Date())
const todaysDate = new Date();
console.log("Today's date is:", todaysDate);
console.log("Type of todaysDate:", typeof todaysDate); // Also "object"
