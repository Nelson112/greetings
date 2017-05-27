function rdLanguages() {
  /*if the english radio button is checked and there is a name typed in the text box, execute this code*/
  if (language[0].checked) {
    return "Hello, ";
    document.getElementById("myName").value = "";

  } else if (language[1].checked) {
    return "Molo, ";
    document.getElementById("myName").value = "";

  } else if (language[2].checked) {
    return "Hodi, ";
    document.getElementById("myName").value = "";

  }
}
