/** Starts the game */

var correctWords = ["even", "Steven", "evil", "meet", "meat", "area", "legal", "be", "achieve", "belief", "sheep", "beat", "free", "clear", "breathe", "leave", "baby", "family", "piece", "any", "beach", "key", "cream", "fear", "recent"];
var incorrectWords = ["bet", "left", "health", "dead", "breath", "live", "fitness", "bread", "ship", "felt", "England", "July", "fry", "silent", "think", "eleven", "met", "with"];

function getRandom(count, arr){
  let answer = [], counter = 0;
 
  while(counter < count){
    let rand = arr[Math.floor(Math.random() * arr.length)];
    if(!answer.some(an => an === rand)){
      answer.push(rand);
      counter++;
    }
  }
  
  return answer;
}



let rightAnswers = (getRandom(21,correctWords));
console.log(rightAnswers)
console.log(rightAnswers[1]);



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