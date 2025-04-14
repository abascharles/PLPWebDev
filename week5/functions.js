//Function Declaration

function greet(name) {
  return `Hello, ${name}`;
}

console.log(greet("Eddy"));

//Function expression = assigning a cunction to a variable

const add = function (a, b) {
  return a + b;
};

console.log(add(3, 4));

//Arrow Functions
// Syntax: const functionName = (parameters) => expression
const multiply = (a, b) => a * b;
console.log(multiply(2, 3));

//Multiple Statements Use Return
const calculate = (a, b) => {
  const sum = a + b;
  return sum * 2;
};

console.log(calculate(3, 4));
