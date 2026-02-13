# Week 4, Day 3: Dates, Timers, and Practical Applications (Experiments 17-19)

**Duration:** 180 minutes (90 min theory + 90 min practical)  
**Date:** February 26, 2026  
**Learning Outcome:** Work with Date object, create timers, and apply higher-order functions to real-world scenarios (Experiments 17-19)

---

## 📚 THEORY SESSION (90 minutes)

### 1. JavaScript Date Object

The **Date** object represents a specific moment in time.

**Timestamp**: A numeric value representing a specific point in time, measured in milliseconds since January 1, 1970, 00:00:00 UTC (also known as the "Unix epoch" or "epoch time"). Timestamps are useful for date calculations, comparisons, and storage because they're just numbers. For example, the timestamp 1740057045000 represents a specific moment in February 2026.

```javascript
// Create a date
const today = new Date();
console.log(today);
// Output: Wed Feb 26 2026 14:30:45 GMT+0530 (India Standard Time)

// Create specific date
const birthday = new Date(1995, 5, 15);  // June 15, 1995
const christmas = new Date("2025-12-25");

// Get current timestamp (milliseconds since Jan 1 1970)
const timestamp = Date.now();
console.log(timestamp);  // e.g., 1740057045000
```

---

### 2. Getting Date Components

```javascript
const date = new Date();

// Extract components
console.log(date.getFullYear());   // 2026
console.log(date.getMonth());      // 1 (Feb, 0-indexed)
console.log(date.getDate());       // 26 (day of month)
console.log(date.getDay());        // 3 (0=Sunday, 3=Wednesday)
console.log(date.getHours());      // 14
console.log(date.getMinutes());    // 30
console.log(date.getSeconds());    // 45

// Month name (note: month is 0-indexed)
const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

const month = monthNames[date.getMonth()];
console.log(month);  // "February"

// Day name
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const day = dayNames[date.getDay()];
console.log(day);  // "Wednesday"
```

---

### 3. Formatting Dates

```javascript
const date = new Date();

// Using toLocaleDateString()
console.log(date.toLocaleDateString());
// "2/26/2026"

console.log(date.toLocaleDateString("en-US"));
// "2/26/2026"

console.log(date.toLocaleDateString("en-IN"));
// "26/2/2026"

// Using toLocaleString()
console.log(date.toLocaleString());
// "2/26/2026, 2:30:45 PM"

// Using toLocaleTimeString()
console.log(date.toLocaleTimeString());
// "2:30:45 PM"

// Manual formatting
function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${day}/${month}/${year}`;
}

console.log(formatDate(new Date()));  // "26/02/2026"
```

---

### 4. Working with Time Differences

```javascript
// Calculate days between two dates
const date1 = new Date("2026-01-01");
const date2 = new Date("2026-12-31");

const diffInMs = date2 - date1;  // Milliseconds
const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
console.log("Days between: " + diffInDays);  // 364

// Calculate age
function calculateAge(birthDate) {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    
    return age;
}

const birthDate = new Date("1995-06-15");
console.log("Age: " + calculateAge(birthDate));  // 30
```

---

## ✅ PRACTICAL SESSION (90 minutes)

### Experiment 17: Display Date and Time

**Objective:** Display current date and time in various formats

```javascript
console.log("═══════════════════════════════════════");
console.log("    EXPERIMENT 17: Display Date & Time");
console.log("═══════════════════════════════════════\n");

function displayDateTime() {
    const now = new Date();
    
    // 1. Default format
    console.log("Default: " + now);
    
    // 2. Using toLocaleDateString()
    console.log("Date (short): " + now.toLocaleDateString());
    
    // 3. Using toLocaleString()
    console.log("Date & Time: " + now.toLocaleString());
    
    // 4. Using toLocaleTimeString()
    console.log("Time only: " + now.toLocaleTimeString());
    
    // 5. Manual formatting
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const date = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    console.log("ISO format: " + year + "-" + month + "-" + date + "T" + hours + ":" + minutes + ":" + seconds);
    
    // 6. Readable format
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    
    const dayName = dayNames[now.getDay()];
    const monthName = monthNames[now.getMonth()];
    
    console.log("Readable: " + dayName + ", " + monthName + " " + now.getDate() + ", " + year);
}

displayDateTime();

/*
EXPECTED OUTPUT:
═══════════════════════════════════════
    EXPERIMENT 17: Display Date & Time
═══════════════════════════════════════

Default: Wed Feb 26 2026 14:30:45 GMT+0530 (India Standard Time)
Date (short): 2/26/2026
Date & Time: 2/26/2026, 2:30:45 PM
Time only: 2:30:45 PM
ISO format: 2026-02-26T14:30:45
Readable: Wednesday, February 26, 2026
*/
```

---

### Experiment 18: Display Current Date

**Objective:** Display today's date in multiple formats with additional information

```javascript
console.log("\n═══════════════════════════════════════");
console.log("    EXPERIMENT 18: Display Current Date");
console.log("═══════════════════════════════════════\n");

function displayCurrentDateInfo() {
    const today = new Date();
    
    // 1. Day of week
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayName = dayNames[today.getDay()];
    
    // 2. Month name
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    const monthName = monthNames[today.getMonth()];
    
    // 3. Display information
    console.log("📅 Date Information:");
    console.log("─────────────────────────────────────");
    
    console.log("Day: " + dayName);
    console.log("Date: " + today.getDate());
    console.log("Month: " + monthName);
    console.log("Year: " + today.getFullYear());
    console.log("Day of Year: " + getDayOfYear(today));
    
    // 4. Additional info
    console.log("\n🕐 Time Information:");
    console.log("─────────────────────────────────────");
    
    const hours = String(today.getHours()).padStart(2, '0');
    const minutes = String(today.getMinutes()).padStart(2, '0');
    const seconds = String(today.getSeconds()).padStart(2, '0');
    const ampm = today.getHours() >= 12 ? "PM" : "AM";
    
    console.log("Hours: " + hours);
    console.log("Minutes: " + minutes);
    console.log("Seconds: " + seconds);
    console.log("Time (12-hour): " + (today.getHours() % 12 || 12) + ":" + minutes + " " + ampm);
    
    // 5. Special days
    console.log("\n⭐ Special Information:");
    console.log("─────────────────────────────────────");
    
    console.log("Is weekend? " + (today.getDay() === 0 || today.getDay() === 6 ? "Yes" : "No"));
    console.log("Days in this month: " + getDaysInMonth(today.getFullYear(), today.getMonth()));
}

function getDayOfYear(date) {
    const start = new Date(date.getFullYear(), 0, 0);
    const diff = date - start;
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
}

function getDaysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}

displayCurrentDateInfo();

/*
EXPECTED OUTPUT:
═══════════════════════════════════════
    EXPERIMENT 18: Display Current Date
═══════════════════════════════════════

📅 Date Information:
─────────────────────────────────────
Day: Wednesday
Date: 26
Month: February
Year: 2026
Day of Year: 57

🕐 Time Information:
─────────────────────────────────────
Hours: 14
Minutes: 30
Seconds: 45
Time (12-hour): 2:30 PM

⭐ Special Information:
─────────────────────────────────────
Is weekend? No
Days in this month: 28
*/
```

---

### Experiment 19: Create Countdown Timer

**Objective:** Build a countdown timer from a target date

```javascript
console.log("\n═══════════════════════════════════════");
console.log("    EXPERIMENT 19: Countdown Timer");
console.log("═══════════════════════════════════════\n");

function createCountdownTimer(targetDate, label) {
    console.log("⏰ Countdown to: " + label);
    console.log("═════════════════════════════════════");
    
    function updateCountdown() {
        const now = new Date().getTime();
        const target = new Date(targetDate).getTime();
        const difference = target - now;
        
        if (difference < 0) {
            console.log("🎉 Target date reached!");
            return;
        }
        
        // Calculate time units
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        // Display
        console.log(
            "⏳ " + 
            days + " days, " + 
            hours + " hours, " + 
            minutes + " minutes, " + 
            seconds + " seconds"
        );
        
        return {
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds,
            total: difference
        };
    }
    
    // Display once immediately
    return updateCountdown();
}

// Example 1: Christmas 2026
const christmas = createCountdownTimer("2026-12-25", "Christmas 2026");

// Example 2: New Year 2027
console.log();
const newYear = createCountdownTimer("2027-01-01", "New Year 2027");

// Example 3: End of semester
console.log();
const semesterEnd = createCountdownTimer("2026-03-20", "End of Semester");

// ============================================
// LIVE COUNTDOWN SIMULATION
// ============================================

console.log("\n📊 Countdown Simulation (5 ticks):");
console.log("─────────────────────────────────────");

function simulateCountdown(targetDate, ticks) {
    const results = [];
    
    for (let i = 0; i < ticks; i++) {
        const now = new Date().getTime();
        const target = new Date(targetDate).getTime();
        const difference = target - now - (i * 1000);  // Simulate time passing
        
        if (difference >= 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);
            
            results.push({
                tick: i + 1,
                days: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds
            });
        }
    }
    
    return results;
}

const countdownData = simulateCountdown("2026-12-25", 5);
for (let data of countdownData) {
    console.log("Tick " + data.tick + ": " + data.days + "d " + data.hours + "h " + data.minutes + "m " + data.seconds + "s");
}

/*
EXPECTED OUTPUT:
═══════════════════════════════════════
    EXPERIMENT 19: Countdown Timer
═══════════════════════════════════════

⏰ Countdown to: Christmas 2026
═════════════════════════════════════
⏳ 302 days, 9 hours, 29 minutes, 15 seconds

⏰ Countdown to: New Year 2027
═════════════════════════════════════
⏳ 309 days, 9 hours, 29 minutes, 15 seconds

⏰ Countdown to: End of Semester
═════════════════════════════════════
⏳ 22 days, 9 hours, 29 minutes, 15 seconds

📊 Countdown Simulation (5 ticks):
─────────────────────────────────────
Tick 1: 22d 9h 29m 15s
Tick 2: 22d 9h 29m 14s
Tick 3: 22d 9h 29m 13s
Tick 4: 22d 9h 29m 12s
Tick 5: 22d 9h 29m 11s
*/
```

---

## 🎯 Experiments Summary

✅ **Experiment 17:** Display date and time in various formats
✅ **Experiment 18:** Show complete date information with metadata
✅ **Experiment 19:** Build functional countdown timer

---

## 🎯 Key Takeaways

✅ **Date object represents a moment in time**
✅ **Can extract year, month, day, hours, minutes, seconds**
✅ **Multiple formatting options available**
✅ **Can calculate differences between dates**
✅ **Timers use date arithmetic**

---

## 📚 Common Date Pitfalls

```javascript
// ❌ Month is 0-indexed!
const feb = new Date(2026, 1, 26);  // Actually February (not March)

// ⚠️ String parsing can be tricky
const date1 = new Date("02/26/2026");  // May be locale-dependent
const date2 = new Date("2026-02-26");  // ISO format is reliable

// ⚠️ Date math returns milliseconds
const diff = date2 - date1;  // Milliseconds, not days!
const days = diff / (1000 * 60 * 60 * 24);
```

---

**File:** `Curriculum/Week-4/Day3-Dates-Timers-Experiments17-19.md`  
**Status:** Complete ✅  
**Last Updated:** February 2026

---

## ✅ Experiments 17-19 Complete!

- [x] Experiment 17: Display Date and Time ✅
- [x] Experiment 18: Display Current Date ✅
- [x] Experiment 19: Create Countdown Timer ✅

---

## 📋 Week 4 Progress

- [x] Day 1: map() ✅
- [x] Day 2: filter() and reduce() ✅
- [x] Day 3: Dates and Timers (Exp 17-19) ✅
- [ ] Day 4: Advanced Array Operations (Exp 20-22)
- [ ] Day 5: Integration Project
