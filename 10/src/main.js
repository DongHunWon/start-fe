import sum from './sum';
import avg from './avg';
import random from './random';

document.getElementById('debug').innerHTML = sum(5, 2);

console.log(avg(1, 2, 3, 4));
console.log(avg(1, 2));
console.log(avg(1, 2, 3, 4, 5, 6));
console.log(avg(1, 'a', 2));
console.log(avg([1, 2, 3]));

console.log(random(0, 100));
console.log(random(3));
console.log(random(0, 'a'));