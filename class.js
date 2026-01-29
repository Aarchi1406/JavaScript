//class methods
class Car {
  constructor(brand) {
    this.carname = brand;
  }}
//A JavaScript class is not an object.it is template for javascript
class car  {
  constructor(name,year) {
    this.name = name;
    this.year = year;
}
}
const car1 = new car("ford", 2020);
const car2 = new car("chevy", 2018);

console.log(car1.name + " " + car1.year);
console.log(car2.name + " " + car2.year);

//empty constructor: object will be created without properties
class car_age{
  constructor(name,year){
    this.name = name;
    this.year = year;
  }

  age(){
  let date = new Date();
  return date.getFullYear() - this.year;
}
}
const mycar1 = new car_age("ford", 2015);
console.log("my car is " + mycar1.age() + " years old");

//class inheritance 
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return 'I have a ' + this.carname;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ', it is a ' + this.model;
  }
}

let myCar = new Model("Ford", "Mustang");
console.log(myCar.show());



//class declarations are not hoisted this means that you must declare a class before you can use it.


//when object is not required then static method is used to avoid unnecessary memory allocation
console.log(2 + "2"-2)

