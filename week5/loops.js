//For loop - Used for known Limits (like counting 1-10)
for (let i = 1; i <= 5; i++) {
  console.log(`Count: ${i}`);
}

// While Loop - Unknown Limit (like waiting for the right input)

let num = 1;
while (num <= 5) {
  console.log(num);
  num++;
}

// let password = "";
// while (password !== "secret") {
//   // Imagine we're asking the user to type a password here
//   password = prompt("Enter password: ");
// }
// //You don’t know how many times the user will enter the wrong password, so while is better here.
// console.log("Acess Granted");

//Do while loop - similar to the while loop, but it guarantees the block of code will run at least once, even if the condition is initially false.

let count = 6;
do {
  console.log(`Count: ${count}`);
  count++;
} while (count <= 5);

//for...in loops - used to iterate proprties of an objevt (or indicies of an array)

const person = {
  name: "Eddy",
  age: 25,
  role: "Instructor",
};
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

// for...of - used to iterate over iterable objects such as arrays, strings, or sets.
const fruits = ["🍎", "🍌", "🍓"];

for (let fruit of fruits) {
  console.log(`I love ${fruit}`);
}

//Special Keywords
//Break - Exits the loop entirely when a specific condition is met.

for (let j = 1; j <= 10; j++) {
  if (j === 5) {
    break; // Stop the loop
  }
  console.log(j);
}
//continue - Skips the current iteration and moves to the next one.
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue; // Skip number 3
  }
  console.log(i);
}

// Nested Loops

//Looping through strings  and arrays

//String example
const jina = "Ouma";
for (let char of jina) {
  console.log(char);
}
//Array example
const numbers = [10, 20, 30];
for (let num of numbers) {
  console.log(num);
}
