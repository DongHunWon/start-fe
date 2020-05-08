const $box = document.querySelector('#box');
const $min = document.querySelector('#min');
const $max = document.querySelector('#max');
const $btn = document.querySelector('#btn');
const index = -10;
let timerId = null;
let increase = index;

function setNum($ranNum) {
  $box.innerHTML = $ranNum + increase;
  increase += 1;
  if (increase === 1) {
    clearInterval(timerId);
    $btn.disabled = false;
    increase = index;
  }
}

function randomNum(min, max) {
  const amin = Math.ceil(min);
  const amax = Math.floor(max);
  const ranNum = Math.floor(Math.random() * (amax - amin)) + amin;
  timerId = setInterval(setNum, 100, ranNum);
  $btn.disabled = true;
}

$btn.addEventListener('click', () => {
  randomNum($min.value, $max.value);
});