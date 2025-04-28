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

//For ...of loop
const fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
  console.log(fruits);
}
