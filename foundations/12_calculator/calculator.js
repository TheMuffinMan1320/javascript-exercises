const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((soFar, curr) => soFar + curr, 0)
};

const multiply = function(arr) {
  return arr.reduce((soFar, curr) => soFar * curr, 1)
};

const power = function(num, pow) {
	let res = 1
  while (pow > 0) {
    res = res * num
    pow--
  }
  return res
};

const factorial = function(num) {
	let res = 1
  while (num > 0) {
    res = res * num
    num--
  }
  return res
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
