const box = document.getElementById('box');
let X = 0;
let Y = 0;
let mouseX = 0;
let mouseY = 0;

function mouseMove(e) {
    X = mouseX - e.clientX;
    Y = mouseY - e.clientY;
    mouseX = e.clientX;
    mouseY = e.clientY;
    box.style.top = `${box.offsetTop - Y  }px`;
    box.style.left = `${box.offsetLeft - X  }px`;
}

function mouseUp() {
    box.removeEventListener('mouseup', mouseUp);
    box.removeEventListener('mousemove', mouseMove);
}

function mouseDown(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    box.addEventListener('mousemove', mouseMove);
    box.addEventListener('mouseup', mouseUp);
}





box.addEventListener('mousedown', mouseDown);