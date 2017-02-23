var clickedBoxes = [];
function clickBoxThree(number) {
  if (clickedBoxes.indexOf(number) === -1) {
    clickedBoxes.push(number);
  } else {
    console.log("box already clicked");
  }
  if (clickedBoxes.length === 3) {
    alert("You win!");
  }
}