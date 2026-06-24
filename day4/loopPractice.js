// // // Write a program to print the rectangle pattern of stars with 4 rows and 9 columns using nested loops.
// // let rows = 4;
// // let cols = 9;
// // let result="";
// // for(let i=1;i<=rows;i++){
// //     for(let j=1;j<=cols;j++){
// //         result+=" ";
// //         result+="*";
// //     }
// //     result+="\n";
// // }
// // console.log(result);

// // // Write a program to print the square pattern of stars with 5 rows and 5 columns using nested loops.
// // let rows1 = 3;
// // let cols1 = 3;
// // let result1="";
// // for(let i=1;i<=rows1;i++){
// //     for(let j=1;j<=cols1;j++){
// //         result1+="  ";
// //         result1+="*";
// //     }
// //     result1+="\n";
// // }
// // console.log(result1);

// // // Write a program to print the reverse right triangle pattern of stars with 5 rows using nested loops.
// // let rows2 = 6;
// // let result2="";
// // for(let i=1;i<=rows2;i++){
// //     for(let j=i;j<=rows2;j++){
// //         result2+="  ";
// //         result2+="*";
// //     }
// //     result2+="\n";
// // }
// // console.log(result2);
// // Write a program to print the right triangle pattern of stars with 5 rows using nested loops.
// // let row3=4;
// // let result3="";
// // for (let i=1;i<=row3;i++){
// //     for(let j=1;j<=row3-i;j++){
// //         result3+=" ";
// //     }
// //     for(let k=1;k<=i;k++){
// //         result3+=" "
// //         result3+="*";
// //     }
// //     result3+="\n";
// // }
// // console.log(result3);


// // Print# for vowels and the rest of the characters as it is in the string "LeelaKrishna" and spaces in the end of each line. The output should be like this:
// // L**l*Kr*shn*   // L  L Kr shn.
// // using names to print the pattern
// // let str="LeelaKrishna";
// // let result4="";
// // for(let i=0;i<str.length;i++){
// //     let ch=str[i];
// //     if("AEIOUaeiou".includes(ch)){
// //         result4+="*"; //replace space then we get output as space.
// //     }else{
// //         result4+=ch;
// //     }
// //     result4+="\n";
// // }
// // console.log(result4);

// let str="LeelaKrishna";
// let result4="";
// for(let i=0;i<str.length;i++){
//     let ch=str[i];
//     if(i%2==0){
//         console.log("even:",str[i]);
//     }else{
//         console.log("odd:",str[i]);
//     }
// }



// // For in and for of:
// const empDetails = [
//     {
//     empName:"LeelaKrishna",
//     empAge:25,
//     empDept:"IT",
//     empSalary:"100000",
//     empEmail:"leela.krishna@example.com",
//     empPhone:"1234567890",
// },
// ];
// for(let emp1 in empDetails){
//         console.log(emp1+":"+empDetails[emp1]);
//     }
//  console.log(empDetails);
// for(let emp of empDetails){
//     for(let emp2 in emp){
//         console.log(emp2+":"+emp[emp2]);
//     }
// }
// result="";
// for(let emp in empDetails){
//     for(let eom in emp){
//         for (emp in eom){
//            console.log("");
//         }
//         console.log("*");
//     }
//     console.log("\n");
// }
// console.log(result);