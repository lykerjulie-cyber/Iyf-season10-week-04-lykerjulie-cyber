console.log("\n=== Daily Challenges for Juliet Adhiambo ===");

// Day 1: FizzBuzz
console.log("\nDay 1: FizzBuzz 1-20");
for (let i = 1; i <= 20; i++) {
    let output = "";
    if (i % 3 === 0) output += "Fizz";
    if (i % 5 === 0) output += "Buzz";
    console.log(output || i);
}

// Day 2: Reverse a String
const reverseString = str => str.split('').reverse().join('');
console.log("\nDay 2: Reverse Strings");
console.log(`Reverse "Juliet": ${reverseString("Juliet")}`);
console.log(`Reverse "Adhiambo": ${reverseString("Adhiambo")}`);
console.log(`Reverse "violet": ${reverseString("violet")}`);
console.log(`Reverse "green": ${reverseString("green")}`);

// Day 3: Find Largest Number
const findLargest = arr => arr.reduce((max, num) => num > max? num : max);
const findLargestLoop = arr => {
    let largest = arr[0];
    for (let num of arr) if (num > largest) largest = num;
    return largest;
};
const julietAges = [18, 25, 32, 29, 40];
console.log("\nDay 3: Largest Number");
console.log(`Largest from [18, 25, 32, 29, 40]: ${findLargest(julietAges)}`);

// Day 4: Remove Duplicates
const removeDupes1 = arr => [...new Set(arr)];
const removeDupes2 = arr => arr.filter((item, index) => arr.indexOf(item) === index);
const colorArray = ["violet", "green", "violet", "juliet", "green", "blue"];
console.log("\nDay 4: Remove Duplicates");
console.log("Original:", colorArray);
console.log("Unique with Set:", removeDupes1(colorArray));
console.log("Unique with filter:", removeDupes2(colorArray));

// Day 5: Palindrome Checker
const isPalindrome = str => {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleaned === cleaned.split('').reverse().join('');
};

console.log("\nDay 5: Palindrome Checker");
console.log(`Is "Juliet" a palindrome? ${isPalindrome("Juliet")}`);
console.log(`Is "racecar" a palindrome? ${isPalindrome("racecar")}`);
console.log(`Is "A man a plan a canal Panama"? ${isPalindrome("A man a plan a canal Panama")}`);

// Bonus: Using your colors
const describeJulietColors = () => {
    const colors = ["violet", "green"];
    return `Juliet loves ${colors.join(' and ')} - they represent creativity and growth!`;
};
console.log("\nBonus:", describeJulietColors());
