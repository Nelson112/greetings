var greetCounter = 0;

var namesGreeted = {};


var language = document.getElementsByName('language');
var inputName = document.getElementById("myName");

function mainFunction() {
  var output = document.getElementById("outputgr").innerHTML
  var counterField = document.getElementById("counter").innerHTML
var counterCall = counterFnc()
  document.getElementById("outputgr").innerHTML = rdLanguages() + message() ;
  counterCall;
  document.getElementById("counter").innerHTML = greetCounter;
  counterField.innerHTML = greetCounter;

};
// var storedCounter = localStorage.getItem('counter');
// if (storedCounter) {
//   greetCounter = Number(storedCounter)
// }
// localStorage.setItem('counter', greetCounter);
