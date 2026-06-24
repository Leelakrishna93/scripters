// // variable is used store the the property and value or data. 
// //  it is used to store different values.it store 1 value at a time 
// // and variable has declear in 3 ways:
// // 1. var keyword
// // 2. let keyword
// // 3. const keyword


// // var: var is used to store data in terms of numeric and string. var assigns value in different ways
// // declear
// // initialize
// // // reasign
// // // redeclaration

// // // Ex:

// var firstName;
// console.log(firstName);
// firstName = "Krishna";
// console.log(firstName);
// // firstName = "Lethavadla Krishna";
// // console.log(firstName);
// var firstName = "Lethavadla Krishna";
// console.log(firstName);


// Let : is a keyword used to declear a variable.
// // // let has perform only 3 operation to store or retrive data and asign data. 
// // // It executes Line by Line like interpreter. 
// // // if is it true then it checks next step other wise it shows an error.
// // // and it perform only 3 ways to declear variable 
// // // declear
// // // initialize
// // // reasign
// // // redeclaration is not possible in this let keyword.
// // //  let do not supportredeclearatiob,
// // //  because its a Es6 version has introduced this let , it cannots holds duplicate values.



// let firstName;

// console.log(firstName);

// firstName = "Krishna";
// console.log(firstName);

// firstName = "Lethavadla Krishna";
// console.log(firstName);

// // // // const: is a keyword used to declear a constant value .
// // // //  it can store and declear value in a line. 
// // // // it cannot support initialization and re-assign and redeclaration.
// // // //  it store value in a line at one time only-kay value of property are different then it supports,
// // // //  otherwise its shows an error.

// const firstName = "Leela Venkat Krishna"+ " " + "Lethavadla";
// const lastName = "Leela Venkat Krishna"+ " " + "Lethavadla";
// console.log(lastName);
// console.log(firstName);
// firstName ="krishna";
// console.log(firstName);


// // //         VARIABLE NAMING RULES:

// // // 1. Variable names can contain:
// // //    - Letters (a-z, A-Z)
// // //    - Numbers (0-9)
// // //    - Underscore (_)
// // //    - Dollar Sign ($)

// // // 2. Variable names cannot start with a number.

// // // 3. Variable names cannot contain spaces.

// // // 4. Variable names are case-sensitive.

// // // 5. Avoid JavaScript reserved keywords.


// // // // // Example:
// const firsName = "Leela";
// const lasttName = "Krishna";
// const surName = "Lethavadla";
// const phoneNumber = "9123654789";
// const officeNumber = "9098765432";
// const email = "leela@lethavadla.com";
// const address = "Guntur";
// console.log(
//     {
//         firsName,
//         lasttName,
//         surName,
//         phoneNumber,
//         officeNumber,
//         email,
//         address,
//     }
// );




// // // datatypes:
// // //  datatypes are used to definning a value that what it is.
// // // data types are 2 types in jsx.
// // // 1. premetive
// // // 2. non-Premitive

// // // Premitive:- premitive data types are are 5 types premitive are used to store only single value at timein a variable. and its compared by value, it does not use references.

// // // 1. String:- string is a character datatype.
// // //  it can stores only character dataor a textual data.
// // // we need to store names, emails, messages,address.
// // // string is represented wuth single quotes, double quotes, backticks.
// // // 1. Single quotes: 'Leela'
// // // 2. Double quotes: "Leela"
// // // 3. Backticks: Leela
// // Ex:

// const firstName = "Leela Venkat Krishna";
// // const lastName = 'Lethavadla';
// const empDetails = {
//     empName:Krish,
//     empLastName:lastName,
//     empEmail:"leela@lethavadla.com",
//     empAddress:"Guntur",
//     empPhone:"9123654789",
//     empOffice:"9098765432",
// }

// console.log(firstName);
// console.log(typeof firstName);
// console.log(empDetails);
// console.log(typeof empDetails);

// // const firstName = "Leela Venkat Krishna";
// // const lastName = 'Lethavadla';

// // const fullName =
// // `My name is" ${firstName}"  + " ${lastName}" `;
// // console.log(fullName);
// // console.log(typeof fullName);

// // 2. Number: number are used to store numeric data.
// // // it stores integers, decimal numbers
// // const age = 18;
// // const height = 1.45;
// // const weight = 90;
// // const phoneNumber = "90888765432";
// // console.log(
// //     {
// //         age:${age} + ${weight},
// //         height,
// //         weight,
// //         phoneNumber,
// //     }
// // )



// // 3. Boolean
// // boolean are store values only 2, that is True and False.
// let isWatch=true;
// let isSleep=true;
// if(isWatch==isSleep){
//     console.log("i am watching movie")
// }
// else{
//     console.log("i am sleeping")
// }
// console.log(isWatch);
// console.log(typeof isWatch);




// // 4. Null
// // null is a datatype that represents the absence of a value.
// // it is a special datatype that has only one value, that is null.
// // it is a premitive datatype.
// let isNull=null;
// console.log(isNull);
// console.log(typeof isNull);

// // // 5. Undefinedundefined is a datatype that represents value has not given in that particular variable.
// let buyMobile;
// console.log(buyMobile);
// console.log(typeof buyMobile);

// Non-Premitive:- non-premitive data types are used to store multiple values at time
// in a variable. and its compared by reference, it does use references.
// types of non-premitive data types are 3 types.
// 1. Array: 
// Array is used to store multiple values at time in a single variable.
// it represented with[].



// const deptDetails = [
//     "IT",
//     "HR",
//     "Finance",
//     "Marketing",
//     "Sales",
//     "Analyziers"
// ];
// console.log(deptDetails);
// console.log(typeof deptDetails);
// console.log(deptDetails[4]);
// console.log(deptDetails[0]);


// const empDetails=[
//     "krishna",
//     24,
//     9087654321,
//     true,
//     null,
// ];
// console.log(empDetails);
// console.log(typeof empDetails);
// console.log(empDetails[0]);
// console.log(empDetails[1]);
// console.log(empDetails[2]);
// console.log(empDetails[3]);
// console.log(empDetails[4]);



// // // 2. Object:- object is store a key value pairs.
// and it is represened with {}.


// const empDetails = {
//     empName:"Krishna",
//     empLastName:"Lethavadla",
//     empEmail:"leela@lethavadla.com",
//     empAddress:"Guntur",
//     empPhone:"9123654789",
//     empOffice:"9098765432",
// };
// console.log(empDetails);
// console.log(typeof empDetails);
// console.log(empDetails.empName);
// console.log(empDetails.empLastName);
// console.log(empDetails.empEmail);
// console.log(empDetails.empAddress);
// console.log(empDetails.empPhone);
// console.log(empDetails.empOffice);



// // // // 3. Array of Objects: it acts as both array and object and it stores multiple objects in a single variable.
// // it is represented with [
// // {}
// // {}
// // {}
// // {}
// // ].
// // most commonly used in data structures.
// // react.js, node.js, APIs,Databases. 


// // operator:- operators are used to perform mathematical or logical operatons on data, what you stored in a variable.
// //  if you store multiple values in a variable or array or object, it can perform operation on that based on that datatype and operator.

// // comming to arithmetic operator:-
// // arithmetic operator perform mathematical operations on given data.
// // it performs operations on numbers, strings, booleans, null, undefined.
// // there  are 6 types of operators
// // addition:- its represented symbol is +, 
// // and it performs addition operation on number and all , 
// // it can perform operations based on their values and datatype. 
// // some times java script directly converts one data type to another datatype.
// // this data convertion called as type conversion and it is a implicit type conversion.
// // every time deponds on datatypes it converts dynamically by javascript.
// // for example:-
// const num1 = 23;
// const num2 = 34;
// const num3="23";
// const firstName="krishna";
// // console.log(
// //     `
// //     addition=${num2+num3},
// //     addition=${num1+num2},
// //     addition=${num1+num3},
// //     addition=${num3+num2},
// //     addition=${num3+num1},
// //     addition=${num1+num2+num3+${firstName}},
// //     `
// // )


// // subtraction:- it is represented with -. and it is uded to perform subtraction operation on number and all , 
// // it can perform operations based on their values and datatype. 
// // for example:-
// const num4 = 23;
// const num5 = 34;
// const num6=null;
// // console.log(
// //     `
// //     subtraction=${num5-num6},
// //     subtraction=${num4-num5},
// //     subtraction=${num4-num6},
// //     subtraction=${num6-num5},   
// //     subtraction=${num6-num4},
// //     subtraction=${num4-num5-num6},
// //     `
// // )
// // multiplication: it is represented as *.
// // console.log(
// //     `
// //     multiplication=${num4*num5},
// //     multiplication=${num4*num6},
// //     multiplication=${num5*num6},
// //     multiplication=${num6*num4},
// //     multiplication=${num6*num3},
// //     multiplication=${num3*num4},
// // //     multiplication=${num3*num5},
// // //     multiplication=${num5*num6},
// // //     `
// // // )

// // // division
// // console.log(
// //     `
// //     division=${num4/num5},
// //     division=${num4/num6},
// //     division=${num5/num6},
// //     division=${num6/num4},
// //     division=${num6/num3},
// //     division=${num3/num4},
// //     division=${num3/num5},
// //     division=${num5/num6},
// //     `
// // )
// // // modulus
// // console.log(
// //     `
// //     modulus=${num4%num5},
// //     modulus=${num4%num6},
// //     modulus=${num5%num6},
// //     modulus=${num6%num4},
// //     modulus=${num6%num3},
// //     modulus=${num3%num4},
// //     modulus=${num3%num5},
// //     modulus=${num5%num6},
// //     `
// // )
// // // exponentiation
// // console.log(
// //     `
// //     exponentiation=${num4**num5},
// //     exponentiation=${num4**num6},
// //     exponentiation=${num5**num6},
// //     exponentiation=${num6**num4},
// //     exponentiation=${num6**num3},
// //     exponentiation=${num3**num4},
// //     exponentiation=${num3**num5},
// //     exponentiation=${num5**num6},
// //     `
// // )


// // 2. Assignment operator:-
// // Assignment Operators: =, +=, -=, =, /=, %=, *=.
// // it is used for comparing two values with another operation and it can perform operation on that.
// // for example:-
// //
// // num5 += 200;

// //     num5 -= 400;

// //     num5 *= 2;

// //     num5 /= 4;

// //     num5 %= 10;

// //     num5 **= 2;

// //     console.log(num5);

// // 3. Comparison operator:-// Comparison Operators: ==, ===, !=, !==, >, <, >=, <=

//     // const num5 = 100; const num6 = '100';

//     // console.log(
//     //     `
//     //         num5 > num4 : ${num5 > num4}
//     //         num5 < num5 : ${num5 < num5}
//     //         num5 >= num5 : ${num5 >= num5}
//     //         num5 <= num4 : ${num5 <= num4}
//     //         num5 == num6 : ${num5 == num6}
//     //         num5 === num2 : ${num5 === num2}
//     //         num5 != num6 : ${num5 != num6}
//     //         num5 !== num5 : ${num5 !== num5}

//     //     `
//     // );
    

//     // 4. Logical operators:- logical operators are used to combine or combare conditions, based on requirement values.
//     // some logical operators are,
//     //  &&:this symbol called logical And, 
//     // it is like a multiplication the operation in boolean logic. like 0's and 1's.0x0=0, 1x1=0 ,0x1=1, 1x1=1.
//     // 

//     //  ||:this symbol called logical Or, 
//     // it is like a addition the operation in boolean logic. like 0's and 1's. 0+1=1 lik ethis
//     // 

//     //  !:this symbol called logical Not, 
//     // it is like a negation the operation in boolean logic. like 0's and 1's. 
//     // it perform only one operation to compare to apply the logic. like a reverse operation. 
//     // ex: if you give a book to your friend, then your friend will return same book.
//     //  1 is given then we get 1. 0 we give then get 0.

//     // thelogical && operator writtens true only, when all conditons are true.
//     // some were we has given for better unserstanding the concept to identify by truth table it self.
//     // truth table
//     // 
//     // A            B           A && B              A || B        ! B
//     // TRUE(1)     TRUE(1)      TRUE(1)            TRUE(1)        FALSE(0)
//     // FALSE(0)    TRUE(1)      FALSE(0)           TRUE(1)        TRUE(1)
//     // TRUE(1)     FALSE(0)     FALSE(0)           TRUE(1)        FALSE(0)  
//     // FALSE(0)    FALSE(0)     FALSE(0)           FALSE(0)       TRUE(1) 
//     // we use  ( Bodmas )  rule for better understanding the concept of logical operators.
//     //  these num values i given at top of the scripting program called at arithmetic operators,
//     //  can you see at top and runn all commands by using these values at top.


//     // 
//     // console.log(num5);
//     // console.log(num6);
//     // console.log(num4);
//     // console.log(num3);
//     // console.log(num2);
//     // // console.log(
//     //     `
//     //     (num5 < num6) && (num5 < num4): ${(num5 < num6) && (num5 < num4) && (num5 < num3) && (num5 < num2)}  
//     //     `
//     // )
//     // first condition:sample Example:-
//     // console.log(
//     //     `
        
//     //     nums:${true && false},
//     //     nums:${true || false},
//     //     nums:${!true}
//     //     `
//     // )
//     // second condition:sample Example:-
//     // console.log(
//     //     `
//     //     num:${true && true || true },
//     //     num:${true && false || false}
//     //     `
//     // )
//     // third condition:sample Example:-
//     // console.log(
//     //     `
//     //     num:${true && false || true && (false && true) (!true)}
//     //     `
//     // )
//     // 
//     // // Bitwise Operators: &, |, ^, ~, <<, >>, >>>
//     // // Ternary Operator: condition ? expression1 : expression2 
//     // // Type Operators: typeof
    
    
//     // Increment and Decrement Operators: ++: it is used to increment the value of a variable by 1, 
//     // --: it is used to decrement the value of a variable by 1.
//     // post and pre:
//     // post: it is used to increment or decrement the value of a variable after the operation is performed.
//     // pre: it is used to increment or decrement the value of a variable before the operation is performed.


//     // // post increment:
//     // let x = 10;
//     // let y =  x ++;

//     // console.log(`Value of x : ${x} and value of y : ${y}`);   
//     // // pre increment:
//     // let z = 10;
//     // let w =  ++z;

//     // console.log(`Value of z : ${z} and value of w : ${w}`);   
//     // // Value of z : 11 and value of w : 11
//     // // post decrement:
//     // let a = 10;
//     // let b =  a --;

//     // console.log(`Value of a : ${a} and value of b : ${b}`);   
//     // // Value of a : 9 and value of b : 9
//     // // pre decrement:
//     // let c = 10;
//     // let d =  --c;

//     // console.log(`Value of c : ${c} and value of d : ${d}`);   
//     // Value of c : 9 and value of d : 9 and value of d : 9
    