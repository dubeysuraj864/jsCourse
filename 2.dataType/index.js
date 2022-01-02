// const { Console } = require("console");

// var myName = "suraj dubey";
// console.log(myName);
// var myAge =21;
// var iAmSuraj= false;


// // typeof operator

// console.log(typeof(myName));
// console.log(typeof(myAge));
// console.log(typeof(iAmSuraj));

// console.log(10 + "29");  //== 1029
         //both above or down one are likebugs in js ;-P
// console.log(10-"9"); // == 1

// console.log("java"+"Script"); //javaScript

// console.log(" "+ " "); 

// console.log(" "+ 0); //0

// console.log("suraj"-"dubey"); //= NaN = not a number

// console.log(true + true); // = 2 (1+1)

// console.log(false + false); //0

// console.log(false + true); // =1

// console.log(false - true); //-1

// Q difference btw null vs undefined??

// var iAmUseless = null;
// console.log(iAmUseless); //= null
// console.log(typeof(iAmUseless)); //=object
// //2nd bugs XD
// var iAmStandBy;
// console.log(iAmStandBy); // = undefined
// console.log(typeof(iAmStandBy)); //undefined(datatype)

//Q2 what is NaN
//NaN is a property of the global objeect.
//In other words , it ois a variable in global scope.
//The initial value of NaN is not A Number

// var myPhoneNumer = 9958356698;
// var myName = "Suraj dubey";

// console.log(isNaN(myPhoneNumer)); // false
// console.log(isNaN(myName)); //true

// if(isNaN(myName)){
//     console.log("please enter valid number!!!");
// }



NaN == NaN;
Number.NaN == NaN;
isNaN(Number.NaN);
Number.isNaN(NaN);

console.log(NaN === NaN); //false or == false (too) 
console.log(Number.NaN == NaN); //flase
console.log(isNaN(Number.NaN)); //true
console.log(Number.isNaN(NaN)); //true