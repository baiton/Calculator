let currentDisplay= document.getElementById("display");
let buttonZero= document.getElementById("zeroB")
let buttonOne= document.getElementById("oneB");
let buttonTwo= document.getElementById("twoB");
let buttonThree= document.getElementById("threeB");
let buttonFour= document.getElementById("fourB");
let buttonFive= document.getElementById("fiveB");
let buttonSix= document.getElementById("sixB");
let buttonSeven= document.getElementById("sevenB");
let buttonEight= document.getElementById("eightB");
let buttonNine= document.getElementById("nineB");
let buttonClear= document.getElementById("cButton");
let buttonDivide= document.getElementById("divideB");
let buttonMultiply= document.getElementById("multiplyB")
let buttonSubtraction= document.getElementById("subtractionB");
let buttonAddition= document.getElementById("additionB");
let buttonPeriod= document.getElementById("decimalB");
let buttonEquals= document.getElementById("submitForTotalB");

let displayLimit = 18;

// This should prevent too much info on the screen

// This area is just for fun.
let audioEquals= document.getElementById("equalAudio")
let audioSubtraction= document.getElementById("subtractionAudio")
let audioAddition= document.getElementById("additionAudio")
let audioMultiply= document.getElementById("multiplyAudio")


// // This will be the button function area of Javascript
// -------0--------
buttonZero.addEventListener("click", callZero);
function callZero(){
  currentDisplay.textContent += "0";

}
// -------1--------
buttonOne.addEventListener("click", callOne);
function callOne(){
  currentDisplay.textContent += "1";
}
// -------2--------
buttonTwo.addEventListener("click", callTwo);
function callTwo(){
  currentDisplay.textContent += "2";
}
// -------3--------
buttonThree.addEventListener("click", callThree);
function callThree(){
  currentDisplay.textContent += "3";
}
// -------4--------
buttonFour.addEventListener("click", callFour);
function callFour(){
  currentDisplay.textContent += "4";
}
// -------5--------
buttonFive.addEventListener("click", callFive);
function callFive(){
  currentDisplay.textContent += "5";
}
// -------6--------
buttonSix.addEventListener("click", callSix);
function callSix(){
  currentDisplay.textContent += "6";
}
// -------7--------
buttonSeven.addEventListener("click", callSeven);
function callSeven(){
  currentDisplay.textContent += "7";
}
// -------8--------
buttonEight.addEventListener("click", callEight);
function callEight(){
  currentDisplay.textContent += "8";
}
// -------9--------
buttonNine.addEventListener("click", callNine);
function callNine(){
  currentDisplay.textContent += "9";
}
// -------C--------
buttonClear.addEventListener("click", callClear);
function callClear(){
  currentDisplay.textContent = "";
}
// -------/--------
buttonDivide.addEventListener("click", callDivide);
function callDivide(){
  currentDisplay.textContent += "/";
}
// -------*--------
buttonMultiply.addEventListener("click", callMultiply);
function callMultiply(){
  currentDisplay.textContent += "*";
}
// ------ - -------
buttonSubtraction.addEventListener("click", callSubtraction);
function callSubtraction(){
  currentDisplay.textContent += "-";
}
// ------ + -------
buttonAddition.addEventListener("click", callAddition);
function callAddition(){
  currentDisplay.textContent += "+";
}
// -------9--------
buttonPeriod.addEventListener("click", callPeriod);
function callPeriod(){
  currentDisplay.textContent += ".";
}
// -------=--------
buttonEquals.addEventListener("click", callEquals);
function callEquals(){
  eval(currentDisplay.innerHTML);
  currentDisplay.textContent = eval(currentDisplay.innerHTML);
  }
//
//
//This area is just for fun.
//
// How to create an on click sound.
// Don't forget to place audio tag in HTML
// function playSound() {
//           var sound = document.getElementById("audio");
//           sound.play();

buttonEquals.addEventListener("click", callEqualsAudio);
function callEqualsAudio(){
  let sound = document.getElementById("equalAudio")
  sound.play();
}

buttonSubtraction.addEventListener("click", callSubtractionAudio);
function callSubtractionAudio(){
  let sound = document.getElementById("subtractionAudio")
  sound.play();
}

buttonAddition.addEventListener("click", callAdditionAudio);
function callAdditionAudio(){
  let sound = document.getElementById("additionAudio")
  sound.play();
}

buttonMultiply.addEventListener("click", callMultiplyAudio);
function callMultiplyAudio(){
  let sound = document.getElementById("multiplyAudio")
  sound.play();
}
