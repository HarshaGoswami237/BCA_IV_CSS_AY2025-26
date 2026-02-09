# Week 2, Day 2: Functions and Return Values

**Duration:** 180 minutes (90 min theory + 90 min practical)  
**Date:** February 11, 2026  
**Learning Outcome:** Understand functions as reusable code blocks and how to use return values

---

## 📚 THEORY SESSION (90 minutes)

### 1. What is a Function?

A **function** is a reusable block of code that performs a specific task.

**Real-World Analogy:** A function is like a kitchen appliance
- **Blender:** Takes ingredients (input) → Blends them (process) → Produces juice (output)
- **Function:** Takes parameters (input) → Processes code (process) → Returns result (output)

```javascript
// Without functions (Repetitive)
let price1 = 100;
let discountedPrice1 = price1 * 0.9;
console.log("Price: ₹" + discountedPrice1);

let price2 = 200;
let discountedPrice2 = price2 * 0.9;
console.log("Price: ₹" + discountedPrice2);

let price3 = 500;
let discountedPrice3 = price3 * 0.9;
console.log("Price: ₹" + discountedPrice3);

// With functions (Clean & Reusable)
function applyDiscount(price) {
    return price * 0.9;
}

console.log("Price: ₹" + applyDiscount(100));  // ₹90
console.log("Price: ₹" + applyDiscount(200));  // ₹180
console.log("Price: ₹" + applyDiscount(500));  // ₹450
```

---

### 2. Defining a Function

#### Traditional Function Syntax

```javascript
// ============================================
// FORMAT:
// function functionName(parameter1, parameter2) {
//     // Code to execute
//     return value;  // Optional
// }
// ============================================

function greet(name) {
    return "Hello, " + name + "!";
}

// Call the function
console.log(greet("Alice"));    // Output: Hello, Alice!
console.log(greet("Bob"));      // Output: Hello, Bob!


// Function with multiple parameters
function addNumbers(num1, num2) {
    return num1 + num2;
}

console.log(addNumbers(5, 3));   // Output: 8
console.log(addNumbers(10, 20)); // Output: 30


// Function with no parameters
function getCurrentTime() {
    return new Date().getHours() + ":" + new Date().getMinutes();
}

console.log(getCurrentTime());   // Output: 14:30 (example)
```

---

### 3. Parameters and Arguments

**Parameter** = Variable listed in function definition  
**Argument** = Actual value passed when calling function

```javascript
// ============================================
// PARAMETERS (in definition)
// ============================================
function multiply(a, b) {  // 'a' and 'b' are parameters
    return a * b;
}

// ============================================
// ARGUMENTS (in function call)
// ============================================
multiply(5, 3);            // 5 and 3 are arguments
multiply(10, 7);           // 10 and 7 are arguments
```

---

### 4. Return Values

The **return** statement sends a value back from the function.

```javascript
// Function WITH return
function absolute(num) {
    if (num < 0) {
        return -num;    // Return positive value
    } else {
        return num;     // Return as is
    }
}

console.log(absolute(-5));   // Output: 5
console.log(absolute(5));    // Output: 5


// Function WITHOUT return (returns undefined)
function greetPerson(name) {
    console.log("Hello, " + name);
    // No return statement - returns undefined
}

let result = greetPerson("Alice");
console.log(result);         // Output: undefined
```

---

### 5. console.log() Function

The **console.log()** function is built-in and displays output to the browser console.

```javascript
// Basic output
console.log("Hello, World!");

// Multiple values
console.log("Name:", "Alice", "Age:", 30);

// With calculations
console.log("5 + 3 =", 5 + 3);

// With variables
let score = 95;
console.log("Your score:", score);

// Template literals (easier way)
let name = "Bob";
let age = 25;
console.log(`Name: ${name}, Age: ${age}`);
```

---

### 6. Arrow Functions (Modern Syntax)

**Arrow functions** are a shorter way to write functions (ES6+).

```javascript
// ============================================
// Traditional Function
// ============================================
function add(a, b) {
    return a + b;
}


// ============================================
// Arrow Function (same as above)
// ============================================
const add = (a, b) => {
    return a + b;
};


// ============================================
// Arrow Function (shortened)
// ============================================
const add = (a, b) => a + b;  // Implicit return


// Examples
const square = (num) => num * num;
console.log(square(5));        // Output: 25

const greet = (name) => "Hello, " + name;
console.log(greet("Charlie")); // Output: Hello, Charlie

const isEven = (num) => num % 2 === 0;
console.log(isEven(4));        // Output: true
console.log(isEven(7));        // Output: false
```

---

## ✅ PRACTICAL SESSION (90 minutes)

### Exercise 2.1: Simple Function - Greetings

**Objective:** Create and use basic functions

```javascript
// Problem: Create greeting messages for different times

function goodMorning(name) {
    return "Good morning, " + name + "! Hope you have a great day!";
}

function goodEvening(name) {
    return "Good evening, " + name + "! Have a relaxing night!";
}

function goodNight(name) {
    return "Good night, " + name + "! Sleep well!";
}

// Test functions
console.log(goodMorning("Alice"));   // Good morning, Alice! ...
console.log(goodEvening("Bob"));     // Good evening, Bob! ...
console.log(goodNight("Charlie"));   // Good night, Charlie! ...
```

---

### Exercise 2.2: Function with Calculations

**Objective:** Use functions to perform mathematical operations

```javascript
// Problem: Create functions for common calculations

// Calculate area of rectangle
function rectangleArea(length, width) {
    return length * width;
}

// Calculate area of circle
function circleArea(radius) {
    const PI = 3.14159;
    return PI * radius * radius;
}

// Calculate percentage
function calculatePercentage(obtained, total) {
    return (obtained / total) * 100;
}

// Test functions
console.log("Rectangle area (5m × 3m): " + rectangleArea(5, 3) + " m²");
console.log("Circle area (radius 4m): " + circleArea(4).toFixed(2) + " m²");
console.log("Percentage (75 out of 100): " + calculatePercentage(75, 100) + "%");
```

---

### Exercise 2.3: Using console.log() Effectively

**Objective:** Understand console.log for debugging and output

```javascript
// Problem: Create an invoice system using console.log

function createInvoice(itemName, price, quantity) {
    const subtotal = price * quantity;
    const tax = subtotal * 0.18;
    const total = subtotal + tax;
    
    console.log("=== INVOICE ===");
    console.log("Item:", itemName);
    console.log("Price per unit: ₹" + price);
    console.log("Quantity:", quantity);
    console.log("Subtotal: ₹" + subtotal);
    console.log("Tax (18%): ₹" + tax.toFixed(2));
    console.log("Total: ₹" + total.toFixed(2));
    console.log("================");
}

// Test
createInvoice("Laptop", 50000, 2);
console.log();
createInvoice("Mouse", 500, 5);
```

**Output:**
```
=== INVOICE ===
Item: Laptop
Price per unit: ₹50000
Quantity: 2
Subtotal: ₹100000
Tax (18%): ₹18000
Total: ₹118000
================

=== INVOICE ===
Item: Mouse
Price per unit: ₹500
Quantity: 5
Subtotal: ₹2500
Tax (18%): ₹450
Total: ₹2950
================
```

---

### Exercise 2.4: Return Values and Using Results

**Objective:** Use function return values in other operations

```javascript
// Problem: Calculate student's final grade from multiple exams

function calculateAverage(exam1, exam2, exam3) {
    return (exam1 + exam2 + exam3) / 3;
}

function getGrade(average) {
    if (average >= 90) return "A";
    if (average >= 80) return "B";
    if (average >= 70) return "C";
    if (average >= 60) return "D";
    return "F";
}

// Use function results in another function
let studentName = "Alice";
let avg = calculateAverage(85, 92, 88);  // Returns 88.33
let grade = getGrade(avg);               // Returns "B"

console.log(studentName + "'s average: " + avg.toFixed(2));
console.log(studentName + "'s grade: " + grade);
```

---

### Exercise 2.5: Arrow Functions

**Objective:** Write modern, concise functions

```javascript
// Problem: Create utility functions using arrow syntax

// Simple calculation
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

console.log("10 + 5 =", add(10, 5));              // 15
console.log("10 - 5 =", subtract(10, 5));         // 5
console.log("10 * 5 =", multiply(10, 5));         // 50
console.log("10 / 5 =", divide(10, 5));           // 2

// Check if number is positive
const isPositive = (num) => num > 0;
console.log("Is 5 positive?", isPositive(5));     // true
console.log("Is -5 positive?", isPositive(-5));   // false

// Convert temperature
const celsiusToFahrenheit = (celsius) => (celsius * 9/5) + 32;
console.log("25°C in Fahrenheit:", celsiusToFahrenheit(25) + "°F");  // 77°F
```

---

## 🎯 Key Concepts

### Function Benefits
```javascript
// ❌ Without functions - Repetitive
let user1Grade = (85 + 92 + 88) / 3;
let user2Grade = (90 + 88 + 85) / 3;
let user3Grade = (78 + 82 + 80) / 3;

// ✅ With functions - DRY (Don't Repeat Yourself)
const calculateAverage = (a, b, c) => (a + b + c) / 3;
let user1Grade = calculateAverage(85, 92, 88);
let user2Grade = calculateAverage(90, 88, 85);
let user3Grade = calculateAverage(78, 82, 80);
```

---

## 📋 Practice Challenges

### Challenge 1: Calculator Functions
Create functions for: square, cube, square root  
Test with multiple values

### Challenge 2: Temperature Converter
Create functions to convert between C, F, K  
Return formatted strings

### Challenge 3: Student Grade Helper
Create functions to:
- Calculate average marks
- Determine grade
- Generate report card

---

## ✅ Checklist

- [ ] Understand what a function is
- [ ] Can define traditional functions
- [ ] Can use parameters and arguments
- [ ] Understand return values
- [ ] Know console.log() well
- [ ] Can write arrow functions
- [ ] Completed all 5 exercises
- [ ] Challenged questions attempted

---

## 📚 Summary

| Concept | Description | Example |
|---------|-------------|---------|
| Function | Reusable code block | `function greet(name) { ... }` |
| Parameter | Variable in definition | `function add(a, b)` |
| Argument | Value passed to function | `add(5, 3)` |
| Return | Send value back | `return a + b;` |
| console.log | Display output | `console.log("Hello");` |
| Arrow function | Modern syntax | `const add = (a, b) => a + b;` |

---

## 📖 Today's Learning Path

**09:00-09:30 (30 min):** Theory - Function Definition  
**09:30-10:00 (30 min):** Theory - Return Values & console.log  
**10:00-10:30 (30 min):** Practice - Exercises 2.1-2.3  
**10:30-11:00 (30 min):** Practice - Exercises 2.4-2.5  
**11:00-11:30 (30 min):** Challenges & Wrap-up  

**Next Day Preview:** Control flow - Making decisions with if/else statements!

---

**File:** `Curriculum/Week-2/Day2-Functions-And-Return-Values.md`  
**Status:** Complete ✅  
**Last Updated:** February 2026
