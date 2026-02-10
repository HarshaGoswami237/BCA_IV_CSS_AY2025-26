# Week 3, Day 3: Strings and String Methods

**Duration:** 180 minutes (90 min theory + 90 min practical)  
**Date:** February 19, 2026  
**Learning Outcome:** Master string manipulation and implement Experiments 13-14

---

## 📚 THEORY SESSION (90 minutes)

### 1. Strings are Arrays of Characters

A string is a sequence of characters, and each character has an index:

```javascript
const text = "Hello";
// Index: 0='H', 1='e', 2='l', 3='l', 4='o'

// Access individual characters
console.log(text[0]);        // "H"
console.log(text[4]);        // "o"
console.log(text.length);    // 5

// Last character
console.log(text[text.length - 1]);  // "o"
```

---

### 2. String Methods

#### Case Conversion

```javascript
const text = "Hello World";

console.log(text.toUpperCase());  // "HELLO WORLD"
console.log(text.toLowerCase());  // "hello world"

// First letter to uppercase
const word = "hello";
const capitalized = word[0].toUpperCase() + word.slice(1);
console.log(capitalized);  // "Hello"
```

#### Finding Substrings

```javascript
const sentence = "The quick brown fox";

// Check if contains
console.log(sentence.includes("quick"));      // true
console.log(sentence.includes("slow"));       // false

// Find position
console.log(sentence.indexOf("quick"));       // 4
console.log(sentence.indexOf("brown"));       // 10
console.log(sentence.indexOf("dog"));         // -1 (not found)

// Last occurrence
console.log(sentence.lastIndexOf("o"));       // 17
```

#### Extracting Parts

```javascript
const text = "JavaScript";

// slice(start, end) - extract portion
console.log(text.slice(0, 4));     // "Java"
console.log(text.slice(4));        // "Script"
console.log(text.slice(-6));       // "Script" (last 6 chars)

// substring(start, end) - similar to slice
console.log(text.substring(0, 4)); // "Java"

// charAt(index) - get single character
console.log(text.charAt(0));       // "J"

// charCodeAt(index) - get ASCII code
console.log(text.charCodeAt(0));   // 74 (for 'J')
```

#### Replacing Text

```javascript
const text = "Hello World, Hello Everyone";

// Replace first occurrence
console.log(text.replace("Hello", "Hi"));     // "Hi World, Hello Everyone"

// Replace all (use regex with /g flag)
console.log(text.replaceAll("Hello", "Hi")); // "Hi World, Hi Everyone"

// Replace all (older method with regex)
console.log(text.replace(/Hello/g, "Hi"));   // "Hi World, Hi Everyone"
```

#### Trimming

```javascript
const text = "  Hello World  ";

console.log(text.trim());        // "Hello World"
console.log(text.trimStart());   // "Hello World  "
console.log(text.trimEnd());     // "  Hello World"
```

#### String to Array and Back

```javascript
const text = "a-b-c-d";

// Split into array
const parts = text.split("-");
console.log(parts);              // ["a", "b", "c", "d"]

// Array back to string
const joined = parts.join("-");
console.log(joined);             // "a-b-c-d"

// Split each character
const chars = "Hello".split("");
console.log(chars);              // ["H", "e", "l", "l", "o"]
```

#### Repeating and Padding

```javascript
const text = "Ha";

console.log(text.repeat(5));     // "HaHaHaHaHa"
console.log(text.padStart(5, "-"));  // "---Ha"
console.log(text.padEnd(5, "-"));    // "Ha---"
```

---

### 3. String Comparison

```javascript
const str1 = "apple";
const str2 = "apple";
const str3 = "Apple";

// Equality
console.log(str1 === str2);    // true
console.log(str1 === str3);    // false (case matters)

// Case-insensitive comparison
console.log(str1.toLowerCase() === str3.toLowerCase());  // true

// Lexicographic comparison
console.log("a" < "b");        // true
console.log("apple" < "banana"); // true
```

---

### 4. Reverse String Algorithm

```javascript
function reverseString(str) {
    let reversed = "";
    
    for (let i = str.length - 1; i >= 0; i--) {
        reversed = reversed + str[i];
    }
    
    return reversed;
}

console.log(reverseString("Hello"));  // "olleH"
console.log(reverseString("World"));  // "dlroW"
```

---

### 5. Check Palindrome Algorithm

```javascript
function isPalindrome(str) {
    // Remove spaces and convert to lowercase
    const cleaned = str.toLowerCase().replace(/\s/g, "");
    
    // Compare with reversed
    const reversed = cleaned.split("").reverse().join("");
    
    return cleaned === reversed;
}

console.log(isPalindrome("racecar"));      // true
console.log(isPalindrome("madam"));        // true
console.log(isPalindrome("hello"));        // false
console.log(isPalindrome("A man a plan a canal Panama"));  // true
```

---

## ✅ PRACTICAL SESSION (90 minutes)

### Experiment 13: Check if String is Palindrome

**Objective:** Determine if a string reads the same forwards and backwards

```javascript
/*
 * Experiment 13: Check String Palindrome
 * A palindrome reads the same forwards and backwards
 */

function isPalindrome(str) {
    // Remove spaces and non-alphanumeric, convert to lowercase
    const cleaned = str
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "");  // Keep only letters and numbers
    
    // Reverse the string
    let reversed = "";
    for (let i = cleaned.length - 1; i >= 0; i--) {
        reversed = reversed + cleaned[i];
    }
    
    // Compare
    return cleaned === reversed;
}

// Test cases
console.log("=== Experiment 13: Palindrome Checker ===");
console.log("Is 'racecar' palindrome? " + isPalindrome("racecar")); // true
console.log("Is 'madam' palindrome? " + isPalindrome("madam"));     // true
console.log("Is 'hello' palindrome? " + isPalindrome("hello"));     // false
console.log("Is 'A man a plan a canal Panama' palindrome? " + 
            isPalindrome("A man a plan a canal Panama"));           // true
console.log("Is '12321' palindrome? " + isPalindrome("12321"));     // true
console.log("Is '12345' palindrome? " + isPalindrome("12345"));     // false

// Detailed version
function checkPalindrome(str) {
    console.log("\nChecking: '" + str + "'");
    
    const cleaned = str
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "");
    
    let reversed = "";
    for (let i = cleaned.length - 1; i >= 0; i--) {
        reversed = reversed + cleaned[i];
    }
    
    console.log("Cleaned: '" + cleaned + "'");
    console.log("Reversed: '" + reversed + "'");
    
    if (cleaned === reversed) {
        console.log("✓ YES, it's a palindrome!");
        return true;
    } else {
        console.log("✗ NO, it's not a palindrome.");
        return false;
    }
}

checkPalindrome("noon");
checkPalindrome("hello");
checkPalindrome("race car");
```

---

### Experiment 14: Replace Characters of a String

**Objective:** Substitute characters in a string

```javascript
/*
 * Experiment 14: Replace Characters in String
 * Practical text replacement scenarios
 */

// Simple replacement
function replaceCharacter(str, fromChar, toChar) {
    return str.split(fromChar).join(toChar);
}

console.log("=== Experiment 14: Character Replacement ===");

// Test case 1: Simple replacement
console.log("Replace 'a' with '@':");
console.log(replaceCharacter("banana", "a", "@"));  // "b@n@n@"

// Test case 2: Replace multiple types
console.log("\nReplace vowels with '*':");
function replaceVowels(str) {
    let result = str;
    result = result.replace(/a/gi, "*"); // i = case insensitive
    result = result.replace(/e/gi, "*");
    result = result.replace(/i/gi, "*");
    result = result.replace(/o/gi, "*");
    result = result.replace(/u/gi, "*");
    return result;
}

console.log(replaceVowels("Hello World"));  // "H*ll* W*rld"

// Test case 3: Censor words
function censorWord(str, word) {
    const censored = "*".repeat(word.length);
    return str.replace(new RegExp(word, "gi"), censored);
}

console.log("\nCensor specific words:");
console.log(censorWord("The quick brown fox", "quick"));  // "The *****, brown fox"

// Test case 4: Format text
function formatCode(code) {
    // Replace braces
    code = code.replace("(", " ( ");
    code = code.replace(")", " ) ");
    code = code.replace("{", " { ");
    code = code.replace("}", " } ");
    return code;
}

console.log("\nFormat code:");
console.log(formatCode("function(x){return x+5;}"));

// Test case 5: Practical - Phone number formatting
function formatPhoneNumber(phone) {
    // Input: "9876543210"
    // Output: "98-765-43210" (Indian format)
    
    if (phone.length !== 10) return "Invalid phone";
    
    return phone.substring(0, 2) + "-" + 
           phone.substring(2, 5) + "-" + 
           phone.substring(5);
}

console.log("\nFormat phone number:");
console.log(formatPhoneNumber("9876543210"));  // "98-765-43210"

// Test case 6: Text cleaning
function cleanText(text) {
    // Remove extra spaces
    text = text.replace(/\s+/g, " ");  // Multiple spaces → single space
    // Trim
    text = text.trim();
    return text;
}

console.log("\nClean text:");
console.log(cleanText("Hello    World    from    JavaScript"));
// Output: "Hello World from JavaScript"
```

---

### Exercise 3.4: String Analysis

**Objective:** Analyze and manipulate strings

```javascript
console.log("=== Exercise 3.4: String Analysis ===");

// Count character occurrences
function countChar(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}

console.log("Count of 'l' in 'hello': " + countChar("hello", "l")); // 2
console.log("Count of 'a' in 'banana': " + countChar("banana", "a")); // 3

// Most frequent character
function mostFrequent(str) {
    let maxChar = str[0];
    let maxCount = 1;
    
    for (let i = 0; i < str.length; i++) {
        const count = countChar(str, str[i]);
        if (count > maxCount) {
            maxCount = count;
            maxChar = str[i];
        }
    }
    
    return maxChar;
}

console.log("Most frequent in 'aabbbbcccc': " + mostFrequent("aabbbbcccc")); // 'c'

// Find longest word
function longestWord(sentence) {
    const words = sentence.split(" ");
    let longest = words[0];
    
    for (let i = 1; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }
    
    return longest;
}

console.log("Longest in 'The quick brown fox': " + 
            longestWord("The quick brown fox")); // "quick"
```

---

### Exercise 3.5: Text Processing Application

**Objective:** Combine string methods in a practical tool

```javascript
console.log("=== Exercise 3.5: Text Processor ===");

function processText(text) {
    const original = text;
    const uppercase = text.toUpperCase();
    const lowercase = text.toLowerCase();
    const reversed = text.split("").reverse().join("");
    const wordCount = text.split(" ").length;
    const charCount = text.length;
    
    console.log("Original: " + original);
    console.log("Uppercase: " + uppercase);
    console.log("Lowercase: " + lowercase);
    console.log("Reversed: " + reversed);
    console.log("Word count: " + wordCount);
    console.log("Character count: " + charCount);
}

processText("Hello World");

// Sentence statistics
function analyzeText(text) {
    console.log("\n=== Text Analysis ===");
    console.log("Text: '" + text + "'");
    
    const sentences = text.split(".");
    const words = text.split(" ");
    const chars = text.length;
    const vowels = (text.match(/[aeiouAEIOU]/g) || []).length;
    
    console.log("Sentences: " + sentences.length);
    console.log("Words: " + words.length);
    console.log("Characters: " + chars);
    console.log("Vowels: " + vowels);
}

analyzeText("Hello World. This is JavaScript.");
```

---

## 🎯 String Methods Quick Reference

| Method | Purpose | Example |
|--------|---------|---------|
| toUpperCase() | Convert to uppercase | `"hello".toUpperCase()` |
| toLowerCase() | Convert to lowercase | `"HELLO".toLowerCase()` |
| includes() | Check if contains | `"hello".includes("ell")` |
| indexOf() | Find position | `"hello".indexOf("l")` |
| slice() | Extract portion | `"hello".slice(1, 4)` |
| replace() | Replace text | `"hello".replace("l", "x")` |
| split() | Convert to array | `"a-b".split("-")` |
| join() | Array to string | `["a","b"].join("-")` |
| trim() | Remove spaces | `"  hello  ".trim()` |
| length | String length | `"hello".length` |

---

## 📋 Practice Challenges

### Challenge 1: Username Validator
Check if username:
- 5-15 characters
- No spaces
- Only alphanumeric

### Challenge 2: Email Validator
Check if email is valid format

### Challenge 3: Password Strength Checker
Evaluate password strength  
(length, uppercase, numbers, special chars)

---

## 📝 Experiment 12: Replace Characters of a String

**Objective:** Find and replace specific characters or substrings within a string  
**Mandatory Practical Requirement:** Official Experiment #12 (Unit 3)  
**Learning:** String searching and transformation

<details>
  <summary><strong>Click to reveal solutions</strong></summary>

### Method 1: Manual Loop-Based Replacement (Without Built-ins)

```javascript
// Experiment 12: Replace characters in a string
// Method 1: Using a loop to manually replace

function replaceCharacters(str, oldChar, newChar) {
    let result = "";
    
    // Go through each character
    for (let i = 0; i < str.length; i++) {
        if (str[i] === oldChar) {
            result = result + newChar;  // Replace
        } else {
            result = result + str[i];   // Keep original
        }
    }
    
    return result;
}

console.log(replaceCharacters("hello world", "o", "0"));  // "hell0 w0rld"
console.log(replaceCharacters("javascript", "a", "@"));   // "j@v@script"
console.log(replaceCharacters("banana", "a", "i"));       // "binini"
```

### Method 2: Using Built-in replace() (Smart Way)

```javascript
// Experiment 12: Replace using built-in methods
// Method 2: Using replace(), replaceAll()

const str = "hello world hello";

// replace() - replaces FIRST occurrence only
console.log(str.replace("hello", "hi"));     // "hi world hello"

// replaceAll() - replaces ALL occurrences
console.log(str.replaceAll("hello", "hi"));  // "hi world hi"

// Using with character/substring
const text = "apple apple apricot apple";
console.log(text.replaceAll("apple", "orange"));  // "orange orange apricot orange"

// Case-insensitive replacement with regex (advanced):
console.log("Hello HELLO hello".replaceAll(/hello/gi, "hi"));  // "hi hi hi"
```

### Test Cases

```javascript
// Test both methods
const testCases = [
    { str: "hello", oldChar: "l", newChar: "L", expected: "heLLo" },
    { str: "banana", oldChar: "a", newChar: "i", expected: "binini" },
    { str: "javascript", oldChar: "a", newChar: "@", expected: "j@v@script" },
    { str: "abcabc", oldChar: "b", newChar: "B", expected: "aBcaBc" },
];

console.log("String Replacement Tests:");
testCases.forEach(test => {
    // Manual method
    let result = "";
    for (let i = 0; i < test.str.length; i++) {
        result += (test.str[i] === test.oldChar) ? test.newChar : test.str[i];
    }
    const match = result === test.expected ? "✓" : "✗";
    console.log(test.str + " -> " + result + " | Expected: " + test.expected + " | " + match);
});
```

</details>

---

## 📝 Experiment 13: Reverse a String

**Objective:** Reverse the order of characters in a string  
**Mandatory Practical Requirement:** Official Experiment #13 (Unit 3)  
**Learning:** String traversal and character ordering

<details>
  <summary><strong>Click to reveal solutions</strong></summary>

### Method 1: Manual Backward Loop (Without Built-ins)

```javascript
// Experiment 13: Reverse a string
// Method 1: Loop from end to start

function reverseString(str) {
    let reversed = "";
    
    // Start from last character and move backward
    for (let i = str.length - 1; i >= 0; i--) {
        reversed = reversed + str[i];
    }
    
    return reversed;
}

console.log(reverseString("hello"));      // "olleh"
console.log(reverseString("javascript")); // "tpircsaj"
console.log(reverseString("madam"));      // "madam" (palindrome!)
console.log(reverseString("12345"));      // "54321"
```

**How It Works:**
```javascript
// "hello" has length 5
// Start at index 4 (last): "o"
// Then index 3: "l"
// Then index 2: "l"
// Then index 1: "e"
// Then index 0: "h"
// Result: "olleh"
```

### Method 2: Using split(), reverse(), join() (Smart Way)

```javascript
// Experiment 13: Reverse using built-in array methods
// Method 2: Convert to array, reverse, convert back

function reverseString(str) {
    return str.split("").reverse().join("");
}

// Or using arrow function:
const reverseArrow = (str) => str.split("").reverse().join("");

console.log(reverseString("hello"));        // "olleh"
console.log(reverseString("javascript"));   // "tpircsaj"
console.log(reverseArrow("world"));         // "dlrow"

// Even shorter with implicit return:
const reverse = str => [...str].reverse().join("");
console.log(reverse("coding"));  // "gnidoc"
```

**Step-by-Step Breakdown:**
```javascript
const str = "hello";

str.split("")           // ["h", "e", "l", "l", "o"]
   .reverse()          // ["o", "l", "l", "e", "h"]
   .join("")           // "olleh"
```

### Test Cases

```javascript
// Comprehensive reverse tests
const testStrings = [
    { str: "hello", expected: "olleh" },
    { str: "abc", expected: "cba" },
    { str: "a", expected: "a" },
    { str: "", expected: "" },
    { str: "12345", expected: "54321" },
    { str: "racecar", expected: "racecar" },  // Palindrome!
];

console.log("String Reversal Tests:");
testStrings.forEach(test => {
    // Using method 1 (manual loop)
    let reversed1 = "";
    for (let i = test.str.length - 1; i >= 0; i--) {
        reversed1 += test.str[i];
    }
    
    // Using method 2 (built-in)
    const reversed2 = test.str.split("").reverse().join("");
    
    const match1 = reversed1 === test.expected ? "✓" : "✗";
    const match2 = reversed2 === test.expected ? "✓" : "✗";
    
    console.log("'" + test.str + "' -> '" + reversed1 + "' | " + match1);
});
```

</details>

---

## ✅ Checklist

- [ ] Understand strings as character arrays
- [ ] Know case conversion methods
- [ ] Can search strings (includes, indexOf)
- [ ] Can extract substrings (slice, substring)
- [ ] Can replace text
- [ ] Understand split/join
- [ ] Completed Experiment 12 (Replace Characters)
- [ ] Completed Experiment 13 (Reverse String)
- [ ] Completed Exercises 3.4-3.5
- [ ] Challenge questions attempted

---

## 📚 Summary

Strings are immutable (can't change them), but we can create new strings from them using methods.

---

## 📖 Today's Learning Path

**09:00-09:30 (30 min):** Theory - String Methods  
**09:30-10:00 (30 min):** Theory - String Algorithms  
**10:00-10:30 (30 min):** Practice - Experiments 13-14  
**10:30-11:00 (30 min):** Practice - Exercises 3.4-3.5  
**11:00-11:30 (30 min):** Challenges & Wrap-up  

**Next Day Preview:** More string manipulation & Experiments 15-16!

---

**File:** `Curriculum/Week-3/Day3-Strings-And-String-Methods.md`  
**Status:** Complete ✅  
**Last Updated:** February 2026
