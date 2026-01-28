//A value given to a property will be a default value for all objects created by the constructor
//here nationality english is default

function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
  this.nationality = "English";
}


//adding a property to an object
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");

myFather.nationality = "English";

//new property cannot be added to the object constructor 

//adding a method to an object 
myMother.changeName = function (name) {
  this.lastName = name;
}


//The Math() object is not in the list. Math is a global object. The new keyword cannot be used on Math

//this is a method
const person = {
  firstName: "John",
  lastName: "Doe",
    id: 5566,  
  fullName: function() {
    return this.firstName + "" + this.lastName;}};

console.log(person.fullName());

//object method binding(explicitely function binding)
const person1 = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}

const person2 = {
  firstName:"John",
  lastName: "Doe",
}

let x = person1.fullName.call(person2); 
document.getElementById("demo").innerHTML = x; 
// person1 has function and function2 has data so binding them will result in a function with data 

