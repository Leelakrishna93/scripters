// // EX;

// function Employee(id, name, department, salary) {
//     this.id = id;
//     this.name = name;
//     this.department = department;
//     this.salary = salary;

//     this.getDetails = function () {
//         return `
//         Employee ID: ${this.id}
//         Name: ${this.name}
//         Department: ${this.department}
//         Salary: ${this.salary}
//         `;
//     };
// }

// // Constructor Object
// const emp1 = new Employee(
//     101,
//     "Rahul",
//     "Engineering",
//     50000
// );

// // Access Properties
// console.log(emp1.name);
// console.log(emp1["department"]);

// // Access Method
// console.log(emp1.getDetails());

// // Update Properties
// emp1.salary = 60000;
// emp1["department"] = "Software Development";

// console.log(emp1);


// // Example 1: Employee Management System    
// const employee = {
//     id: 101,
//     name: "Rahul",
//     department: "IT",
//     salary: 50000,

//     getDetails() {
//         return `
//         ID: ${this.id}
//         Name: ${this.name}
//         Department: ${this.department}
//         Salary: ${this.salary}
//         `;
//     },

//     increaseSalary(amount) {
//         this.salary += amount;
//         return this.salary;
//     }
// };

// // Access Properties
// console.log(employee.name);
// console.log(employee["department"]);

// // Access Method
// console.log(employee.getDetails());

// // Update Property
// employee.salary = 60000;

// // Call Method After Update
// employee.increaseSalary(5000);

// console.log(employee);
// // 

// // Example 2: Banking System (Constructor Function)

// function BankAccount(accountNo, customerName, balance) {
//     this.accountNo = accountNo;
//     this.customerName = customerName;
//     this.balance = balance;

//     this.deposit = function(amount) {
//         this.balance += amount;
//         return this.balance;
//     };

//     this.withdraw = function(amount) {
//         if (amount <= this.balance) {
//             this.balance -= amount;
//         }
//         return this.balance;
//     };
// }

// const account = new BankAccount(
//     1001,
//     "Rahul",
//     10000
// );

// console.log(account.customerName);
// console.log(account["balance"]);

// account.deposit(5000);
// account.withdraw(2000);

// account.balance = 20000;

// console.log(account);
// // 

// // Example 3: E-Commerce Product Management

// const product = {
//     id: 501,
//     name: "Laptop",
//     category: "Electronics",
//     price: 50000,

//     getProductInfo() {
//         return `${this.name} - ₹${this.price}`;
//     },

//     applyDiscount(percent) {
//         this.price =
//             this.price - (this.price * percent / 100);

//         return this.price;
//     }
// };

// console.log(product.name);
// console.log(product["category"]);

// console.log(product.getProductInfo());

// product.applyDiscount(10);

// product.price = 40000;

// console.log(product);
// // // 

// // // Object
// // │
// // ├── Object Literal
// // │     └── {}
// // │
// // ├── Constructor Function
// // │     └── new Object()
// // │
// // ├── Access Properties
// // │     ├── obj.name
// // │     └── obj["name"]
// // │
// // ├── Access Methods
// // │     └── obj.method()
// // │
// // ├── Update Properties
// // │     └── obj.name = value
// // │
// // └── Real World Usage
// //       ├── Employee System
// //       ├── Banking System
// //       └── E-Commerce System