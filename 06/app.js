// let a = 'aa';
// const b = 'bb';
// var c = '11';
// c = 33;
// console.log(a, b, c);

// ----
// var str = 'aaaaa \
// dkd';
// const s = `aaaaa
// cccc
// bb`;
// console.log(str, s);

// ----
// function sum(x, y = 1) {
//     return x + y;
// }
// console.log(sum(1, 2));

// ----
// const arr = [1,2,3];

// const newArr = arr.map((item) => item + 1);
// console.log(newArr);

// document.getElementById('box').addEventListener('click', event => console.log(1));

// ----
function sum(x,y,z){
    return x + y + z;
}
const numbers = [1,2,3];
console.log(sum(...numbers));
// console.log(sum(1, 2, 3));