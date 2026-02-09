# Week 3, Day 4: Advanced String Operations and Experiments 15-16

**Duration:** 180 minutes (90 min theory + 90 min practical)  
**Date:** February 20, 2026  
**Learning Outcome:** Advanced string manipulation and implement final string experiments

---

## 📚 THEORY SESSION (90 minutes)

### 1. Reversing Strings - Multiple Approaches

#### Method 1: Traditional Loop
```javascript
function reverseString1(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed = reversed + str[i];
    }
    return reversed;
}

console.log(reverseString1("Hello"));  // "olleH"
```

#### Method 2: Using split(), reverse(), join()
```javascript
function reverseString2(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString2("Hello"));  // "olleH"
```

#### Method 3: Using reduce() (Advanced)
```javascript
function reverseString3(str) {
    return str.split("").reduce((rev, char) => char + rev, "");
}

console.log(reverseString3("Hello"));  // "olleH"
```

**Performance Comparison:**
- Method 1: Straightforward, good for beginners
- Method 2: Concise, modern JavaScript
- Method 3: Functional programming, advanced

---

### 2. Converting First Letter to Uppercase

#### Method 1: Combine toUpperCase() and slice()
```javascript
function capitalizeWord(word) {
    return word[0].toUpperCase() + word.slice(1);
}

console.log(capitalizeWord("hello"));   // "Hello"
console.log(capitalizeWord("world"));   // "World"
console.log(capitalizeWord("a"));       // "A"
```

#### Method 2: Handle Lowercase Rest
```javascript
function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

console.log(capitalize("hELLO"));   // "Hello"
console.log(capitalize("wORLD"));   // "World"
```

#### Method 3: Capitalize Each Word
```javascript
function capitalizeWords(sentence) {
    const words = sentence.split(" ");
    
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    
    return words.join(" ");
}

console.log(capitalizeWords("hello world from javascript"));
// Output: "Hello World From Javascript"
```

---

### 3. String Template Literals

Modern way to create strings with variable interpolation:

```javascript
const name = "Alice";
const age = 25;

// Old way (concatenation)
const message1 = "Name: " + name + ", Age: " + age;

// New way (template literals)
const message2 = `Name: ${name}, Age: ${age}`;

console.log(message2);  // "Name: Alice, Age: 25"

// Multi-line strings
const text = `
    Hello ${name}!
    You are ${age} years old.
    Welcome to JavaScript!
`;

console.log(text);  // Printed with line breaks
```

---

### 4. String Validation Patterns

```javascript
// Check if string is number
function isNumeric(str) {
    return !isNaN(parseFloat(str)) && isFinite(str);
}

// Check if string is alphanumeric
function isAlphanumeric(str) {
    return /^[a-zA-Z0-9]*$/.test(str);
}

// Check if string starts with vowel
function startsWithVowel(str) {
    return /^[aeiouAEIOU]/.test(str);
}

//Check if string has numbers
function hasNumbers(str) {
    return /[0-9]/.test(str);
}
```

---

### 5. String Performance Considerations

```javascript
// ❌ INEFFICIENT: String concatenation in loop
let result = "";
for (let i = 0; i < 10000; i++) {
    result = result + "x";  // Creates new string each time!
}

// ✅ EFFICIENT: Use array and join
const chars = [];
for (let i = 0; i < 10000; i++) {
    chars.push("x");
}
const result = chars.join("");
```

---

## ✅ PRACTICAL SESSION (90 minutes)

### Experiment 15: Reverse a String

**Objective:** Implement string reversal in multiple ways

```javascript
/*
 * Experiment 15: Reverse a String
 * Multiple implementation approaches
 */

// Method 1: Traditional Loop (Beginner-Friendly)
function reverseStringMethod1(str) {
    let reversed = "";
    
    for (let i = str.length - 1; i >= 0; i--) {
        reversed = reversed + str[i];
    }
    
    return reversed;
}

// Method 2: Using Built-in Methods (Modern)
function reverseStringMethod2(str) {
    return str.split("").reverse().join("");
}

// Method 3: Using reduce (Functional)
function reverseStringMethod3(str) {
    return str
        .split("")
        .reduce((reversed, char) => char + reversed, "");
}

// Test all methods
console.log("=== Experiment 15: Reverse String ===");

const testCases = ["Hello", "World", "JavaScript", "12345", "a"];

for (let i = 0; i < testCases.length; i++) {
    const test = testCases[i];
    console.log(`\nOriginal: "${test}"`);
    console.log(`Method 1: "${reverseStringMethod1(test)}"`);
    console.log(`Method 2: "${reverseStringMethod2(test)}"`);
    console.log(`Method 3: "${reverseStringMethod3(test)}"`);
}

// Practical use: Validate palindrome using reverse
function isPalindromeUsingReverse(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reversed = reverseStringMethod2(cleaned);
    return cleaned === reversed;
}

console.log("\n=== Palindrome Check Using Reverse ===");
console.log("Is 'racecar' palindrome? " + isPalindromeUsingReverse("racecar"));
console.log("Is 'hello' palindrome? " + isPalindromeUsingReverse("hello"));
```

---

### Experiment 16: Convert First Letter to Uppercase

**Objective:** Capitalize strings properly, including variations

```javascript
/*
 * Experiment 16: Convert First Letter to Uppercase
 * Including title case and sentence case
 */

// Method 1: Simple - Just first letter
function capitalizeFirstLetter(str) {
    if (str.length === 0) return str;
    return str[0].toUpperCase() + str.slice(1);
}

// Method 2: First letter uppercase, rest lowercase
function cleanCapitalize(str) {
    if (str.length === 0) return str;
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

// Method 3: Capitalize each word (Title Case)
function titleCase(sentence) {
    const words = sentence.split(" ");
    
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > 0) {
            words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
        }
    }
    
    return words.join(" ");
}

// Test cases
console.log("=== Experiment 16: Capitalize First Letter ===");

console.log("\nMethod 1: Just First Letter");
console.log(capitalizeFirstLetter("hello"));        // "Hello"
console.log(capitalizeFirstLetter("WORLD"));        // "WOrld"
console.log(capitalizeFirstLetter("javascript"));   // "Javascript"

console.log("\nMethod 2: Clean Capitalize");
console.log(cleanCapitalize("hello"));              // "Hello"
console.log(cleanCapitalize("WORLD"));              // "World"
console.log(cleanCapitalize("jAVASCRIPT"));         // "Javascript"

console.log("\nMethod 3: Title Case");
console.log(titleCase("hello world from javascript"));
// Output: "Hello World From Javascript"

console.log(titleCase("the quick BROWN fox"));
// Output: "The Quick Brown Fox"

// Practical: Username formatter
function formatUsername(input) {
    // Rules:
    // 1. First letter uppercase
    // 2. Rest lowercase
    // 3. Remove spaces
    
    if (input.length === 0) return "";
    
    const cleaned = input.replace(/\s/g, "");  // Remove spaces
    return cleaned[0].toUpperCase() + cleaned.slice(1).toLowerCase();
}

console.log("\n=== Username Formatter ===");
console.log(formatUsername("john doe"));       // "Johndoe"
console.log(formatUsername("  ALICE  "));      // "Alice"
console.log(formatUsername("bob smith"));      // "Bobsmith"

// Practical: Sentence formatter
function formatSentence(sentence) {
    // Capitalize first letter, end with period
    if (sentence.length === 0) return ".";
    
    let formatted = sentence.toLowerCase();
    formatted = formatted[0].toUpperCase() + formatted.slice(1);
    
    if (!formatted.endsWith(".")) {
        formatted = formatted + ".";
    }
    
    return formatted;
}

console.log("\n=== Sentence Formatter ===");
console.log(formatSentence("hello world"));     // "Hello world."
console.log(formatSentence("JAVASCRIPT IS FUN")); // "Javascript is fun."
console.log(formatSentence("good morning"));    // "Good morning."
```

---

### Exercise 4.4: Text Transformation

**Objective:** Combine multiple string operations

```javascript
console.log("=== Exercise 4.4: Text Transformation ===");

function transformText(text) {
    const original = text;
    const reversed = text.split("").reverse().join("");
    const titleCase = text
        .split(" ")
        .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");
    const allCaps = text.toUpperCase();
    const allLower = text.toLowerCase();
    
    console.log("Original:  " + original);
    console.log("Reversed:  " + reversed);
    console.log("Title:     " + titleCase);
    console.log("UPPERCASE: " + allCaps);
    console.log("lowercase: " + allLower);
}

transformText("Hello World JavaScript");
```

---

### Exercise 4.5: Complete Text Processing Tool

**Objective:** Build a comprehensive string utility

```javascript
console.log("=== Exercise 4.5: Text Tool Kit ===");

const TextTools = {
    // Check if palindrome
    isPalindrome: function(str) {
        const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
        return cleaned === cleaned.split("").reverse().join("");
    },
    
    // Reverse string
    reverse: function(str) {
        return str.split("").reverse().join("");
    },
    
    // Capitalize
    capitalize: function(str) {
        if (str.length === 0) return str;
        return str[0].toUpperCase() + str.slice(1);
    },
    
    // Title case
    titleCase: function(sentence) {
        return sentence
            .split(" ")
            .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
            .join(" ");
    },
    
    // Count characters
    charCount: function(str, char) {
        let count = 0;
        for (let i = 0; i < str.length; i++) {
            if (str[i] === char) count++;
        }
        return count;
    },
    
    // Get statistics
    stats: function(str) {
        return {
            length: str.length,
            words: str.split(" ").length,
            vowels: (str.match(/[aeiouAEIOU]/g) || []).length,
            consonants: (str.match(/[bcdfghjklmnpqrstvwxyzBCDF...]/g) || []).length
        };
    }
};

// Test the toolkit
console.log("isPalindrome('racecar'):", TextTools.isPalindrome("racecar"));
console.log("reverse('hello'):", TextTools.reverse("hello"));
console.log("capitalize('javascript'):", TextTools.capitalize("javascript"));
console.log("titleCase('hello world'):", TextTools.titleCase("hello world"));
console.log("charCount('hello', 'l'):", TextTools.charCount("hello", "l"));
console.log("stats('Hello World'):", TextTools.stats("Hello World"));
```

---

## 🎯 String Processing Patterns

### Pattern 1: Find and Replace
```javascript
const text = "The quick brown fox";
const updated = text.replace("quick", "slow");
```

### Pattern 2: Transform Each Character
```javascript
const text = "hello";
const doubled = text.split("").map(char => char + char).join("");
// Output: "hheelllloo"
```

### Pattern 3: Filter Characters
```javascript
const text = "hello123world456";
const onlyLetters = text.replace(/[0-9]/g, "");
// Output: "helloworld"
```

---

## 📋 String Methods Summary

| Task | Method |
|------|--------|
| Reverse | `split("").reverse().join("")` |
| Capitalize | `str[0].toUpperCase() + str.slice(1)` |
| All uppercase | `toUpperCase()` |
| All lowercase | `toLowerCase()` |
| Replace | `replace()` or `replaceAll()` |
| Split | `split()` |
| Join | `join()` |
| Count char | Loop or `match()` |

---

## ✅ Checklist

- [ ] Understand multiple reversal methods
- [ ] Can capitalize properly
- [ ] Know title case transformation
- [ ] Completed Experiment 15 (Reverse)
- [ ] Completed Experiment 16 (Capitalize)
- [ ] Completed Exercises 4.4-4.5
- [ ] Built text processing toolkit
- [ ] Challenge questions attempted

---

## 📖 Today's Learning Path

**09:00-09:30 (30 min):** Theory - String Reversal Methods  
**09:30-10:00 (30 min):** Theory - Capitalization Techniques  
**10:00-10:30 (30 min):** Practice - Experiments 15-16  
**10:30-11:00 (30 min):** Practice - Exercises 4.4-4.5  
**11:00-11:30 (30 min):** Challenges & Wrap-up  

**Next Day Preview:** Objects and Week 3 Integration Project!

---

**File:** `Curriculum/Week-3/Day4-Advanced-String-Operations.md`  
**Status:** Complete ✅  
**Last Updated:** February 2026
