function add(number) {
  var printOut = document.getElementById("printout");
  if (number === "Reset") {
    printOut.innerHTML = "0";
  } else {
    printOut.innerHTML = parseInt(printOut.innerHTML) + number;
  }
}
