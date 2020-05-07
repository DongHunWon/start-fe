const $point = document.querySelector("#point");
const $life = document.querySelector("#life");
const $box = document.querySelector(".box");
const $bug = document.querySelector("#bug");

const $setpoint = 0;
const $setlife = 10;
let point = $setpoint;
let life = $setlife;
let $interval = null;

function bugPosition() {
  const X = $box.clientWidth - $bug.clientWidth;
  const Y = $box.clientHeight - $bug.clientHeight;

  $bug.style.left = `${Math.random() * X  }px`;
  $bug.style.top = `${Math.random() * Y  }px`;
}

function getPoint() {
  point += 1;
  $point.innerHTML = point;
}

function loseLife() {
  life -= 1;
  if (life > 0) {
    $life.innerHTML = life;
  } else if (life === 0) {
    $life.innerHTML = life;
    // eslint-disable-next-line no-alert
    alert('gameover');
  } else {
    // eslint-disable-next-line no-alert
    alert('gameover');
  }
}

function resetInterval() {
  clearInterval($interval);
  $interval = setInterval(bugPosition, 1000);
}

function boxClick() {
  loseLife();
  bugPosition();
  resetInterval();
}

function bugClick() {
  getPoint();
  bugPosition();
  resetInterval();
  // eslint-disable-next-line no-restricted-globals
  event.stopPropagation();
}

$bug.addEventListener('click', bugClick);
$box.addEventListener('click', boxClick);