//myfunction();
function resetFunction() {
  greetCounter = 0;
  //console.log(greetCounter);
  localStorage.setItem('counter', 0);

  document.getElementById("counter").innerHTML = greetCounter;

}
