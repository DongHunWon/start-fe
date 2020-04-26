const $point = document.querySelector("#point");
const $life = document.querySelector("#life");
const $box = document.querySelector(".box");
const $bug = document.querySelector("#bug");

const $setpoint = 0;
const $setlife = 10;
let point = $setpoint;
let life = $setlife;

$bug.addEventListener('click', bugPosition);
$box.addEventListener('click', loseLife);

function bugPosition(){
    let X = $box.clientWidth - $bug.clientWidth;
    let Y = $box.clientHeight - $bug.clientHeight;

    getPoint();
    $bug.style.left = Math.random() * X + 'px';
    $bug.style.top = Math.random() * Y + 'px';

    event.stopPropagation();
}

function getPoint(){
    point += 1;
    $point.innerHTML = point;
}

function loseLife(){
    life -= 1;
    if (life > 0){
        $life.innerHTML = life;
    } else if(life === 0) {
        $life.innerHTML = life;
        alert('gameover');
    } else {
        alert('gameover');
    }
}

