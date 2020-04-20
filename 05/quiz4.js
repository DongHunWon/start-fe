var box = document.getElementById('box');
var X = 0;
var Y = 0;
var mouseX = 0;
var mouseY = 0;

function mouseDown(e){
    mouseX = e.sX;
    mouseY = e.clientY;
    box.addEventListener('mousemove', mouseMove);
    box.addEventListener('mouseup', mouseUp);
}

function mouseMove(e) {
    var X = mouseX - e.clientX;
    var Y = mouseY - e.clientY;
    mouseX = e.clientX;
    mouseY = e.clientY;
    box.style.top = (box.offsetTop - Y) + "px";
    box.style.left = (box.offsetLeft - X) + "px";
}

function mouseUp(){
    box.removeEventListener('mouseup', mouseUp);
    box.removeEventListener('mousemove', mouseMove);
}

box.addEventListener('mousedown', mouseDown);