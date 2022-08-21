function factorial(n) {
  if (n < 0) {
    throw new Error("error is occured");
  }

  if (n === 0) {
    return 1;
  }

  return n * factorial(n - 1);
}

module.exports = factorial;
