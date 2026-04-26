// Helper: prints to both page AND console
function logToPage(message) {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML += message + '<br>';
    console.log(message); // still works on desktop
}

// Clear any old output first
document.getElementById('output').innerHTML = '';

logToPage("=== JS Practice Output ===");

// Variable declarations from the task
let name = "Your Name";
let age = 25;
const birthYear = 1999;

logToPage("typeof name: " + typeof name);    // string
logToPage("typeof age: " + typeof age);      // number
logToPage("typeof true: " + typeof true);    // boolean

// let vs const
let score = 100;
score = 150;  // Works!
logToPage("Updated score: " + score);

const PI = 3.14159;
// PI = 3;  // Error! const cannot be reassigned
logToPage("PI value: " + PI);

logToPage("<br>=== Variable Practice Exercise ===");

// 1. Your name (string) - CHANGE THIS
let myName = "Jordan"; 
logToPage("My name is: " + myName);
logToPage("Type of myName: " + typeof myName);

// 2. Your age (number) - CHANGE THIS
let myAge = 20;
logToPage("I am " + myAge + " years old");
logToPage("Type of myAge: " + typeof myAge);

// 3. Whether you're a student (boolean) - CHANGE THIS
let isStudent = true;
logToPage("Student status: " + isStudent);
logToPage("Type of isStudent: " + typeof isStudent);

// 4. Your favorite colors (array) - CHANGE THIS
let favoriteColors = ["purple", "teal", "orange"];
logToPage("My favorite colors: " + favoriteColors.join(", "));
logToPage("Type of favoriteColors: " + typeof favoriteColors);

// 5. Today's date
const today = new Date();
logToPage("Today is: " + today.toDateString());
logToPage("Type of today: " + typeof today);

logToPage("<br>=== Done! ===");
