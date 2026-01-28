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
document.getElementById("btn").onclick = function () {
  this.innerHTML = "I was Clicked!";
};



//Alone, this refers to the global object.
//In a function, this refers to the global object.
//In a function, in strict mode, this is undefined.
//In an object method, this refers to the object.
//In an event, this refers to the element that received the event.
//in methods like call(), apply(), and bind(), this can refer to any object.
