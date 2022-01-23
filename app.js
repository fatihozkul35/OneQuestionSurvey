const button2 = document.querySelector(".btn-secondary");

button2.addEventListener("click", setPosition);

let randomPositionListX = ["12%", "43%", "88%"];
let randomPositionListY = ["35%", "70%", "85%"];

function setPosition() {
  button2.style.left = randomPositionListX[randomPositionX()];

  button2.style.top = randomPositionListY[randomPositionY()];
  console.log(button2.style.left, button2.style.top);
}

function randomPositionX() {
  return Math.floor(Math.random() * 3);
}

function randomPositionY() {
  return Math.floor(Math.random() * 3);
}
