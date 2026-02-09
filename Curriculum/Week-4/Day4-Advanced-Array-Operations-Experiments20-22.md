# Week 4, Day 4: Advanced Array Operations (Experiments 20-22)

**Duration:** 180 minutes (90 min theory + 90 min practical)  
**Date:** February 27, 2026  
**Learning Outcome:** Master advanced array operations using higher-order functions (Experiments 20-22)

---

## 📚 THEORY SESSION (90 minutes)

### 1. Removing Elements from Arrays

```javascript
// Method 1: filter() - Non-destructive
const numbers = [1, 2, 3, 4, 5];
const without3 = numbers.filter(n => n !== 3);
console.log(without3);  // [1, 2, 4, 5]
console.log(numbers);   // [1, 2, 3, 4, 5] - unchanged

// Method 2: splice() - Destructive
const arr = [1, 2, 3, 4, 5];
arr.splice(2, 1);  // Remove 1 element at index 2
console.log(arr);  // [1, 2, 4, 5] - modified

// Method 3: Remove by value
function removeByValue(arr, value) {
    return arr.filter(item => item !== value);
}

const fruits = ["apple", "banana", "cherry", "banana"];
console.log(removeByValue(fruits, "banana"));
// ["apple", "cherry"] - removes ALL occurrences

// Method 4: Remove first occurrence
function removeFirstOccurrence(arr, value) {
    const index = arr.indexOf(value);
    if (index > -1) {
        return [...arr.slice(0, index), ...arr.slice(index + 1)];
    }
    return arr;
}

const fruits2 = ["apple", "banana", "cherry", "banana"];
console.log(removeFirstOccurrence(fruits2, "banana"));
// ["apple", "cherry", "banana"]
```

---

### 2. Merging Arrays

```javascript
// Method 1: concat()
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const merged = arr1.concat(arr2);
console.log(merged);  // [1, 2, 3, 4, 5, 6]

// Method 2: spread operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const merged = [...arr1, ...arr2];
console.log(merged);  // [1, 2, 3, 4, 5, 6]

// Method 3: Multiple arrays
const result = [...arr1, ...arr2, ...[7, 8]];
console.log(result);  // [1, 2, 3, 4, 5, 6, 7, 8]
```

---

### 3. Removing Duplicates

```javascript
// Method 1: Using Set
const numbers = [1, 2, 2, 3, 4, 4, 5];
const unique = [...new Set(numbers)];
console.log(unique);  // [1, 2, 3, 4, 5]

// Method 2: Using filter()
const numbers = [1, 2, 2, 3, 4, 4, 5];
const unique = numbers.filter((num, index) => 
    numbers.indexOf(num) === index
);
console.log(unique);  // [1, 2, 3, 4, 5]

// Method 3: Using reduce()
const numbers = [1, 2, 2, 3, 4, 4, 5];
const unique = numbers.reduce((acc, num) => {
    if (!acc.includes(num)) {
        acc.push(num);
    }
    return acc;
}, []);
console.log(unique);  // [1, 2, 3, 4, 5]

// With strings
const words = ["apple", "apple", "banana", "cherry", "banana"];
const unique = [...new Set(words)];
console.log(unique);  // ["apple", "banana", "cherry"]
```

---

### 4. Sorting Arrays

```javascript
// Numeric sorting (numbers)
const numbers = [3, 1, 4, 1, 5, 9, 2];
const sorted = numbers.sort((a, b) => a - b);
console.log(sorted);  // [1, 1, 2, 3, 4, 5, 9]

// Reverse order
const descending = numbers.sort((a, b) => b - a);
console.log(descending);  // [9, 5, 4, 3, 2, 1, 1]

// String sorting (alphabetical)
const words = ["zebra", "apple", "banana"];
const sorted = words.sort();
console.log(sorted);  // ["apple", "banana", "zebra"]

// Case-insensitive
const words = ["Zebra", "apple", "Banana"];
const sorted = words.sort((a, b) => 
    a.toLowerCase().localeCompare(b.toLowerCase())
);
console.log(sorted);  // ["apple", "Banana", "Zebra"]
```

---

### 5. Sorting Objects

```javascript
// Sort by property
const students = [
    {name: "Alice", marks: 85},
    {name: "Bob", marks: 92},
    {name: "Charlie", marks: 78}
];

// Sort by marks ascending
const byMarks = students.sort((a, b) => a.marks - b.marks);
console.log(byMarks);
// [{name: "Charlie", marks: 78}, {name: "Alice", marks: 85}, {name: "Bob", marks: 92}]

// Sort by name
const byName = students.sort((a, b) => 
    a.name.localeCompare(b.name)
);
console.log(byName);
// [{name: "Alice", marks: 85}, {name: "Bob", marks: 92}, {name: "Charlie", marks: 78}]
```

---

## ✅ PRACTICAL SESSION (90 minutes)

### Experiment 20: Remove Specific Item from Array

**Objective:** Create functions to remove items from arrays

```javascript
console.log("═══════════════════════════════════════");
console.log("  EXPERIMENT 20: Remove Item from Array");
console.log("═══════════════════════════════════════\n");

// Function 1: Remove all occurrences
function removeAllOccurrences(arr, value) {
    return arr.filter(item => item !== value);
}

// Function 2: Remove first occurrence only
function removeFirstOccurrence(arr, value) {
    const index = arr.indexOf(value);
    if (index === -1) return arr;
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

// Function 3: Remove at specific index
function removeAtIndex(arr, index) {
    if (index < 0 || index >= arr.length) return arr;
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

// Function 4: Remove multiple values
function removeMultiple(arr, valuesToRemove) {
    return arr.filter(item => !valuesToRemove.includes(item));
}

// ============================================
// TEST CASES
// ============================================

console.log("📋 Test Case 1: Remove all occurrences");
console.log("─────────────────────────────────────");
const numbers1 = [1, 2, 3, 2, 4, 2, 5];
console.log("Original: " + numbers1);
console.log("Remove 2: " + removeAllOccurrences(numbers1, 2));

console.log("\n📋 Test Case 2: Remove first occurrence");
console.log("─────────────────────────────────────");
const numbers2 = [1, 2, 3, 2, 4, 2, 5];
console.log("Original: " + numbers2);
console.log("Remove first 2: " + removeFirstOccurrence(numbers2, 2));

console.log("\n📋 Test Case 3: Remove at index");
console.log("─────────────────────────────────────");
const numbers3 = [10, 20, 30, 40, 50];
console.log("Original: " + numbers3);
console.log("Remove at index 2: " + removeAtIndex(numbers3, 2));

console.log("\n📋 Test Case 4: Remove multiple values");
console.log("─────────────────────────────────────");
const numbers4 = [1, 2, 3, 4, 5, 6, 7, 8];
console.log("Original: " + numbers4);
console.log("Remove [2, 4, 6]: " + removeMultiple(numbers4, [2, 4, 6]));

console.log("\n📋 Test Case 5: With strings");
console.log("─────────────────────────────────────");
const fruits = ["apple", "banana", "apple", "cherry", "apple"];
console.log("Original: " + fruits);
console.log("Remove 'apple': " + removeAllOccurrences(fruits, "apple"));

/*
EXPECTED OUTPUT:
═══════════════════════════════════════
  EXPERIMENT 20: Remove Item from Array
═══════════════════════════════════════

📋 Test Case 1: Remove all occurrences
─────────────────────────────────────
Original: 1,2,3,2,4,2,5
Remove 2: 1,3,4,5

📋 Test Case 2: Remove first occurrence
─────────────────────────────────────
Original: 1,2,3,2,4,2,5
Remove first 2: 1,3,2,4,2,5

📋 Test Case 3: Remove at index
─────────────────────────────────────
Original: 10,20,30,40,50
Remove at index 2: 10,20,40,50

📋 Test Case 4: Remove multiple values
─────────────────────────────────────
Original: 1,2,3,4,5,6,7,8
Remove [2, 4, 6]: 1,3,5,7,8

📋 Test Case 5: With strings
─────────────────────────────────────
Original: apple,banana,apple,cherry,apple
Remove 'apple': banana,cherry
*/
```

---

### Experiment 21: Merge Arrays and Remove Duplicates

**Objective:** Combine multiple arrays and eliminate duplicate values

```javascript
console.log("\n═══════════════════════════════════════");
console.log("  EXPERIMENT 21: Merge Arrays & Duplicates");
console.log("═══════════════════════════════════════\n");

// Function 1: Merge and remove duplicates (numbers)
function mergeUnique(arr1, arr2) {
    const merged = [...arr1, ...arr2];
    return [...new Set(merged)];
}

// Function 2: Merge multiple arrays and remove duplicates
function mergeMultipleUnique(...arrays) {
    const merged = arrays.reduce((acc, arr) => [...acc, ...arr], []);
    return [...new Set(merged)];
}

// Function 3: Merge strings and remove duplicates
function mergeUniqueStrings(arr1, arr2) {
    return [...new Set(arr1.concat(arr2))];
}

// Function 4: Merge objects based on property
function mergeUniqueObjects(arr1, arr2, property) {
    const merged = [...arr1, ...arr2];
    return merged.reduce((acc, obj) => {
        if (!acc.find(item => item[property] === obj[property])) {
            acc.push(obj);
        }
        return acc;
    }, []);
}

// ============================================
// TEST CASES
// ============================================

console.log("📋 Test Case 1: Merge numeric arrays");
console.log("─────────────────────────────────────");
const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];
console.log("Array 1: " + arr1);
console.log("Array 2: " + arr2);
console.log("Merged: " + mergeUnique(arr1, arr2));

console.log("\n📋 Test Case 2: Merge string arrays");
console.log("─────────────────────────────────────");
const fruits1 = ["apple", "banana", "cherry"];
const fruits2 = ["banana", "date", "apple"];
console.log("Fruits 1: " + fruits1);
console.log("Fruits 2: " + fruits2);
console.log("Merged: " + mergeUniqueStrings(fruits1, fruits2));

console.log("\n📋 Test Case 3: Merge multiple arrays");
console.log("─────────────────────────────────────");
const nums1 = [1, 2, 3];
const nums2 = [2, 3, 4];
const nums3 = [4, 5, 6];
console.log("Array 1: " + nums1);
console.log("Array 2: " + nums2);
console.log("Array 3: " + nums3);
console.log("Merged: " + mergeMultipleUnique(nums1, nums2, nums3));

console.log("\n📋 Test Case 4: Merge objects");
console.log("─────────────────────────────────────");
const users1 = [
    {id: 1, name: "Alice"},
    {id: 2, name: "Bob"}
];
const users2 = [
    {id: 2, name: "Bob"},
    {id: 3, name: "Charlie"}
];
console.log("Users 1:", users1);
console.log("Users 2:", users2);
const merged = mergeUniqueObjects(users1, users2, "id");
console.log("Merged (unique by id):", merged);

/*
EXPECTED OUTPUT:
═══════════════════════════════════════
  EXPERIMENT 21: Merge Arrays & Duplicates
═══════════════════════════════════════

📋 Test Case 1: Merge numeric arrays
─────────────────────────────────────
Array 1: 1,2,3,4
Array 2: 3,4,5,6
Merged: 1,2,3,4,5,6

📋 Test Case 2: Merge string arrays
─────────────────────────────────────
Fruits 1: apple,banana,cherry
Fruits 2: banana,date,apple
Merged: apple,banana,cherry,date

📋 Test Case 3: Merge multiple arrays
─────────────────────────────────────
Array 1: 1,2,3
Array 2: 2,3,4
Array 3: 4,5,6
Merged: 1,2,3,4,5,6

📋 Test Case 4: Merge objects
─────────────────────────────────────
Users 1: [{id: 1, name: "Alice"}, {id: 2, name: "Bob"}]
Users 2: [{id: 2, name: "Bob"}, {id: 3, name: "Charlie"}]
Merged (unique by id): [{id: 1, name: "Alice"}, {id: 2, name: "Bob"}, {id: 3, name: "Charlie"}]
*/
```

---

### Experiment 22: Sort Array of Objects by Property Values

**Objective:** Sort complex data structures by different criteria

```javascript
console.log("\n═══════════════════════════════════════");
console.log("  EXPERIMENT 22: Sort Objects");
console.log("═══════════════════════════════════════\n");

// Function 1: Sort by numeric property
function sortByNumberic(arr, property, ascending = true) {
    const sorted = [...arr].sort((a, b) => 
        ascending ? a[property] - b[property] : b[property] - a[property]
    );
    return sorted;
}

// Function 2: Sort by string property
function sortByString(arr, property, ascending = true) {
    const sorted = [...arr].sort((a, b) => {
        const comparison = a[property].localeCompare(b[property]);
        return ascending ? comparison : -comparison;
    });
    return sorted;
}

// Function 3: Sort by multiple properties
function sortByMultiple(arr, sortFunctions) {
    return [...arr].sort((a, b) => {
        for (let sortFn of sortFunctions) {
            const result = sortFn(a, b);
            if (result !== 0) return result;
        }
        return 0;
    });
}

// ============================================
// TEST CASES
// ============================================

const students = [
    {name: "Alice", marks: 85, grade: "B"},
    {name: "Bob", marks: 92, grade: "A"},
    {name: "Charlie", marks: 78, grade: "C"},
    {name: "Diana", marks: 92, grade: "A"},
    {name: "Eve", marks: 88, grade: "B"}
];

console.log("📋 Original Data:");
console.log("─────────────────────────────────────");
console.log("Students: ", students);

console.log("\n📋 Test Case 1: Sort by marks (ascending)");
console.log("─────────────────────────────────────");
const byMarksAsc = sortByNumberic(students, "marks", true);
byMarksAsc.forEach(s => 
    console.log("  " + s.name + " - " + s.marks)
);

console.log("\n📋 Test Case 2: Sort by marks (descending)");
console.log("─────────────────────────────────────");
const byMarksDesc = sortByNumberic(students, "marks", false);
byMarksDesc.forEach(s => 
    console.log("  " + s.name + " - " + s.marks)
);

console.log("\n📋 Test Case 3: Sort by name");
console.log("─────────────────────────────────────");
const byName = sortByString(students, "name", true);
byName.forEach(s => 
    console.log("  " + s.name)
);

console.log("\n📋 Test Case 4: Sort by grade, then by name");
console.log("─────────────────────────────────────");
const byGradeThenName = sortByMultiple(students, [
    (a, b) => a.grade.localeCompare(b.grade),
    (a, b) => a.name.localeCompare(b.name)
]);
byGradeThenName.forEach(s => 
    console.log("  " + s.grade + " - " + s.name)
);

console.log("\n📋 Test Case 5: Complex sorting");
console.log("─────────────────────────────────────");
const products = [
    {name: "Laptop", price: 50000, rating: 4.5},
    {name: "Phone", price: 30000, rating: 4.8},
    {name: "Tablet", price: 20000, rating: 4.2},
    {name: "Monitor", price: 15000, rating: 4.6}
];

// Sort by rating (descending)
const byRating = [...products].sort((a, b) => b.rating - a.rating);
console.log("By rating (high to low):");
byRating.forEach(p => 
    console.log("  " + p.name + " - Rating: " + p.rating)
);

/*
EXPECTED OUTPUT:
═══════════════════════════════════════
  EXPERIMENT 22: Sort Objects
═══════════════════════════════════════

📋 Original Data:
─────────────────────────────────────
Students: [
  {name: "Alice", marks: 85, ...},
  {name: "Bob", marks: 92, ...},
  ...
]

📋 Test Case 1: Sort by marks (ascending)
─────────────────────────────────────
  Charlie - 78
  Alice - 85
  Eve - 88
  Bob - 92
  Diana - 92

📋 Test Case 2: Sort by marks (descending)
─────────────────────────────────────
  Bob - 92
  Diana - 92
  Eve - 88
  Alice - 85
  Charlie - 78

📋 Test Case 3: Sort by name
─────────────────────────────────────
  Alice
  Bob
  Charlie
  Diana
  Eve

📋 Test Case 4: Sort by grade, then by name
─────────────────────────────────────
  A - Bob
  A - Diana
  B - Alice
  B - Eve
  C - Charlie

📋 Test Case 5: Complex sorting
─────────────────────────────────────
By rating (high to low):
  Phone - Rating: 4.8
  Laptop - Rating: 4.5
  Monitor - Rating: 4.6
  Tablet - Rating: 4.2
*/
```

---

## 🎯 Experiments 20-22 Summary

✅ **Experiment 20:** Remove items from arrays using filter
✅ **Experiment 21:** Merge arrays and eliminate duplicates
✅ **Experiment 22:** Sort objects by properties

---

## 📚 Key Concepts

| Operation | Method | Destructive? | Use Case |
|-----------|--------|-------------|----------|
| Remove items | filter() | No | Remove based on condition |
| Merge | concat(), spread | No | Combine arrays |
| Unique | Set, filter() | No | Remove duplicates |
| Sort | sort() | Yes | Order elements |

---

## 🔍 Common Pitfalls

```javascript
// ❌ sort() modifies original array!
const numbers = [3, 1, 4];
const sorted = numbers.sort((a, b) => a - b);
console.log(numbers);  // [1, 3, 4] - modified!

// ✅ Create a copy first
const sorted = [...numbers].sort((a, b) => a - b);

// ❌ String comparison for numbers
const numbers = [1, 20, 3, 100];
numbers.sort();  // [1, 100, 20, 3] - wrong!

// ✅ Use numeric comparison
numbers.sort((a, b) => a - b);  // [1, 3, 20, 100]
```

---

**File:** `Curriculum/Week-4/Day4-Advanced-Array-Operations-Experiments20-22.md`  
**Status:** Complete ✅  
**Last Updated:** February 2026

---

## ✅ Experiments 20-22 Complete!

- [x] Experiment 20: Remove Specific Item from Array ✅
- [x] Experiment 21: Merge Arrays and Remove Duplicates ✅
- [x] Experiment 22: Sort Array of Objects ✅

---

## 📋 Week 4 Progress

- [x] Day 1: map() ✅
- [x] Day 2: filter() and reduce() ✅
- [x] Day 3: Dates and Timers (Exp 17-19) ✅
- [x] Day 4: Advanced Array Operations (Exp 20-22) ✅
- [ ] Day 5: Week 4 Integration Project
