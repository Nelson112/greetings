/*declare counter variable to store the number of counts*/
var counter = 0;
/*onclick of the greet me button this function will execute*/
function myfunction(){
  /*stored the language radio buttons*/
var language = document.getElementsByName('language');
/*declared the x variable to store the input of the name typed in the text box*/
var x = document.getElementById("myName").value;
  /*if the english radio button is checked and there is a name typed in the text box, execute this code*/
  if (language[0].checked && x.length > 0) {
    /*stores what ever name that has been typed in the text box*/
  inputName = document.getElementById("myName").value;
  document.getElementById("outputgr").innerHTML= "Hello, " + inputName;
  /*incremates the counter by one*/
  document.getElementById("counter").innerHTML = counter += 1;
  /*clears the text box*/
   var greet = document.getElementById("myName").value = ""
}

else if (language[1].checked  && x.length > 0) {

    inputName = document.getElementById("myName").value;
  document.getElementsByName("language").value;
  document.getElementById("outputgr").innerHTML= "Molo, " + inputName;
  document.getElementById("counter").innerHTML = counter += 1;
   var greet = document.getElementById("myName").value = ""

}
else if (language[2].checked  && x.length > 0) {

    inputName = document.getElementById("myName").value;
  document.getElementsByName("language").value;
  document.getElementById("outputgr").innerHTML= "Hodi, " + inputName;
document.getElementById("counter").innerHTML = counter += 1;
   var greet = document.getElementById("myName").value = ""

}
return inputName;
}
myfunction();
