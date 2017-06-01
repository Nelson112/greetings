function counterFnc() {

  if (!namesGreeted[inputName.value]) {
    greetCounter += 1;
    namesGreeted[inputName.value] = 1;
  };
  // if (namesGreeted[inputName] !== undefined) {
  //   greetCounter = greetCounter;
  //   namesGreeted.name = inputName.value;
  };
  console.log(inputName.value);
  console.log(namesGreeted);
