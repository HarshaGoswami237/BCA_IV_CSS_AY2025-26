# Week 3, Day 1: Functions as Values and Scope

**Duration:** 180 minutes (90 min theory + 90 min practical)  
**Date:** February 17, 2026  
**Learning Outcome:** Understand functions as values, scope concepts, and function parameters

---

## 📚 THEORY SESSION (90 minutes)

### 1. Functions as Values

In JavaScript, **functions are values** - they can be stored in variables, passed as arguments, and returned from other functions.

```javascript
// ============================================
// Traditional: Function is a statement
// ============================================
function greet(name) {
    return "Hello, " + name + "!";
}


// ============================================
// As a Value: Store function in variable
// ============================================
const greetFunc = function(name) {
    return "Hello, " + name + "!";
};

console.log(greetFunc("Alice"));  // Hello, Alice!


// Function in a variable has no name (anonymous)
const add = function(a, b) {
    return a + b;
};

console.log(add(5, 3));  // 8
```

---

### 2. Functions Taking Functions as Arguments

Functions can accept other functions as parameters:

```javascript
// Simple example: Custom operation on numbers
function performOperation(a, b, operation) {
    return operation(a, b);  // Call the operation function
}

// Create different operations
const add = function(x, y) {
    return x + y;
};

const subtract = function(x, y) {
    return x - y;
};

const multiply = function(x, y) {
    return x * y;
};

// Use the same function with different operations
console.log(performOperation(10, 5, add));       // 15
console.log(performOperation(10, 5, subtract));  // 5
console.log(performOperation(10, 5, multiply));  // 50
```

---

### 3. Understanding Scope

**Scope** determines where a variable is accessible. JavaScript has:
- **Global scope** - Everywhere
- **Function scope** - Inside the function
- **Block scope** - Inside {} (with let/const)

```javascript
// ============================================
// GLOBAL SCOPE
// ============================================
const globalVar = "I'm global";

function showGlobal() {
    console.log(globalVar);  // Can access global
}

showGlobal();  // Output: I'm global


// ============================================
// FUNCTION SCOPE
// ============================================
function myFunction() {
    const localVar = "I'm local";
    console.log(localVar);   // ✅ Can access
}

myFunction();          // Output: I'm local
// console.log(localVar);  // ❌ Error! Not accessible here


// ============================================
// BLOCK SCOPE (let/const)
// ============================================
if (true) {
    let blockVar = "Only in block";
    console.log(blockVar);  // ✅ Can access
}

// console.log(blockVar);  // ❌ Error! Not accessible


// ============================================
// Important: var leaks out of blocks
// ============================================
if (true) {
    var oldVar = "Uses var";
}
console.log(oldVar);   // ✅ Accessible (leaked!)

// This is why we prefer let/const!
```

---

### 4. Scope Chain

Inner scopes can access outer scopes:

```javascript
const outerVar = "Outer";

function outer() {
    const outerLocal = "Outer Function";
    
    function inner() {
        const innerLocal = "Inner Function";
        
        // Can access all:
        console.log(outerVar);      // "Outer"
        console.log(outerLocal);    // "Outer Function"
        console.log(innerLocal);    // "Inner Function"
    }
    
    inner();
    
    // Cannot access innerLocal
    // console.log(innerLocal);  // ❌ Error
}

outer();
```

---

### 5. Parameters as Local Variables

Function parameters are local to that function:

```javascript
const globalValue = 100;

function calculate(x, y) {  // x and y are parameters (local)
    const result = x + y;   // result is local
    return result;
}

console.log(calculate(5, 3));  // 8

// x, y, result don't exist here
// console.log(x);      // ❌ Error
// console.log(y);      // ❌ Error
// console.log(result); // ❌ Error
```

---

### 6. Variable Shadowing

A local variable can have the same name as a global one:

```javascript
const message = "Global Message";

function test() {
    const message = "Local Message";  // Shadows global
    console.log(message);  // Local Message
}

test();
console.log(message);  // Global Message

// The local one takes priority!
```

---

## ✅ PRACTICAL SESSION (90 minutes)

### Exercise 1.1: Functions as Values

**Objective:** Store and use functions as values

```javascript
console.log("=== Exercise 1.1: Functions as Values ===");

// Store calculator functions
const square = function(n) {
    return n * n;
};

const cube = function(n) {
    return n * n * n;
};

const doubleIt = function(n) {
    return n * 2;
};

// Store them in an array
const operations = [square, cube, doubleIt];

// Use each one
console.log("5 squared: " + operations[0](5));  // 25
console.log("5 cubed: " + operations[1](5));    // 125
console.log("5 doubled: " + operations[2](5));  // 10

// Function taking function as argument
function applyOperation(num, func) {
    return func(num);
}

console.log("Apply square: " + applyOperation(7, square));  // 49
```

---

### Exercise 1.2: Understanding Scope

**Objective:** Practice scope concepts

```javascript
console.log("=== Exercise 1.2: Scope Examples ===");

const GLOBAL_CONSTANT = 1000;

function bankAccount() {
    const balance = 5000;  // Function scope
    
    function deposit(amount) {  // Nested function
        const newBalance = balance + amount;  // Can access balance
        return newBalance;
    }
    
    function withdraw(amount) {
        return balance - amount;
    }
    
    console.log("Initial balance: " + balance);
    console.log("After deposit 1000: " + deposit(1000));
    console.log("After withdraw 500: " + withdraw(500));
    
    // Can't access deposit/withdraw here
}

bankAccount();

// console.log(deposit(1000));  // ❌ Error
```

---

### Exercise 1.3: Higher-Order Functions

**Objective:** Functions that take/return functions

```javascript
console.log("=== Exercise 1.3: Higher-Order Functions ===");

// Function that returns a function
function createMultiplier(factor) {
    return function(num) {
        return num * factor;
    };
}

// Create specific multipliers
const double = createMultiplier(2);     // Returns function
const triple = createMultiplier(3);
const tenTimes = createMultiplier(10);

console.log("5 doubled: " + double(5));      // 10
console.log("5 tripled: " + triple(5));      // 15
console.log("5 × 10: " + tenTimes(5));       // 50

// Function that processes with a filter
function processNumbers(numbers, filter) {
    const result = [];
    
    for (let i = 0; i < numbers.length; i++) {
        if (filter(numbers[i])) {
            result.push(numbers[i]);
        }
    }
    
    return result;
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const isEven = function(n) {
    return n % 2 === 0;
};

const isGreaterThan5 = function(n) {
    return n > 5;
};

console.log("Even numbers: " + processNumbers(nums, isEven));           // 2,4,6,8,10
console.log("Greater than 5: " + processNumbers(nums, isGreaterThan5)); // 6,7,8,9,10
```

---

### Exercise 1.4: Practical Application - Payment Processor

**Objective:** Use functions as values in a real-world scenario

```javascript
console.log("=== Exercise 1.4: Payment Processor ===");

// Different payment methods
const creditCard = function(amount) {
    const fee = amount * 0.02;  // 2% fee
    return {
        method: "Credit Card",
        total: amount + fee,
        fee: fee.toFixed(2)
    };
};

const debitCard = function(amount) {
    const fee = amount * 0.01;  // 1% fee
    return {
        method: "Debit Card",
        total: amount + fee,
        fee: fee.toFixed(2)
    };
};

const upi = function(amount) {
    const fee = amount * 0.005;  // 0.5% fee
    return {
        method: "UPI",
        total: amount + fee,
        fee: fee.toFixed(2)
    };
};

const cash = function(amount) {
    return {
        method: "Cash",
        total: amount,
        fee: "0.00"
    };
};

// Process payment with any method
function processPayment(amount, paymentMethod) {
    const result = paymentMethod(amount);
    
    console.log("Payment Method: " + result.method);
    console.log("Amount: ₹" + amount);
    console.log("Fee: ₹" + result.fee);
    console.log("Total: ₹" + result.total.toFixed(2));
    console.log("─────────────────────");
}

// Test different methods
processPayment(1000, creditCard);
processPayment(1000, debitCard);
processPayment(1000, upi);
processPayment(1000, cash);
```

---

### Exercise 1.5: Closures (Introduction)

**Objective:** Basic closure concept

```javascript
console.log("=== Exercise 1.5: Introduction to Closures ===");

// A closure is a function with access to outer scope
function createCounter() {
    let count = 0;  // Outer scope variable
    
    return function() {
        count++;
        return count;
    };
}

const counter = createCounter();

console.log(counter());  // 1
console.log(counter());  // 2
console.log(counter());  // 3
console.log(counter());  // 4

// Each counter is independent
const counter2 = createCounter();
console.log(counter2());  // 1 (fresh start)

// Practical example: Secret password
function createPasswordChecker(correctPassword) {
    let attempts = 0;
    
    return function(guess) {
        attempts++;
        
        if (guess === correctPassword) {
            return "Correct! (Attempts: " + attempts + ")";
        } else {
            return "Wrong! (Attempt " + attempts + "/3)";
        }
    };
}

const checker = createPasswordChecker("secret123");

console.log("\nPassword Login:");
console.log(checker("admin"));      // Wrong! (Attempt 1/3)
console.log(checker("password"));   // Wrong! (Attempt 2/3)
console.log(checker("secret123"));  // Correct! (Attempts: 3)
```

---

## 🎯 Key Concepts Summary

### Function as Value
```javascript
const func = function() { return 42; };
```

### Function Taking Function
```javascript
function apply(f) {
    return f();
}
apply(function() { return 42; });
```

### Scope Rules
```javascript
const global = 1;
function test() {
    const local = 2;
    // Can use: global, local
    // Can't use: anything declared in other functions
}
```

---

## 📋 Practice Challenges

### Challenge 1: Calculator with Operations
Create functions for +, -, ×, ÷  
Store in array, apply to numbers

### Challenge 2: Logger Function
Create function that creates logging functions  
Each logs with timestamp

### Challenge 3: Rate Limiter
Create function that limits how often another function runs

---

## ✅ Checklist

- [ ] Understand functions as values
- [ ] Can pass functions to other functions
- [ ] Understand global/function/block scope
- [ ] Know variable shadowing
- [ ] Can use higher-order functions
- [ ] Basic closure understanding
- [ ] Completed all exercises
- [ ] Challenge questions attempted

---

## 📚 Summary

| Concept | Meaning |
|---------|---------|
| Functions as values | Functions stored in variables |
| Higher-order | Functions taking/returning functions |
| Global scope | Accessible everywhere |
| Function scope | Accessible inside function |
| Block scope | Accessible inside {} |
| Closure | Function with access to outer scope |

---

## 📖 Today's Learning Path

**09:00-09:30 (30 min):** Theory - Functions as Values  
**09:30-10:00 (30 min):** Theory - Scope & Closures  
**10:00-10:30 (30 min):** Practice - Exercises 1.1-1.3  
**10:30-11:00 (30 min):** Practice - Exercises 1.4-1.5  
**11:00-11:30 (30 min):** Challenges & Wrap-up  

**Next Day Preview:** Arrays - Storing multiple values!

---

**File:** `Curriculum/Week-3/Day1-Functions-As-Values-And-Scope.md`  
**Status:** Complete ✅  
**Last Updated:** February 2026
