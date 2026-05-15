console.log("\n=== Lesson 8: Arrays & Objects ===");

// Task 8.1: Arrays with your colors
const julietColors = ["violet", "green", "juliet", "emerald"];
const numbers = [1, -2, 3, -4, 5, 11, 32]; // added your age

const doubled = numbers.map(num => num * 2);
const positiveOnly = numbers.filter(num => num >= 0);
const firstGreaterThan10 = numbers.find(num => num > 10);
const product = [1, 2, 3].reduce((total, num) => total * num, 1);

console.log("Doubled:", doubled);
console.log("Positive only:", positiveOnly);
console.log("First > 10:", firstGreaterThan10);

// Array methods with your colors
const upperColors = julietColors.map(color => color.toUpperCase());
const longColors = julietColors.filter(color => color.length > 5);
const hasGreen = julietColors.includes("green");

console.log("\n=== Juliet's Color Methods ===");
console.log("Uppercase:", upperColors);
console.log("Long colors >5 letters:", longColors);
console.log("Has green?", hasGreen);

// Task 8.2: Objects
const person = {
    firstName: "Juliet",
    lastName: "Adhiambo",
    age: 32,
    isStudent: true,
    hobbies: ["coding", "reading", "design"],
    favoriteColors: julietColors,
    address: {
        city: "Nairobi",
        country: "Kenya"
    }
};

console.log("\n=== Person Object ===");
console.log(person.firstName);
console.log(person.address.city);
console.log(`Colors: ${person.favoriteColors.join(', ')}`);

// Task 8.3: Array of Objects
const students = [
    { name: "Juliet Adhiambo", age: 32, grade: 94, major: "CS" },
    { name: "Alice", age: 22, grade: 85, major: "CS" },
    { name: "Bob", age: 20, grade: 72, major: "Math" },
    { name: "Charlie", age: 23, grade: 90, major: "CS" },
    { name: "Diana", age: 21, grade: 88, major: "Physics" },
    { name: "Eve", age: 22, grade: 95, major: "CS" }
];

const names = students.map(s => s.name);
const highAchievers = students.filter(s => s.grade > 80);
const juliet = students.find(s => s.name === "Juliet Adhiambo");
const avgGrade = students.reduce((sum, s) => sum + s.grade, 0) / students.length;
const csMajors = students.filter(s => s.major === "CS");
const sortedByGrade = [...students].sort((a, b) => b.grade - a.grade);
const hasTopStudent = students.some(s => s.grade > 90);
const allPassing = students.every(s => s.grade >= 60);

console.log("\n=== Student Analysis ===");
console.log("All students:", names);
console.log("Found Juliet:", juliet);
console.log("High achievers:", highAchievers.length);
console.log("Class average:", avgGrade.toFixed(2));

// Mini-Project: Grade Tracker
const gradeTracker = {
    students: [],

    addStudent(name, grades) {
        this.students.push({ name, grades });
    },

    getStudent(name) {
        return this.students.find(s => s.name === name) || null;
    },

    getStudentAverage(name) {
        const student = this.getStudent(name);
        if (!student) return null;
        const scores = Object.values(student.grades);
        return scores.reduce((sum, score) => sum + score, 0) / scores.length;
    },

    getSubjectAverage(subject) {
        const scores = this.students
          .map(s => s.grades[subject])
          .filter(score => score!== undefined);
        if (scores.length === 0) return 0;
        return scores.reduce((sum, score) => sum + score, 0) / scores.length;
    },

    getTopStudent() {
        if (this.students.length === 0) return null;
        return this.students.reduce((top, student) => {
            return this.getStudentAverage(student.name) > this.getStudentAverage(top.name)
              ? student : top;
        });
    },

    getStrugglingStudents() {
        return this.students.filter(s => this.getStudentAverage(s.name) < 70);
    },

    getLetterGrade(score) {
        if (score >= 90) return "A";
        if (score >= 80) return "B";
        if (score >= 70) return "C";
        if (score >= 60) return "D";
        return "F";
    },

    generateReportCard(name) {
        const student = this.getStudent(name);
        if (!student) return `Student ${name} not found`;

        const avg = this.getStudentAverage(name);
        let report = `\n=== Report Card: ${name} ===\n`;
        for (const [subject, grade] of Object.entries(student.grades)) {
            report += `${subject}: ${grade} ${this.getLetterGrade(grade)}\n`;
        }
        report += `Average: ${avg.toFixed(2)} ${this.getLetterGrade(avg)}`;
        return report;
    }
};

// Test with your data
gradeTracker.addStudent("Juliet Adhiambo", { math: 96, english: 91, science: 95, javascript: 98 });
gradeTracker.addStudent("Bob", { math: 72, english: 85, science: 78 });
gradeTracker.addStudent("Charlie", { math: 60, english: 65, science: 58 });

console.log("\n=== Grade Tracker Tests ===");
console.log(gradeTracker.generateReportCard("Juliet Adhiambo"));
console.log("Math class avg:", gradeTracker.getSubjectAverage("math").toFixed(2));
console.log("Top student:", gradeTracker.getTopStudent().name);
console.log("Struggling students:", gradeTracker.getStrugglingStudents().map(s => s.name));console.log("\n=== Lesson 8: Arrays & Objects ===");

// Task 8.1: Arrays with your colors
const julietColors = ["violet", "green", "juliet", "emerald"];
const numbers = [1, -2, 3, -4, 5, 11, 32]; // added your age

const doubled = numbers.map(num => num * 2);
const positiveOnly = numbers.filter(num => num >= 0);
const firstGreaterThan10 = numbers.find(num => num > 10);
const product = [1, 2, 3].reduce((total, num) => total * num, 1);

console.log("Doubled:", doubled);
console.log("Positive only:", positiveOnly);
console.log("First > 10:", firstGreaterThan10);

// Array methods with your colors
const upperColors = julietColors.map(color => color.toUpperCase());
const longColors = julietColors.filter(color => color.length > 5);
const hasGreen = julietColors.includes("green");

console.log("\n=== Juliet's Color Methods ===");
console.log("Uppercase:", upperColors);
console.log("Long colors >5 letters:", longColors);
console.log("Has green?", hasGreen);

// Task 8.2: Objects
const person = {
    firstName: "Juliet",
    lastName: "Adhiambo",
    age: 32,
    isStudent: true,
    hobbies: ["coding", "reading", "design"],
    favoriteColors: julietColors,
    address: {
        city: "Nairobi",
        country: "Kenya"
    }
};

console.log("\n=== Person Object ===");
console.log(person.firstName);
console.log(person.address.city);
console.log(`Colors: ${person.favoriteColors.join(', ')}`);

// Task 8.3: Array of Objects
const students = [
    { name: "Juliet Adhiambo", age: 32, grade: 94, major: "CS" },
    { name: "Alice", age: 22, grade: 85, major: "CS" },
    { name: "Bob", age: 20, grade: 72, major: "Math" },
    { name: "Charlie", age: 23, grade: 90, major: "CS" },
    { name: "Diana", age: 21, grade: 88, major: "Physics" },
    { name: "Eve", age: 22, grade: 95, major: "CS" }
];

const names = students.map(s => s.name);
const highAchievers = students.filter(s => s.grade > 80);
const juliet = students.find(s => s.name === "Juliet Adhiambo");
const avgGrade = students.reduce((sum, s) => sum + s.grade, 0) / students.length;
const csMajors = students.filter(s => s.major === "CS");
const sortedByGrade = [...students].sort((a, b) => b.grade - a.grade);
const hasTopStudent = students.some(s => s.grade > 90);
const allPassing = students.every(s => s.grade >= 60);

console.log("\n=== Student Analysis ===");
console.log("All students:", names);
console.log("Found Juliet:", juliet);
console.log("High achievers:", highAchievers.length);
console.log("Class average:", avgGrade.toFixed(2));

// Mini-Project: Grade Tracker
const gradeTracker = {
    students: [],

    addStudent(name, grades) {
        this.students.push({ name, grades });
    },

    getStudent(name) {
        return this.students.find(s => s.name === name) || null;
    },

    getStudentAverage(name) {
        const student = this.getStudent(name);
        if (!student) return null;
        const scores = Object.values(student.grades);
        return scores.reduce((sum, score) => sum + score, 0) / scores.length;
    },

    getSubjectAverage(subject) {
        const scores = this.students
          .map(s => s.grades[subject])
          .filter(score => score!== undefined);
        if (scores.length === 0) return 0;
        return scores.reduce((sum, score) => sum + score, 0) / scores.length;
    },

    getTopStudent() {
        if (this.students.length === 0) return null;
        return this.students.reduce((top, student) => {
            return this.getStudentAverage(student.name) > this.getStudentAverage(top.name)
              ? student : top;
        });
    },

    getStrugglingStudents() {
        return this.students.filter(s => this.getStudentAverage(s.name) < 70);
    },

    getLetterGrade(score) {
        if (score >= 90) return "A";
        if (score >= 80) return "B";
        if (score >= 70) return "C";
        if (score >= 60) return "D";
        return "F";
    },

    generateReportCard(name) {
        const student = this.getStudent(name);
        if (!student) return `Student ${name} not found`;

        const avg = this.getStudentAverage(name);
        let report = `\n=== Report Card: ${name} ===\n`;
        for (const [subject, grade] of Object.entries(student.grades)) {
            report += `${subject}: ${grade} ${this.getLetterGrade(grade)}\n`;
        }
        report += `Average: ${avg.toFixed(2)} ${this.getLetterGrade(avg)}`;
        return report;
    }
};

// Test with your data
gradeTracker.addStudent("Juliet Adhiambo", { math: 96, english: 91, science: 95, javascript: 98 });
gradeTracker.addStudent("Bob", { math: 72, english: 85, science: 78 });
gradeTracker.addStudent("Charlie", { math: 60, english: 65, science: 58 });

console.log("\n=== Grade Tracker Tests ===");
console.log(gradeTracker.generateReportCard("Juliet Adhiambo"));
console.log("Math class avg:", gradeTracker.getSubjectAverage("math").toFixed(2));
console.log("Top student:", gradeTracker.getTopStudent().name);
console.log("Struggling students:", gradeTracker.getStrugglingStudents().map(s => s.name));
