// var, let, const

// var is globally scoped

// let can reassign values
// const cannot be reassigned
// always use const unless you know you will reassign variable
// must add value when you use const

// Datatypes
// strings, numbers, boolean, null, undefined, symbol
const name = "John";
const age = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z; //undefined

console.log(typeof name);

//strings
// concatentation
// old way
console.log("My name is " + name + " and I am " + age);
// Template String
const hello = `My name is ${name} and I am ${age}`;
console.log(hello);

// String properties and methods
const s = "hello world";
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.substring(0, 5));
console.log(s.substring(0, 5).toUpperCase());
console.log(s.split(""));

const t = "technology, computers, it, code";
console.log(t.split(", "));

// Arrays - variables that hold mutiple values

const numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers);

// Adding into array
const fruits = ["apples", "oranges", "pears"];
fruits[3] = "grapes";
console.log(fruits);

//add to end of array
fruits.push("mangos");
console.log(fruits);

//add to beginning of array
fruits.unshift("strawberries");
console.log(fruits);

// take last one off
fruits.pop();
console.log(fruits);

//check to see if array
console.log(Array.isArray("hello"));

//index of a value
console.log(fruits.indexOf("oranges"));

// object literals
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  hobbies: ["music", "movies", "sports"],
  address: {
    street: "50 Main Street",
    city: "Boston",
    state: "MA"
  }
};

console.log(person);
console.log(person.firstName, person.lastName);
console.log(person.hobbies[1]);
console.log(person.address.city);

// Object Destructuring
const {
  firstName,
  lastName,
  address: { city }
} = person;
console.log(firstName);
console.log(city);

// Adding properties to objects
person.email = "john@gmail.com";
console.log(person);

// Arrays of objects
const todos = [
  {
    id: 1,
    text: "Take out trash",
    isCompleted: true
  },
  {
    id: 2,
    text: "Meeting with boss",
    isCompleted: true
  },
  {
    id: 3,
    text: "Dentist appt",
    isCompleted: false
  }
];

console.log(todos);
console.log(todos[1].text);

// JSON conversions

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

// Loops
// For loops - runs until condition i < 10 isn't true
for (let i = 0; i < 10; i++) {
  console.log(i);
  console.log(`For loop number: ${i}`);
}

// While loops
let i = 0;
while (i < 10) {
  console.log(`While loop number: ${i}`);
  i++;
}

// looping through arrays
for (let i = 0; i < todos.length; i++) {
  console.log(todos[i].text);
}

//for of loops
for (let todo of todos) {
  console.log(todo.text);
}

//high order array methods: forEach, map, filter.
//ForEach iterates over array
todos.forEach(function(todo) {
  console.log(todo.text);
});

//Map makes a new array
const todoText = todos.map(function(todo) {
  return todo.text;
});
console.log(todoText);

// Filter makes new array according to filtered values
const todoComplete = todos.filter(function(todo) {
  return todo.isCompleted === true;
});
console.log(todoComplete);

// chaining methods
const todoCompleteText = todos
  .filter(function(todo) {
    return todo.isCompleted === true;
  })
  .map(function(todo) {
    return todo.text;
  });
console.log(todoCompleteText);

//Conditionals different ways to evaluate a condition
// == will not match types
// === will match data types

// 1. if/else, else/if
const g = 10;
const f = 4;
if (g === 10) {
  console.log("g is 10");
} else if (g > 10) {
  console.log("g is greater than 10");
} else {
  console.log("g is less 10");
}

// 2. || or && and (both need to be true)
const a = 6;
const b = 11;
if (a > 5 && b > 10) {
  console.log("a is more than 5 or b is more than 10");
}

// 3. Terinary operator ? = then : = else
const p = 11;
const color = p > 10 ? "red" : "blue";
console.log(color);

// 4. switch statements

const color1 = "green";

switch (color1) {
  case "red":
    console.log("color is red");
    break;
  case "blue":
    console.log("color is blue");
    break;
  default:
    console.log("color is not red or blue");
}

//Functions
function addNums(num1, num2) {
  console.log(num1 + num2);
}
addNums(5, 4);
addNums(); // get NaN

//using default values

function addNums1(num1 = 1, num2 = 1) {
  console.log(num1 + num2);
}
addNums1();
addNums1(5, 5); // overrides default values

//mostly want to return values from functions
function addNums1(num1 = 1, num2 = 1) {
  return num1 + num2;
}

console.log(addNums1(5, 5)); // overrides default values

//Arrow functions
const addNums2 = (num1, num2) => {
  return num1 + num2;
};
console.log(addNums2(5, 9));
