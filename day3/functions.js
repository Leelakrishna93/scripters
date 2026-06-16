// ========================================
// DEEP EXPLANATION OF JAVASCRIPT FUNCTION TYPES
// ========================================

console.log("=".repeat(80));
console.log("DEEP EXPLANATION OF JAVASCRIPT FUNCTION TYPES");
console.log("=".repeat(80));

// ========================================
// 1. FUNCTION DECLARATION (Named Function)
// ========================================
console.log("\n" + "=".repeat(80));
console.log("1. FUNCTION DECLARATION (Named Function)");
console.log("=".repeat(80));

/*
DEEP EXPLANATION:
- Syntax: function functionName(parameters) { ... }
- HOISTING: Function declarations are FULLY hoisted to the top of their scope
  - This means you can call the function BEFORE it's defined in code
  - The entire function body is hoisted, not just the reference
- CHARACTERISTICS:
  - Has a name (required)
  - Creates a variable in the current scope with the function name
  - Has its own 'this' context (depends on how it's called)
  - Has a prototype object
  - Can be used as a constructor with 'new' keyword
- USE CASES:
  - General purpose functions
  - Functions that need to be called before declaration
  - Recursive functions (need a name to reference themselves)
  - Constructor functions
- PROS:
  - Hoisting allows flexible ordering
  - Clear, explicit syntax
  - Easy to debug (name appears in stack traces)
- CONS:
  - Can pollute the global scope if not careful
  - Hoisting can lead to unexpected behavior if misunderstood
*/

// Example 1: Hoisting in action (call before declaration)
console.log("\n--- Hoisting Demonstration ---");
console.log("Calling before declaration:", multiplyDecl(5, 3));

function multiplyDecl(a, b) {
    return a * b;
}

console.log("Calling after declaration:", multiplyDecl(10, 5));

// Example 2: Recursive function (needs a name)
function factorialDecl(n) {
    if (n <= 1) return 1;
    return n * factorialDecl(n - 1);
}

console.log("\n--- Recursive Example ---");
console.log("Factorial of 5:", factorialDecl(5));

// ========================================
// 2. FUNCTION EXPRESSION (Anonymous & Named)
// ========================================
console.log("\n" + "=".repeat(80));
console.log("2. FUNCTION EXPRESSION");
console.log("=".repeat(80));

/*
DEEP EXPLANATION:
- Syntax: const variableName = function(parameters) { ... }
- HOISTING: NOT hoisted! The variable declaration is hoisted (as undefined),
  but the function assignment is not
- TYPES:
  a) Anonymous Function Expression: No name after function keyword
  b) Named Function Expression: Has a name (good for recursion & debugging)
- CHARACTERISTICS:
  - Function is treated as a value
  - Can be passed as arguments to other functions
  - Can be returned from functions
  - Can be stored in data structures (arrays, objects)
- USE CASES:
  - Callbacks
  - Creating functions conditionally
  - Assigning functions to object properties
  - Avoiding global scope pollution
- PROS:
  - More control over scope
  - Can be created conditionally
  - Works well with functional programming patterns
- CONS:
  - Cannot be called before definition
  - Anonymous functions harder to debug (no name in stack traces)
*/

// Example 1: Anonymous Function Expression
console.log("\n--- Anonymous Function Expression ---");
const squareExpr = function(num) {
    return num * num;
};

console.log("Square of 7:", squareExpr(7));

// Example 2: Named Function Expression (better for debugging)
console.log("\n--- Named Function Expression ---");
const fibonacci = function fib(n) {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
};

console.log("Fibonacci(10):", fibonacci(10));

// Example 3: Conditional function creation
console.log("\n--- Conditional Function Creation ---");
let greetFunction;
const isMorning = true;

if (isMorning) {
    greetFunction = function() {
        return "Good Morning!";
    };
} else {
    greetFunction = function() {
        return "Good Evening!";
    };
}

console.log(greetFunction());

// ========================================
// 3. ARROW FUNCTION (ES6+)
// ========================================
console.log("\n" + "=".repeat(80));
console.log("3. ARROW FUNCTION (ES6+)");
console.log("=".repeat(80));

/*
DEEP EXPLANATION:
- Syntax: (param1, param2) => { statements } OR param => expression
- INTRODUCED IN ES6 (2015) as a more concise alternative to function expressions
- KEY CHARACTERISTICS:
  1. LEXICAL 'this': Does NOT have its own 'this' context!
     - Inherits 'this' from the surrounding (enclosing) lexical scope
     - Solves the classic "this" problem in callbacks
  2. NO 'arguments' object: Cannot access arguments array-like object
  3. NO prototype object: Cannot be used as a constructor with 'new'
  4. NO duplicate named parameters
  5. Implicit return: If single expression, no need for {} or return
- VARIATIONS:
  - Single parameter: param => expression (no parentheses needed)
  - Multiple parameters: (p1, p2) => expression
  - No parameters: () => expression
  - Block body: () => { return expression; }
- USE CASES:
  - Array methods (map, filter, reduce, etc.)
  - Callbacks where 'this' context needs to be preserved
  - Short, single-purpose functions
  - Functional programming patterns
- PROS:
  - Concise, readable syntax
  - Lexical 'this' prevents common bugs
  - Great for functional programming
- CONS:
  - Cannot be used as constructors
  - No 'arguments' object
  - Not suitable for methods that need access to object's 'this'
*/

// Example 1: Syntax variations
console.log("\n--- Arrow Function Syntax Variations ---");

// Single parameter, implicit return
const double = x => x * 2;
console.log("Double 4:", double(4));

// Multiple parameters
const add = (a, b) => a + b;
console.log("Add 5+3:", add(5, 3));

// No parameters
const getRandom = () => Math.random();
console.log("Random number:", getRandom());

// Block body (needs explicit return)
const calculate = (x, y) => {
    const sum = x + y;
    const product = x * y;
    return { sum, product };
};
console.log("Calculate:", calculate(3, 4));

// Example 2: Lexical 'this' demonstration
console.log("\n--- Lexical 'this' Demonstration ---");

const counter = {
    count: 0,
    start: function() {
        // Regular function would have its own 'this' (would be undefined or global)
        // Arrow function inherits 'this' from start() method
        setInterval(() => {
            this.count++;
            console.log("Counter:", this.count);
        }, 1000);
    }
};

// Uncomment to see (will run continuously)
// counter.start();

// Example 3: Array methods with arrows
console.log("\n--- Array Methods with Arrow Functions ---");
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evens = numbers.filter(n => n % 2 === 0);
const squared = numbers.map(n => n * n);
const sumAll = numbers.reduce((acc, n) => acc + n, 0);

console.log("Evens:", evens);
console.log("Squared:", squared);
console.log("Sum:", sumAll);

// ========================================
// 4. IIFE (Immediately Invoked Function Expression)
// ========================================
console.log("\n" + "=".repeat(80));
console.log("4. IIFE (Immediately Invoked Function Expression)");
console.log("=".repeat(80));

/*
DEEP EXPLANATION:
- Pronounced: "iffy"
- Syntax: (function() { ... })(); OR (function() { ... }());
- Definition: A function that is defined AND executed immediately
- KEY CONCEPT: Creates a PRIVATE SCOPE to encapsulate variables
- BEFORE ES6 MODULES: This was the primary way to avoid polluting global scope
- HOW IT WORKS:
  1. The parentheses () around the function make it an expression
  2. The trailing () invoke the function immediately
- VARIATIONS:
  - With parameters: (function(p1, p2) { ... })(arg1, arg2)
  - Arrow function IIFE: (() => { ... })()
  - With return value: const result = (function() { return 42; })()
- USE CASES:
  - Creating private variables (modules before ES6)
  - Avoiding global scope pollution
  - One-time initialization code
  - Data privacy in libraries
- PROS:
  - Encapsulation, no global pollution
  - Data privacy
  - Runs immediately
- CONS:
  - Less necessary with ES6 modules and block scope (let/const)
  - Can make code harder to read if overused
*/

// Example 1: Basic IIFE
console.log("\n--- Basic IIFE ---");
(function() {
    const privateMessage = "This is private!";
    console.log("IIFE executed:", privateMessage);
})();

// privateMessage is not accessible here (would cause error)
// console.log(privateMessage); // ReferenceError

// Example 2: IIFE with parameters
console.log("\n--- IIFE with Parameters ---");
(function(username, age) {
    console.log(`Hello ${username}, you are ${age} years old`);
})("Alice", 30);

// Example 3: IIFE returning a value
console.log("\n--- IIFE Returning Value ---");
const config = (function() {
    const apiKey = "secret123"; // Private
    const baseUrl = "https://api.example.com";
    
    return {
        getBaseUrl: () => baseUrl,
        // Can't access apiKey from outside!
    };
})();

console.log("Config base URL:", config.getBaseUrl());
// console.log(config.apiKey); // undefined (private)

// Example 4: Module pattern with IIFE (classic pattern)
console.log("\n--- Module Pattern with IIFE ---");
const Calculator = (function() {
    // Private members (only accessible inside IIFE)
    const add = (a, b) => a + b;
    const subtract = (a, b) => a - b;
    
    // Public API (exposed via returned object)
    return {
        add,
        subtract,
        multiply: (a, b) => a * b
    };
})();

console.log("Calculator.add(5, 3):", Calculator.add(5, 3));
console.log("Calculator.multiply(4, 2):", Calculator.multiply(4, 2));

// ========================================
// 5. HIGHER-ORDER FUNCTIONS (HOFs)
// ========================================
console.log("\n" + "=".repeat(80));
console.log("5. HIGHER-ORDER FUNCTIONS (HOFs)");
console.log("=".repeat(80));

/*
DEEP EXPLANATION:
- Definition: A function that EITHER:
  1. Takes one or more functions as arguments, OR
  2. Returns a function as its result
- FOUNDATION OF FUNCTIONAL PROGRAMMING in JavaScript
- BUILT-IN HOFs: map, filter, reduce, forEach, sort, setTimeout, setInterval, etc.
- KEY CONCEPTS:
  - Function composition
  - Abstraction of operations
  - Code reuse through function arguments
- USE CASES:
  - Array transformation (map, filter, reduce)
  - Creating function factories
  - Decorators/wrappers
  - Asynchronous operations
- PROS:
  - Code reusability
  - Better abstraction
  - More declarative code
  - Enables functional programming patterns
- CONS:
  - Can be hard to understand for beginners
  - Overuse can reduce readability
*/

// Example 1: Function that takes a function as argument
console.log("\n--- HOF: Takes Function as Argument ---");

function applyOperation(arr, operation) {
    const result = [];
    for (let item of arr) {
        result.push(operation(item));
    }
    return result;
}

const nums = [1, 2, 3, 4];
const doubledNums = applyOperation(nums, x => x * 2);
const squaredNums = applyOperation(nums, x => x * x);

console.log("Doubled:", doubledNums);
console.log("Squared:", squaredNums);

// Example 2: Function that returns a function (Function Factory)
console.log("\n--- HOF: Returns a Function (Factory) ---");

function createGreeter(greeting) {
    // This inner function "closes over" the greeting variable
    return function(name) {
        return `${greeting}, ${name}!`;
    };
}

const sayHello = createGreeter("Hello");
const sayHi = createGreeter("Hi");
const sayGoodMorning = createGreeter("Good Morning");

console.log(sayHello("Bob"));
console.log(sayHi("Charlie"));
console.log(sayGoodMorning("Diana"));

// Example 3: Built-in HOFs (map, filter, reduce)
console.log("\n--- Built-in HOFs ---");

const products = [
    { name: "Laptop", price: 1000, inStock: true },
    { name: "Phone", price: 500, inStock: false },
    { name: "Tablet", price: 300, inStock: true },
    { name: "Watch", price: 200, inStock: true }
];

// Filter: get in-stock products
const inStockProducts = products.filter(p => p.inStock);
console.log("In-stock products:", inStockProducts.map(p => p.name));

// Map: get product names
const productNames = products.map(p => p.name);
console.log("All products:", productNames);

// Reduce: calculate total value of in-stock products
const totalValue = products
    .filter(p => p.inStock)
    .reduce((total, p) => total + p.price, 0);
console.log("Total in-stock value:", totalValue);

// ========================================
// 6. CALLBACK FUNCTIONS
// ========================================
console.log("\n" + "=".repeat(80));
console.log("6. CALLBACK FUNCTIONS");
console.log("=".repeat(80));

/*
DEEP EXPLANATION:
- Definition: A function passed as an argument to another function, to be executed later
- CALLBACK HELL/PYRAMID OF DOOM: Nested callbacks can become unreadable
- TYPES:
  1. Synchronous callbacks: Executed immediately (e.g., array methods)
  2. Asynchronous callbacks: Executed later (e.g., setTimeout, API calls)
- BEFORE ES6: Callbacks were the primary way to handle asynchronous operations
- NOW: Often replaced by Promises and async/await, but still widely used
- USE CASES:
  - Event handlers (button clicks, etc.)
  - Asynchronous operations (API calls, file I/O)
  - Array methods
  - Custom hooks in React
- PROS:
  - Simple for basic use cases
  - Fundamental to JavaScript's event-driven model
- CONS:
  - Callback hell with multiple nested async operations
  - Harder error handling
  - Can lead to "spaghetti" code
*/

// Example 1: Synchronous callback (array forEach)
console.log("\n--- Synchronous Callback ---");

const colors = ["red", "green", "blue"];
colors.forEach((color, index) => {
    console.log(`Color ${index + 1}: ${color}`);
});

// Example 2: Asynchronous callback (setTimeout)
console.log("\n--- Asynchronous Callback ---");

console.log("Start");

setTimeout(() => {
    console.log("This runs after 1 second (async callback)");
}, 1000);

console.log("End (runs before timeout callback!)");

// Example 3: Simulating API call with callback
console.log("\n--- Simulated API Call ---");

function fetchUser(userId, onSuccess, onError) {
    // Simulate network delay
    setTimeout(() => {
        if (userId > 0) {
            onSuccess({ id: userId, name: "John Doe", email: "john@example.com" });
        } else {
            onError(new Error("Invalid user ID"));
        }
    }, 500);
}

fetchUser(123, 
    (user) => {
        console.log("User fetched:", user);
    },
    (error) => {
        console.error("Error:", error.message);
    }
);

// Example 4: Callback Hell (what to avoid!)
console.log("\n--- Callback Hell Example ---");

// This is how code used to look before Promises!
function callbackHellDemo() {
    setTimeout(() => {
        console.log("Step 1 done");
        setTimeout(() => {
            console.log("Step 2 done");
            setTimeout(() => {
                console.log("Step 3 done");
                // This can go many levels deep!
            }, 500);
        }, 500);
    }, 500);
}

// callbackHellDemo(); // Uncomment to see

// ========================================
// 7. RECURSIVE FUNCTIONS
// ========================================
console.log("\n" + "=".repeat(80));
console.log("7. RECURSIVE FUNCTIONS");
console.log("=".repeat(80));

/*
DEEP EXPLANATION:
- Definition: A function that calls itself with a smaller/simpler input
- TWO ESSENTIAL PARTS:
  1. BASE CASE: The condition that stops recursion (prevents infinite loop)
  2. RECURSIVE CASE: The part where the function calls itself with modified input
- CALL STACK: Each recursive call adds a frame to the call stack
- STACK OVERFLOW: Too many recursive calls can cause stack overflow
- TAIL RECURSION: A special form where recursive call is the last operation (some engines optimize)
- USE CASES:
  - Tree traversal (DOM, file systems, JSON)
  - Mathematical sequences (Fibonacci, factorial)
  - Divide and conquer algorithms (binary search, quicksort)
  - Problems with nested structures
- PROS:
  - Elegant solution for recursive problems
  - Often more readable than iterative for recursive problems
- CONS:
  - Can be less efficient (stack overhead)
  - Risk of stack overflow
  - Harder to debug for beginners
*/

// Example 1: Factorial
console.log("\n--- Factorial ---");

function factorial(n) {
    console.log(`Calculating factorial(${n})`);
    if (n === 0 || n === 1) {
        console.log(`Base case reached: factorial(${n}) = 1`);
        return 1;
    }
    const result = n * factorial(n - 1);
    console.log(`factorial(${n}) = ${n} * factorial(${n-1}) = ${result}`);
    return result;
}

console.log("Final result:", factorial(5));

// Example 2: Fibonacci sequence
console.log("\n--- Fibonacci ---");

function fib(n) {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
}

// Note: This is inefficient! For better performance, use memoization
console.log("Fib(0):", fib(0));
console.log("Fib(1):", fib(1));
console.log("Fib(5):", fib(5));
console.log("Fib(10):", fib(10));

// Example 3: Deep object cloning
console.log("\n--- Deep Object Cloning ---");

function deepClone(obj) {
    if (obj === null || typeof obj !== "object") {
        return obj; // Base case: not an object
    }
    
    if (Array.isArray(obj)) {
        return obj.map(item => deepClone(item));
    }
    
    const cloned = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            cloned[key] = deepClone(obj[key]);
        }
    }
    return cloned;
}

const original = {
    name: "Alice",
    details: {
        age: 30,
        hobbies: ["reading", "coding"]
    }
};

const cloned = deepClone(original);
cloned.details.age = 31; // Only changes clone, not original

console.log("Original age:", original.details.age);
console.log("Cloned age:", cloned.details.age);

// Example 4: Tree traversal
console.log("\n--- Tree Traversal ---");

const fileSystem = {
    name: "root",
    type: "folder",
    children: [
        {
            name: "documents",
            type: "folder",
            children: [
                { name: "resume.pdf", type: "file" },
                { name: "notes.txt", type: "file" }
            ]
        },
        {
            name: "photos",
            type: "folder",
            children: [
                { name: "vacation.jpg", type: "file" }
            ]
        }
    ]
};

function findAllFiles(node, files = []) {
    if (node.type === "file") {
        files.push(node.name);
    }
    if (node.children) {
        node.children.forEach(child => findAllFiles(child, files));
    }
    return files;
}

console.log("All files:", findAllFiles(fileSystem));

// ========================================
// 8. PURE VS IMPURE FUNCTIONS
// ========================================
console.log("\n" + "=".repeat(80));
console.log("8. PURE VS IMPURE FUNCTIONS");
console.log("=".repeat(80));

/*
DEEP EXPLANATION:

PURE FUNCTIONS:
- Definition: A function that satisfies two conditions:
  1. Same input ALWAYS produces same output (deterministic)
  2. No side effects (doesn't modify anything outside the function)
- SIDE EFFECTS:
  - Modifying global variables
  - Modifying function arguments
  - Making API calls
  - Writing to files/databases
  - Logging to console
  - DOM manipulation
  - Generating random numbers
- USE CASES:
  - Functional programming
  - State management (Redux reducers)
  - Predictable, testable code
- PROS:
  - Easy to test
  - Deterministic, predictable
  - No side effects to worry about
  - Can be safely cached (memoization)
- CONS:
  - Can't handle I/O or state changes directly

IMPURE FUNCTIONS:
- Definition: Any function that is NOT pure
- Has side effects OR depends on external state
- USE CASES:
  - API calls
  - DOM updates
  - Database operations
  - State mutation
- PROS:
  - Necessary for real-world applications
  - Can interact with external systems
- CONS:
  - Harder to test
  - Less predictable
  - Can cause bugs due to side effects
*/

// Example 1: Pure function
console.log("\n--- Pure Function ---");

function pureAdd(a, b) {
    return a + b;
}

console.log("pureAdd(2, 3):", pureAdd(2, 3));
console.log("pureAdd(2, 3):", pureAdd(2, 3));
console.log("pureAdd(2, 3):", pureAdd(2, 3));
// Always returns 5 - predictable!

// Example 2: Impure function (depends on external state)
console.log("\n--- Impure Function (External State) ---");

let taxRate = 0.1;

function calculateTotal(price) {
    return price * (1 + taxRate); // Depends on external taxRate
}

console.log("Total with 10% tax:", calculateTotal(100));
taxRate = 0.2; // Change external state
console.log("Total with 20% tax:", calculateTotal(100));
// Same input, different output!

// Example 3: Impure function (modifies external state)
console.log("\n--- Impure Function (Side Effect) ---");

let cart = [];

function addToCart(product) {
    cart.push(product); // Modifies external cart array
    console.log("Product added:", product);
}

addToCart("Shirt");
addToCart("Shoes");
console.log("Cart:", cart);

// Example 4: Pure vs Impure - Same functionality
console.log("\n--- Pure vs Impure Comparison ---");

// Impure: modifies the array
function impureDoubleArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * 2;
    }
    return arr;
}

const originalArr = [1, 2, 3];
const impureResult = impureDoubleArray(originalArr);
console.log("Impure - Original modified:", originalArr);

// Pure: returns a new array, doesn't modify original
function pureDoubleArray(arr) {
    return arr.map(x => x * 2);
}

const originalArr2 = [1, 2, 3];
const pureResult = pureDoubleArray(originalArr2);
console.log("Pure - Original unchanged:", originalArr2);
console.log("Pure - New array:", pureResult);

// ========================================
// 9. CONSTRUCTOR FUNCTIONS
// ========================================
console.log("\n" + "=".repeat(80));
console.log("9. CONSTRUCTOR FUNCTIONS");
console.log("=".repeat(80));

/*
DEEP EXPLANATION:
- Definition: A function used to create and initialize objects
- Called with the 'new' keyword
- CONVENTION: Constructor names start with capital letter
- WHAT 'new' DOES:
  1. Creates a new empty object {}
  2. Sets 'this' to point to the new object
  3. Executes the constructor function
  4. Returns the new object (unless constructor returns an object explicitly)
- PROTOTYPE: All instances share methods defined on constructor.prototype
- ES6 CLASSES: Syntactic sugar over constructor functions
- USE CASES:
  - Creating multiple similar objects
  - Object-oriented programming patterns
  - Before ES6 classes, this was how OOP was done
- PROS:
  - Creates objects with shared structure
  - Prototype inheritance
- CONS:
  - Easy to forget 'new' keyword (causes bugs)
  - ES6 classes are more modern and readable
*/

// Example 1: Basic constructor function
console.log("\n--- Basic Constructor ---");

function Person(firstName, lastName, age) {
    // 'this' refers to the new object being created
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    
    // Method defined inside constructor (each instance gets its own copy)
    this.getFullName = function() {
        return `${this.firstName} ${this.lastName}`;
    };
}

// Create instances
const person1 = new Person("John", "Doe", 30);
const person2 = new Person("Jane", "Smith", 25);

console.log("Person 1:", person1);
console.log("Person 2 full name:", person2.getFullName());

// Example 2: Using prototype (better memory usage)
console.log("\n--- Constructor with Prototype ---");

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

// Method defined on prototype - shared by all instances
Car.prototype.getAge = function() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.year;
};

Car.prototype.getDescription = function() {
    return `${this.year} ${this.make} ${this.model}`;
};

const car1 = new Car("Toyota", "Camry", 2020);
const car2 = new Car("Honda", "Accord", 2019);

console.log(car1.getDescription());
console.log("Car 1 age:", car1.getAge());
console.log(car2.getDescription());
console.log("Car 2 age:", car2.getAge());

// Both instances share the same prototype methods
console.log("Same prototype method?", car1.getDescription === car2.getDescription);

// Example 3: ES6 Class (syntactic sugar for constructor)
console.log("\n--- ES6 Class (Syntactic Sugar) ---");

class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    
    makeSound() {
        return "Some generic sound";
    }
    
    getInfo() {
        return `${this.name} is a ${this.species}`;
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name, "Dog");
        this.breed = breed;
    }
    
    makeSound() {
        return "Woof! Woof!";
    }
}

const dog = new Dog("Buddy", "Golden Retriever");
console.log(dog.getInfo());
console.log(dog.makeSound());

// ========================================
// 10. GENERATOR FUNCTIONS
// ========================================
console.log("\n" + "=".repeat(80));
console.log("10. GENERATOR FUNCTIONS");
console.log("=".repeat(80));

/*
DEEP EXPLANATION:
- Syntax: function* functionName() { yield value; }
- INTRODUCED IN ES6 (2015)
- Definition: A function that can pause and resume its execution
- KEYWORDS:
  - function*: Declares a generator function
  - yield: Pauses execution and returns a value
  - next(): Resumes execution until next yield
- RETURNS: An iterator object with next() method
- next() returns an object: { value: yieldedValue, done: boolean }
- USE CASES:
  - Lazy evaluation (generate values on demand)
  - Infinite sequences
  - Controlling iteration flow
  - State machines
- PROS:
  - Memory efficient (lazy evaluation)
  - Can represent infinite sequences
  - Great for iteration
- CONS:
  - Can be confusing for beginners
  - Less commonly used than other function types
*/

// Example 1: Basic generator
console.log("\n--- Basic Generator ---");

function* countGenerator() {
    console.log("Starting...");
    yield 1;
    console.log("After first yield");
    yield 2;
    console.log("After second yield");
    yield 3;
    console.log("After third yield");
}

const gen = countGenerator();
console.log("First next():", gen.next());
console.log("Second next():", gen.next());
console.log("Third next():", gen.next());
console.log("Fourth next():", gen.next());

// Example 2: Iterating over generator with for...of
console.log("\n--- for...of with Generator ---");

function* numberGenerator(start, end) {
    for (let i = start; i <= end; i++) {
        yield i;
    }
}

for (let num of numberGenerator(1, 5)) {
    console.log("Number:", num);
}

// Example 3: Infinite sequence (fibonacci)
console.log("\n--- Infinite Fibonacci Generator ---");

function* fibonacciGenerator() {
    let a = 0, b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}

const fibGen = fibonacciGenerator();
console.log("Fib 0:", fibGen.next().value);
console.log("Fib 1:", fibGen.next().value);
console.log("Fib 2:", fibGen.next().value);
console.log("Fib 3:", fibGen.next().value);
console.log("Fib 4:", fibGen.next().value);
console.log("Fib 5:", fibGen.next().value);
// Could keep going forever!

// Example 4: Generator with return
console.log("\n--- Generator with Return ---");

function* demoGenerator() {
    yield "first";
    yield "second";
    return "final"; // This ends the generator
    yield "never reached";
}

const demoGen = demoGenerator();
console.log("Step 1:", demoGen.next());
console.log("Step 2:", demoGen.next());
console.log("Step 3:", demoGen.next()); // done: true
console.log("Step 4:", demoGen.next()); // done: true, value: undefined

// ========================================
// 11. ASYNC FUNCTIONS (ES8+)
// ========================================
console.log("\n" + "=".repeat(80));
console.log("11. ASYNC FUNCTIONS (ES8+)");
console.log("=".repeat(80));

/*
DEEP EXPLANATION:
- Syntax: async function functionName() { await promise; }
- INTRODUCED IN ES2017 (ES8)
- Definition: A function that returns a Promise, allows use of await keyword
- KEYWORDS:
  - async: Marks a function as asynchronous
  - await: Pauses execution until promise settles (resolves or rejects)
- RELATIONSHIP TO PROMISES:
  - async function always returns a Promise
  - If function returns a value, promise resolves with that value
  - If function throws an error, promise rejects with that error
- ERROR HANDLING: Use try/catch blocks with async/await
- USE CASES:
  - Asynchronous operations (API calls, file I/O)
  - Replacing callback hell
  - Sequential asynchronous operations
  - Parallel asynchronous operations (with Promise.all)
- PROS:
  - More readable than Promise chains
  - Code looks synchronous, behaves asynchronously
  - Easier error handling with try/catch
- CONS:
  - Can make it less obvious what's asynchronous
  - Need to remember to handle errors
*/

// Example 1: Basic async function
console.log("\n--- Basic Async Function ---");

async function helloAsync() {
    return "Hello, Async!";
}

helloAsync().then(result => {
    console.log("Async result:", result);
});

// Example 2: Async function with await
console.log("\n--- Async Function with Await ---");

function delay(ms) {
    return new Promise(resolve => {
        setTimeout(() => resolve(`Waited ${ms}ms`), ms);
    });
}

async function asyncDemo() {
    console.log("Start async demo");
    
    const result1 = await delay(500);
    console.log("Result 1:", result1);
    
    const result2 = await delay(300);
    console.log("Result 2:", result2);
    
    return "Done!";
}

asyncDemo().then(result => console.log("Async demo:", result));

// Example 3: Error handling in async functions
console.log("\n--- Async Function Error Handling ---");

async function fetchDataWithError(url) {
    try {
        // Simulate fetch that might fail
        if (url.includes("error")) {
            throw new Error("Failed to fetch: " + url);
        }
        return { data: "Sample data from " + url };
    } catch (error) {
        console.error("Error caught:", error.message);
        return { error: error.message };
    }
}

fetchDataWithError("https://api.example.com/data");
fetchDataWithError("https://api.example.com/error");

// Example 4: Parallel execution with Promise.all
console.log("\n--- Parallel Execution with Promise.all ---");

async function parallelDemo() {
    const startTime = Date.now();
    
    const promise1 = delay(500);
    const promise2 = delay(300);
    const promise3 = delay(400);
    
    // All promises run in parallel
    const [result1, result2, result3] = await Promise.all([promise1, promise2, promise3]);
    
    const endTime = Date.now();
    console.log("All results:", [result1, result2, result3]);
    console.log(`Total time: ${endTime - startTime}ms`);
    // Should take ~500ms (not 500+300+400 = 1200ms)
}

// Wait for previous demos to finish, then run parallel demo
setTimeout(() => parallelDemo(), 2000);

// ========================================
// 12. METHODS
// ========================================
console.log("\n" + "=".repeat(80));
console.log("12. METHODS (Functions as Object Properties)");
console.log("=".repeat(80));

/*
DEEP EXPLANATION:
- Definition: A function that is a property of an object
- 'this' in methods: Refers to the object the method is called on
- METHOD SYNTAX VARIATIONS:
  1. Traditional: methodName: function() { ... }
  2. ES6 Shorthand: methodName() { ... }
  3. Arrow function: methodName: () => { ... } (CAUTION with 'this')
- CAVEAT WITH ARROW METHODS: Arrow functions don't have their own 'this',
  so they inherit 'this' from surrounding scope (may not be the object!)
- USE CASES:
  - Object-oriented programming
  - Encapsulating behavior with data
  - Creating utility objects
- PROS:
  - Data and behavior bundled together
  - Object-oriented design
- CONS:
  - 'this' can be tricky
*/

// Example 1: Object with methods
console.log("\n--- Object with Methods ---");

const bankAccount = {
    balance: 1000,
    
    // Traditional method syntax
    deposit: function(amount) {
        this.balance += amount;
        console.log(`Deposited ${amount}, new balance: ${this.balance}`);
    },
    
    // ES6 shorthand method syntax
    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient funds!");
            return;
        }
        this.balance -= amount;
        console.log(`Withdrew ${amount}, new balance: ${this.balance}`);
    },
    
    // Getter method
    getBalance() {
        return this.balance;
    }
};

bankAccount.deposit(500);
bankAccount.withdraw(300);
console.log("Current balance:", bankAccount.getBalance());

// Example 2: Method Chaining
console.log("\n--- Method Chaining ---");

const calculator = {
    value: 0,
    
    add(num) {
        this.value += num;
        return this; // Return the object for chaining
    },
    
    subtract(num) {
        this.value -= num;
        return this;
    },
    
    multiply(num) {
        this.value *= num;
        return this;
    },
    
    getResult() {
        return this.value;
    }
};

const result = calculator
    .add(10)
    .subtract(3)
    .multiply(2)
    .getResult();

console.log("Chained calculation result:", result);

// Example 3: Arrow function as method - CAUTION!
console.log("\n--- Arrow Function as Method (CAUTION!) ---");

const badCounter = {
    count: 0,
    
    // Arrow function - 'this' will NOT be the object!
    increment: () => {
        this.count++; // 'this' is not badCounter!
        console.log("Count:", this.count);
    }
};

badCounter.increment(); // NaN - this.count is undefined!

const goodCounter = {
    count: 0,
    
    // Regular method - 'this' is goodCounter
    increment() {
        this.count++;
        console.log("Count:", this.count);
    }
};

goodCounter.increment(); // 1 - works correctly!

// ========================================
// 13. REST PARAMETER FUNCTIONS
// ========================================
console.log("\n" + "=".repeat(80));
console.log("13. REST PARAMETER FUNCTIONS");
console.log("=".repeat(80));

/*
DEEP EXPLANATION:
- Syntax: function functionName(...restParam) { ... }
- INTRODUCED IN ES6 (2015)
- Definition: Collects multiple arguments into a single array
- 'arguments' OBJECT: The old way (array-like, not a real array)
- REST PARAMETER VS SPREAD SYNTAX:
  - Rest parameter: Collects values into array (in function parameters)
  - Spread syntax: Expands array into values (in function calls)
- RULES:
  - Rest parameter must be the LAST parameter
  - Only one rest parameter per function
- USE CASES:
  - Functions with variable number of arguments
  - Wrapping other functions
  - Math operations on multiple numbers
- PROS:
  - Gives a real array (can use array methods)
  - More flexible than 'arguments'
  - Explicit and readable
- CONS:
  - Must be last parameter
*/

// Example 1: Sum with rest parameter
console.log("\n--- Sum with Rest Parameter ---");

function sum(...numbers) {
    console.log("Numbers array:", numbers);
    return numbers.reduce((total, num) => total + num, 0);
}

console.log("Sum(1, 2, 3):", sum(1, 2, 3));
console.log("Sum(10, 20, 30, 40, 50):", sum(10, 20, 30, 40, 50));
console.log("Sum():", sum());

// Example 2: Rest parameter with other parameters
console.log("\n--- Rest Parameter with Other Parameters ---");

function greetAll(greeting, ...names) {
    return names.map(name => `${greeting}, ${name}!`);
}

const greetings = greetAll("Hello", "Alice", "Bob", "Charlie");
console.log("Greetings:", greetings);

// Example 3: Old way with 'arguments' (array-like)
console.log("\n--- Old Way: 'arguments' Object ---");

function sumWithArguments() {
    console.log("arguments:", arguments);
    console.log("Is array?", Array.isArray(arguments));
    
    // Convert to array first
    const numbers = Array.from(arguments);
    return numbers.reduce((total, num) => total + num, 0);
}

console.log("sumWithArguments(1, 2, 3, 4):", sumWithArguments(1, 2, 3, 4));

// Example 4: Rest vs Spread
console.log("\n--- Rest Parameter vs Spread Syntax ---");

// Rest parameter (collects into array)
function collect(...items) {
    return items;
}

const collected = collect(1, 2, 3);
console.log("Collected:", collected);

// Spread syntax (expands array)
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log("Combined with spread:", combined);

// Using spread in function call
const numsToSum = [5, 10, 15, 20];
console.log("Sum with spread:", sum(...numsToSum));

// ========================================
// 14. DEFAULT PARAMETER FUNCTIONS
// ========================================
console.log("\n" + "=".repeat(80));
console.log("14. DEFAULT PARAMETER FUNCTIONS");
console.log("=".repeat(80));

/*
DEEP EXPLANATION:
- Syntax: function functionName(param = defaultValue) { ... }
- INTRODUCED IN ES6 (2015)
- Definition: Parameters that have default values if argument is undefined
- OLD WAY: Check if parameter is undefined and set default
- DEFAULT VALUES CAN BE:
  - Literal values (numbers, strings, objects, arrays)
  - Function calls
  - Other parameters
- RULES:
  - Parameters with defaults should come after parameters without defaults
  - Defaults are only used when argument is undefined (not null!)
- USE CASES:
  - Optional parameters
  - Setting sensible defaults
  - Backward compatibility
- PROS:
  - More readable than checking for undefined
  - Cleaner code
- CONS:
  - null doesn't trigger default (only undefined)
*/

// Example 1: Basic default parameters
console.log("\n--- Basic Default Parameters ---");

function greet(name = "Guest", greeting = "Hello") {
    return `${greeting}, ${name}!`;
}

console.log("greet():", greet());
console.log("greet('Alice'):", greet("Alice"));
console.log("greet('Bob', 'Hi'):", greet("Bob", "Hi"));
console.log("greet(undefined, 'Hey'):", greet(undefined, "Hey"));

// Example 2: Default parameter is undefined vs null
console.log("\n--- Undefined vs Null ---");

function testDefault(value = "default") {
    return value;
}

console.log("testDefault():", testDefault());
console.log("testDefault(undefined):", testDefault(undefined));
console.log("testDefault(null):", testDefault(null)); // null, NOT default!

// Example 3: Default parameter as function call
console.log("\n--- Default Parameter as Function Call ---");

function getCurrentYear() {
    return new Date().getFullYear();
}

function createUser(name, year = getCurrentYear()) {
    return { name, year };
}

const user1 = createUser("Alice");
const user2 = createUser("Bob", 2020);
console.log("User 1:", user1);
console.log("User 2:", user2);

// Example 4: Default parameter referencing other parameters
console.log("\n--- Default Parameter Referencing Other Parameters ---");

function createRectangle(width, height = width) {
    return { width, height, area: width * height };
}

const square = createRectangle(10);
const rectangle = createRectangle(10, 20);
console.log("Square:", square);
console.log("Rectangle:", rectangle);

// Example 5: Old way (before ES6)
console.log("\n--- Old Way (Before ES6) ---");

function oldGreet(name, greeting) {
    name = name || "Guest";
    greeting = greeting || "Hello";
    return `${greeting}, ${name}!`;
}

console.log("oldGreet():", oldGreet());
console.log("oldGreet('', ''):", oldGreet("", "")); // Problem! '' is falsy

// ========================================
// SUMMARY & COMPARISON
// ========================================
console.log("\n" + "=".repeat(80));
console.log("SUMMARY: WHEN TO USE WHICH FUNCTION TYPE");
console.log("=".repeat(80));

console.log(`
FUNCTION TYPE           | BEST FOR
------------------------|------------------------------------------------
Function Declaration    | General purpose, recursive, needs hoisting
Function Expression     | Callbacks, conditional creation, avoid globals
Arrow Function          | Short callbacks, array methods, lexical 'this'
IIFE                    | One-time initialization, encapsulation (legacy)
Higher-Order Function   | Function factories, decorators, array operations
Callback Function       | Event handlers, async operations (legacy)
Recursive Function      | Tree traversal, mathematical sequences
Pure Function           | Functional programming, predictable logic
Impure Function         | I/O, API calls, DOM updates, state mutation
Constructor Function    | Creating multiple similar objects (legacy)
Class                   | OOP (modern alternative to constructors)
Generator Function      | Lazy evaluation, infinite sequences
Async Function          | Asynchronous operations (modern, uses await)
Method                  | Object behavior, OOP
Rest Parameter          | Variable arguments, array methods
Default Parameter       | Optional parameters, sensible defaults
`);

console.log("\n" + "=".repeat(80));
console.log("END OF DEEP EXPLANATION");
console.log("=".repeat(80));
