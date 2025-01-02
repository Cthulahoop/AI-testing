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
