/* eslint-disable linebreak-style */
const boxes = document.querySelectorAll('.box');
let X = 0;
let Y = 0;
let mouseX = 0;
let mouseY = 0;
let box = null;

function mouseMove(e) {
  X = mouseX - e.clientX;
  Y = mouseY - e.clientY;
  mouseX = e.clientX;
  mouseY = e.clientY;
  box.style.top = `${box.offsetTop - Y}px`;
  box.style.left = `${box.offsetLeft - X}px`;
}

function mouseUp() {
  box.removeEventListener('mouseup', mouseUp);
  box.removeEventListener('mousemove', mouseMove);
  box = null;
}

function mouseDown(e) {
  box = e.target;
  mouseX = e.clientX;
  mouseY = e.clientY;
  box.addEventListener('mousemove', mouseMove);
  box.addEventListener('mouseup', mouseUp);
}

function getBox() {
  boxes.forEach(($box) => {
    $box.addEventListener('mousedown', mouseDown);
  });
}

getBox();