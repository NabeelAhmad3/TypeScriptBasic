function combine(
  a: number | string,
  b: number | string,
  type: "as-number" | "as-string"
) {
  if (type === "as-number") {
    return +a + +b;
  } else {
    return a.toString() + b.toString();
  }
}
console.log(combine(3, 5, "as-number"));
console.log(combine("Nabeel", "khan", "as-string"));
