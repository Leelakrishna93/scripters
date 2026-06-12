// Conditonal Statements:-

// CS are used to take desions based on their conditions,
//  if the conditions is true then is outcome will be true other false.
// cs is perform main operations in java script in our code.
// with out this conditional statements our code will not work in particular cases.
// EX: we have 10 members in an office, if i want to select based on their seriority,
//  then in this time we use conditonal states for removing some of the members in a acompany.
// EX2:if you have 1000000 rupees, then you can buy a car or not.
//  it work on the conditions what you require.
// types of conditional statements:-
// 1. if statement
// if statements works on when conditon is true.in real time we use this statements.
// EX: 1. if you have 1000000 rupees, then you can buy a car. 
// 2. if some one asked you to give my pen then you can give it.
    // const productPrice = 1000000;
    // if(productPrice >= 1000000){
    //     console.log("you can buy a car");
    // }
    // const productName = "RR";
    // if (productName == 'RR'){
    //     console.log("I Have To Buy This Car")
    // }


    // if(true){
    //     console.log("true"); it is printed why , we only use if statement . if it is true then  work other wise it stops.
    // }


    // if(false){
    //     console.log("false"); is is not printed.why? because it is false.
    // }


    // if(true && false){
    //     console.log("true"); its not printed  and why?.
    // }


    // if(true && true){
    //     console.log("true"); its printed why?.
    // }
    

// 
// 2. if else statement:- its might different then if statement.
//  why it is different, i checks the condition and if it is true then directly its executed.
// otherwise it comes to the else block and executed else block,
//  if it the first if statement is true then conditons is executed without taking any permission.
// EX: when i was going to tour then, at that time one car has moving to fast, 
// suddenly another lorry has crashed that car. 
// if it is not more dammage then every one will be safe other wise every one dies.
// real time example used in projects.
// const UserName = "Krishna7373";
// console.log("Enter UserName:" + UserName);
// const Password = "Krishna73@73";
//     if(UserName == "Krishna7373"){
//         console.log("Enter Password:" + Password);
//         if (Password == "Krishna73@73"){
//         console.log("User Logined Successfully");
//         }
//     }else{
//         console.log("User Logined Failed");
//         console.log("please check your username or password");
//     }

//     // EX2:
//     const UserName1 = "Krishna7743";
//     console.log("Enter UserName:" + UserName1);
//     const userPassword = "Krishna73@73";
//         if(UserName1 == "Krishna743"){
//             console.log("Enter Password:" + userPassword);
//             if (userPassword == "Krishna73@73"){
//             console.log("User Logined Successfully");
//             }else{
//                console.log(" Please Register First");
//             }
//         }else{
//             console.log("User Logined Failed");
//             console.log("please check your username or password");
//         }


// 3. ternary operator : ? : 
// The ternary operator is a shorthand way of writing an if-else statement.
// Syntax : condition ? true block code : false block code


// 4. else if statement
// else if statement is used when we have multiple conditions to check.
// EX1: we all are going to movie theater. 
// my friend are books tickets for 3 members , there is 3 seats are available,
//  and we are selected the payment and payment failed. why? because we have only 3 seats available.
//  and another 3 users are also done and selected same seats at time and he done payment more faster then me. 
// then for one user they get the seats.
// here we use else if statement. who had done first payment then seates will be booked,
//  otherwise message forword payment failed or already seats booked.

// const seatsAvailable = 3;
// console.log("seatsAvailable:" + seatsAvailable);
// const paymentStatus = "success";
// console.log("paymentStatus:" + paymentStatus);
//     if(seatsAvailable > 0 && paymentStatus == "failed"){
//         console.log("3 seats booked successfully");
//     }
//     else if (paymentStatus == "Processing"){
//         console.log("payment processing");
//     }else if(paymentStatus == "canceled"){
//         console.log("payment Canceled");
//     }
//     else if (seatsAvailable == 0){
//         console.log("no seats available");
//     }else if (paymentStatus == "success"){
//         console.log("payment success");
//     }else{
//         console.log("payment failed or already seats booked");
//     }






// 5. switch statement:switch case is used for multiple purpose to finding the value form one case to multiple cases.
// if the case will  not find it goes infinite loops can run to find the case  with a case to case break,if it not found then default value prints like else condition.
// remain it is same as ( else if ) statement and if else statement.if else dont have multiple conditions to check. and to else if we to write have multiple statement to check.
// EX: in hyderbad, there is a large restaurant called "RR".
// there are multiple employess are working in that restaurant.
//  CEO asked about Karthik. of karthik is available today or not they dont know. 
// then check the employeee details for finding that person .
// if he there then management are nform to karthik orther wise management said to ceo he is absent.

// const employeeName = "Karthik";
// console.log("employeeName:" + employeeName);
// switch(employeeName){
//     case "Krishna":
//         console.log("Krishna is available today");
//         break;
//     case "Karthi":
//         console.log("Karthi is available today");
//         break;
//     case "Karthi1":
//         console.log("Karthi1 is available today");
//         break;
//     default:
//         console.log("Employee is not available today");
//         break;
// }

// 
// 6. nested if statement:nested if statement is used to check multiple if blocks and comes to else block.
//  if the condition is not true. 
// EX: admin has logined the system, then if hr logged in he active or not if he active then runs teo conditions other wise else state ments runs he is not active.

 // const userRole = "Admin";
    // const userStatus = "Active";

    // if(userRole === "Admin"){
    //     if(userStatus === "Active"){
    //         console.log("Welcome Admin");
    //     }else{
    //         console.log("Your account is not active");
    //     }
    // }else{
    //     console.log("Welcome User");
    // }
// 

// 
