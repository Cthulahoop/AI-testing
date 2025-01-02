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

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawPolygon(5, canvas.width / 2, canvas.height / 2, Math.min(canvas.width, canvas.height) * 0.4);
    ctx.fillStyle = `rgb(${rnd(255)}, ${rnd(255)}, ${rnd(255)})`;
    ctx.fill();

}

window.addEventListener('resize', resizeCanvas);

resizeCanvas();

ctx.fillStyle = `rgb(${rnd(255)}, ${rnd(255)}, ${rnd(255)})`;
ctx.fill();

/**
 * Draws a polygon on the canvas.
 * @param {number} sides - The number of sides of the polygon.
 * @param {number} centerX - The x-coordinate of the center of the polygon.
 * @param {number} centerY - The y-coordinate of the center of the polygon.
 * @param {number} radius - The radius of the polygon.
 */
function drawPolygon(sides, centerX, centerY, radius) {
    ctx.beginPath();

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
}
