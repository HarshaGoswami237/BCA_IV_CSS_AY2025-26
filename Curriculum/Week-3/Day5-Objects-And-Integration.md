# Week 3, Day 5: Objects and Week 3 Integration Project

**Duration:** 180 minutes (90 min theory + 90 min practical)  
**Date:** February 21, 2026  
**Learning Outcome:** Understand objects as data containers and build comprehensive Week 3 project

---

## 📚 THEORY SESSION (90 minutes)

### 1. What is an Object?

An **object** is a collection of related properties and their values, grouped together.

**Real-World Analogy:** Object is like a person
- Properties: name, age, email, phone
- Methods: sayHello(), getAge()

```javascript
// Creating an object (object literal)
const person = {
    name: "Alice",
    age: 25,
    email: "alice@example.com",
    city: "New York"
};

// Access properties
console.log(person.name);     // "Alice"
console.log(person.age);      // 25
console.log(person.email);    // "alice@example.com"

// Alternative access (bracket notation)
console.log(person["name"]);  // "Alice"
console.log(person["age"]);   // 25
```

---

### 2. Object Properties

```javascript
const student = {
    firstName: "John",
    lastName: "Doe",
    studentId: 12345,
    marks: [95, 87, 92],
    isActive: true
};

// Access properties
console.log(student.firstName);     // "John"
console.log(student.marks[1]);      // 87

// Modify properties
student.firstName = "Jane";
student.marks[0] = 98;

// Add new property
student.email = "jane@example.com";

// Delete property
delete student.isActive;

// Check if property exists
console.log("email" in student);    // true
console.log("phone" in student);    // false
```

---

### 3. Object Methods

Methods are functions stored as object properties:

```javascript
const calculator = {
    value: 0,
    
    add: function(num) {
        this.value = this.value + num;
        return this.value;
    },
    
    subtract: function(num) {
        this.value = this.value - num;
        return this.value;
    },
    
    reset: function() {
        this.value = 0;
    }
};

// Call methods
calculator.add(5);           // Returns 5
calculator.add(3);           // Returns 8
calculator.subtract(2);      // Returns 6
calculator.reset();          // value is now 0

// Using 'this' keyword
const person = {
    name: "Alice",
    age: 25,
    
    greet: function() {
        return "Hello, I'm " + this.name + " and I'm " + this.age;
    }
};

console.log(person.greet()); // "Hello, I'm Alice and I'm 25"
```

---

### 4. Iterating Over Objects

```javascript
const user = {
    name: "Bob",
    age: 30,
    city: "London"
};

// Using for...in loop
for (let key in user) {
    console.log(key + ": " + user[key]);
}
// Output:
// name: Bob
// age: 30
// city: London

// Get all keys
const keys = Object.keys(user);
console.log(keys);  // ["name", "age", "city"]

// Get all values
const values = Object.values(user);
console.log(values);  // ["Bob", 30, "London"]
```

---

### 5. Objects vs Arrays

```javascript
// Array - for ordered lists
const fruits = ["Apple", "Banana", "Orange"];
console.log(fruits[0]);  // "Apple"

// Object - for named properties
const person = {
    name: "Alice",
    age: 25
};
console.log(person.name);  // "Alice"

// Array of objects - best of both
const people = [
    {name: "Alice", age: 25},
    {name: "Bob", age: 30},
    {name: "Charlie", age: 35}
];

console.log(people[0].name);  // "Alice"
```

---

### 6. Nested Objects

Objects can contain other objects:

```javascript
const company = {
    name: "TechCorp",
    address: {
        street: "123 Main St",
        city: "New York",
        country: "USA"
    },
    employees: [
        {name: "Alice", role: "Manager"},
        {name: "Bob", role: "Developer"}
    ]
};

// Access nested properties
console.log(company.name);                    // "TechCorp"
console.log(company.address.city);            // "New York"
console.log(company.employees[0].name);       // "Alice"
```

---

## ✅ PRACTICAL SESSION (90 minutes)

### Exercise 5.1: Basic Objects

**Objective:** Create and use objects

```javascript
console.log("=== Exercise 5.1: Basic Objects ===");

// Book object
const book = {
    title: "JavaScript Basics",
    author: "John Doe",
    pages: 350,
    published: 2020,
    
    getInfo: function() {
        return this.title + " by " + this.author + " (" + this.pages + " pages)";
    }
};

console.log(book.title);           // "JavaScript Basics"
console.log(book.getInfo());       // Full description

// Modify and add properties
book.language = "English";
book.isbn = "978-1234567890";

console.log(book);  // Full object
```

---

### Exercise 5.2: Array of Objects

**Objective:** Work with multiple structured data

```javascript
console.log("=== Exercise 5.2: Array of Objects ===");

const movies = [
    {
        title: "Inception",
        year: 2010,
        rating: 8.8,
        director: "Christopher Nolan"
    },
    {
        title: "The Matrix",
        year: 1999,
        rating: 8.7,
        director: "Wachowski Brothers"
    },
    {
        title: "Interstellar",
        year: 2014,
        rating: 8.6,
        director: "Christopher Nolan"
    }
];

// Display all movies
for (let i = 0; i < movies.length; i++) {
    const m = movies[i];
    console.log(m.title + " (" + m.year + ") - " + m.rating + "/10");
}

// Find movie by director
const nolanMovies = movies.filter(m => m.director === "Christopher Nolan");
console.log("\nChristopher Nolan movies:", nolanMovies.length);
```

---

### Exercise 5.3: Object Methods and this

**Objective:** Use methods to operate on object data

```javascript
console.log("=== Exercise 5.3: Object Methods ===");

const bankAccount = {
    accountHolder: "Alice",
    balance: 10000,
    
    deposit: function(amount) {
        this.balance = this.balance + amount;
        console.log("Deposited ₹" + amount + ". New balance: ₹" + this.balance);
    },
    
    withdraw: function(amount) {
        if (amount > this.balance) {
            console.log("Insufficient funds!");
            return false;
        }
        this.balance = this.balance - amount;
        console.log("Withdrew ₹" + amount + ". New balance: ₹" + this.balance);
        return true;
    },
    
    getStatement: function() {
        return this.accountHolder + " - Balance: ₹" + this.balance;
    }
};

// Use the methods
bankAccount.deposit(5000);       // Deposited ₹5000. New balance: ₹15000
bankAccount.withdraw(2000);      // Withdrew ₹2000. New balance: ₹13000
bankAccount.withdraw(15000);     // Insufficient funds!
console.log(bankAccount.getStatement());  // Alice - Balance: ₹13000
```

---

### Exercise 5.4: Practical - User Profile Manager

**Objective:** Manage user data with objects

```javascript
console.log("=== Exercise 5.4: User Profile Manager ===");

const users = [
    {
        userId: 1,
        username: "alice123",
        email: "alice@example.com",
        profile: {
            fullName: "Alice Johnson",
            bio: "JavaScript Developer",
            posts: 45
        }
    },
    {
        userId: 2,
        username: "bob_dev",
        email: "bob@example.com",
        profile: {
            fullName: "Bob Smith",
            bio: "Web Developer",
            posts: 32
        }
    }
];

// Display user profile
function displayProfile(user) {
    console.log("\n=== User Profile ===");
    console.log("Username: " + user.username);
    console.log("Email: " + user.email);
    console.log("Name: " + user.profile.fullName);
    console.log("Bio: " + user.profile.bio);
    console.log("Posts: " + user.profile.posts);
}

displayProfile(users[0]);
displayProfile(users[1]);

// Find user by username
function findUser(username) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].username === username) {
            return users[i];
        }
    }
    return null;
}

const found = findUser("bob_dev");
if (found) {
    displayProfile(found);
}
```

---

## 🎉 WEEK 3 INTEGRATION PROJECT

### Project: Contact Management System

**Objective:** Combine all Week 3 concepts - functions, arrays, strings, and objects

```javascript
/*
 * ================================
 * Contact Management System
 * ================================
 * 
 * Features:
 * 1. Add/remove contacts
 * 2. Search contacts
 * 3. Display formatted contact info
 * 4. Validate contact data
 * 5. Generate reports
 */

// Contacts database
let contacts = [
    {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        email: "john@example.com",
        phone: "9876543210",
        city: "New York"
    },
    {
        id: 2,
        firstName: "Jane",
        lastName: "Smith",
        email: "jane@example.com",
        phone: "9123456789",
        city: "London"
    }
];

let nextId = 3;

// ============================================
// UTILITY FUNCTIONS
// ============================================

function capitalizeeName(firstName, lastName) {
    const first = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
    const last = lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();
    return first + " " + last;
}

function validateEmail(email) {
    return email.includes("@") && email.includes(".");
}

function validatePhone(phone) {
    return phone.length >= 10 && /^[0-9]+$/.test(phone);
}

// ============================================
// CRUD OPERATIONS
// ============================================

function addContact(firstName, lastName, email, phone, city) {
    // Validate
    if (!firstName || !lastName) {
        console.log("❌ First and last name are required!");
        return false;
    }
    
    if (!validateEmail(email)) {
        console.log("❌ Invalid email format!");
        return false;
    }
    
    if (!validatePhone(phone)) {
        console.log("❌ Invalid phone number!");
        return false;
    }
    
    // Create contact
    const contact = {
        id: nextId++,
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        city: city || "Not specified"
    };
    
    contacts.push(contact);
    console.log("✓ Contact added successfully!");
    return true;
}

function removeContact(id) {
    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].id === id) {
            const removed = contacts.splice(i, 1);
            console.log("✓ Removed: " + removed[0].firstName + " " + removed[0].lastName);
            return true;
        }
    }
    console.log("❌ Contact not found!");
    return false;
}

function findContact(id) {
    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].id === id) {
            return contacts[i];
        }
    }
    return null;
}

function searchByName(searchTerm) {
    const results = [];
    const term = searchTerm.toLowerCase();
    
    for (let i = 0; i < contacts.length; i++) {
        const contact = contacts[i];
        const fullName = (contact.firstName + " " + contact.lastName).toLowerCase();
        
        if (fullName.includes(term)) {
            results.push(contact);
        }
    }
    
    return results;
}

// ============================================
// DISPLAY FUNCTIONS
// ============================================

function displayContact(contact) {
    const fullName = capitalizeeName(contact.firstName, contact.lastName);
    
    console.log("╔════════════════════════════════════╗");
    console.log("║        CONTACT DETAILS             ║");
    console.log("╚════════════════════════════════════╝");
    console.log("Name: " + fullName);
    console.log("Email: " + contact.email);
    console.log("Phone: " + contact.phone);
    console.log("City: " + contact.city);
    console.log("────────────────────────────────────");
}

function displayAllContacts() {
    console.log("\n╔════════════════════════════════════╗");
    console.log("║      ALL CONTACTS (" + contacts.length + ")            ║");
    console.log("╚════════════════════════════════════╝");
    
    for (let i = 0; i < contacts.length; i++) {
        const c = contacts[i];
        const fullName = capitalizeeName(c.firstName, c.lastName);
        console.log(c.id + ". " + fullName + " - " + c.email);
    }
    console.log("────────────────────────────────────");
}

// ============================================
// REPORTING FUNCTIONS
// ============================================

function generateReport() {
    console.log("\n╔════════════════════════════════════╗");
    console.log("║      CONTACT REPORT               ║");
    console.log("╚════════════════════════════════════╝");
    console.log("Total Contacts: " + contacts.length);
    
    // Count by city
    const cityCounts = {};
    for (let i = 0; i < contacts.length; i++) {
        const city = contacts[i].city;
        cityCounts[city] = (cityCounts[city] || 0) + 1;
    }
    
    console.log("\nContacts by City:");
    for (let city in cityCounts) {
        console.log("  " + city + ": " + cityCounts[city]);
    }
    console.log("────────────────────────────────────");
}

// ============================================
// DEMONSTRATION
// ============================================

console.log("═══════════════════════════════════════");
console.log("  CONTACT MANAGEMENT SYSTEM - WEEK 3");
console.log("═══════════════════════════════════════\n");

// Display existing contacts
displayAllContacts();

// Add new contacts
console.log("\n>>> Adding new contacts:");
addContact("Alice", "Johnson", "alice@example.com", "9988776655", "Tokyo");
addContact("Bob", "Wilson", "bob@example.com", "9876543210", "New York");

// Display all
displayAllContacts();

// Search
console.log("\n>>> Searching for 'ali':");
const searchResults = searchByName("ali");
for (let i = 0; i < searchResults.length; i++) {
    displayContact(searchResults[i]);
}

// Display single contact
console.log("\n>>> Viewing contact #1:");
const contact = findContact(1);
if (contact) {
    displayContact(contact);
}

// Remove contact
console.log("\n>>> Removing contact #2:");
removeContact(2);

// Final report
displayAllContacts();
generateReport();

console.log("\n=== System Ready for Use ===");
```

---

## #🎯 Week 3 Achievements

✅ **Concepts Learned:**
- Functions as values (Day 1)
- Scope and closures (Day 1)
- Arrays and methods (Day 2)
- String manipulation techniques (Days 3-4)
- Objects and methods (Day 5)

✅ **Experiments Completed:**
- Experiment 13: Palindrome Checker ✅
- Experiment 14: Character Replacement ✅
- Experiment 15: String Reversal ✅  
- Experiment 16: Capitalize First Letter ✅

✅ **Skills Mastered:**
- Creating and manipulating arrays
- Processing strings in multiple ways
- Organizing data with objects
- Writing reusable functions
- Building practical applications

---

## 📋 Week 3 Checklist

- [ ] Day 1: Functions as Values & Scope
- [ ] Day 2: Arrays and Array Methods
- [ ] Day 3: String Methods (Exp 13-14)
- [ ] Day 4: Advanced Strings (Exp 15-16)
- [ ] Day 5: Objects and Integration Project
- [ ] All Experiments 13-16 completed
- [ ] Contact Manager project working
- [ ] Code follows best practices
- [ ] Submitted to GitHub Classroom

---

## 📚 Week 3 Summary

| Concept | Key Points |
|---------|-----------|
| Functions | Can be stored and passed around |
| Scope | Variables accessible only in certain areas |
| Arrays | Ordered list of values, indexed 0-n |
| Strings | Immutable sequence of characters |
| Objects | Collections of properties and methods |
| this | Refers to the object calling the method |

---

## 🚀 Next Week Preview: Week 4

When ready for Week 4:
- **Theme:** Higher-Order Functions
- **Focus:** map(), filter(), reduce()
- **Experiments:** 17-22 (Array & Date Operations)
- **Major Project:** Data Processing Pipeline

---

**File:** `Curriculum/Week-3/Day5-Objects-And-Integration.md`  
**Status:** Complete ✅  
**Last Updated:** February 2026

---

## 📝 WEEK 3 ASSIGNMENT SUBMISSION GUIDE

### File Naming Convention:
```
Week3/
├── Experiment_13_PalindromeChecker.js
├── Experiment_14_CharacterReplacement.js
├── Experiment_15_ReverseString.js
├── Experiment_16_CapitalizeFirst.js
└── Week3_Integration_ContactManager.js
```

### Commit and Push:
```bash
git add Week3/
git commit -m "[Week3-Complete] All string experiments and integration project"
git push origin main
```

---

**Week 3 Complete! All 4 String Experiments + Integration Project Done! 🎉**
