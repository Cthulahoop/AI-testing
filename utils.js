/**
 * Generates a random integer.
 * @param {number} [min=0] - The minimum value (inclusive).
 * @param {number} [max=1] - The maximum value (inclusive).
 * @returns {number} A random integer between min and max.
 */
export function rnd(min, max) {
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
