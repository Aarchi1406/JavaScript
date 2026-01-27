function showTime() {
  document.getElementById("demo").innerHTML = Date();
}


//mouseover and mouseout 
const box = document.getElementById("box");

// Let box listen for mouseover
box.addEventListener("mouseover", function () {
  box.innerHTML = "Mouse is over me!";
});

// Let box listen for mouseout
box.addEventListener("mouseout", function () {
  box.innerHTML = "Mouse is out!";
});


//mouse position
// Let document listen for mousemove
document.addEventListener("mousemove", function (event) {
  document.getElementById("demo1").innerHTML =
  "X: " + event.clientX + " Y: " + event.clientY;
});


//keyboard events
const k = document.getElementById("k");

k.addEventListener("keydown", function (event) {
  document.getElementById("demo2").innerHTML = "You pressed: " + event.key;
});


//clock
setInterval(showTime, 1000);

function showTime() {
  const d = new Date();
  document.getElementById("clock").innerHTML =
  d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
}

//setTimeout() method
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  setTimeout(showMsg, 2000);
});

function showMsg() {
  document.getElementById("demo3").innerHTML = "Hello after 2 seconds!";
}

//setInterval() method
let myInterval;
let count = 0;

const btnStart = document.getElementById("start");
const btnStop = document.getElementById("stop");


btnStart.addEventListener("click", function () {
  myInterval = setInterval(counter, 1000);
});

btnStop.addEventListener("click", function () {
  clearInterval(myInterval);
});

function counter() {
  count++;
  document.getElementById("counter").innerHTML = count;
}


//adding event 
const btn = document.getElementById("btn");

btn.addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("demo4").innerHTML = "Clicked!";
}