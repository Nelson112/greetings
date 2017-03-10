/*declare counter variable to store the number of counts*/
var greetCounter = 0;
//global variable that stores the names that has been greeted
var namesGreeted = {};

var storedCounter = localStorage.getItem('counter');
if (storedCounter) {
  greetCounter = Number(storedCounter)
}

/*onclick of the greet me button this function will execute*/
function myfunction() {

  /*stored the language radio buttons*/
  var language = document.getElementsByName('language');
  /*declared the txtBox variable to store the input of the name typed in the text box*/
  var txtBox = document.getElementById("myName").value;

  if ((language[0].checked || language[1].checked || language[2].checked) && txtBox.length > 0 && namesGreeted[txtBox] === undefined) {
    greetCounter += 1
    namesGreeted[txtBox] = 0;
    inputName = document.getElementById("myName").value;

  }
  document.getElementById("counter").innerHTML = greetCounter;


  /*stored the language radio buttons*/
  var language = document.getElementsByName('language');

  /*if the english radio button is checked and there is a name typed in the text box, execute this code*/
  if (language[0].checked && txtBox.length > 0) {
    /*stores what ever name that has been typed in the text box*/
    inputName = document.getElementById("myName").value;
    document.getElementById("outputgr").innerHTML = "Hello, " + inputName;
    /*incremates the counter by one*/
    /*clears the text box*/
    document.getElementById("myName").value = ""
  } else if (language[1].checked && txtBox.length > 0) {

    inputName = document.getElementById("myName").value;
    document.getElementById("outputgr").innerHTML = "Molo, " + inputName;
    document.getElementById("myName").value = ""

  } else if (language[2].checked && txtBox.length > 0) {

    inputName = document.getElementById("myName").value;
    document.getElementById("outputgr").innerHTML = "Hodi, " + inputName;
    document.getElementById("myName").value = ""

  }

localStorage.setItem('counter', greetCounter);
}

document.getElementById('counter').innerHTML = greetCounter;
//myfunction();
function resetFunction() {
  var counter = 0;
  greetCounter = 0;
  //console.log(greetCounter);
  localStorage.setItem('counter', 0);

  document.getElementById("counter").innerHTML = greetCounter;

}
// done
