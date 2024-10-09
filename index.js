// Define function
function greeting() {
  console.log("Hello!");
}

// Invoke/run/call function
greeting();

function greetWithName(name) {
  // Inside the log, we are using string concatination to add strings together.
  console.log("Hello " + name + "!");
}

greetWithName("Henrik");
greetWithName("Niklas");
greetWithName("Erik");

function add(num1, num2) {
  console.log(num1 + num2);
}

function divideByHalf(num) {
  const half = num / 2;
  return half;
}

const halfOf100 = divideByHalf(100);
console.log(halfOf100);

