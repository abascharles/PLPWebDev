//For Loop
for (let a = 1; a <= 20; a += 2) {
  console.log(`Counter Num: ${a}`);
}

//While loop
let count = 2;

while (count < 10) {
  count++;
  break;
}

//Do While loop
let num = 10;
do {
  console.log(`Number: ${num}`);
  num -= 2;
} while (num > 0);

//For ...of loop -  Most common in arrays
const fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
  console.log(fruits);
}

//For ...in loop Most Common in Objects
const person = {
  name: "John",
  age: 30,
  city: "New York",
};

for (let key in person) {
  console.log(`${key}: ${person[key]}`); // key: value
}
