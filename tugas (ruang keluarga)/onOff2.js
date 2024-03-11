function enem() {
  let toggle5 = document.getElementById("default-toggle5");
  let toggle6 = document.getElementById("default-toggle6");

  let lampu5 = document.getElementById("lampu5");
  let lampu6 = document.getElementById("lampu6");

  if (toggle5.checked) {
    lampu5.src = "assets/images/on.gif";
  } else {
    lampu5.src = "assets/images/off.gif";
  }
  if (toggle6.checked) {
    lampu6.src = "assets/images/on.gif";
  } else {
    lampu6.src = "assets/images/off.gif";
  }
}
