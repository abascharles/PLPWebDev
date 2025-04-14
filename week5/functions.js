//Function Declaration

function greet(name) {
  return `Hello, ${name}`;
}

console.log(greet("Eddy"));

//Function expression = assigning a function to a variable

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

//Anonymous Function - Function without a name often used in callbacks

const holla = function (name) {
  return `Hello ${name}`;
};

console.log(holla("Abas"));

// As a callback
setTimeout(function () {
  console.log("This runs after 2 seconds");
}),
  10000;
