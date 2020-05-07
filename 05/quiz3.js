const addred = document.querySelector('.add-red');
const addbox = document.querySelector('.add-btn');
const deletebtn = document.querySelector('.delete-btn');
const textbtn = document.querySelector('.text-btn');
const resetbtn = document.querySelector('.reset-btn');
const togglebtn = document.querySelector('.toggle-btn');
const imagebtn = document.querySelector('.image-btn');

let hidden = '';

function AllBox() {
  const box = document.querySelectorAll('.box');
  return box;
}

// 문제1
function setColor() {
  const box = AllBox();
  box.forEach(($box) => {
    $box.classList.add('red');
  });
}
addred.addEventListener('click', () => {
  setColor();
});


// 문제2
function addBox() {
  const div = document.createElement('div');
  div.classList.add('box');
  if (hidden === '') {
    div.style.display = '';
  } else {
    div.style.display = 'none';
  }
  document.body.appendChild(div);
}
addbox.addEventListener('click', () => {
  addBox();
})


// 문제3번
function removeBox() {
  const box = AllBox();
  if (box.length !== 0) {
    box[box.length - 1].remove();
  }
}
deletebtn.addEventListener('click', () => {
  removeBox();
})


// 문제4
function setText() {
  const text = document.querySelector('.txt').value;
  const box = AllBox();
  box.forEach(($box) => {
    // eslint-disable-next-line no-param-reassign
    $box.innerHTML += text;
  });
}
textbtn.addEventListener('click', () => {
  setText();
})


// 문제5
function removeAllBox() {
  const box = AllBox();
  box.forEach(($box) => {
    $box.remove();
  });
}
resetbtn.addEventListener('click', () => {
  removeAllBox();
})


// 문제6
function showBox() {
  const box = AllBox();
  box.forEach(($box) => {
    if ($box.style.display === 'none') {
      // eslint-disable-next-line no-param-reassign
      $box.style.display = '';
      hidden = '';
    } else {
      // eslint-disable-next-line no-param-reassign
      $box.style.display = "none";
      hidden = 'none';
    }
  });
}
togglebtn.addEventListener('click', () => {
  showBox();
})


// 문제7
function showimg() {
  let box = AllBox();
  if (box.length === 0) {
    const div = document.createElement('div');
    div.classList.add('box');
    document.body.appendChild(div);
  }
  box = AllBox();
  box.forEach(($box) => {
    const img = document.createElement('img');
    img.src = 'https://i.imgur.com/69NjYBH.png';
    $box.append(img);
  });
}
imagebtn.addEventListener('click', () => {
  showimg();
})