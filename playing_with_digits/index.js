const digPow = (n, p) => {
  const result = Array.from(n.toString())
    .map(Number)
    .map((element, index) => element ** (p + index))
    .reduce((a, b) => a + b);
  return result % n ? -1 : result / n;
};
