# AI-Generated Code Test: Dynamic Polygon Drawing

This repository is a test of AI-generated code. It demonstrates dynamic polygon drawing on a canvas that resizes with the browser window.

The project includes a utility function `rnd` for generating random numbers and a `drawPolygon` function for drawing polygons.

## Usage

### Random Number Generation

The `rnd` function generates random integers:

*   **`rnd()`:** Returns a random integer, either 0 or 1.
*   **`rnd(max)`:** Returns a random integer between 0 and `max` (inclusive).
*   **`rnd(min, max)`:** Returns a random integer between `min` and `max` (inclusive).

### Drawing Polygons

The `drawPolygon` function draws a polygon on a canvas that automatically resizes to fill the browser window.

The canvas is created and appended to the document body.  A resize listener redraws the polygon whenever the window size changes.

**`drawPolygon(sides, centerX, centerY, radius)`**

*   **`sides`:** The number of sides of the polygon (integer).
*   **`centerX`:** The x-coordinate of the polygon's center (integer).
*   **`centerY`:** The y-coordinate of the polygon's center (integer).
*   **`radius`:** The radius of the polygon (integer).


**Example:**

The following code snippet demonstrates how to use the functions:

```javascript
import { rnd } from './utils.js';

// ... (canvas and context setup as in main.js)

drawPolygon(6, canvas.width / 2, canvas.height / 2, Math.min(canvas.width, canvas.height) * 0.4);
ctx.fillStyle = \`rgb(\${rnd(255)}, \${rnd(255)}, \${rnd(255)})\`;
ctx.fill();

window.addEventListener('resize', () => {
    // ... (resize logic as in main.js)
});

```
