// 1. Rectangle Pattern in JavaScript

// Theory

// A rectangle pattern is created using nested for loops.

// Outer loop → controls rows

// Inner loop → controls columns

// Number of rows and columns are different


// Code

// let rows = 4;
// let cols = 6;

// for (let i = 1; i <= rows; i++) {

//     let result = "";

//     for (let j = 1; j <= cols; j++) {
//         result += "* ";
//     }

//     console.log(result);
// }


// ---

// 2. Square Pattern in JavaScript

// Theory

// A square pattern contains:

// Equal rows

// Equal columns


// Both loops run same number of times.

// Code

// let size = 5;

// for (let i = 1; i <= size; i++) {

//     let result = "";

//     for (let j = 1; j <= size; j++) {
//         result += "* ";
//     }

//     console.log(result);
// }


// ---

// 3. Right-Angle Triangle Pattern

// Theory

// The number of stars increases row by row.

// First row → 1 star

// Second row → 2 stars

// Third row → 3 stars


// Inner loop depends on outer loop.

// Code

// let n = 5;

// for (let i = 1; i <= n; i++) {

//     let result = "";

//     for (let j = 1; j <= i; j++) {
//         result += "* ";
//     }

//     console.log(result);
// }


// ---

// 4. Left-Angle Triangle Pattern

// Theory

// Spaces are printed before stars.

// Spaces decrease

// Stars increase


// Used for right alignment.

// Code

// let n = 5;

// for (let i = 1; i <= n; i++) {

//     let result = "";

//     for (let s = 1; s <= n - i; s++) {
//         result += "  ";
//     }

//     for (let j = 1; j <= i; j++) {
//         result += "* ";
//     }

//     console.log(result);
// }


// ---

// 5. Circle Pattern in JavaScript

// Theory

// Circle pattern uses mathematical logic.

// Condition:

// i*i + j*j <= radius*radius

// If condition is true:

// Print star


// Else:

// Print space


// Code

// let radius = 5;

// for (let i = -radius; i <= radius; i++) {

//     let result = "";

//     for (let j = -radius; j <= radius; j++) {

//         if (i*i + j*j <= radius*radius) {
//             result += "* ";
//         } else {
//             result += "  ";
//         }
//     }

//     console.log(result);
// }


// ---

// 6. String Pattern using "KRISHNA"

// Theory

// Characters are printed step-by-step using substring().

// Each loop increases string length.

// Code

// let str = "KRISHNA";

// for (let i = 0; i < str.length; i++) {

//     console.log(str.substring(0, i + 1));
// }


// ---

// 7. Detect Vowels and Replace with *

// Theory

// Check every character:

// If vowel → replace with *

// Else → keep original character


// Code

// let str = "LEELA,KRISHNA";
// let result = "";

// for (let i = 0; i < str.length; i++) {

//     let ch = str[i];

//     if (ch=="A"||ch=="E"||ch=="I"||ch=="O"||ch=="U") {
//         result += "*";
//     } else {
//         result += ch;
//     }
// }
// console.log(result);


// ---

// 8. Replace Vowels with Spaces

// Theory

// Vowels are replaced using spaces instead of symbols.

// Code

// let str = "KRISHNA";
// let result = "";

// for (let i = 0; i < str.length; i++) {

//     let ch = str[i];

//     if ("AEIOUaeiou".includes(ch)) {
//         result += " ";
//     } else {
//         result += ch;
//     }
// }

// console.log(result);


// ---

// 9. Even and Odd Index Logic

// Theory

// JavaScript indexes start from 0.

// Even index → divisible by 2

// Odd index → not divisible by 2


// Code

let str = "KRISHNA";

for (let i = 0; i < str.length; i++) {

    if (i % 2 === 0) {
        console.log("Even:", i, str[i]);
    } else {
        console.log("Odd:", i, str[i]);
    }
}


// ---

// 10. Replace Even Index Positions with Spaces

// Theory

// Characters at:

// 0

// 2

// 4

// 6


// are replaced with spaces.

// Code

// let str = "KRISHNA";
// let result = "";

// for (let i = 0; i < str.length; i++) {

//     if (i % 2 === 0) {
//         result += " ";
//     } else {
//         result += str[i];
//     }
// }

// console.log(result);


// ---

// 11. Zero-Based Indexing in JavaScript

// Theory

// JavaScript strings start indexing from 0.

// Code

// let str = "KRISHNA";

// console.log(str[0]);
// console.log(str[1]);
// console.log(str[2]);


// ---

// 12. Print Characters from Even Index Positions

// Theory

// Only characters whose indexes are divisible by 2 are printed.

// // Code

// let str = "KRISHNA";

// for (let i = 0; i < str.length; i++) {

//     if (i % 2 === 0) {
//         console.log(str[i]);
//     }
// }


// ---

// 13. Replace Indexes 2, 4, 6 with Spaces

// Theory

// Specific indexes are checked manually.

// If index matches:

// Replace with space


// Else:

// Print original character


// Code

// let str = "KRISHNA";
// let result = "";

// for (let i = 0; i < str.length; i++) {

//     if (i === 2 || i === 4 || i === 6) {
//         result += " ";
//     } else {
//         result += str[i];
//     }
// }

// console.log(result);


// ---

// 14. Line-by-Line Explanation

// Theory

// Each line performs a specific operation.

// Variable Declaration

// Stores data.

// Loop

// Traverses characters one-by-one.

// Condition

// Checks indexes or vowels.

// Concatenation

// Adds characters into result string.

// Output

// Displays final result.

// Example Code

// let str = "KRISHNA";
// let result = "";

// for (let i = 0; i < str.length; i++) {

//     if (i % 2 === 0) {
//         result += " ";
//     } else {
//         result += str[i];
//     }
// }

// console.log(result);