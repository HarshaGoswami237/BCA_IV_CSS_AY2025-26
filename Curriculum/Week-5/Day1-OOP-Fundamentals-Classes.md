# Week 5, Day 1: Object-Oriented Programming Fundamentals and ES6 Classes

**Duration:** 180 minutes (90 min theory + 90 min practical)  
**Date:** March 3, 2026  
**Learning Outcome:** Understand OOP principles and implement ES6 classes

---

## 📚 THEORY SESSION (90 minutes)

### 1. What is Object-Oriented Programming (OOP)?

**OOP** is a programming paradigm based on objects that contain data (properties) and behavior (methods).

**Core Principles:**
1. **Encapsulation** - Bundle data and methods together
2. **Inheritance** - Classes inherit from other classes
3. **Polymorphism** - Same method, different behavior
4. **Abstraction** - Hide implementation details

```javascript
// Before OOP: Scattered functions and data
function createPerson(name, age) {
    return {name: name, age: age};
}

function getGreeting(person) {
    return "Hello, I'm " + person.name;
}

// After OOP: Bundled together in a class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    getGreeting() {
        return "Hello, I'm " + this.name;
    }
}
```

---

### 2. Understanding ES6 Classes

**Syntax:**
```javascript
class ClassName {
    constructor(parameters) {
        // Initialize properties
    }
    
    method() {
        // Method body
    }
}
```

**Example:**
```javascript
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.speed = 0;
    }
    
    accelerate() {
        this.speed = this.speed + 10;
        console.log(this.brand + " is now going " + this.speed + " km/h");
    }
    
    brake() {
        this.speed = Math.max(0, this.speed - 10);
        console.log(this.brand + " is now going " + this.speed + " km/h");
    }
    
    getDescription() {
        return this.brand + " " + this.model + " (" + this.year + ")";
    }
}

// Create instances
const myCar = new Car("Toyota", "Camry", 2023);
myCar.accelerate();      // Toyota is now going 10 km/h
myCar.accelerate();      // Toyota is now going 20 km/h
myCar.brake();           // Toyota is now going 10 km/h
console.log(myCar.getDescription());  // Toyota Camry (2023)
```

---

### 3. Constructor and this Keyword

The **constructor** is called when creating a new instance.  
**this** refers to the current object.

```javascript
class Student {
    constructor(name, rollNumber, grade) {
        this.name = name;           // Property
        this.rollNumber = rollNumber;
        this.grade = grade;
        this.marks = [];            // Initialize empty array
    }
    
    addMarks(mark) {
        this.marks.push(mark);
    }
    
    getAverage() {
        if (this.marks.length === 0) return 0;
        const total = this.marks.reduce((sum, m) => sum + m, 0);
        return total / this.marks.length;
    }
    
    getStatus() {
        const avg = this.getAverage();
        return this.name + " average: " + avg.toFixed(2);
    }
}

const student = new Student("Alice", 101, "A");
student.addMarks(85);
student.addMarks(90);
student.addMarks(88);
console.log(student.getStatus());  // Alice average: 87.67
```

---

### 4. Encapsulation

**Encapsulation** is bundling data and methods, plus controlling access.

```javascript
class BankAccount {
    constructor(accountHolder, initialBalance) {
        this.accountHolder = accountHolder;
        this._balance = initialBalance;  // Convention: _ means private
    }
    
    // Controlled access to balance
    getBalance() {
        return this._balance;
    }
    
    deposit(amount) {
        if (amount <= 0) {
            console.log("Deposit amount must be positive");
            return false;
        }
        this._balance += amount;
        console.log("Deposited ₹" + amount);
        return true;
    }
    
    withdraw(amount) {
        if (amount > this._balance) {
            console.log("Insufficient funds");
            return false;
        }
        this._balance -= amount;
        console.log("Withdrew ₹" + amount);
        return true;
    }
}

const account = new BankAccount("Alice", 10000);
account.deposit(5000);      // Deposited ₹5000
account.withdraw(3000);     // Withdrew ₹3000
console.log(account.getBalance());  // 12000

// Even though _balance looks private, it can still be accessed
// The convention is a contract: don't access it directly
```

---

### 5. Static Methods

**Static methods** belong to the class, not instances.

```javascript
class MathHelper {
    // Static method
    static add(a, b) {
        return a + b;
    }
    
    static multiply(a, b) {
        return a * b;
    }
    
    static factorial(n) {
        if (n <= 1) return 1;
        return n * this.factorial(n - 1);
    }
}

// Call on class, not instance
console.log(MathHelper.add(5, 3));           // 8
console.log(MathHelper.multiply(5, 3));      // 15
console.log(MathHelper.factorial(5));        // 120

// Can't call on instance
const helper = new MathHelper();
// helper.add(5, 3);  // Error!
```

---

## ✅ PRACTICAL SESSION (90 minutes)

### Exercise 1.1: Basic Class

**Objective:** Create and use a simple class

```javascript
console.log("=== Exercise 1.1: Basic Class ===");

class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.currentPage = 0;
    }
    
    read(pageCount) {
        this.currentPage = Math.min(this.currentPage + pageCount, this.pages);
        console.log("Read to page " + this.currentPage);
    }
    
    getProgress() {
        const percentage = ((this.currentPage / this.pages) * 100).toFixed(1);
        return percentage + "%";
    }
    
    getInfo() {
        return this.title + " by " + this.author + " (" + this.pages + " pages)";
    }
}

const book = new Book("JavaScript Guide", "John Doe", 500);
console.log(book.getInfo());  // JavaScript Guide by John Doe (500 pages)
book.read(100);              // Read to page 100
book.read(50);               // Read to page 150
console.log(book.getProgress());  // 30.0%
```

---

### Exercise 1.2: Student Grade Tracker

**Objective:** Create a class with calculations

```javascript
console.log("\n=== Exercise 1.2: Student Grade Tracker ===");

class GradeTracker {
    constructor(studentName) {
        this.studentName = studentName;
        this.grades = [];
    }
    
    addGrade(subject, marks) {
        this.grades.push({subject: subject, marks: marks});
    }
    
    getAverage() {
        if (this.grades.length === 0) return 0;
        const total = this.grades.reduce((sum, g) => sum + g.marks, 0);
        return (total / this.grades.length).toFixed(2);
    }
    
    getGradeLetters() {
        return this.grades.map(g => {
            let letter;
            if (g.marks >= 90) letter = 'A';
            else if (g.marks >= 80) letter = 'B';
            else if (g.marks >= 70) letter = 'C';
            else if (g.marks >= 60) letter = 'D';
            else letter = 'F';
            
            return g.subject + ": " + g.marks + " (" + letter + ")";
        });
    }
    
    displayReport() {
        console.log("\n📊 " + this.studentName + " - Grade Report");
        console.log("─────────────────────────────");
        
        for (let gradeStr of this.getGradeLetters()) {
            console.log("  " + gradeStr);
        }
        
        console.log("─────────────────────────────");
        console.log("  Average: " + this.getAverage());
    }
}

const student = new GradeTracker("Alice");
student.addGrade("Math", 95);
student.addGrade("English", 87);
student.addGrade("Science", 92);
student.displayReport();
```

---

### Exercise 1.3: E-Commerce Product Class

**Objective:** Practical business application

```javascript
console.log("\n=== Exercise 1.3: E-Commerce Product ===");

class Product {
    constructor(id, name, price, stock) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
    
    applyDiscount(discountPercent) {
        return this.price * (1 - discountPercent / 100);
    }
    
    canBuy(quantity) {
        return quantity <= this.stock;
    }
    
    buy(quantity) {
        if (!this.canBuy(quantity)) {
            return false;
        }
        this.stock -= quantity;
        return true;
    }
    
    addStock(quantity) {
        this.stock += quantity;
    }
    
    getInfo() {
        let status = this.stock > 0 ? "In Stock" : "Out of Stock";
        return this.name + ": ₹" + this.price + " (" + this.stock + " available) - " + status;
    }
}

const laptop = new Product(1, "Laptop", 50000, 5);
console.log(laptop.getInfo());  // Laptop: ₹50000 (5 available) - In Stock

console.log("Price with 10% discount: ₹" + laptop.applyDiscount(10));  // ₹45000

if (laptop.buy(2)) {
    console.log("Purchased 2 laptops");
    console.log(laptop.getInfo());  // Stock now 3
} else {
    console.log("Cannot purchase");
}
```

---

### Exercise 1.4: Banking System

**Objective:** Demonstrate encapsulation and method interactions

```javascript
console.log("\n=== Exercise 1.4: Banking System ===");

class BankAccount {
    constructor(accountNumber, accountHolder, initialBalance) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this._balance = initialBalance;
        this.transactions = [];
        this.transactions.push({
            type: "initial",
            amount: initialBalance,
            date: new Date()
        });
    }
    
    deposit(amount) {
        if (amount <= 0) {
            console.log("❌ Deposit must be positive");
            return false;
        }
        
        this._balance += amount;
        this.transactions.push({
            type: "deposit",
            amount: amount,
            date: new Date()
        });
        
        console.log("✓ Deposited ₹" + amount);
        return true;
    }
    
    withdraw(amount) {
        if (amount <= 0) {
            console.log("❌ Withdrawal must be positive");
            return false;
        }
        
        if (amount > this._balance) {
            console.log("❌ Insufficient funds");
            return false;
        }
        
        this._balance -= amount;
        this.transactions.push({
            type: "withdraw",
            amount: amount,
            date: new Date()
        });
        
        console.log("✓ Withdrew ₹" + amount);
        return true;
    }
    
    getBalance() {
        return this._balance;
    }
    
    getStatement() {
        console.log("\n📋 Account Statement for " + this.accountHolder);
        console.log("Account: " + this.accountNumber);
        console.log("─────────────────────────────");
        
        for (let transaction of this.transactions.slice(-5)) {
            console.log(
                transaction.type.toUpperCase() + ": ₹" + 
                transaction.amount + " - " + 
                transaction.date.toLocaleString()
            );
        }
        
        console.log("─────────────────────────────");
        console.log("Current Balance: ₹" + this._balance);
    }
}

const account = new BankAccount("ACC001", "Alice", 10000);
account.deposit(5000);
account.withdraw(2000);
account.deposit(1500);
account.getStatement();
```

---

### Exercise 1.5: Multi-Class System

**Objective:** Multiple classes working together

```javascript
console.log("\n=== Exercise 1.5: Library System ===");

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }
    
    addBook(book) {
        this.books.push(book);
    }
    
    findBook(title) {
        return this.books.find(b => b.title.toLowerCase() === title.toLowerCase());
    }
    
    getBookCount() {
        return this.books.length;
    }
    
    listBooks() {
        console.log("\n📚 " + this.name + " - Book List");
        console.log("─────────────────────────────");
        
        for (let book of this.books) {
            console.log("  " + book.toString());
        }
    }
}

class LibraryBook {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.available = true;
    }
    
    checkout() {
        if (this.available) {
            this.available = false;
            return true;
        }
        return false;
    }
    
    returnBook() {
        this.available = true;
    }
    
    toString() {
        const status = this.available ? "Available" : "Checked Out";
        return this.title + " by " + this.author + " [" + status + "]";
    }
}

const library = new Library("City Library");

const book1 = new LibraryBook("JavaScript Basics", "John Doe", "ISBN-001");
const book2 = new LibraryBook("Web Development", "Jane Smith", "ISBN-002");
const book3 = new LibraryBook("Node.js Guide", "Bob Johnson", "ISBN-003");

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

library.listBooks();

console.log("\n📤 Checking out: " + book1.title);
if (book1.checkout()) {
    console.log("✓ Successfully checked out");
} else {
    console.log("❌ Book not available");
}

library.listBooks();

console.log("\n📥 Returning: " + book1.title);
book1.returnBook();

library.listBooks();
```

---

## 🎯 Key Takeaways

✅ **Classes bundle data and methods**
✅ **Constructor initializes objects**
✅ **this refers to the current object**
✅ **Methods are functions in classes**
✅ **Static methods belong to the class**
✅ **Encapsulation hides implementation**

---

## 🔍 Common Pitfalls

```javascript
// ❌ Mistake 1: Forgetting 'new' keyword
class Car {}
const car = Car();  // TypeError: Class constructor requires 'new'

// ✅ Correct
const car = new Car();

// ❌ Mistake 2: Forgetting this
class Person {
    constructor(name) {
        name = name;  // Wrong! Doesn't save to object
    }
}

// ✅ Correct
class Person {
    constructor(name) {
        this.name = name;
    }
}

// ❌ Mistake 3: Method forgetting return
class Calculator {
    add(a, b) {
        a + b;  // Missing return
    }
}

// ✅ Correct
class Calculator {
    add(a, b) {
        return a + b;
    }
}
```

---

**File:** `Curriculum/Week-5/Day1-OOP-Fundamentals-Classes.md`  
**Status:** Complete ✅  
**Last Updated:** March 2026

---

## 📋 Week 5 Progress

- [x] Day 1: OOP Fundamentals and Classes ✅
- [ ] Day 2: Inheritance and Polymorphism
- [ ] Day 3: File Operations (Experiment 23)
- [ ] Day 4: Type Checking (Experiment 24)
- [ ] Day 5: OOP Integration Project
