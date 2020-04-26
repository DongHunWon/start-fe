const num = document.getElementById('num');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

btn.addEventListener('click', gugudan);

function gugudan() {
    let $num = parseInt(num.value);
    str = '';
    if($num){
        setResult($num);
    } else {
        alert('숫자를 입력해주세요');
    }
}

function setResult($num){
    result.innerHTML = setString($num);
}

function setString($num){
    let str = '';
    for (let i = 1; i < 10; i++){
        str += `${$num} x ${i} = ${$num*i}<br>` ;
    }
    return str;
}