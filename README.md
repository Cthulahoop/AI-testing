# Random Number Generator

This project contains a JavaScript function `rnd` for generating random numbers.

## Usage

### Random Number Generation

The `rnd` function can be used in the following ways:

### Drawing Polygons

The `drawPolygon` function draws a polygon on the canvas. It takes one argument:

* `sides`: The number of sides of the polygon.

Example:


The `rnd` function can be used in the following ways:

*   **`rnd()`:** Returns a random integer, either 0 or 1.
*   **`rnd(max)`:** Returns a random integer between 0 and `max` (inclusive).
*   **`rnd(min, max)`:** Returns a random integer between `min` and `max` (inclusive).

**Examples:**

```javascript

// Draw a polygon with 5 sides
drawPolygon(5);

rnd(); // Returns 0 or 1
rnd(5); // Returns a random integer between 0 and 5
rnd(2, 7); // Returns a random integer between 2 and 7
```
