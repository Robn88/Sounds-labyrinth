/** Starts the game */

document.getElementById("start").addEventListener("click", function(){
  document.getElementById("A2").innerHTML = rightAnswers[0];
  document.getElementById("B1").innerHTML = wrongAnswers[0];
})

document.getElementById("A2").addEventListener("click", checkAnswer)
document.getElementById("B1").addEventListener("click", checkAnswer)



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

let wrongAnswers = (getRandom(15,incorrectWords));
console.log(wrongAnswers);
console.log(wrongAnswers[0]);

function checkAnswer(){
  if(element.classList.contains("ESound")) {
    this.style.backgroundColor = "green";
    alert ("Correct! This word contains a long e sound!");
    incrementScore();
  } else {
    this.style.backgroundColor = "red";
    alert ("Bad luck- this word doesn't contain a long e sound!");
    incrementWrongAnswer();
  }
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