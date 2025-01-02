import { rnd } from './utils.js';



// Tests
console.log("rnd() =", rnd());
console.log("rnd() =", rnd());
console.log("rnd(5) =", rnd(5));
console.log("rnd(5) =", rnd(5));
console.log("rnd(2, 7) =", rnd(2, 7));

const canvas = document.createElement('canvas');
document.body.appendChild(canvas);
const ctx = canvas.getContext('2d');
