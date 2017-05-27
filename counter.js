/*declare counter variable to store the number of counts*/
var greetCounter = 0;
/*onclick of the greet me button this function will execute*/
function counterFnc() {

  /*stored the language radio buttons*/
  var language = document.getElementsByName('language');
  /*declared the txtBox variable to store the input of the name typed in the text box*/
  var txtBox = document.getElementById("myName").value;

  if (namesGreeted[txtBox] === undefined) {
    greetCounter += 1
    namesGreeted[txtBox] = 0;
    inputName = document.getElementById("myName").value;
    counterField.innerHTML = greetCounter;
  }
  document.getElementById("counter").innerHTML = greetCounter;
  document.getElementById("outputgr").innerHTML = rdLanguages() + message();
}
// (language[0].checked || language[1].checked || language[2].checked) && txtBox.length > 0 &&
