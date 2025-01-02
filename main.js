function rnd(min, max) {
  if (arguments.length === 0) {
    return Math.floor(Math.random() * 2);
  } else if (arguments.length === 1) {
    max = min;
    min = 0;
  }

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Tests
console.log("rnd() =", rnd());
console.log("rnd() =", rnd());
console.log("rnd(5) =", rnd(5));
console.log("rnd(5) =", rnd(5));
console.log("rnd(2, 7) =", rnd(2, 7));

const canvas = document.createElement('canvas');
document.body.appendChild(canvas);
const ctx = canvas.getContext('2d');
