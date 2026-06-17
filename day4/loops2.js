// for(let i=1;i<=20;i++){
//     console.log(i);
// }


// Reverse right triangle and square. and rectangle.
// let rows=5;
// //if i add col=10 or 20 then it act as rectangle.
// let rightTriangle="";
// for (let i=1;i<=rows;i++){  
//     for(let j=i;j<=rows;j++){// if i replace j=1 place j=i then it is reverse right triangle 
//     // other wise its a square. and j<=col then it act as rectangle.
//         rightTriangle+=" ";
//         rightTriangle+="*";
//     }
//     rightTriangle+="\n";
// }
// console.log(rightTriangle);

// let rows=5;
// let Triangle="";
// for (let i=1;i<=rows;i++){  
//     for(let j=i;j<=rows-i;j++){
//         Triangle+=" ";
//         Triangle+="*";
//     }
//     Triangle+="\n";
// }
// console.log(Triangle);

// // Pyramid(Triangle) and reverse traiangle. if replace i=1,i<=rows then it work as triangle and if you replace i=rows and i>=1and i-- then it act as reverse triangle.
let rows=5;
let pyromid="";
for (let i=rows;i>=1;i--){
    for(let j=1;j<=rows-i;j++){
      pyromid+=" ";
    }
     for(let k=1;k<=(2*i-1);k++){
       pyromid+="*";
    }
    pyromid+="\n";
}
console.log(pyromid);



