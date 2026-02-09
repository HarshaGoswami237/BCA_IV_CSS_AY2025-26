# Week 2, Day 1: Expressions, Statements, and Bindings

**Duration:** 180 minutes (90 min theory + 90 min practical)  
**Date:** February 10, 2026  
**Learning Outcome:** Understand the structure of JavaScript programs and how to store values using variables

---

## 📚 THEORY SESSION (90 minutes)

### 1. Expressions vs Statements

#### What is an Expression?
An **expression** is a fragment of code that produces a value. It can be evaluated.

```javascript
// Examples of expressions
10 + 20                     // Produces: 30
"Hello" + " World"         // Produces: "Hello World"
3 < 5                       // Produces: true
typeof 42                   // Produces: "number"
console.log("test")        // Produces: undefined (but has side effect)
```

**Key Point:** Expressions can be used anywhere a value is expected.

---

#### What is a Statement?
A **statement** is an instruction that performs an action. It doesn't produce a value that you can use in other code.

```javascript
// Examples of statements (we'll learn these soon)
if (age > 18) {
    console.log("Adult");
}

let name = "Alice";           // Variable declaration statement

for (let i = 0; i < 5; i++) {
    console.log(i);           // Loop statement
}
```

**Key Difference:**
- **Expression:** Produces a value → Can be used in assignments, calculations
- **Statement:** Performs action → Doesn't return a value (usually)

---

#### Real-World Analogy
Think of a recipe:
- **Expression:** "Measure 2 cups of flour" - produces a measurement
- **Statement:** "Preheat oven to 350°F" - performs an action

---

### 2. Bindings (Variables) - Storing Values

Variables are like named boxes 📦 that store values. When you need that value later, you just refer to the box name.

#### Three Ways to Declare Variables

```javascript
// ============================================
// METHOD 1: const (Constant - Preferred)
// ============================================
// Use this for values that DON'T change

const PI = 3.14159;
const firstName = "John";
const maxRetries = 3;

// PI = 3.14;  ❌ Error! Cannot reassign const

console.log(PI);           // Output: 3.14159
console.log(firstName);    // Output: John


// ============================================
// METHOD 2: let (Block-scoped Variable)
// ============================================
// Use this for values that WILL change

let counter = 0;
counter = 1;               // ✅ Allowed
counter = 2;               // ✅ Allowed

let age = 25;
age = 26;
age = 30;

console.log(counter);      // Output: 2
console.log(age);          // Output: 30


// ============================================
// METHOD 3: var (Legacy - AVOID)
// ============================================
// Old way of declaring variables - don't use

var x = 5;  // ❌ Try to avoid this
```

---

### 3. Naming Variables (Binding Names)

JavaScript has strict rules for variable names:

```javascript
// ✅ Valid names (Good practice)
let userName = "Alice";           // camelCase ✅
let user_name = "Bob";            // snake_case (avoid in JS)
let UserName = "Charlie";         // PascalCase (for classes)
let user123 = "Dave";             // Numbers okay (not first char)
let $ = 100;                      // $ allowed
let _ = "underscore";             // _ allowed

// ❌ Invalid names (Will cause errors)
let 123user = "Error";            // ❌ Can't start with number
let user-name = "Error";          // ❌ Hyphens not allowed
let user name = "Error";          // ❌ Spaces not allowed
let let = "Error";                // ❌ Reserved word
let if = "Error";                 // ❌ Reserved word
```

#### Naming Best Practices
```javascript
// ❌ BAD: Unclear names
let x = 25;
let a = "John";
let d = [1, 2, 3];

// ✅ GOOD: Descriptive names
let userAge = 25;
let userName = "John";
let userScores = [1, 2, 3];
```

---

### 4. The Environment

The **environment** is the collection of all variables and their values that exist in your program at any moment.

```javascript
const name = "Alice";
let age = 30;
const city = "New York";

// Current environment:
// {
//   name: "Alice",
//   age: 30,
//   city: "New York"
// }

console.log(name);  // "Alice" - retrieved from environment
age = 31;           // Modified in environment

// Environment updated to:
// {
//   name: "Alice",
//   age: 31,
//   city: "New York"
// }
```

---

## ✅ PRACTICAL SESSION (90 minutes)

### Exercise 1.1: Using Variables in Calculations

**Objective:** Understand how variables store and retrieve values

```javascript
// Problem: Calculate total cost of items in a shopping cart

const itemPrice = 50;
const quantity = 3;
const taxRate = 0.18;     // 18% tax

// Calculate subtotal
let subtotal = itemPrice * quantity;
console.log("Subtotal: ₹" + subtotal);           // ₹150

// Calculate tax
let tax = subtotal * taxRate;
console.log("Tax (18%): ₹" + tax);               // ₹27

// Calculate total
let total = subtotal + tax;
console.log("Total Price: ₹" + total);           // ₹177
```

**Key Concepts:**
- Stores intermediate values (subtotal, tax)
- Builds complex calculation step by step
- Easy to modify (change itemPrice, recalculate)

---

### Exercise 1.2: Updating Variable Values

**Objective:** Understand how let allows reassignment

```javascript
// Problem: Track a bank account balance

let balance = 1000;
console.log("Initial balance: ₹" + balance);     // ₹1000

// Deposit money
balance = balance + 500;
console.log("After deposit: ₹" + balance);       // ₹1500

// Withdraw money
balance = balance - 200;
console.log("After withdrawal: ₹" + balance);    // ₹1300

// Quick update syntax
balance += 300;  // Same as: balance = balance + 300
console.log("After another deposit: ₹" + balance);  // ₹1600

balance -= 100;  // Same as: balance = balance - 100
console.log("Final balance: ₹" + balance);       // ₹1500
```

**Operator Shortcuts:**
```javascript
let x = 10;
x += 5;   // x = x + 5 → x = 15
x -= 3;   // x = x - 3 → x = 12
x *= 2;   // x = x * 2 → x = 24
x /= 4;   // x = x / 4 → x = 6
```

---

### Exercise 1.3: Understanding const vs let

**Objective:** Know when to use const vs let

```javascript
// ============================================
// Use const for values that never change
// ============================================

const PI = 3.14159;           // Universal constant
const MAX_USERS = 100;        // Configuration constant
const CURRENCY_SYMBOL = "₹";  // Fixed text

// All of these are errors:
// PI = 3.14;              ❌ Cannot reassign
// MAX_USERS = 150;        ❌ Cannot reassign


// ============================================
// Use let for values that will change
// ============================================

let score = 0;                // Score increases during game
score = 10;
score = 25;
score = 100;                  // ✅ All allowed

let userName = "Guest";       // User logs in
userName = "Alice";           // ✅ Update allowed
```

**Rule of Thumb:**
- Default to **const**
- Only use **let** if you know the value will change
- Never use **var**

---

### Exercise 1.4: Creating a Simple Program

**Objective:** Write a complete mini-program using variables

```javascript
/*
 * Problem: Movie ticket pricing system
 * Calculate total cost for a family going to a movie
 */

// Constants (don't change)
const TICKET_PRICE = 250;      // Price per ticket
const BOOKING_FEE = 20;        // Per booking fee
const DISCOUNT_PERCENTAGE = 10; // Student discount

// Variables (change per customer)
let numberOfTickets = 4;
let studentCount = 1;

// Calculate prices
const fullPriceTickets = numberOfTickets - studentCount;
const studentTickets = studentCount;

let ticketCost = 
    (fullPriceTickets * TICKET_PRICE) + 
    (studentTickets * TICKET_PRICE * (1 - DISCOUNT_PERCENTAGE / 100));

let totalCost = ticketCost + BOOKING_FEE;

// Display results
console.log("=== Movie Ticket Pricing ===");
console.log("Regular tickets: " + fullPriceTickets);
console.log("Student tickets: " + studentTickets);
console.log("Ticket cost: ₹" + ticketCost);
console.log("Booking fee: ₹" + BOOKING_FEE);
console.log("Total cost: ₹" + totalCost);
console.log("Per ticket average: ₹" + (totalCost / numberOfTickets).toFixed(2));
```

**Output:**
```
=== Movie Ticket Pricing ===
Regular tickets: 3
Student tickets: 1
Ticket cost: ₹925
Booking fee: ₹20
Total cost: ₹945
Per ticket average: ₹236.25
```

---

### Exercise 1.5: The Environment in Action

**Objective:** Trace how the environment changes throughout a program

```javascript
/*
 * Trace the environment changes:
 */

console.log("--- Step 1: Initial state ---");
const name = "Alice";
const initialBalance = 5000;
console.log("Environment: name=" + name + ", initialBalance=" + initialBalance);

console.log("\n--- Step 2: Open savings account ---");
let savingsBalance = 0;
console.log("Environment: savingsBalance=" + savingsBalance);

console.log("\n--- Step 3: First deposit ---");
savingsBalance = savingsBalance + 1000;
console.log("Environment: savingsBalance=" + savingsBalance);

console.log("\n--- Step 4: Second deposit ---");
savingsBalance = savingsBalance + 1500;
console.log("Environment: savingsBalance=" + savingsBalance);

console.log("\n--- Step 5: Withdraw ---");
savingsBalance = savingsBalance - 500;
console.log("Environment: savingsBalance=" + savingsBalance);

console.log("\n--- Final state ---");
console.log(name + " has ₹" + savingsBalance + " remaining");
```

---

## 🎯 Key Takeaways

1. **Expression:** Produces a value
   ```javascript
   10 + 20        // Expression: produces 30
   ```

2. **Statement:** Performs an action
   ```javascript
   let x = 10;    // Statement: creates binding
   ```

3. **Bindings (Variables):** Named storage for values
   ```javascript
   const PI = 3.14159;  // Constant (doesn't change)
   let counter = 0;     // Variable (can change)
   ```

4. **Environment:** Collection of all current bindings
   ```javascript
   // After these lines, environment contains:
   const name = "Alice";
   let age = 30;
   // { name: "Alice", age: 30 }
   ```

---

## 📋 Practice Challenges

### Challenge 1: Personal Budget Calculator
Create a program that:
- Stores monthly income (const)
- Stores expenses (rent, food, transport, entertainment)
- Calculates remaining balance
- Uses let for running totals

### Challenge 2: Unit Conversion
Create a program that:
- Stores a distance in kilometers (const)
- Converts to miles, meters, feet
- Stores results in different variables
- Displays all conversions

### Challenge 3: Grade Book Entry
Create a program that:
- Stores student name (const)
- Stores marks for 5 subjects
- Calculates average
- Calculates percentage
- Displays report card

---

## ✅ Checklist

- [ ] Understand difference between expressions and statements
- [ ] Know when to use const vs let
- [ ] Can name variables correctly
- [ ] Understand the environment concept
- [ ] Can write programs that store and use variables
- [ ] Completed all 5 exercises
- [ ] Challenge questions attempted

---

## 📚 Summary

| Topic | Key Idea | Example |
|-------|----------|---------|
| Expressions | Produces a value | `10 + 20` |
| Statements | Performs an action | `let x = 10;` |
| const | Constant (unchanging) | `const PI = 3.14159;` |
| let | Variable (can change) | `let age = 25;` |
| Binding | Named storage | Store values for later use |
| Environment | All current bindings | Collection of all variables |

---

## 📖 Today's Learning Path

**09:00-09:30 (30 min):** Theory - Expressions & Statements  
**09:30-10:00 (30 min):** Theory - Bindings & Variables  
**10:00-10:30 (30 min):** Practice - Exercises 1.1-1.3  
**10:30-11:00 (30 min):** Practice - Exercises 1.4-1.5  
**11:00-11:30 (30 min):** Challenges & Wrap-up  

**Next Day Preview:** Functions and how to package code into reusable blocks!

---

**File:** `Curriculum/Week-2/Day1-Expressions-Statements-Bindings.md`  
**Status:** Complete ✅  
**Last Updated:** February 2026
