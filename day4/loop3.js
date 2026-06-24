// 1. Rectangle Pattern in JavaScript

// Theory

// A rectangle pattern is created using nested for loops.

// Outer loop → controls rows

// Inner loop → controls columns

// Number of rows and columns are different


// Code

// let rows = 4;
// let cols = 9;

// for (let i = 1; i <= rows; i++) {

//     let result1 = "";

//     for (let j = 1; j <= cols; j++) {
//         result1 += "* ";
//     }

//     console.log(result1);
// }


// // ---

// // 2. Square Pattern in JavaScript

// // Theory

// // A square pattern contains:

// // Equal rows

// // Equal columns


// // Both loops run same number of times.

// // Code

// let size = 5;

// for (let i = 1; i <= size; i++) {

//     let result2 = "";

//     for (let j = 1; j <= size; j++) {
//         result2 += "* ";
//     }

//     console.log(result2);
// }


// // ---

// // 3. Right-Angle Triangle Pattern

// // Theory

// // The number of stars increases row by row.

// // First row → 1 star

// // Second row → 2 stars

// // Third row → 3 stars


// // Inner loop depends on outer loop.

// // Code

// let n = 5;

// for (let i = 1; i <= n; i++) {

//     let result3 = "";

//     for (let j = 1; j <= i; j++) {
//         result3 += "* ";
//     }

//     console.log(result3);
// }


// // ---

// // 4. Left-Angle Triangle Pattern

// // Theory

// // Spaces are printed before stars.

// // Spaces decrease

// // Stars increase


// // Used for right alignment.

// // Code

// let M = 5;

// for (let i = 1; i <= M; i++) {

//     let result4 = "";

//     for (let s = 1; s <= M - i; s++) {
//         result4 += "  ";
//     }

//     for (let j = 1; j <= i; j++) {
//         result4 += "* ";
//     }

//     console.log(result4);
// }


// // ---

// // 5. Circle Pattern in JavaScript

// // Theory

// // Circle pattern uses mathematical logic.

// // Condition:

// // i*i + j*j <= radius*radius

// // If condition is true:

// // Print star


// // Else:

// // Print space


// // Code

// let radius = 5;

// for (let i = -radius; i <= radius; i++) {

//     let result5 = "";

//     for (let j = -radius; j <= radius; j++) {

//         if (i*i + j*j <= radius*radius) {
//             result5 += "* ";
//         } else {
//             result5 += "  ";
//         }
//     }

//     console.log(result5);
// }


// // ---

// // 6. String Pattern using "KRISHNA"

// // Theory

// // Characters are printed step-by-step using substring().

// // Each loop increases string length.

// // Code

// let str8 = "KRISHNA";
// let result6 = "";   
// for (let i = 0; i < str8.length; i++) {

//     console.log(str8.substring(0, i + 1));
// }


// // ---

// // 7. Detect Vowels and Replace with *

// // Theory

// // Check every character:

// // If vowel → replace with *

// // Else → keep original character


// // Code

// let str7 = "LEELA,KRISHNA";
// let result7 = "";

// for (let i = 0; i < str7.length; i++) {

//     let ch = str7[i];

//     if (ch=="A"||ch=="E"||ch=="I"||ch=="O"||ch=="U") {
//         result7 += "*";
//     } else {
//         result7 += ch;
//     }
// }
// console.log(result7);


// // ---

// // 8. Replace Vowels with Spaces

// // Theory

// // Vowels are replaced using spaces instead of symbols.

// // Code

// let str6 = "KRISHNA";
// let result8 = "";

// for (let i = 0; i < str6.length; i++) {

//     let ch = str6[i];

//     if ("AEIOUaeiou".includes(ch)) {
//         result8 += " ";
//     } else {
//         result8 += ch;
//     }
// }

// console.log(result8);


// // ---

// // 9. Even and Odd Index Logic

// // Theory

// // JavaScript indexes start from 0.

// // Even index → divisible by 2

// // Odd index → not divisible by 2


// // Code

// let str5= "KRISHNA";

// for (let i = 0; i < str5.length; i++) {

//     if (i % 2 === 0) {
//         console.log("Even:", i, str5[i]);
//     } else {
//         console.log("Odd:", i, str5[i]);
//     }
// }


// // ---

// // 10. Replace Even Index Positions with Spaces

// // Theory

// // Characters at:

// // 0

// // 2

// // 4

// // 6


// // are replaced with spaces.

// // Code

// let str4 = "KRISHNA";
// let result9 = "";

// for (let i = 0; i < str4.length; i++) {

//     if (i % 2 === 0) {
//         result9 += " ";
//     } else {
//         result9 += str4[i];
//     }
// }

// console.log(result9);


// // ---

// // 11. Zero-Based Indexing in JavaScript

// // Theory

// // JavaScript strings start indexing from 0.

// // Code

// let str3 = "KRISHNA";

// console.log(str3[0]);
// console.log(str3[1]);
// console.log(str3[2]);


// // ---

// // 12. Print Characters from Even Index Positions

// // Theory

// // Only characters whose indexes are divisible by 2 are printed.

// // // Code

// let str = "KRISHNA";

// for (let i = 0; i < str.length; i++) {

//     if (i % 2 === 0) {
//         console.log(str[i]);
//     }
// }


// // ---

// // 13. Replace Indexes 2, 4, 6 with Spaces

// // Theory

// // Specific indexes are checked manually.

// // If index matches:

// // Replace with space


// // Else:

// // Print original character


// // Code

// let str1 = "KRISHNA";
// let result11 = "";

// for (let i = 0; i < str1.length; i++) {

//     if (i === 2 || i === 4 || i === 6) {
//         result11 += " ";
//     } else {
//         result11 += str1[i];
//     }
// }

// console.log(result11);


// // ---

// // 14. Line-by-Line Explanation

// // Theory

// // Each line performs a specific operation.

// // Variable Declaration

// // Stores data.

// // Loop

// // Traverses characters one-by-one.

// // Condition

// // Checks indexes or vowels.

// // Concatenation

// // Adds characters into result string.

// // Output

// // Displays final result.

// // Example Code

// let str2 = "KRISHNA";
// let result10= "";

// for (let i = 0; i < str2.length; i++) {

//     if (i % 2 === 0) {
//         result10 += " ";
//     } else {
//         result10 += str2[i];
//     }
// }

// console.log(result10);