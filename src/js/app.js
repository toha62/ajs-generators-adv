function canIterate(obj) {
  if (obj === undefined || obj === null) {
    return false;
  }
  return Boolean(Object.getPrototypeOf(obj)[Symbol.iterator]);
}

console.log(canIterate(new Map()));
console.log(canIterate(new Set()));
console.log(canIterate(null));
console.log(canIterate(10));
console.log(canIterate('Netology'));
console.log(canIterate(NaN));
