/* jshint esversion: 8 */ 

/** Starts the game */

document.getElementById("start").addEventListener("click", function(){
  document.getElementById("a2").innerHTML = rightAnswers[0];
  document.getElementById("a2").classList.remove("word");
  document.getElementById("b1").innerHTML = wrongAnswers[0];
  document.getElementById("b1").classList.remove("word");
})

//add checkAnswer event listeners for cells a2 and b3 and print next two answers
document.getElementById("a2").addEventListener("click", checkAnswer)
document.getElementById("a2").addEventListener("click", function(){
  document.getElementById("a3").innerHTML = rightAnswers[1]
  document.getElementById("a3").classList.remove("word");
  document.getElementById("b2").innerHTML = wrongAnswers[1];
  document.getElementById("b2").classList.remove("word");
})
document.getElementById("b1").addEventListener("click", checkAnswer)


//add checkAnswer event listeners for cells a3 and b2 and print next two answers
document.getElementById("a3").addEventListener("click", checkAnswer)
document.getElementById("a3").addEventListener("click", function(){
  document.getElementById("a4").innerHTML = rightAnswers[2]
  document.getElementById("a4").classList.remove("word");
  document.getElementById("b3").innerHTML = wrongAnswers[2];
  document.getElementById("b3").classList.remove("word");
})
document.getElementById("b2").addEventListener("click", checkAnswer)

//add checkAnswer event listeners for cells a4 and b3 and print next two answers
document.getElementById("a4").addEventListener("click", checkAnswer)
document.getElementById("a4").addEventListener("click", function(){
  document.getElementById("a5").innerHTML = rightAnswers[3]
  document.getElementById("a5").classList.remove("word");
  document.getElementById("b4").innerHTML = wrongAnswers[3];
  document.getElementById("b4").classList.remove("word");
})
document.getElementById("b3").addEventListener("click", checkAnswer)

//add checkAnswer event listeners for cells a5 and b4 and print next two answers
document.getElementById("a5").addEventListener("click", checkAnswer)
document.getElementById("a5").addEventListener("click", function(){
  document.getElementById("a6").innerHTML = wrongAnswers[4]
  document.getElementById("a6").classList.remove("word");
  document.getElementById("b5").innerHTML = rightAnswers[4];
  document.getElementById("b5").classList.remove("word");
})
document.getElementById("b4").addEventListener("click", checkAnswer)

//add checkAnswer event listeners for cells a6 and b5 and print next two answers
document.getElementById("b5").addEventListener("click", checkAnswer)
document.getElementById("b5").addEventListener("click", function(){
  document.getElementById("b6").innerHTML = wrongAnswers[5]
  document.getElementById("b6").classList.remove("word");
  document.getElementById("c5").innerHTML = rightAnswers[5];
  document.getElementById("c5").classList.remove("word");
})
document.getElementById("a6").addEventListener("click", checkAnswer)

//add checkAnswer event listeners for cells b6 and c5 and print next two answers
document.getElementById("c5").addEventListener("click", checkAnswer)
document.getElementById("c5").addEventListener("click", function(){
  document.getElementById("c6").innerHTML = wrongAnswers[6]
  document.getElementById("c6").classList.remove("word");
  document.getElementById("d5").innerHTML = wrongAnswers[7]
  document.getElementById("d5").classList.remove("word");
  document.getElementById("c4").innerHTML = rightAnswers[6];
  document.getElementById("c4").classList.remove("word");
})
document.getElementById("b6").addEventListener("click", checkAnswer)


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
  if(this.classList.contains("ESound")) {
    this.classList.add("greenBackground");
    alert ("Correct! This word contains a long e sound!");
    this.classList.add("disable")
    incrementScore();
  } else {
    this.classList.add("redBackground");
    alert ("Bad luck- this word doesn't contain a long e sound!");
    this.classList.add("disable")
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