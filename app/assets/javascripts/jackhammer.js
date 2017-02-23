var jackhammerClicked = 1;
// var colors = ......
function jackhammer() {
  if (jackhammerClicked === 5) {
    alert("You win!!");
  } else {
    console.log("Keep Clicking to win!");
    jackhammerClicked++;
  }
  console.log(jackhammerClicked);
}