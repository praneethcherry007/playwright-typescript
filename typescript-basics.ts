console.log("Hello world");

// Variables with explicit types
let userName: string = "Praneeth";
let greeting: string = "How are you?";
let reply: string = "I'm fine :)";

console.log(userName);
console.log(greeting);
console.log(reply);

// Strings
let message: string = "hello";
let fullMessage: string = `${message}, ${userName}`;
console.log(fullMessage);

// Numbers
let wholeNumber: number = 1;
let decimalNumber: number = 2.2;
console.log(wholeNumber, decimalNumber);

// Boolean
let isLearning: boolean = true;
console.log(isLearning);

// Arrays
let scores: number[] = [10, 20, 30];
let fruits: string[] = ["apple", "banana", "mango"];
console.log(scores);
console.log(fruits);

// Union types: one variable can accept more than one type
let id: string | number = 101;
id = "TS-101";
console.log(id);

// Functions
function add(a: number, b: number): number {
  return a + b;
}

console.log(add(5, 3));

// Objects
type Student = {
  name: string;
  age: number;
  isActive: boolean;
};

let student: Student = {
  name: "Praneeth",
  age: 21,
  isActive: true,
};

console.log(student);
