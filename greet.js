function myfunction(){
  var inputName = "";
var language = document.getElementsByName('language');

  if (language[0].checked) {

  inputName = document.getElementById("myName");
  document.getElementById("outputgr").innerHTML= "Hello, " + inputName.value;

   var greet = document.getElementById("myName").value = ""
}

else if (language[1].checked) {

    inputName = document.getElementById("myName");
  document.getElementsByName("language").value;
  document.getElementById("outputgr").innerHTML= "Molo, " + inputName.value;

   var greet = document.getElementById("myName").value = ""

}
else if (language[2].checked) {

    inputName = document.getElementById("myName");
  document.getElementsByName("language").value;
  document.getElementById("outputgr").innerHTML= "Hodi, " + inputName.value;

   var greet = document.getElementById("myName").value = ""

}
return inputName;
}
myfunction();
