function foo(x) {
  if (x === undefined || x === null) {
    return 0; 
  }
  return x.length;
}

console.log(foo(null)); // Output: 0
console.log(foo([1, 2, 3])); // Output: 3
console.log(foo(undefined)); // Output: 0