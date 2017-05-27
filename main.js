// introducing HTML elements
var language = document.getElementsByName('language');
var inputName = document.getElementById("myName").value;
var output = document.getElementById("outputgr").innerHTML
var counterField = document.getElementById("counter").innerHTML
//global variable that stores the names that has been greeted
var namesGreeted = {};

var storedCounter = localStorage.getItem('counter');
if (storedCounter) {
  greetCounter = Number(storedCounter)
}
localStorage.setItem('counter', greetCounter);
