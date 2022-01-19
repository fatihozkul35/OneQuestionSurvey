const button1 = document.querySelector(".btn.btn1");
const button2 = document.querySelector(".btn.btn2");

button1.addEventListener("mouseover", setPosition);
button2.addEventListener("mouseover", setPosition);

function setPosition() {
  button1.style.left = `250px`;
  button1.style.top = `450px`;

  button2.style.left = `450px`;
  button2.style.top = `450px`;

  // button1.style.left = `250px`;
  // button1.style.top = `450px`;

  // button1.style.left = `250px`;
  // button1.style.top = `450px`;

  // button1.style.left = `${randomPositionNumberX()}`;
  // button1.style.top = `${randomPositionNumberY()}`;
}

function randomPositionNumberX() {
  return Math.floor(Math.random() * 1000) + 100 + "px";
}
function randomPositionNumberY() {
  return Math.floor(Math.random() * 400) + 50 + "px";
}
