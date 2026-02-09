# Week 5, Day 2: Inheritance, Polymorphism, and Advanced OOP

**Duration:** 180 minutes (90 min theory + 90 min practical)  
**Date:** March 4, 2026  
**Learning Outcome:** Master inheritance and polymorphism for extensible OOP design

---

## 📚 THEORY SESSION (90 minutes)

### 1. Inheritance Basics

**Inheritance** allows a class to inherit properties and methods from another class.

```javascript
// Parent class
class Animal {
    constructor(name) {
        this.name = name;
    }
    
    speak() {
        console.log(this.name + " makes a sound");
    }
    
    move() {
        console.log(this.name + " is moving");
    }
}

// Child class inherits from parent
class Dog extends Animal {
    constructor(name, breed) {
        super(name);  // Call parent constructor
        this.breed = breed;
    }
    
    // Override parent method
    speak() {
        console.log(this.name + " barks: Woof!");
    }
}

const dog = new Dog("Buddy", "Golden Retriever");
dog.speak();  // Buddy barks: Woof!
dog.move();   // Buddy is moving (from parent)
```

---

### 2. super Keyword

**super** calls methods or constructor from parent class.

```javascript
class Vehicle {
    constructor(brand) {
        this.brand = brand;
    }
    
    start() {
        console.log(this.brand + " is starting...");
    }
}

class Car extends Vehicle {
    constructor(brand, model) {
        super(brand);  // Call parent constructor
        this.model = model;
    }
    
    start() {
        super.start();  // Call parent method
        console.log("Car engine roaring...");
    }
}

const myCar = new Car("Toyota", "Camry");
myCar.start();
// Output:
// Toyota is starting...
// Car engine roaring...
```

---

### 3. Polymorphism

**Polymorphism** allows objects of different types to be treated the same way.

```javascript
class Shape {
    getArea() {
        return 0;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    
    getArea() {
        return this.width * this.height;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}

// Polymorphism in action
const shapes = [
    new Rectangle(5, 10),
    new Circle(5)
];

for (let shape of shapes) {
    console.log("Area: " + shape.getArea().toFixed(2));
}
// Area: 50.00
// Area: 78.54
```

---

### 4. isinstance and Properties

```javascript
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
}

class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary);
        this.department = department;
    }
}

const emp = new Employee("Alice", 50000);
const mgr = new Manager("Bob", 80000, "IT");

console.log(emp instanceof Employee);  // true
console.log(emp instanceof Manager);   // false

console.log(mgr instanceof Employee);  // true (managers are employees)
console.log(mgr instanceof Manager);   // true
```

---

### 5. Abstract Classes Pattern

JavaScript doesn't have true abstract classes, but we can simulate them:

```javascript
class DataProcessor {
    process() {
        throw new Error("process() must be implemented by subclass");
    }
    
    validate() {
        throw new Error("validate() must be implemented by subclass");
    }
}

class CSVProcessor extends DataProcessor {
    process() {
        console.log("Processing CSV file...");
    }
    
    validate() {
        console.log("Validating CSV structure...");
    }
}

class JSONProcessor extends DataProcessor {
    process() {
        console.log("Processing JSON file...");
    }
    
    validate() {
        console.log("Validating JSON structure...");
    }
}

const processors = [new CSVProcessor(), new JSONProcessor()];

for (let processor of processors) {
    processor.validate();
    processor.process();
}
```

---

## ✅ PRACTICAL SESSION (90 minutes)

### Exercise 2.1: Animal Hierarchy

**Objective:** Implement inheritance with animal classes

```javascript
console.log("=== Exercise 2.1: Animal Hierarchy ===");

class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
        this.energy = 100;
    }
    
    eat(amount = 20) {
        this.energy = Math.min(100, this.energy + amount);
        console.log(this.name + " ate and gained " + amount + " energy. Energy: " + this.energy);
    }
    
    rest(hours = 8) {
        this.energy = Math.min(100, this.energy + (hours * 5));
        console.log(this.name + " rested for " + hours + " hours. Energy: " + this.energy);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name, "Canine");
        this.breed = breed;
    }
    
    bark() {
        if (this.energy > 10) {
            console.log(this.name + ": Woof! Woof!");
            this.energy -= 10;
        } else {
            console.log(this.name + " is too tired to bark");
        }
    }
    
    fetchBall() {
        if (this.energy > 30) {
            console.log(this.name + " fetched the ball!");
            this.energy -= 30;
        } else {
            console.log(this.name + " is too tired to play");
        }
    }
}

class Cat extends Animal {
    constructor(name, color) {
        super(name, "Feline");
        this.color = color;
    }
    
    meow() {
        console.log(this.name + ": Meow!");
    }
    
    scratch() {
        if (this.energy > 15) {
            console.log(this.name + " scratched the furniture");
            this.energy -= 15;
        } else {
            console.log(this.name + " is sleeping");
        }
    }
}

const dog = new Dog("Buddy", "Golden Retriever");
const cat = new Cat("Whiskers", "Orange");

console.log("\n🐕 Dog:");
dog.bark();
dog.fetchBall();
dog.eat();

console.log("\n🐱 Cat:");
cat.meow();
cat.scratch();
cat.rest(2);
```

---

### Exercise 2.2: Vehicle Inheritance

**Objective:** Multi-level inheritance

```javascript
console.log("\n=== Exercise 2.2: Vehicle Hierarchy ===");

class Vehicle {
    constructor(brand, model, speed) {
        this.brand = brand;
        this.model = model;
        this.currentSpeed = 0;
        this.maxSpeed = speed;
    }
    
    accelerate() {
        this.currentSpeed = Math.min(this.maxSpeed, this.currentSpeed + 10);
        console.log(this.brand + " is going " + this.currentSpeed + " km/h");
    }
    
    brake() {
        this.currentSpeed = Math.max(0, this.currentSpeed - 10);
    }
    
    getInfo() {
        return this.brand + " " + this.model + " (max: " + this.maxSpeed + " km/h)";
    }
}

class Car extends Vehicle {
    constructor(brand, model, doors) {
        super(brand, model, 200);
        this.doors = doors;
    }
}

class Truck extends Vehicle {
    constructor(brand, model, capacity) {
        super(brand, model, 120);
        this.capacity = capacity;
        this.load = 0;
    }
    
    loadCargo(weight) {
        if (this.load + weight <= this.capacity) {
            this.load += weight;
            console.log("Loaded " + weight + " tons. Total: " + this.load + " tons");
        } else {
            console.log("Truck is full!");
        }
    }
}

const car = new Car("Toyota", "Camry", 4);
const truck = new Truck("Volvo", "FH", 10);

console.log(car.getInfo());
car.accelerate();
car.accelerate();

console.log(truck.getInfo());
truck.loadCargo(5);
truck.loadCargo(7);  // Would exceed capacity
truck.accelerate();
truck.accelerate();
```

---

### Exercise 2.3: Employee Polymorphism

**Objective:** Different employee types with same interface

```javascript
console.log("\n=== Exercise 2.3: Employee System ===");

class Employee {
    constructor(name, baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
    
    getSalary() {
        return this.baseSalary;
    }
    
    getRole() {
        return "Employee";
    }
    
    displayInfo() {
        console.log(
            this.name + " (" + this.getRole() + ") - ₹" + 
            this.getSalary().toFixed(0)
        );
    }
}

class Manager extends Employee {
    constructor(name, baseSalary, teamSize) {
        super(name, baseSalary);
        this.teamSize = teamSize;
    }
    
    getSalary() {
        return this.baseSalary + (this.teamSize * 5000);  // Bonus per team member
    }
    
    getRole() {
        return "Manager";
    }
}

class Developer extends Employee {
    constructor(name, baseSalary, languages) {
        super(name, baseSalary);
        this.languages = languages;
    }
    
    getSalary() {
        const skillBonus = this.languages.length * 5000;
        return this.baseSalary + skillBonus;
    }
    
    getRole() {
        return "Developer";
    }
}

class Sales extends Employee {
    constructor(name, baseSalary, commission) {
        super(name, baseSalary);
        this.commission = commission;
    }
    
    getSalary() {
        return this.baseSalary + (this.baseSalary * this.commission / 100);
    }
    
    getRole() {
        return "Sales";
    }
}

// Polymorphism
const employees = [
    new Employee("Alice", 40000),
    new Manager("Bob", 50000, 5),
    new Developer("Charlie", 55000, ["JavaScript", "Python", "Java"]),
    new Sales("Diana", 45000, 10)
];

console.log("📊 Employee Salaries:");
let totalSalary = 0;

for (let emp of employees) {
    emp.displayInfo();
    totalSalary += emp.getSalary();
}

console.log("─────────────────────────");
console.log("Total Payroll: ₹" + totalSalary.toFixed(0));
```

---

### Exercise 2.4: Shape Area Calculator

**Objective:** Polymorphic shape calculations

```javascript
console.log("\n=== Exercise 2.4: Shape Calculator ===");

class Shape {
    getArea() {
        throw new Error("getArea() must be implemented");
    }
    
    getPerimeter() {
        throw new Error("getPerimeter() must be implemented");
    }
    
    displayInfo() {
        console.log("Area: " + this.getArea().toFixed(2));
        console.log("Perimeter: " + this.getPerimeter().toFixed(2));
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    
    getArea() {
        return this.width * this.height;
    }
    
    getPerimeter() {
        return 2 * (this.width + this.height);
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
    
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
}

class Triangle extends Shape {
    constructor(a, b, c) {
        super();
        this.a = a;
        this.b = b;
        this.c = c;
    }
    
    getArea() {
        const s = (this.a + this.b + this.c) / 2;
        return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
    }
    
    getPerimeter() {
        return this.a + this.b + this.c;
    }
}

const shapes = [
    new Rectangle(5, 10),
    new Circle(7),
    new Triangle(3, 4, 5)
];

for (let shape of shapes) {
    console.log(shape.constructor.name + ":");
    shape.displayInfo();
    console.log();
}
```

---

### Exercise 2.5: Game Characters

**Objective:** RPG-style character system with inheritance

```javascript
console.log("\n=== Exercise 2.5: Game Characters ===");

class Character {
    constructor(name, health, mana) {
        this.name = name;
        this.health = health;
        this.maxHealth = health;
        this.mana = mana;
        this.maxMana = mana;
    }
    
    takeDamage(amount) {
        this.health = Math.max(0, this.health - amount);
        console.log(this.name + " took " + amount + " damage. Health: " + this.health);
    }
    
    heal(amount) {
        this.health = Math.min(this.maxHealth, this.health + amount);
        console.log(this.name + " healed " + amount + " HP");
    }
    
    isAlive() {
        return this.health > 0;
    }
}

class Warrior extends Character {
    constructor(name) {
        super(name, 150, 20);
        this.armor = 10;
    }
    
    slash(opponent) {
        const damage = Math.floor(Math.random() * 20) + 15;
        console.log(this.name + " slashes " + opponent.name + " for " + damage + " damage!");
        opponent.takeDamage(damage);
    }
}

class Mage extends Character {
    constructor(name) {
        super(name, 80, 100);
    }
    
    fireball(opponent) {
        const manaCost = 30;
        if (this.mana >= manaCost) {
            this.mana -= manaCost;
            const damage = Math.floor(Math.random() * 25) + 20;
            console.log(this.name + " casts fireball for " + damage + " damage!");
            opponent.takeDamage(damage);
        } else {
            console.log(this.name + " doesn't have enough mana!");
        }
    }
}

const warrior = new Warrior("Conan");
const mage = new Mage("Merlin");

console.log("⚔️ Battle Starts!\n");

warrior.slash(mage);
console.log();
mage.fireball(warrior);
console.log();
warrior.slash(mage);
console.log();
mage.heal(20);
```

---

## 🎯 Key Takeaways

✅ **extends keyword for inheritance**
✅ **super() calls parent constructor**
✅ **super.method() calls parent method**
✅ **Polymorphism allows overriding methods**
✅ **instanceof checks object type**
✅ **Inheritance creates hierarchies**

---

**File:** `Curriculum/Week-5/Day2-Inheritance-Polymorphism.md`  
**Status:** Complete ✅  
**Last Updated:** March 2026

---

## 📋 Week 5 Progress

- [x] Day 1: OOP Fundamentals ✅
- [x] Day 2: Inheritance and Polymorphism ✅
- [ ] Day 3: File Operations (Experiment 23)
- [ ] Day 4: Type Checking (Experiment 24)
- [ ] Day 5: OOP Integration Project
