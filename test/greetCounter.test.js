greetCounter = 0;

function counterFnc() {

  var namesGreeted = {};

  if (namesGreeted[txtBox] === undefined) {
    greetCounter += 1
    namesGreeted[txtBox] = 0;
  }
