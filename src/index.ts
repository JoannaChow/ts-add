export default function (a: number, b: number) {
  if (isNaN(a) || isNaN(b)) {
    throw new Error("inputs must be numbers");
  }
  return a + b;
}
