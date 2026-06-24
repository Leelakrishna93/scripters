// ============================================================================
// JAVASCRIPT LOOP THEORY & REAL-WORLD EXAMPLES
// Formal Definitions + Practical Applications
// ============================================================================

/*
================================================================================
PART 1: FORMAL THEORETICAL DEFINITIONS
================================================================================

================================================================================
1. FOR LOOP
================================================================================
DEFINITION:
  A control flow statement that repeatedly executes a block of code
  a specified number of times, using three optional expressions:
  initialization, condition, and increment/decrement.

SYNTAX:
  for (initialization; condition; increment) {
    // code block to be executed
  }

COMPONENTS:
  1. Initialization: Executed ONCE before the loop starts
  2. Condition: Evaluated BEFORE each iteration; loop continues if true
  3. Increment/Decrement: Executed AFTER each iteration

USE CASE:
  Best when the EXACT number of iterations is known in advance.

REAL-TIME SCENARIOS:
  - Iterating over an array of known length
  - Generating a sequence of numbers
  - Creating patterns (triangles, rectangles, etc.)

================================================================================
2. WHILE LOOP
================================================================================
DEFINITION:
  A control flow statement that repeatedly executes a block of code
  as long as a specified condition evaluates to true. The condition
  is checked BEFORE each iteration.

SYNTAX:
  while (condition) {
    // code block to be executed
  }

USE CASE:
  Best when the number of iterations is NOT known in advance.

REAL-TIME SCENARIOS:
  - Processing data until a condition is met
  - Polling a server for updates
  - Reading user input until valid

================================================================================
3. DO...WHILE LOOP
================================================================================
DEFINITION:
  Similar to the while loop, but guarantees at least one execution
  of the code block before checking the condition. The condition
  is checked AFTER each iteration.

SYNTAX:
  do {
    // code block to be executed
  } while (condition);

USE CASE:
  Best when you need to execute code at least once, then continue
  based on a condition.

REAL-TIME SCENARIOS:
  - User input validation (ask at least once)
  - Menu-driven programs
  - Game loops that need to run at least once

================================================================================
4. FOR...IN LOOP
================================================================================
DEFINITION:
  A loop that iterates over the ENUMERABLE PROPERTIES of an object,
  including inherited enumerable properties.

SYNTAX:
  for (variable in object) {
    // code block to be executed
  }

USE CASE:
  Best for iterating over OBJECT PROPERTIES. NOT recommended for arrays.

REAL-TIME SCENARIOS:
  - Iterating over object keys and values
  - Config object processing
  - JSON data manipulation

================================================================================
5. FOR...OF LOOP
================================================================================
DEFINITION:
  A modern loop (ES6+) that iterates over ITERABLE OBJECTS (arrays,
  strings, maps, sets, etc.), providing direct access to their values.

SYNTAX:
  for (variable of iterable) {
    // code block to be executed
  }

USE CASE:
  Best for iterating over arrays, strings, and other iterable objects.
  Most modern and recommended loop type for arrays.

REAL-TIME SCENARIOS:
  - Iterating over arrays
  - Processing string characters
  - Working with Map and Set collections

================================================================================
*/

console.log("=".repeat(70));
console.log("JAVASCRIPT FOR LOOPS - FORMAL THEORY & REAL-TIME EXAMPLES");
console.log("=".repeat(70));

console.log("\n\n" + "=".repeat(70));
console.log("PART 1: FORMAL THEORETICAL DEFINITIONS");
console.log("=".repeat(70));

console.log("\n1. FOR LOOP");
console.log("-".repeat(70));
console.log("DEFINITION:");
console.log("  A control flow statement that repeatedly executes a block of code");
console.log("  a specified number of times, using three optional expressions:");
console.log("  initialization, condition, and increment/decrement.");
console.log("\nSYNTAX:");
console.log("  for (initialization; condition; increment) {");
console.log("    // code block to be executed");
console.log("  }");
console.log("\nCOMPONENTS:");
console.log("  1. Initialization: Executed ONCE before the loop starts");
console.log("  2. Condition: Evaluated BEFORE each iteration; loop continues if true");
console.log("  3. Increment/Decrement: Executed AFTER each iteration");
console.log("\nUSE CASE:");
console.log("  Best when the EXACT number of iterations is known in advance.");

console.log("\n2. WHILE LOOP");
console.log("-".repeat(70));
console.log("DEFINITION:");
console.log("  A control flow statement that repeatedly executes a block of code");
console.log("  as long as a specified condition evaluates to true. The condition");
console.log("  is checked BEFORE each iteration.");
console.log("\nSYNTAX:");
console.log("  while (condition) {");
console.log("    // code block to be executed");
console.log("  }");
console.log("\nUSE CASE:");
console.log("  Best when the number of iterations is NOT known in advance.");

console.log("\n3. DO...WHILE LOOP");
console.log("-".repeat(70));
console.log("DEFINITION:");
console.log("  Similar to the while loop, but guarantees at least one execution");
console.log("  of the code block before checking the condition. The condition");
console.log("  is checked AFTER each iteration.");
console.log("\nSYNTAX:");
console.log("  do {");
console.log("    // code block to be executed");
console.log("  } while (condition);");
console.log("\nUSE CASE:");
console.log("  Best when you need to execute code at least once, then continue");
console.log("  based on a condition (e.g., user input validation).");

console.log("\n4. FOR...IN LOOP");
console.log("-".repeat(70));
console.log("DEFINITION:");
console.log("  A loop that iterates over the ENUMERABLE PROPERTIES of an object,");
console.log("  including inherited enumerable properties.");
console.log("\nSYNTAX:");
console.log("  for (variable in object) {");
console.log("    // code block to be executed");
console.log("  }");
console.log("\nUSE CASE:");
console.log("  Best for iterating over OBJECT PROPERTIES. NOT recommended for arrays.");

console.log("\n5. FOR...OF LOOP");
console.log("-".repeat(70));
console.log("DEFINITION:");
console.log("  A modern loop (ES6+) that iterates over ITERABLE OBJECTS (arrays,");
console.log("  strings, maps, sets, etc.), providing direct access to their values.");
console.log("\nSYNTAX:");
console.log("  for (variable of iterable) {");
console.log("    // code block to be executed");
console.log("  }");
console.log("\nUSE CASE:");
console.log("  Best for iterating over arrays, strings, and other iterable objects.");
console.log("  Most modern and recommended loop type for arrays.");

/*
================================================================================
PART 2: REAL-WORLD EXAMPLES WITH SCENARIOS
================================================================================

EXAMPLE 1: E-COMMERCE - CALCULATE TOTAL CART PRICE
SCENARIO:
  An online shopping cart has multiple items. We need to calculate
  the subtotal for each item (price * quantity) and then compute
  the grand total of the entire cart.

EXAMPLE 2: USER MANAGEMENT - FILTER ACTIVE USERS
SCENARIO:
  A system has a list of users. We need to filter and display only
  the users who are currently marked as "active" in the system.

EXAMPLE 3: DATA VALIDATION - PASSWORD STRENGTH CHECKER
SCENARIO:
  A user creates a password. We need to validate its strength by
  checking if it contains uppercase letters, lowercase letters,
  numbers, and special characters.

EXAMPLE 4: REPORT GENERATION - MONTHLY SALES SUMMARY
SCENARIO:
  A business tracks monthly sales data. We need to generate a report
  showing each month's sales, calculate the annual total, and
  identify the best-performing month.

EXAMPLE 5: TEXT PROCESSING - COUNT WORD OCCURRENCES
SCENARIO:
  We have a paragraph of text. We need to analyze it and count
  how many times each word appears in the text.

EXAMPLE 6: GAMING - LEADERBOARD DISPLAY
SCENARIO:
  A game has a leaderboard with player rankings. We need to display
  the leaderboard in a formatted table showing rank, player name,
  and score.

================================================================================
*/

console.log("\n\n" + "=".repeat(70));
console.log("PART 2: REAL-WORLD EXAMPLES");
console.log("=".repeat(70));

// EXAMPLE 1: E-COMMERCE - CALCULATE TOTAL CART PRICE
console.log("\nEXAMPLE 1: E-Commerce - Calculate Total Cart Price");
console.log("-".repeat(70));
const cart = [
    { name: "Laptop", price: 899.99, quantity: 1 },
    { name: "Mouse", price: 25.50, quantity: 2 },
    { name: "Keyboard", price: 45.00, quantity: 1 }
];
let total = 0;
for (let i = 0; i < cart.length; i++) {
    const item = cart[i];
    const itemTotal = item.price * item.quantity;
    total += itemTotal;
    console.log(`${item.quantity}x ${item.name}: $${itemTotal.toFixed(2)}`);
}
console.log(`Total: $${total.toFixed(2)}`);

// EXAMPLE 2: USER MANAGEMENT - FILTER ACTIVE USERS
console.log("\nEXAMPLE 2: User Management - Filter Active Users");
console.log("-".repeat(70));
const users = [
    { id: 1, name: "Alice", active: true },
    { id: 2, name: "Bob", active: false },
    { id: 3, name: "Charlie", active: true },
    { id: 4, name: "Diana", active: true }
];
const activeUsers = [];
for (let user of users) {
    if (user.active) {
        activeUsers.push(user);
    }
}
console.log("Active Users:");
for (let user of activeUsers) {
    console.log(`- ${user.name} (ID: ${user.id})`);
}

// EXAMPLE 3: DATA VALIDATION - PASSWORD STRENGTH CHECKER
console.log("\nEXAMPLE 3: Data Validation - Password Strength Checker");
console.log("-".repeat(70));
const password = "P@ssw0rd123";
let hasUppercase = false;
let hasLowercase = false;
let hasNumber = false;
let hasSpecial = false;
for (let char of password) {
    if (char >= "A" && char <= "Z") hasUppercase = true;
    else if (char >= "a" && char <= "z") hasLowercase = true;
    else if (char >= "0" && char <= "9") hasNumber = true;
    else hasSpecial = true;
}
console.log(`Password: ${password}`);
console.log(`Strength Check: ${hasUppercase && hasLowercase && hasNumber && hasSpecial ? "STRONG" : "WEAK"}`);
console.log(`- Uppercase: ${hasUppercase}, Lowercase: ${hasLowercase}`);
console.log(`- Number: ${hasNumber}, Special: ${hasSpecial}`);

// EXAMPLE 4: REPORT GENERATION - MONTHLY SALES SUMMARY
console.log("\nEXAMPLE 4: Report Generation - Monthly Sales Summary");
console.log("-".repeat(70));
const monthlySales = [1200, 1500, 900, 2100, 1800, 2500];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
let annualTotal = 0;
let maxSale = 0;
let maxMonth = "";
for (let i = 0; i < monthlySales.length; i++) {
    const sale = monthlySales[i];
    const month = months[i];
    annualTotal += sale;
    if (sale > maxSale) {
        maxSale = sale;
        maxMonth = month;
    }
    console.log(`${month}: $${sale}`);
}
console.log(`\nAnnual Total: $${annualTotal}`);
console.log(`Best Month: ${maxMonth} ($${maxSale})`);

// EXAMPLE 5: TEXT PROCESSING - COUNT WORD OCCURRENCES
console.log("\nEXAMPLE 5: Text Processing - Count Word Occurrences");
console.log("-".repeat(70));
const text = "the quick brown fox jumps over the lazy dog the fox";
const words = text.split(" ");
const wordCount = {};
for (let word of words) {
    wordCount[word] = (wordCount[word] || 0) + 1;
}
console.log(`Text: "${text}"`);
console.log("Word Occurrences:");
for (let word in wordCount) {
    console.log(`- ${word}: ${wordCount[word]}`);
}

// EXAMPLE 6: GAMING - LEADERBOARD DISPLAY
console.log("\nEXAMPLE 6: Gaming - Leaderboard Display");
console.log("-".repeat(70));
const leaderboard = [
    { rank: 1, player: "ProGamer", score: 9850 },
    { rank: 2, player: "NoobSlayer", score: 8720 },
    { rank: 3, player: "SpeedRunner", score: 7650 },
    { rank: 4, player: "CasualPlayer", score: 5430 }
];
console.log("LEADERBOARD");
console.log("Rank | Player          | Score");
console.log("-----|-----------------|-------");
for (let entry of leaderboard) {
    const playerPad = entry.player.padEnd(15);
    console.log(`${String(entry.rank).padStart(4)} | ${playerPad} | ${entry.score}`);
}
