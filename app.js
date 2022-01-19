const button1 = document.querySelector(".btn.btn1");
const button2 = document.querySelector(".btn.btn2");

button1.addEventListener("mouseover", setPosition);

function setPosition() {
  button1.style.left = `${randomPositionNumberX()}`;
  button1.style.top = `${randomPositionNumberY()}`;
}
if ("mouseover") {
  //  block of code to be executed if condition1 is true
} else if (condition2) {
  //  block of code to be executed if the condition1 is false and condition2 is true
} else {
  //  block of code to be executed if the condition1 is false and condition2 is false
}

function randomPositionNumberX() {
  return Math.floor(Math.random() * 1000) + 100 + "px";
}
function randomPositionNumberY() {
  return Math.floor(Math.random() * 400) + 50 + "px";
}
