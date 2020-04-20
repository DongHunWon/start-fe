var add_red = document.querySelector('.add-red');
var add_box = document.querySelector('.add-btn');
var delete_btn = document.querySelector('.delete-btn');
var text_btn = document.querySelector('.text-btn');
var reset_btn = document.querySelector('.reset-btn');
var toggle_btn = document.querySelector('.toggle-btn');
var image_btn = document.querySelector('.image-btn');

var hidden = '';

function AllBox() {
    var box = document.querySelectorAll('.box');
    return box;
}

// 문제1
function setColor() {
    box = AllBox();
    box.forEach(function (box) {
        box.classList.add('red');
    });
}
add_red.addEventListener('click', function () {
    setColor();
});


// 문제2
function addBox() {
    var div = document.createElement('div');
    div.classList.add('box');
    if (hidden === '') {
        div.style.display = '';
    } else {
        div.style.display = 'none';
    }
    document.body.appendChild(div);
}
add_box.addEventListener('click', function () {
    addBox();
})


// 문제3번
function removeBox() {
    var box = AllBox();
    if (box.length !==0) {
        box[box.length - 1].remove();
    }
}
delete_btn.addEventListener('click', function () {
    removeBox();
})


// 문제4
function setText() {
    var text = document.querySelector('.txt').value;
    var box = AllBox();
    box.forEach(function (box) {
        box.innerHTML += text;
    });
}
text_btn.addEventListener('click', function () {
    setText();
})


// 문제5
function removeAllBox() {
    var box = AllBox();
    box.forEach(function (box) {
        box.remove();
    });
}
reset_btn.addEventListener('click', function () {
    removeAllBox();
})


// 문제6
function showBox() {
    var box = AllBox();
    box.forEach(function (box) {
        if (box.style.display === 'none') {
            box.style.display = '';
            hidden = '';
        } else {
            box.style.display = "none";
            hidden = 'none';
        }
    });
}
toggle_btn.addEventListener('click', function () {
    showBox();
})


// 문제7
function showimg() {
    var box = AllBox();
    if (box.length === 0) {
        var div = document.createElement('div');
        div.classList.add('box');
        document.body.appendChild(div);
    }
    box = AllBox();
    box.forEach(function (box) {
        var img = document.createElement('img');
        img.src = 'https://i.imgur.com/69NjYBH.png';
        box.append(img);
    });
}
image_btn.addEventListener('click', function () {
    showimg();
})