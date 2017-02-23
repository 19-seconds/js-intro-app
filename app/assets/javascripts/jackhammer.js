var jackhammerClicked = 1;
var clickCount = 0;

function jackhammer(box) {
  if (jackhammerClicked === 5) {
    // alert("You win!!");
  } else {
    console.log("Keep Clicking to win!");
    jackhammerClicked++;
  }
  changeColor(box);
}

function changeColor(box) {
  var characters = '0123456789ABCEDF'.split('');
  var color = '#';
  for (var i = 0; i < 6; i++){
    color += characters[Math.floor(Math.random() * 16)];
    console.log(color);
  }
  box.style["background-color"] = color;
  clickCount++;
}