// Functions In JavaScript:
// function is a reusable block of code, It is used to perform a specific task. When it called or invoked.or its runs only when it is called.
// functions help make code reusable ,easier to debug and maintain.
// Every thing in javascript application deponds on heaviely on functions.
// USed in Button clicks and API Calls and login systems and form validations and 
// database operatons and react componenets and node.js backend logic and asynchronous programming.
// EX: once up on a time there is a lion, lion is king of jungle. 
// the king can do any thing and the king can call others for do some work for cleaning jungle,
// every animal can do spefific work. when lion is called it will clean the jungle.
// 
// EX2:human can do some work like walking, running, jumping, etc,
// with help of specific tasks and if human can run faster when some one called or invoked.
// 
// 
// 

// TYPES OF FUNCTIONS IN JAVASCRIPT

// 1. FUNCTION DECLARATION (Named Function): Functon declarationis used to declear the function with out passing parameter. 
// Then it is static parameter pass and with passing parameter called dynamic.
// most commonly used function type to creare function in javascript.
// - Defined with function keyword
// - Hoisted (can be called before declaration)
// function greetUser(name) {
//     return `Hello, ${name}!`;
// }

// console.log("1. Function Declaration:", greetUser("Alice")); 
// function empInfo(name){
//    console.log(`employee name is:${name}`);
// }
// empInfo("Krishna");
// empInfo("Leela");
// empInfo("Ram");
// empInfo("Rama");
// empInfo("Vishnu")
// console.log(empInfo("Leela"));


// // 2. FUNCTION EXPRESSION (Anonymous Function): a function expression is a way of  creating a function snd storing it inside a variable.
// // - Defined as a value assigned to a variable
// // - Not hoisted (can't be called before declaration)
// // - Can be anonymous
// const square = function(num) {
//     return num * num;
// };

// console.log("2. Function Expression:", square(5)); 

// const productDetails=function(ProductName){
//     console.log(`product name is:${ProductName}`);  
//     console.log(`product information is:${ProductName}`);
// }
// productDetails("apple");
// console.log(productDetails("orange"));






// // 3. ARROW FUNCTION (ES6+):Arrow function  is used to create function with less syntax. and it is shoter way to write function.
// Ex: when ever a customer order a product, send a notification automatically. 
// const sendNotification=(ProductName)=>{
//     console.log(`notification sent to ${ProductName}`);
// }
// sendNotification("iphone 17 Pro Max");
// console.log(sendNotification("competation:Samsung"));
const multiply = (a, b) => a * b;

console.log("3. Arrow Function:", multiply(3, 4)); // 12

// // Multi-line arrow function
// const calculateArea = (width, height) => {
//     const area = width * height;
//     return `Area: ${area}`;
// };

// console.log("Multi-line Arrow:", calculateArea(5, 3)); // Area: 15

// // 4. IIFE (Immediately Invoked Function Expression)
// // - Runs immediately after definition
// // - Creates private scope
// (function() {
//     const secretMessage = "IIFE executed!";
//     console.log("4. IIFE:", secretMessage);
// })();

// // IIFE with parameters
// ((x, y) => {
//     console.log("IIFE with params:", x + y);
// })(10, 20); // 30

// // 5. HIGHER-ORDER FUNCTIONS
// // - Takes one or more functions as arguments
// // - OR returns a function as a result
// const numbers = [1, 2, 3, 4, 5];

// // map() is a higher-order function
// const doubled = numbers.map(num => num * 2);
// console.log("5. Higher-order (map):", doubled); // [2, 4, 6, 8, 10]

// // Custom higher-order function
// function createMultiplier(multiplier) {
//     return function(num) {
//         return num * multiplier;
//     };
// }

// const double = createMultiplier(2);
// const triple = createMultiplier(3);
// console.log("Custom HOF:", double(5), triple(5)); // 10, 15

// // 6. CALLBACK FUNCTIONS
// // - Passed as an argument to another function
// // - Executed after some operation completes
// function fetchData(callback) {
//     setTimeout(() => {
//         const data = { user: "Bob", age: 25 };
//         callback(data);
//     }, 1000);
// }

// fetchData((result) => {
//     console.log("6. Callback Function:", result); // { user: "Bob", age: 25 }
// });

// // 7. RECURSIVE FUNCTION
// // - Calls itself with a base case to prevent infinite loop
// function factorial(n) {
//     if (n === 0 || n === 1) return 1;
//     return n * factorial(n - 1);
// }

// console.log("7. Recursive Function:", factorial(5)); // 120

// // 8. PURE FUNCTION
// // - Same input always gives same output
// // - No side effects (doesn't modify external state)
// function add(a, b) {
//     return a + b;
// }

// console.log("8. Pure Function:", add(2, 3)); // 5

// // 9. IMPURE FUNCTION
// // - May have side effects
// // - Output may vary even with same input
// let counter = 0;
// function increment() {
//     counter++;
//     return counter;
// }

// console.log("9. Impure Function:", increment()); // 1
// console.log("Impure Function:", increment()); // 2

// // 10. CONSTRUCTOR FUNCTION
// // - Used to create objects
// // - Called with 'new' keyword
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.greet = function() {
//         return `Hi, I'm ${this.name}`;
//     };
// }

// const person1 = new Person("Charlie", 30);
// console.log("10. Constructor Function:", person1.greet()); // Hi, I'm Charlie

// // 11. GENERATOR FUNCTION
// // - Can pause and resume execution
// // - Uses yield keyword
// function* countGenerator() {
//     yield 1;
//     yield 2;
//     yield 3;
// }

// const generator = countGenerator();
// console.log("11. Generator Function:", generator.next().value); // 1
// console.log("Generator Function:", generator.next().value); // 2

// // 12. ASYNC FUNCTION (ES8+)
// // - Returns a promise
// // - Uses await for async operations
// async function fetchUserData() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve({ id: 1, name: "Dave" });
//         }, 500);
//     });
// }

// fetchUserData().then(user => {
//     console.log("12. Async Function:", user); // { id: 1, name: "Dave" }
// });

// // 13. METHOD (Function as Object Property)
// const calculator = {
//     add: function(a, b) { return a + b; },
//     subtract(a, b) { return a - b; }, // Shorthand method syntax
//     multiply: (a, b) => a * b
// };

// console.log("13. Object Method:", calculator.add(5, 3)); // 8
// console.log("Object Method:", calculator.subtract(10, 4)); // 6

// // 14. REST PARAMETER FUNCTION
// // - Accepts variable number of arguments as an array
// function sum(...numbers) {
//     return numbers.reduce((total, num) => total + num, 0);
// }

// console.log("14. Rest Parameter:", sum(1, 2, 3, 4)); // 10

// // 15. DEFAULT PARAMETER FUNCTION
// function greet(name = "Guest", greeting = "Hello") {
//     return `${greeting}, ${name}!`;
// }

// console.log("15. Default Parameters:", greet()); // Hello, Guest!
// console.log("Default Parameters:", greet("Eve", "Hi")); // Hi, Eve!
