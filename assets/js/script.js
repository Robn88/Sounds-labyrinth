


let noESounds = document.getElementsByClassName("noESound");
let ESounds = document.getElementsByClassName("ESound");

for (let noESound of noESounds) {
  noESound.addEventListener("click", function(){
    this.style.backgroundColor = "red";
    alert ("Bad luck- this word doesn't contain a long e sound!");
    incrementWrongAnswer();

  })
}

for (let ESound of ESounds) {
  ESound.addEventListener("click", function(){
    this.style.backgroundColor = "green";
    alert ("Correct! This word contains a long e sound!");
    incrementScore();
  })
}

/**
 * Gets the current score from the DOM and increments it by 1
 */
 function incrementScore() {

  let oldScore = parseInt(document.getElementById("score").innerText);
  document.getElementById("score").innerText = ++oldScore;

}

/**
* Gets the current tally of incorrect answers from the DOM and increments it by 1
*/
function incrementWrongAnswer() {

  let oldScore = parseInt(document.getElementById("incorrect").innerText);
  document.getElementById("incorrect").innerText = ++oldScore;
  
}