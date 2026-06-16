// **Structuring demo examples**

// I'm thinking about organizing the main demonstration with 10-20 lines each and ensuring I provide 10 examples per type. Each section needs to include those examples, possibly as an object array with 10 different examples. The user mentioned adding an object array connected with datatypes and accessing object methods. So, I plan to create sections for data types, arrays, and objects, ensuring I address properties and methods with roughly 10 examples for each. That sounds like a solid plan!


// Below is a step-by-step, interview-style explanation with clear code. I connected functions with `data types`, `objects`, `arrays`, and `accessing object methods`, and kept the examples beginner-friendly.

// ## Interview foundation

// ```javascript
// /*
// INTERVIEW STARTING POINT

// Q: What is a function in JavaScript?
// A: A function is a reusable block of code that performs a specific task.

// Q: Why do we use functions?
// A: To avoid repetition, improve readability, organize logic, and make code reusable.

// Q: How are functions connected to data types?
// A: Functions can take any data type as input such as number, string, boolean, array, object, null, undefined, or another function.

// Q: How are functions connected to objects and arrays?
// A: Functions can read object properties, call object methods, loop through arrays, return arrays, and even be stored inside objects as methods.
// */
// ```

// ## Data types, objects, arrays

// ### Step-by-step interview explanation

// ```javascript
// /*
// STEP 1: JavaScript has primitive data types.
// number, string, boolean, undefined, null, bigint, symbol

// STEP 2: JavaScript also has reference types.
// object, array, function

// STEP 3: Arrays store multiple values in ordered form.
// STEP 4: Objects store data in key-value pairs.
// STEP 5: Functions can accept these types, process them, and return results.
// STEP 6: Methods are functions stored inside objects.
// */
// ```

// ### Main code example

// ```javascript
// // Different data types
// let age = 25;                    // number
// let name = "Rahul";              // string
// let isStudent = true;            // boolean
// let city;                        // undefined
// let score = null;                // null

// // Array
// let marks = [80, 90, 70];

// // Object
// let person = {
//   firstName: "Rahul",
//   lastName: "Kumar",
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   }
// };

// console.log(typeof age);         // number
// console.log(typeof name);        // string
// console.log(Array.isArray(marks)); // true
// console.log(person.fullName());  // Rahul Kumar
// ```


// ## Function declaration

// ### Interview explanation

// ```javascript
// /*
// Q: What is a function declaration?
// A: A function declaration is a function defined using the function keyword with a name.

// STEP 1: Write the function keyword.
// STEP 2: Give the function a name.
// STEP 3: Add parentheses for parameters.
// STEP 4: Write the function body inside curly braces.
// STEP 5: Call the function using its name.

// IMPORTANT:
// Function declarations are hoisted, so they can be called before their definition in many cases.
// */
// ```

// ### Main code example

// ```javascript
function greetUser(name) {
  let message = "Hello, " + name;
  console.log(message);
}

greetUser("Rahul");


// ## Function expression
// Q: What is a function expression?
// A: A function expression is a function stored inside a variable.

// STEP 1: Create a variable.
// STEP 2: Assign a function to that variable.
// STEP 3: Use the variable name to call the function.

// IMPORTANT:
// Function expressions are not hoisted in the same way as function declarations.
// That means we usually call them after defining them.
// */
// ```

// ### Main code example

// ```javascript
// const greet = function (name) {
//   console.log("Hello, " + name);
// };


// ## Anonymous function

// Q: What is an anonymous function?
// A: An anonymous function is a function without a name.

// STEP 1: Write function without naming it.
// STEP 2: Usually assign it to a variable or pass it as an argument.
// STEP 3: Use it where a function is needed for one-time or short use.

// IMPORTANT:
// Anonymous functions are common in callbacks, timers, and function expressions.


// ```javascript
// const message = function () {
//   console.log("This is an anonymous function");
// };

// setTimeout(function () {
//   console.log("Executed after delay");
// }, 1000);


// ## Arrow function

// Q: What is an arrow function?
// A: An arrow function is a shorter syntax for writing functions in JavaScript.

// STEP 1: Create a variable.
// STEP 2: Write parameters.
// STEP 3: Use the => symbol.
// STEP 4: Write the function body.

// IMPORTANT:
// Arrow functions do not have their own this like normal functions.
// They are mostly used for short and clean code.

// ### Main code example

// ```javascript
// const greet = (name) => {
//   console.log("Hello " + name);
// };

// greet("Divya");


// ## Function with return statement


// Q: What is a function with return statement?
// A: It is a function that sends a value back to the caller using the return keyword.

// STEP 1: Process the input.
// STEP 2: Use return to send the result.
// STEP 3: Store or print the returned value.

// IMPORTANT:
// Without return, the function gives undefined by default.
// Return ends the function execution immediately.


// function findTotal(price, tax) {
//   let total = price + tax;
//   return total;
// }

// function getUserName(user) {
//   return user.name;
// }

// function getSecondValue(arr) {
//   return arr[1];
// }

// let totalBill = findTotal(100, 18);
// console.log(totalBill);

// console.log(getUserName({ name: "Anil" }));
// console.log(getSecondValue([5, 10, 15]));
// ```

// ### 10 examples

// ```javascript
// // 1
// function add(a, b) {
//   return a + b;
// }
// console.log(add(1, 2));

// // 2
// function sub(a, b) {
//   return a - b;
// }
// console.log(sub(9, 4));

// // 3
// function greet(name) {
//   return "Hello " + name;
// }
// console.log(greet("Pooja"));

// // 4
// function getLength(arr) {
//   return arr.length;
// }
// console.log(getLength([1, 2, 3, 4]));

// // 5
// function getTitle(book) {
//   return book.title;
// }
// console.log(getTitle({ title: "JS Basics" }));

// // 6
// function isOdd(n) {
//   return n % 2 !== 0;
// }
// console.log(isOdd(7));

// // 7
// function double(n) {
//   return n * 2;
// }
// console.log(double(12));

// // 8
// function firstName(user) {
//   return user.firstName;
// }
// console.log(firstName({ firstName: "Karthik" }));

// // 9
// function getLast(arr) {
//   return arr[arr.length - 1];
// }
// console.log(getLast(["a", "b", "c"]));

// // 10
// function combine(a, b) {
//   return a + b;
// }
// console.log(combine("Front", "End"));
// ```

// ---

// ## IIFE

// ### Interview explanation

// ```javascript
// /*
// Q: What is an IIFE?
// A: IIFE stands for Immediately Invoked Function Expression.

// STEP 1: Write a function expression.
// STEP 2: Wrap it inside parentheses.
// STEP 3: Add another pair of parentheses to execute it immediately.

// IMPORTANT:
// It runs only once immediately after creation.
// It is useful for private scope and avoiding global variable pollution.
// */
// ```

// ### Main code example

// ```javascript
// (function () {
//   let message = "I run immediately";
//   console.log(message);
// })();

// (function (name) {
//   console.log("Hello " + name);
// })("Ramesh");

// ((arr) => {
//   console.log(arr.length);
// })([1, 2, 3, 4]);
// ```

// ### 10 examples

// ```javascript
// // 1
// (function () {
//   console.log("IIFE 1");
// })();

// // 2
// (function () {
//   let x = 10;
//   console.log(x);
// })();

// // 3
// (function (name) {
//   console.log("Hello " + name);
// })("Aman");

// // 4
// (function (a, b) {
//   console.log(a + b);
// })(2, 8);

// // 5
// ((n) => {
//   console.log(n * n);
// })(5);

// // 6
// ((text) => {
//   console.log(text.toUpperCase());
// })("hello");

// // 7
// (function (arr) {
//   console.log(arr[0]);
// })([9, 8, 7]);

// // 8
// (function (obj) {
//   console.log(obj.city);
// })({ city: "Delhi" });

// // 9
// (function () {
//   console.log("Runs once");
// })();

// // 10
// ((flag) => {
//   console.log(flag ? "Yes" : "No");
// })(true);
// ```

// ---

// ## Function with default parameters

// ### Interview explanation

// ```javascript
// /*
// Q: What are default parameters?
// A: Default parameters allow a function to use a default value when an argument is not passed.

// STEP 1: Define a parameter.
// STEP 2: Assign a default value using =.
// STEP 3: If no argument is given, that default value is used.

// IMPORTANT:
// This prevents undefined values in many cases.
// */
// ```

// ### Main code example

// ```javascript
// function greet(name = "Guest") {
//   console.log("Hello " + name);
// }

// function calculatePrice(price, tax = 18) {
//   return price + tax;
// }

// function showColor(color = "Blue") {
//   return color;
// }

// greet();
// greet("Nisha");

// console.log(calculatePrice(100));
// console.log(calculatePrice(100, 20));

// console.log(showColor());
// ```

// ### 10 examples

// ```javascript
// // 1
// function welcome(name = "User") {
//   return "Welcome " + name;
// }
// console.log(welcome());

// // 2
// function power(base, exp = 2) {
//   return base ** exp;
// }
// console.log(power(4));

// // 3
// function introduce(city = "Unknown") {
//   console.log(city);
// }
// introduce();

// // 4
// function total(a, b = 10) {
//   return a + b;
// }
// console.log(total(5));

// // 5
// function getStatus(status = true) {
//   return status;
// }
// console.log(getStatus());

// // 6
// function pickFirst(arr = [1, 2, 3]) {
//   return arr[0];
// }
// console.log(pickFirst());

// // 7
// function getRole(user = { role: "Student" }) {
//   return user.role;
// }
// console.log(getRole());

// // 8
// function say(message = "No message") {
//   console.log(message);
// }
// say();

// // 9
// function discount(price, percent = 5) {
//   return price - (price * percent / 100);
// }
// console.log(discount(1000));

// // 10
// function makeUser(name = "Guest", age = 18) {
//   return { name, age };
// }
// console.log(makeUser());
// ```

// ---

// ## Callback function

// ### Interview explanation

// ```javascript
// /*
// Q: What is a callback function?
// A: A callback function is a function passed as an argument to another function.

// STEP 1: Create a main function.
// STEP 2: Pass another function as a parameter.
// STEP 3: Execute that function inside the main function.

// IMPORTANT:
// Callbacks are used in array methods, events, timers, and asynchronous programming.
// */
// ```

// ### Main code example

// ```javascript
// function processUser(name, callback) {
//   console.log("Processing user: " + name);
//   callback(name);
// }

// function doneMessage(userName) {
//   console.log(userName + " processed successfully");
// }

// processUser("Kiran", doneMessage);

// [1, 2, 3].forEach(function (num) {
//   console.log(num * 2);
// });
// ```

// ### 10 examples

// ```javascript
// // 1
// function runTask(callback) {
//   callback();
// }
// runTask(function () {
//   console.log("Task completed");
// });

// // 2
// function show(value, callback) {
//   callback(value);
// }
// show(10, function (n) {
//   console.log(n * 2);
// });

// // 3
// [1, 2, 3].forEach(function (n) {
//   console.log(n);
// });

// // 4
// ["a", "b"].map(function (ch) {
//   console.log(ch.toUpperCase());
// });

// // 5
// setTimeout(function () {
//   console.log("After 1 second");
// }, 1000);

// // 6
// function greet(name, callback) {
//   console.log("Hi " + name);
//   callback();
// }
// greet("Raju", function () {
//   console.log("Callback called");
// });

// // 7
// function calculate(a, b, callback) {
//   console.log(callback(a, b));
// }
// calculate(4, 5, function (x, y) {
//   return x + y;
// });

// // 8
// function fetchData(callback) {
//   let data = "Server data";
//   callback(data);
// }
// fetchData(function (result) {
//   console.log(result);
// });

// // 9
// [10, 20, 30].filter(function (n) {
//   return n > 15;
// }).forEach(function (n) {
//   console.log(n);
// });

// // 10
// function useObject(obj, callback) {
//   callback(obj);
// }
// useObject({ name: "Rani" }, function (user) {
//   console.log(user.name);
// });
// ```

// ---

// ## Object methods

// ### Interview explanation

// ```javascript
// /*
// Q: What is an object method?
// A: A method is a function stored inside an object.

// STEP 1: Create an object.
// STEP 2: Add properties like name, age, city.
// STEP 3: Add a function inside the object.
// STEP 4: Call that function using objectName.methodName().

// IMPORTANT:
// Inside a normal method, this refers to the current object.
// */
// ```

// ### Main code example

// ```javascript
// let student = {
//   name: "Vikram",
//   marks: 85,
//   course: "JavaScript",
//   getDetails: function () {
//     return this.name + " is studying " + this.course;
//   },
//   getMarks: function () {
//     return this.marks;
//   }
// };

// console.log(student.name);
// console.log(student.getDetails());
// console.log(student.getMarks());
// ```

// ### 10 examples

// ```javascript
// // 1
// let user1 = {
//   name: "Anu",
//   greet: function () {
//     return "Hello " + this.name;
//   }
// };
// console.log(user1.greet());

// // 2
// let car = {
//   brand: "Toyota",
//   showBrand: function () {
//     return this.brand;
//   }
// };
// console.log(car.showBrand());

// // 3
// let book = {
//   title: "JS",
//   getTitle: function () {
//     return this.title;
//   }
// };
// console.log(book.getTitle());

// // 4
// let phone = {
//   model: "iPhone",
//   printModel: function () {
//     console.log(this.model);
//   }
// };
// phone.printModel();

// // 5
// let employee = {
//   salary: 50000,
//   getSalary: function () {
//     return this.salary;
//   }
// };
// console.log(employee.getSalary());

// // 6
// let person = {
//   first: "Ravi",
//   last: "Teja",
//   fullName: function () {
//     return this.first + " " + this.last;
//   }
// };
// console.log(person.fullName());

// // 7
// let school = {
//   name: "ABC School",
//   show: function () {
//     return this.name;
//   }
// };
// console.log(school.show());

// // 8
// let account = {
//   balance: 1000,
//   checkBalance: function () {
//     return this.balance;
//   }
// };
// console.log(account.checkBalance());

// // 9
// let movie = {
//   name: "Leo",
//   rating: 4.5,
//   info: function () {
//     return this.name + " " + this.rating;
//   }
// };
// console.log(movie.info());

// // 10
// let laptop = {
//   brand: "Dell",
//   start: function () {
//     return this.brand + " started";
//   }
// };
// console.log(laptop.start());
// ```

// ---

// ## Accessing object properties and methods

// ### Interview explanation

// ```javascript
// /*
// Q: How do you access object properties?
// A: By using dot notation or bracket notation.

// Q: How do you access object methods?
// A: By calling the method with parentheses.

// STEP 1: Use object.property for direct access.
// STEP 2: Use object["property"] when property name is dynamic.
// STEP 3: Use object.method() to call a method.
// */
// ```

// ### Main code example

// ```javascript
// let employee = {
//   name: "Arjun",
//   role: "Developer",
//   salary: 60000,
//   getInfo: function () {
//     return this.name + " works as " + this.role;
//   }
// };

// console.log(employee.name);          // dot notation
// console.log(employee["role"]);       // bracket notation
// console.log(employee.getInfo());     // method call

// let key = "salary";
// console.log(employee[key]);          // dynamic access
// ```

// ### 10 examples

// ```javascript
// // 1
// let obj1 = { name: "Kiran" };
// console.log(obj1.name);

// // 2
// let obj2 = { city: "Pune" };
// console.log(obj2["city"]);

// // 3
// let obj3 = {
//   age: 25,
//   getAge: function () {
//     return this.age;
//   }
// };
// console.log(obj3.getAge());

// // 4
// let obj4 = { role: "Tester" };
// let key1 = "role";
// console.log(obj4[key1]);

// // 5
// let obj5 = {
//   title: "Book",
//   print: function () {
//     return this.title;
//   }
// };
// console.log(obj5.print());

// // 6
// let obj6 = { price: 500 };
// console.log(obj6.price);

// // 7
// let obj7 = { lang: "JS" };
// console.log(obj7["lang"]);

// // 8
// let obj8 = {
//   name: "Maya",
//   hello: function () {
//     return "Hi " + this.name;
//   }
// };
// console.log(obj8.hello());

// // 9
// let obj9 = { active: true };
// console.log(obj9.active);

// // 10
// let obj10 = {
//   company: "Infosys",
//   details: function () {
//     return this.company;
//   }
// };
// console.log(obj10.details());
// ```

// ---

// ## Arrays with functions

// ### Interview explanation

// ```javascript
// /*
// Q: How are arrays connected to functions?
// A: Functions can accept arrays, return arrays, and use array methods like map, filter, forEach, and reduce.

// STEP 1: Pass array into a function.
// STEP 2: Access values using index.
// STEP 3: Use loops or array methods.
// STEP 4: Return required result.
// */
// ```

// ### Main code example

// ```javascript
// function getArraySum(arr) {
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }

//   return sum;
// }

// let nums = [10, 20, 30, 40];
// console.log(getArraySum(nums));

// let doubled = nums.map(function (n) {
//   return n * 2;
// });

// console.log(doubled);
// ```

// ### 10 examples

// ```javascript
// // 1
// function firstItem(arr) {
//   return arr[0];
// }
// console.log(firstItem([1, 2, 3]));

// // 2
// function lastItem(arr) {
//   return arr[arr.length - 1];
// }
// console.log(lastItem([1, 2, 3]));

// // 3
// function total(arr) {
//   return arr.reduce((a, b) => a + b, 0);
// }
// console.log(total([1, 2, 3]));

// // 4
// console.log([1, 2, 3].map((n) => n * 2));

// // 5
// console.log([1, 2, 3, 4].filter((n) => n % 2 === 0));

// // 6
// [5, 6].forEach((n) => console.log(n));

// // 7
// function getLength(arr) {
//   return arr.length;
// }
// console.log(getLength(["a", "b", "c"]));

// // 8
// function joinArray(arr) {
//   return arr.join("-");
// }
// console.log(joinArray(["HTML", "CSS", "JS"]));

// // 9
// function containsValue(arr, value) {
//   return arr.includes(value);
// }
// console.log(containsValue([10, 20, 30], 20));

// // 10
// function sortArray(arr) {
//   return arr.sort((a, b) => a - b);
// }
// console.log(sortArray([4, 1, 3, 2]));
// ```

// ---

// ## Functions with objects

// ### Interview explanation

// ```javascript
// /*
// Q: How are objects connected to functions?
// A: Objects can be passed into functions, returned from functions, and can contain methods.

// STEP 1: Pass an object into a function.
// STEP 2: Access properties inside the function.
// STEP 3: Return a value or create a new object.
// */
// ```

// ### Main code example

// ```javascript
// function showUser(user) {
//   return user.name + " is " + user.age + " years old";
// }

// function createUser(name, age) {
//   return {
//     name: name,
//     age: age
//   };
// }

// let user1 = { name: "Naveen", age: 24 };

// console.log(showUser(user1));

// let newUser = createUser("Akhil", 21);
// console.log(newUser.name);
// console.log(newUser.age);
// ```

// ### 10 examples

// ```javascript
// // 1
// function getName(obj) {
//   return obj.name;
// }
// console.log(getName({ name: "Raj" }));

// // 2
// function getAge(obj) {
//   return obj.age;
// }
// console.log(getAge({ age: 30 }));

// // 3
// function getCity(obj) {
//   return obj.city;
// }
// console.log(getCity({ city: "Chennai" }));

// // 4
// function isActive(obj) {
//   return obj.active;
// }
// console.log(isActive({ active: true }));

// // 5
// function createBook(title) {
//   return { title: title };
// }
// console.log(createBook("Node.js"));

// // 6
// function getFullName(obj) {
//   return obj.first + " " + obj.last;
// }
// console.log(getFullName({ first: "Sai", last: "Kumar" }));

// // 7
// function getMarks(obj) {
//   return obj.marks;
// }
// console.log(getMarks({ marks: 92 }));

// // 8
// function printRole(obj) {
//   return obj.role;
// }
// console.log(printRole({ role: "Manager" }));

// // 9
// function createProduct(name, price) {
//   return { name, price };
// }
// console.log(createProduct("Pen", 10));

// // 10
// function getDepartment(emp) {
//   return emp.department;
// }
// console.log(getDepartment({ department: "IT" }));
// ```

// ---

// ## Short interview comparison

// ```javascript
// /*
// FUNCTION DECLARATION
// Named function created using function keyword.

// FUNCTION EXPRESSION
// Function stored in a variable.

// ANONYMOUS FUNCTION
// Function without a name.

// ARROW FUNCTION
// Short syntax for function.

// RETURN FUNCTION
// Function that gives back a value using return.

// IIFE
// Function that runs immediately after definition.

// DEFAULT PARAMETER FUNCTION
// Function with pre-defined default values.

// CALLBACK FUNCTION
// Function passed into another function.

// OBJECT METHOD
// Function inside an object.

// ARRAY FUNCTION USAGE
// Functions that process array values.

// OBJECT FUNCTION USAGE
// Functions that read, create, or update object data.
// */
// ```

// ## Best interview answer

// ```javascript
// /*
// A function in JavaScript is a reusable block of code that performs a specific task.
// JavaScript supports different types of functions such as function declaration,
// function expression, anonymous function, arrow function, IIFE, default parameter function,
// and callback function.

// Functions are closely connected with data types because they can accept numbers,
// strings, booleans, arrays, objects, and even other functions as arguments.
// Objects can store functions as methods, and arrays are often processed using functions
// like map, filter, forEach, and reduce.

// Object properties can be accessed using dot notation or bracket notation,
// and object methods are called using parentheses.
// */
// ```

// If you want, I can next convert this into:
// 1. `one single interview notes file`
// 2. `question and answer format`
// 3. `only code format for easy practice`
// 4. `simple beginner version + advanced version`