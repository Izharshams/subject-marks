//  6 >= 4 = true
//  || or operator
//  && and oprator
// == right and left side should be equal
//  === right and left side should be equal  and datatype should be same

// var userValue = prompt("Enter the first digit !");

// var firstNumber = prompt("Enter the first value :");
// Number(firstNumber)
// var secondNumber = Number(prompt("Enter the second value :"));

// var firstNumber = +prompt("Enter the first value :");
// var secondNumber = +prompt("Enter the second value :");
// parseInt()
// var firstNumber = 4;
// var secondNumber = 2;

// alert(firstNumber + secondNumber);
// console.log(firstNumber)
// console.log(Number(firstNumber))

// firstNumber = Number(firstNumber);
//if (!Number(firstNumber)) {
//if (firstNumber > secondNumber) {
// alert("first number is greater than second number");
//} 
//else if (firstNumber === secondNumber) {
//     alert("both values are same");
//   } else {
//     alert("second number is greater than first number");
//   }
// }
// var userPercentage = prompt("Insert your css result");
// if (85 < userPercentage) {
//   alert("your have gotten first Position");
// }
// // else if (85 > userPercentage && userPercentage > 65) {
// //   alert("you got a B grade");
// // }
// else if (85 > userPercentage ) {
//     if(userPercentage > 65){
//         alert("you got a B grade");
//     }
// }


// if (
//   userNumber1 > userNumber2 || userNumber1 === userNumber2 &&
//   userNumber2 > userNumber1
// ) {
//   alert("congrats!");
// }
//var userNumber1 = 567;
//var userNumber2 = 345;

//if (
//(userNumber1 < 888 || (userNumber1 > userNumber2 && userNumber2 > 888)) ||
//userNumber1 === 888
//) {
//alert("congrats!");
//}

// var name = prompt("insert your name")

// var email = prompt("insert your email")

// var rollno = +prompt("insert your roll no")




// var english = +prompt ("Insert your english marks");
// var urdu = +prompt ("Insert your urdu marks");
// var math = +prompt ("Insert your math marks");
// var chemistry = +prompt("Insert your chemistry marks");
// var physics = +prompt("Insert your physics marks");

// var calculateMarks = english + urdu + math + chemistry + physics;

// var percentage = (calculateMarks*100)/500;



// if (calculateMarks >=450 && calculateMarks < 500){
//   alert(  calculateMarks + "\ngrade A+" + "n/percentage" + percentage)
// }
// else if(calculateMarks >=400 && calculateMarks < 450){
//     alert(  calculateMarks + "\ngrade A" + "n/percentage" + percentage) 
// }
// else if(calculateMarks >=350 && calculateMarks < 400){
//     alert( calculateMarks + "\ngrade B" + "n/percentage" + percentage) 
// }
// else if(calculateMarks >=300 && calculateMarks < 350){
//     alert( calculateMarks + "\ngrade C" + "n/percentage" + percentage) 
// }
// else if(calculateMarks >=250 && calculateMarks < 300){
//     alert( calculateMarks + "\ngrade D" + "n/percentage" + percentage) 
// }
// else{
//     alert("FAILED")
// }


var eng = +prompt("insert your english marks");
var math = +prompt("insert your math marks");
var urdu = +prompt("insert your urdu marks");

var calculateMarks = eng + math + urdu;
var totalMarks = (calculateMarks * 100) / 300;

if (calculateMarks > 300) {
    alert("invaild your data")
}

if (calculateMarks >= 250 && calculateMarks <= 300) {
    alert("marks " + calculateMarks + "  congrats! your grade is A+" + " " + totalMarks + "  percentage ")
} else if (calculateMarks >= 200 && calculateMarks <= 250) {
    alert("marks " + calculateMarks + "  congrats! your grade is A" + " " + " " + totalMarks + "  percentage ")
} else if (calculateMarks >= 150 && calculateMarks <= 200) {
    alert("marks " + calculateMarks + "  your grade is B" + " " + totalMarks + "  percentage ")
} else {
    alert("FAILD")
}