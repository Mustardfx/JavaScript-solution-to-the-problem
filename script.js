// let fullName = "Bro code"
// let age = 25;
// let isStudent = false;

// document.getElementById("p1").textContent = `Your name is ${fullName}`;
// document.getElementById("p2").textContent = `You are ${age} years old`;
// document.getElementById("p3").textContent = `Enroled: ${isStudent}`;
// let students  = 30;
// students +=1;
// students ++;
// document.getElementById("p1").textContent = students
// console.log(students);
// let username = window.prompt("whats your username?");
// console.log(username);

// let username;
// document.getElementById("mySubmit").onclick = function() {
//   username = document.getElementById("myText").value;
//   document.getElementById("myH1").textContent = `Hello ${username}`;
// }

// let age = window.prompt("How old are you?");
// age = Number(age)
// age +=1;
// console.log(age);

// let x = "pizza";
// let y = "pizza";
// let z = "pizza";

// x = Number(x);
// y = String(y);
// z = Boolean(z);
// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);

// const PI = 3.14;
// let radius;
// let circumference;
// PI = 420.69

// document.getElementById("mySubmit").onclick = function(){
//   radius = document.getElementById("myText").value;
//   radius = Number(radius);
//   circumference = 2 * PI * radius;
//   document.getElementById("myH3").textContent = circumference + "cm";
// }

// const decreaseBtn = document.getElementById("decreaseBtn");
// const resetBtn = document.getElementById("resetBtn");
// const increaseBtn = document.getElementById("increaseBtn");
// const countLabel = document.getElementById("countLabel");
// let count = 0;

// increaseBtn.onclick = function(){
//   count++;
//   countLabel.textContent = count;
// }

// decreaseBtn.onclick = function(){
//   count--;
//   countLabel.textContent = count;
// }
// resetBtn.onclick = function(){
//   count = 0;
//   countLabel.textContent = count;
// }

// document.getElementById("countLabel").textContent = Math.PI
// const min = 50;
// const max = 100;
// let randomNum = Math.floor(Math.random() * min) + max;

// console.log(randomNum);

// const myButton = document.getElementById("myButton");
// const label1 = document.getElementById("label1");
// const label2 = document.getElementById("label2");
// const label3 = document.getElementById("label3");
// const min = 1;
// const max = 6;
// let randomNum1;
// let randomNum2;
// let randomNum3;

// myButton.onclick = function() {
//   randomNum1 = Math.floor(Math.random() * max) + min;
//   randomNum2 = Math.floor(Math.random() * max) + min;
//   randomNum3 = Math.floor(Math.random() * max) + min;
//   label1.textContent = randomNum1;
//   label2.textContent = randomNum2;
//   label3.textContent = randomNum3;
// }

// const myText = document.getElementById("myText");
// const mySubmit = document.getElementById("mySubmit");
// const resultElement = document.getElementById("resultElement");
// let age;

// mySubmit.onclick = function(){
//     age = myText.value;
//     age = Number(age);
//     if (age >= 18) {
//       resultElement.textContent = `U are old`;
//     }
//     else if (age < 0) {
//       resultElement.textContent = `Your age can't be below 0`;
//     }
//     else if (age >= 100) {
//       resultElement.textContent = `Your are too old`;
//     }
//       else {
//         resultElement.textContent = `U must be 18+ to entre this side`;
//       }
// };

// const myCheckBox = document.getElementById("myCheckBox");
// const visaBtn = document.getElementById("visaBtn");
// const masterCardBtn = document.getElementById("masterCardBtn");
// const payPalBtn = document.getElementById("payPalBtn");
// const mySubmit = document.getElementById("mySubmit");
// const subResult = document.getElementById("subResult");
// const paymentResult = document.getElementById("paymentResult");

// mySubmit.onclick = function(){
//   if(myCheckBox.checked) {
//     subResult.textContent = `You are subscribed!`;
//   }
//   else {
//     subResult.textContent = `You are not subscribed!`;
//   }
//   if(visaBtn.checked){
//     paymentResult.textContent = `You are paying with Vis!`;
//   }
//   else if(masterCardBtn.checked){
//     paymentResult.textContent = `You are paying with Mastercard!`;
//   }
//   else if(payPalBtn.checked){
//     paymentResult.textContent = `You are paying with Paypal!`;
//   }
//   else {
//     paymentResult.textContent = `You must select a payment!`;
//   }
// }

const textBox = document.getElementById("Box");
const toFahrenheit = document.getElementById("Fahren");
const toCelsius = document.getElementById("Cels");
const result = document.getElementById("result");
let temp;

function convert(){
    if(toFahrenheit.checked){
      temp = Number(textBox.value);
      temp = temp * 9 / 5 + 32;
      result.textContent = temp.toFixed(1) + "C";
    }
    else if(toCelsius.checked){
      temp = Number(textBox.value);
      temp = (temp - 32) * (5/9);
      result.textContent = temp.toFixed(1) + "C";
    }
    else{
      result.textContent = "Select a unit"
    }
}