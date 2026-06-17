
// // For loop
// for (let i=0 ;
//     i<10;
//     i++){
//         console.log(i);
// }
// let row=1;
// let col=10;
// let rectangle="";
// for(let i=1;i<=5;i++){
//     for(let j=1;j<=col;j++){
//         rectangle=rectangle+" ";
//         rectangle=rectangle+"*";
//     }
//     rectangle=rectangle+"\n";
// }
// console.log(rectangle);



// let row=5;
// let rectangle="";
// for (let i=1;i<=row;i++){
//     for (let j=1;j<=row-i;j++){
//         rectangle=rectangle+" ";
//     }for (let k=1;k<=i;k++){
//         rectangle=rectangle+="*";
//     }
//     rectangle=rectangle+"\n";
// }
// // console.log(rectangle);

// let row=5;
// let triangle="";
// for (let i=1;i<=row;i++){
//     for (let j=1;j<=i;j++){
//         triangle=triangle+"*";
//     }
//     triangle=triangle+"\n";
// }
// console.log(triangle);


// let rows = 5;
// let leftTriangle = "";

// for(let i = 1; i <= rows; i++) {
//     for(let j = 1; j <= rows - i; j++) {
//         leftTriangle += "  ";
//     }

//     // stars
//     for(let k = 1; k <= i; k++) {
//         leftTriangle += "* ";
// //     }

// //     leftTriangle += "\n";
// // }

// // console.log(leftTriangle);

// let row1=1;
// let col1=10;
// let square="";
// for(let i=1;i<=10;i++){
//     for (let j=1;j<=col1;j++){
//         square=square+" ";
//         square=square+"*";
//     }
//     square=square+"\n";
// }
// console.log(square);

// let nowLine=5;
// let reTriangle="";
// for(let i=nowLine;i>=1;i--){
//     for(let j=1;j<=i;j++){
//         reTriangle=reTriangle+" ";
//         reTriangle=reTriangle+"*";
//     }
//     reTriangle=reTriangle+"\n";
// }
// console.log(reTriangle);

// let rows=5;
// let pyromid="";
// for (let i=1;i<=rows;i++){
//     for(let j=1;j<=rows-i;j++){
//        for(let k=1;k<=(2*i-1);k++){
//              pyromid=pyromid+" ";
//        }
//        pyromid=pyromid+"*";
//     }
//     pyromid=pyromid+"\n";
// }
// console.log(pyromid);

// let rows = 5;
// let pyramid = "";

// for(let i = 1; i <= rows; i++) {

//     // spaces
//     for(let j = 1; j <= rows - i; j++) {
//         pyramid += " ";
//     }

//     // stars
//     for(let k = 1; k <= (2 * i - 1); k++) {
//         pyramid += "*";
//     }

//     pyramid += "\n";
// }

// console.log(pyramid);

// let name="Krishna";
// let rightTriangle="";
// for(let i=1;i<=name.length;i++){
//     for(let j=1;j<=i;j++){
//         rightTriangle += " ";
//         rightTriangle += name[j-1];
//     }
//     rightTriangle += "\n";
// }
// console.log(rightTriangle);

// let word = "LEELAKRISHNA";
// let result = "";

// for(let i = 0; i < word.length; i++) {
//     for(let j = 0; j <= i; j++) {
//         result += " ";
//          let ch = word[i];

//     if("AEIOU".includes(ch)) {
//         result += "*";
//     }
//     else {
//         result += ch;
//     }
//     }
//     result += "\n";
// }

// console.log(result);


    // let word = "LEELAKRISHNA";
    // let result = "";

    // for(let i = 0; i < word.length; i++) {

    //     let ch = word[i];

    //     if("AEIOU".includes(ch)) {
    //         result += " ";
    //     }
    //     else {
    //         result += ch;
    //     }
    // }

    // console.log(result);