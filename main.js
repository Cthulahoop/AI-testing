import { rnd } from './utils.js';



// Tests
console.log("rnd() =", rnd());
console.log("rnd() =", rnd());
console.log("rnd(5) =", rnd(5));
console.log("rnd(5) =", rnd(5));
console.log("rnd(2, 7) =", rnd(2, 7));

const canvas = document.createElement('canvas');
canvas.width = 200;
canvas.height = 200;
document.body.appendChild(canvas);
const ctx = canvas.getContext('2d');

function drawPolygon(sides) {
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY) * 0.8;

    ctx.beginPath();
    ctx.fillStyle = `rgb(${rnd(255)}, ${rnd(255)}, ${rnd(255)})`;

    for (let i = 0; i < sides; i++) {
        const angle = (i / sides) * 2 * Math.PI;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        if (i === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    }

    ctx.closePath();
    ctx.fill();
}
