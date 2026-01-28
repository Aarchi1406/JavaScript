//finction declaration
function myfunction(a,b){
    return a*b
}
console.log(myfunction(2,3));

//function expression 
const x = function (a, b) {return a * b};

let z = x(4, 3);
console.log(z);

//number of parameters
function myFunction1(){
    return arguments.length;
}
console.log(myFunction1(1, 2, 3,4,5));


//this 
const person = {
  firstName  : "John",
  lastName   : "Doe",
  id     : 5566,
  myFunction : function() {
    return this;
  }
};
console.log(person.myFunction().firstName);

//this outside function is a global object 


//this in event handler 
//document.getElementById("btn").onclick = function () {
  //this.innerHTML = "I was Clicked!";
//};



//Alone, this refers to the global object.
//In a function, this refers to the global object.
//In a function, in strict mode, this is undefined.
//In an object method, this refers to the object.
//In an event, this refers to the element that received the event.
//in methods like call(), apply(), and bind(), this can refer to any object.


//function call
const object = [{ name: "John" }, { name: "Paul" }, { name: "Ringo" }];

function greet(greeting) {
  return greeting + " " + this.name;
}

let message = greet.call(object[2], "Hello");
document.getElementById("demo1").innerHTML = message;

//call method
const persons = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}

const persons1 = {
  firstName:"John",
  lastName: "Doe",
}

const persons2 = {
  firstName:"Mary",
  lastName: "Doe",
}

console.log(persons.fullName.call(persons1));

//The most common use of bind() is to make sure a function always uses the same this value.


//IIFE as a module
const counter = (function () {
  let value = 0;
  return {
    increment() { value++; },
    get() { return value; }
  };
})();

counter.increment();
let x2 = counter.get();

//local variable (a:local variable)
function myFunction2() {
  let a =4;
  return a*a;
}
console.log(myFunction2());

//global variable (b:global variable)
let b =4;
function myFunction3() {
  return b*b;
}
console.log(myFunction3());

//global variable
function myFunction4() {
  a = 4;
}
console.log(a*a);
//function declared without let,var char is always global variable even inside the function

//JS nested function
function add() {
  let counter = 0;
  function plus() {counter += 1;}
  plus();   
  return counter;
}

//closure function 
//A closure is a function that has access to the parent scope, after the parent function has closed.
function outer(){
  let count=0;
  function inner(){
    count=count+1;
    return count;
  }
  return inner;
}
const counter1=outer();
counter ();
console.log(counter1());

//JS object assign
const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

const person2 = {firstName: "Anne",lastName: "Smith"};

// Assign Source to Target
Object.assign(person1, person2);