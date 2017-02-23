var winningBox = Math.floor((Math.random() * 3) + 1);


function guessBox(boxNumber) {
  if (boxNumber === winningBox) {
    alert("You win!!!");
  } else {
    console.log("Keep guessing!");
  }
  
}