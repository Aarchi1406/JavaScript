//HTML elements By tag names 
const elements = document.getElementsByTagName("p");
    document.getElementById("demo1").innerHTML = "The text in the first paragraph (index 0) is: " + elements[0].innerHTML;



//Find element with id "main", then find all <p> elements inside "main"
const x1 = document.getElementById("main");
const y = x1.getElementsByTagName("p");

document.getElementById("demo2").innerHTML = 'The first paragraph (index 0) inside "main" is: ' + y[0].innerHTML;


//form elements
const x2 = document.forms["frm1"];
let text = "";
for (let i = 0; i < x2.length ;i++) {
  text += x2.elements[i].value + "<br>";
}
document.getElementById("demo3").innerHTML = text;


//Change content of paragraph with id "p1"
document.getElementById("p1").innerHTML = "New text!"; 


//changing css
document.getElementById("p2").style.color = "blue";
document.getElementById("p2").style.fontFamily = "Arial";
document.getElementById("p2").style.fontSize = "larger";

//form validation
function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("This is required");
    return false;
  }
}

//animation
function myMove() {
  let id = null;
  const elem = document.getElementById("animate");   
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + "px"; 
      elem.style.left = pos + "px"; 
    }
  }
}