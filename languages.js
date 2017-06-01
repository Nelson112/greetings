function rdLanguages() {
  if (language[0].checked) {

    return "Hello, ";

  } else if (language[1].checked) {
    return "Molo, ";

  } else if (language[2].checked) {
    return "Hodi, ";
  }
  document.getElementById("myName").value = "";
}
