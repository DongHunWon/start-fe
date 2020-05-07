const num = document.getElementById('num');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

function setString($num) {
  let str = '';
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i < 10; i++) {
    str += `${$num} x ${i} = ${$num*i}<br>`;
  }
  return str;
}

function setResult($num) {
  result.innerHTML = setString($num);
}

function gugudan() {
  const $num = Number(num.value);
  if ($num) {
    setResult($num);
  } else {
    // eslint-disable-next-line no-alert
    alert('숫자를 입력해주세요');
  }
}

btn.addEventListener('click', gugudan);