//DAY 1 - JavaScript Basics with Code Examples

//1. Difference Between == and === Operators
/*
- The == operator checks for equality in value and the === operator checks for equality in both value and type.
for ex-- */
let a=4;
let b="4";
console.log(a==b);
console.log(a===b);

//2. Difference Between var, let, and const
/*
- var is function scoped and can be redeclared.
- let is block scoped and cannot be redeclared.
- const is block scoped and cannot be redeclared or reassigned.
for ex-- */
var x=10;
let y=20;
const z=40;
//reassignment of const will throw an error.


// if i redeclare y it will throw an error.
// let y=40;
console.log(x);
console.log(y);
console.log(z);

//2.Difference Between undefined, not defined, and NaN
/*
- undefined is a primitive value that represents an uninitialized variable.
- not defined is a term used to describe a variable that has not been declared.
- NaN is a value that represents an invalid or unreliable result.
for ex-- */
let c;

console.log(c); // undefined
//console.log(n); //not defined
console.log(10/"a");//Nan


//3.How Many Operators Do We Have in JavaScript?

/*
two types--
1. primitive ,2. non primitive.
primitive--- */
/*1. String
Represents a sequence of characters.
Enclosed in single quotes ('), double quotes ("), or backticks (`) for template literals. */
let name = "sonal";
console.log(name);
/*
2. Number
Represents both integer and floating-point numbers. 
Can be written with or without decimal points. 

*/
let age = 25;
let price = 19.99;


console.log(age);
console.log(price);

/*
3. Boolean
Represents a logical entity and can have two values: true or false.
Example:
*/
let isActive = true;
let hasPermission = false;
console.log(isActive);
console.log(hasPermission);
/*
Undefined
Indicates that a variable has been declared but has not yet been assigned a value.
Example:
*/
let s;
console.log(s);
/*
Null
Represents the intentional absence of any object value. It's an assignment value and is used to indicate "no value".
*/
let empty = null;
console.log(empty);
/*
Symbol 
Represents a unique value .
*/
const l = Symbol('description');
console.log(l);
/*
BigInt
Represents integers with arbitrary precision. It’s used for working with large integers beyond the safe range for the Number type.
Example:
*/

const bigIntValue = 1234567890123456789012345678901234567890n; 
console.log(bigIntValue);
// non-primitive:
/* 1. Object
collection of data.
Example: 
*/

let data = {
  name: "Sonal",
  age: 21,
  isStudent: true
};

console.log(data.name); 

/*
Array
Arrays are a special type of object that can hold an ordered list of values. They can contain elements of any type, including other arrays and objects.
*/

let fruits = ["apple", "banana", "orange"];
console.log(fruits);
/*
Function
block of code to make  a calculation or perform a task.
*/
function greet(name) {
    console.log(`Hello, ${name}!`);
    }
    greet("Sonal");
/*
Date
The Date object is used to work with dates and times.
*/
let date = new Date();
console.log(date);
/*
6. Map
Maps are collections of key-value pairs where both keys and values can be of any type. They maintain the insertion order of elements. */
let map = new Map();
map.set("name", "Sonal");
map.set("age", 21);
console.log(map.get("name")); 
/*
7. Set
Sets are collections of unique values, meaning a value can only occur once. They can store any type of value.
*/
let set = new Set();
set.add(1);
set.add(2);
set.add(2); // Duplicate will not be added
console.log(set); // Set(2) {1, 2}

//4.Local Scope, Block Scope, Functional Scope, and Scope Chain.
/*
Local Scope: Variables declared inside a function are local to that function. */
function test() {
    let m = 10;
    console.log(m);  // local scope
  }
  /*Block Scope: Variables declared inside {} with let or const are scoped to that block.  */
  if (true) {
    let y = 20;
    console.log(y);  // block scope
  }
  /* Functional Scope: Variables declared with var inside a function are accessible only within that function.

*/
function func() {
    var z = 30;
    console.log(z);  // function scope
  }
/*
Scope Chain: If a variable is not found in the current scope, JavaScript looks up the scope chain to find it.
*/
let q = 1;

function outer() {
  let b = 2;
  
  function inner() {
    let c = 3;
    console.log(q, b, c);  // looks up the scope chain
  }
  inner();
}
outer();































