# Week 3, Day 2: Arrays and Array Methods

**Duration:** 180 minutes (90 min theory + 90 min practical)  
**Date:** February 18, 2026  
**Learning Outcome:** Create and manipulate arrays, understand array methods

---

## 📚 THEORY SESSION (90 minutes)

### 1. What is an Array?

An **array** is an ordered list of values. It's like a container with numbered slots.

```javascript
// Creating arrays
const fruits = ["Apple", "Banana", "Orange"];
const numbers = [1, 2, 3, 4, 5];
const mixed = [42, "Hello", true, 3.14];  // Can mix types
const empty = [];                         // Empty array

// Each item has an INDEX (starting at 0)
// fruits[0] = "Apple"
// fruits[1] = "Banana"
// fruits[2] = "Orange"
```

**Real-World Analogy:** Array is like a seat numbering in a theater
- Seat 0: Person 1
- Seat 1: Person 2
- Seat 2: Person 3

---

### 2. Accessing Array Elements

Use **index** (position) to access elements:

```javascript
const colors = ["Red", "Green", "Blue", "Yellow"];

// Accessing elements
console.log(colors[0]);      // "Red"
console.log(colors[1]);      // "Green"
console.log(colors[2]);      // "Blue"
console.log(colors[3]);      // "Yellow"
console.log(colors[4]);      // undefined (doesn't exist)

// Find array length
console.log(colors.length);  // 4

// Last element (length - 1)
console.log(colors[colors.length - 1]);  // "Yellow"
```

---

### 3. Modifying Arrays

```javascript
const numbers = [10, 20, 30];

// Change element at index
numbers[1] = 25;
console.log(numbers);  // [10, 25, 30]

// Add at end (if index >= length)
numbers[3] = 40;
console.log(numbers);  // [10, 25, 30, 40]

// Using push() - add to end
numbers.push(50);
console.log(numbers);  // [10, 25, 30, 40, 50]

// Using pop() - remove from end
numbers.pop();
console.log(numbers);  // [10, 25, 30, 40]

// Using shift() - remove from start
numbers.shift();
console.log(numbers);  // [25, 30, 40]

// Using unshift() - add to start
numbers.unshift(20);
console.log(numbers);  // [20, 25, 30, 40]
```

---

### 4. Looping Through Arrays

#### Using for Loop
```javascript
const items = ["A", "B", "C"];

for (let i = 0; i < items.length; i++) {
    console.log(items[i]);
}
// Output: A B C
```

#### Using forEach Method (Modern)
```javascript
const items = ["A", "B", "C"];

items.forEach(function(item) {
    console.log(item);
});
// Output: A B C

// With arrow function (shorter)
items.forEach(item => console.log(item));
```

---

### 5. Array Properties and Methods

```javascript
const arr = [10, 20, 30];

// Properties
console.log(arr.length);     // 3

// Methods (actions on arrays)
arr.push(40);               // Add to end
arr.pop();                  // Remove from end
arr.shift();                // Remove from start
arr.unshift(5);             // Add to start
arr.includes(20);           // Check if contains
arr.indexOf(20);            // Find position
arr.join(", ");             // Convert to string
arr.reverse();              // Reverse order
arr.sort();                 // Sort elements
```

---

### 6. Creating New Arrays from Old Ones

```javascript
const original = [1, 2, 3];

// Array copy (important!)
const copy = original;          // ❌ Just reference (same array)
const trueCopy = [...original]; // ✅ Real copy (new array)

// Combine arrays
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = [...arr1, ...arr2];  // [1, 2, 3, 4]
```

---

## ✅ PRACTICAL SESSION (90 minutes)

### Exercise 2.1: Creating and Accessing Arrays

**Objective:** Master basic array operations

```javascript
console.log("=== Exercise 2.1: Arrays Basics ===");

// Create arrays
const students = ["Alice", "Bob", "Charlie", "Diana"];
const scores = [95, 87, 92, 88];

// Access elements
console.log("First student: " + students[0]);      // Alice
console.log("Last student: " + students[students.length - 1]); // Diana
console.log("Second score: " + scores[1]);         // 87

// Array length
console.log("Number of students: " + students.length);  // 4

// Mixed array
const student1 = ["Alice", 25, true, 95];
console.log(student1[0]);   // Name
console.log(student1[1]);   // Age
console.log(student1[2]);   // Passed?
console.log(student1[3]);   // Score

// Modify elements
students[0] = "Alice (Updated)";
scores[1] = 90;

console.log("Updated: " + students[0]);
console.log("Updated score: " + scores[1]);
```

---

### Exercise 2.2: Array Methods

**Objective:** Use common array methods

```javascript
console.log("=== Exercise 2.2: Array Methods ===");

const numbers = [10, 20, 30];

console.log("Original: " + numbers);     // 10,20,30

// Add to end
numbers.push(40);
console.log("After push(40): " + numbers);  // 10,20,30,40

// Remove last
numbers.pop();
console.log("After pop(): " + numbers);     // 10,20,30

// Add to start
numbers.unshift(5);
console.log("After unshift(5): " + numbers);  // 5,10,20,30

// Remove first
numbers.shift();
console.log("After shift(): " + numbers);     // 10,20,30

// Find element
console.log("Index of 20: " + numbers.indexOf(20));  // 1
console.log("Contains 30? " + numbers.includes(30));  // true

// Convert to string
console.log("As string: " + numbers.join(", "));      // 10, 20, 30
```

---

### Exercise 2.3: Looping Through Arrays

**Objective:** Process each element in an array

```javascript
console.log("=== Exercise 2.3: Looping ===");

const products = ["Laptop", "Mouse", "Keyboard", "Monitor"];
const prices = [50000, 500, 2000, 15000];

// Using for loop
console.log("Products using for loop:");
for (let i = 0; i < products.length; i++) {
    console.log((i + 1) + ". " + products[i] + " - ₹" + prices[i]);
}

// Using forEach
console.log("\nProducts using forEach:");
products.forEach(function(product, index) {
    console.log("- " + product);
});

// Calculate total price
let total = 0;
for (let i = 0; i < prices.length; i++) {
    total = total + prices[i];
}
console.log("\nTotal price: ₹" + total);  // ₹67500

// Find most expensive
let maxPrice = prices[0];
for (let i = 1; i < prices.length; i++) {
    if (prices[i] > maxPrice) {
        maxPrice = prices[i];
    }
}
console.log("Most expensive: ₹" + maxPrice);  // ₹50000
```

---

### Exercise 2.4: Array of Objects

**Objective:** Combine arrays with objects for structured data

```javascript
console.log("=== Exercise 2.4: Array of Objects ===");

// Common pattern: Array of objects
const employees = [
    {name: "Alice", age: 28, salary: 60000},
    {name: "Bob", age: 34, salary: 75000},
    {name: "Charlie", age: 26, salary: 55000}
];

// Access properties
console.log("First employee: " + employees[0].name);
console.log("Bob's salary: ₹" + employees[1].salary);

// Loop through array of objects
console.log("\nEmployee List:");
for (let i = 0; i < employees.length; i++) {
    const emp = employees[i];
    console.log(emp.name + " - ₹" + emp.salary);
}

// Calculate total salary
let totalSalary = 0;
for (let i = 0; i < employees.length; i++) {
    totalSalary = totalSalary + employees[i].salary;
}
console.log("Total salary: ₹" + totalSalary);

// Find employee by name
function findEmployee(name) {
    for (let i = 0; i < employees.length; i++) {
        if (employees[i].name === name) {
            return employees[i];
        }
    }
    return undefined;
}

const found = findEmployee("Bob");
if (found) {
    console.log("Found: " + found.name + ", Age: " + found.age);
}
```

---

### Exercise 2.5: Real-World Application - Shopping Cart

**Objective:** Use arrays in a practical scenario

```javascript
console.log("=== Exercise 2.5: Shopping Cart ===");

const cart = [
    {id: 1, name: "Laptop", price: 50000, quantity: 1},
    {id: 2, name: "Mouse", price: 500, quantity: 2},
    {id: 3, name: "Keyboard", price: 2000, quantity: 1}
];

// Function to calculate item total
function calculateItemTotal(item) {
    return item.price * item.quantity;
}

// Function to display cart
function displayCart() {
    console.log("═══════════════════════════════");
    console.log("SHOPPING CART");
    console.log("═══════════════════════════════");
    
    let grandTotal = 0;
    
    for (let i = 0; i < cart.length; i++) {
        const item = cart[i];
        const itemTotal = calculateItemTotal(item);
        
        console.log(item.name + " × " + item.quantity + 
                    " = ₹" + itemTotal);
        
        grandTotal = grandTotal + itemTotal;
    }
    
    console.log("───────────────────────────────");
    console.log("TOTAL: ₹" + grandTotal);
    console.log("═══════════════════════════════");
}

// Add item to cart
function addToCart(productName, price, qty) {
    const item = {
        id: cart.length + 1,
        name: productName,
        price: price,
        quantity: qty
    };
    cart.push(item);
}

// Remove item from cart
function removeFromCart(itemId) {
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === itemId) {
            cart.splice(i, 1);  // Remove at index i
            return true;
        }
    }
    return false;
}

displayCart();

console.log("\nAdding headphones...");
addToCart("Headphones", 3000, 1);
displayCart();

console.log("\nRemoving Mouse...");
removeFromCart(2);
displayCart();
```

---

## 🎯 Array Best Practices

```javascript
// ✅ GOOD: Use descriptive names
const studentNames = ["Alice", "Bob"];
const scores = [95, 87];

// ❌ BAD: Unclear names
const s = ["Alice", "Bob"];
const a = [95, 87];

// ✅ GOOD: Consistent element types
const numbers = [1, 2, 3];

// ⚠️ AVOID: Mixed types (unless needed)
const mixed = [1, "two", 3];

// ✅ GOOD: Array of objects for structured data
const users = [
    {name: "Alice", age: 25},
    {name: "Bob", age: 30}
];
```

---

## 📋 Practice Challenges

### Challenge 1: Array Analyzer
Create function to find max, min, average in number array

### Challenge 2: Inventory System
Array of products with names, prices, quantities  
Calculate total value

### Challenge 3: Student Grades
Array of student objects  
Find highest score, calculate class average

---

## ✅ Checklist

- [ ] Understand array creation
- [ ] Can access elements by index
- [ ] Know array methods (push, pop, shift, unshift)
- [ ] Can loop through arrays
- [ ] Understand array length
- [ ] Can work with arrays of objects
- [ ] Completed all exercises
- [ ] Challenge questions attempted

---

## 📚 Summary

| Method | Purpose | Example |
|--------|---------|---------|
| push() | Add to end | `arr.push(5)` |
| pop() | Remove end | `arr.pop()` |
| shift() | Remove start | `arr.shift()` |
| unshift() | Add start | `arr.unshift(0)` |
| length | Array size | `arr.length` |
| indexOf() | Find position | `arr.indexOf(5)` |
| includes() | Check exists | `arr.includes(5)` |
| join() | Convert to string | `arr.join(", ")` |

---

## 📖 Today's Learning Path

**09:00-09:30 (30 min):** Theory - Array Basics  
**09:30-10:00 (30 min):** Theory - Array Methods  
**10:00-10:30 (30 min):** Practice - Exercises 2.1-2.3  
**10:30-11:00 (30 min):** Practice - Exercises 2.4-2.5  
**11:00-11:30 (30 min):** Challenges & Wrap-up  

**Next Day Preview:** Strings - Text manipulation and Experiment 13 (Palindrome)!

---

**File:** `Curriculum/Week-3/Day2-Arrays-And-Array-Methods.md`  
**Status:** Complete ✅  
**Last Updated:** February 2026
