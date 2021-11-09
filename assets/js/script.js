/* jshint esversion: 8 */

//Starts the game

document.getElementById("start").addEventListener("click", function () {
  document.getElementById("a2").innerHTML = rightAnswers[0];
  document.getElementById("a2").classList.remove("word");
  document.getElementById("b1").innerHTML = wrongAnswers[0];
  document.getElementById("b1").classList.remove("word");
});

//add checkAnswer event listeners for cells a2 and b3 and print next two answers
document.getElementById("a2").addEventListener("click", checkAnswer);
document.getElementById("a2").addEventListener("click", function () {
  document.getElementById("a3").innerHTML = rightAnswers[1];
  document.getElementById("a3").classList.remove("word");
  document.getElementById("b2").innerHTML = wrongAnswers[1];
  document.getElementById("b2").classList.remove("word");
});
document.getElementById("b1").addEventListener("click", checkAnswer);


//add checkAnswer event listeners for cells a3 and b2 and print next two answers
document.getElementById("a3").addEventListener("click", checkAnswer);
document.getElementById("a3").addEventListener("click", function () {
  document.getElementById("a4").innerHTML = rightAnswers[2];
  document.getElementById("a4").classList.remove("word");
  document.getElementById("b3").innerHTML = wrongAnswers[2];
  document.getElementById("b3").classList.remove("word");
});
document.getElementById("b2").addEventListener("click", checkAnswer);

//add checkAnswer event listeners for cells a4 and b3 and print next two answers
document.getElementById("a4").addEventListener("click", checkAnswer);
document.getElementById("a4").addEventListener("click", function () {
  document.getElementById("a5").innerHTML = rightAnswers[3];
  document.getElementById("a5").classList.remove("word");
  document.getElementById("b4").innerHTML = wrongAnswers[3];
  document.getElementById("b4").classList.remove("word");
});
document.getElementById("b3").addEventListener("click", checkAnswer);

//add checkAnswer event listeners for cells a5 and b4 and print next two answers
document.getElementById("a5").addEventListener("click", checkAnswer);
document.getElementById("a5").addEventListener("click", function () {
  document.getElementById("a6").innerHTML = wrongAnswers[4];
  document.getElementById("a6").classList.remove("word");
  document.getElementById("b5").innerHTML = rightAnswers[4];
  document.getElementById("b5").classList.remove("word");
});
document.getElementById("b4").addEventListener("click", checkAnswer);

//add checkAnswer event listeners for cells a6 and b5 and print next two answers
document.getElementById("b5").addEventListener("click", checkAnswer);
document.getElementById("b5").addEventListener("click", function () {
  document.getElementById("b6").innerHTML = wrongAnswers[5];
  document.getElementById("b6").classList.remove("word");
  document.getElementById("c5").innerHTML = rightAnswers[5];
  document.getElementById("c5").classList.remove("word");
});
document.getElementById("a6").addEventListener("click", checkAnswer);

//add checkAnswer event listeners for cells b6 and c5 and print next three answers
document.getElementById("c5").addEventListener("click", checkAnswer);
document.getElementById("c5").addEventListener("click", function () {
  document.getElementById("c6").innerHTML = wrongAnswers[6];
  document.getElementById("c6").classList.remove("word");
  document.getElementById("d5").innerHTML = wrongAnswers[7];
  document.getElementById("d5").classList.remove("word");
  document.getElementById("c4").innerHTML = rightAnswers[6];
  document.getElementById("c4").classList.remove("word");
});
document.getElementById("b6").addEventListener("click", checkAnswer);

//add checkAnswer event listeners for cells d5, c6 and c4 and print next two answers
document.getElementById("c4").addEventListener("click", checkAnswer);
document.getElementById("c4").addEventListener("click", function () {
  document.getElementById("d4").innerHTML = wrongAnswers[8];
  document.getElementById("d4").classList.remove("word");
  document.getElementById("c3").innerHTML = rightAnswers[7];
  document.getElementById("c3").classList.remove("word");
});
document.getElementById("c6").addEventListener("click", checkAnswer);
document.getElementById("d5").addEventListener("click", checkAnswer);

//add checkAnswer event listeners for cells c3 and d4 and print next two answers
document.getElementById("c3").addEventListener("click", checkAnswer);
document.getElementById("c3").addEventListener("click", function () {
  document.getElementById("d3").innerHTML = wrongAnswers[9];
  document.getElementById("d3").classList.remove("word");
  document.getElementById("c2").innerHTML = rightAnswers[8];
  document.getElementById("c2").classList.remove("word");
});
document.getElementById("d4").addEventListener("click", checkAnswer);

//add checkAnswer event listeners for cells c2 and d3 and print next two answers
document.getElementById("c2").addEventListener("click", checkAnswer);
document.getElementById("c2").addEventListener("click", function () {
  document.getElementById("d2").innerHTML = wrongAnswers[10];
  document.getElementById("d2").classList.remove("word");
  document.getElementById("c1").innerHTML = rightAnswers[9];
  document.getElementById("c1").classList.remove("word");
});
document.getElementById("d3").addEventListener("click", checkAnswer);

//add checkAnswer event listeners for cells c1 and d2 and print next answer
document.getElementById("c1").addEventListener("click", checkAnswer);
document.getElementById("c1").addEventListener("click", function () {
  document.getElementById("d1").innerHTML = rightAnswers[10];
  document.getElementById("d1").classList.remove("word");
});

//add checkAnswer event listener for cell d1 and print next answer
document.getElementById("d1").addEventListener("click", checkAnswer);
document.getElementById("d1").addEventListener("click", function () {
  document.getElementById("e1").innerHTML = rightAnswers[11];
  document.getElementById("e1").classList.remove("word");
});
document.getElementById("d2").addEventListener("click", checkAnswer);

//add checkAnswer event listener for cell e1 and print next two answers
document.getElementById("e1").addEventListener("click", checkAnswer);
document.getElementById("e1").addEventListener("click", function () {
  document.getElementById("f1").innerHTML = rightAnswers[12];
  document.getElementById("f1").classList.remove("word");
  document.getElementById("e2").innerHTML = wrongAnswers[11];
  document.getElementById("e2").classList.remove("word");
});
document.getElementById("d2").addEventListener("click", checkAnswer);

//add checkAnswer event listeners for cells f1 and e2 and print next answer
document.getElementById("f1").addEventListener("click", checkAnswer);
document.getElementById("f1").addEventListener("click", function () {
  document.getElementById("f2").innerHTML = rightAnswers[13];
  document.getElementById("f2").classList.remove("word");
});
document.getElementById("e2").addEventListener("click", checkAnswer);

//add checkAnswer event listeners for cell f2 and print next answer
document.getElementById("f2").addEventListener("click", checkAnswer);
document.getElementById("f2").addEventListener("click", function () {
  document.getElementById("f3").innerHTML = rightAnswers[14];
  document.getElementById("f3").classList.remove("word");
});

//add checkAnswer event listener for cell f3 and print next two answers
document.getElementById("f3").addEventListener("click", checkAnswer);
document.getElementById("f3").addEventListener("click", function () {
  document.getElementById("e3").innerHTML = rightAnswers[15];
  document.getElementById("e3").classList.remove("word");
  document.getElementById("f4").innerHTML = wrongAnswers[12];
  document.getElementById("f4").classList.remove("word");
});

//add checkAnswer event listener for cells e3 and f4 and print next answer
document.getElementById("e3").addEventListener("click", checkAnswer);
document.getElementById("e3").addEventListener("click", function () {
  document.getElementById("e4").innerHTML = rightAnswers[16];
  document.getElementById("e4").classList.remove("word");
  document.getElementById("f4").addEventListener("click", checkAnswer);
});

//add checkAnswer event listener for cell e4 and print next answer
document.getElementById("e4").addEventListener("click", checkAnswer);
document.getElementById("e4").addEventListener("click", function () {
  document.getElementById("e5").innerHTML = rightAnswers[17];
  document.getElementById("e5").classList.remove("word");
});

//add checkAnswer event listener for cell e5 and print next two answers
document.getElementById("e5").addEventListener("click", checkAnswer);
document.getElementById("e5").addEventListener("click", function () {
  document.getElementById("e6").innerHTML = rightAnswers[18];
  document.getElementById("e6").classList.remove("word");
  document.getElementById("f5").innerHTML = wrongAnswers[13];
  document.getElementById("f5").classList.remove("word");
});

//add checkAnswer event listener for cells e6 and f5 and call end of game function
document.getElementById("e6").addEventListener("click", checkAnswer);
document.getElementById("e6").addEventListener("click", function () {
  document.getElementById("finish").innerHTML = "Click to finish!";
  document.getElementById("finish").classList.remove("word");
});
document.getElementById("f5").addEventListener("click", checkAnswer);

//end game function
document.getElementById("finish").addEventListener("click", function(){
  let finalScore = document.getElementById("incorrect").innerText;
  if (finalScore == 0) {
    openModal();
    let modalPerfectGameText = "Wow, perfect game! You made 0 mistakes! Congratulations!";
    document.getElementById("modal-text").innerHTML = modalPerfectGameText;
  } else if (finalScore == 1) {
    openModal();
    let modalEndGameText = `You made it to the end, well done! You made only ${finalScore} mistake. Play again to try and get a perfect score!`;
    document.getElementById("modal-text").innerHTML = modalEndGameText;
  } else {
    openModal();
    let modalEndGameText = `You made it to the end, well done! You made ${finalScore} mistakes. Play again to try and get a perfect score!`;
    document.getElementById("modal-text").innerHTML = modalEndGameText;
  }
});

//arrays containing dictionary of words, to be called and randomised by the function getRandom
let correctWords = ["even", "Steven", "evil", "meet", "meat", "area", "legal", "be", "achieve", "belief", "sheep", "beat", "free", "clear", "breathe", "leave", "baby", "family", "piece", "any", "beach", "key", "cream", "fear", "recent", "weird"];
let incorrectWords = ["bet", "left", "health", "dead", "breath", "live", "fitness", "bread", "ship", "felt", "England", "July", "fry", "silent", "think", "eleven", "met", "with", "difficult"];

/*function that gets a random element from an array, checks to make sure it has not already been called,
 and pushes it to the array "answer"*/

function getRandom(count, arr) {
  let answer = [],
    counter = 0;

  while (counter < count) {
    let rand = arr[Math.floor(Math.random() * arr.length)];
    if (!answer.some(an => an === rand)) {
      answer.push(rand);
      counter++;
    }
  }

  return answer;
}

//creates the dictionary of both right and wrong answers that will be used during the game
let rightAnswers = (getRandom(21, correctWords));

let wrongAnswers = (getRandom(15, incorrectWords));

// function to check the answer, display modal,increment the score, and remove event listener
function checkAnswer() {
  if (this.classList.contains("ESound")) {
    this.classList.add("greenBackground");
    openModal();
    let currentRightAnswer = this.innerText;
    let modalCorrectText = `Well done, '${currentRightAnswer}' contains a long e sound!`;
    document.getElementById("modal-text").innerHTML = modalCorrectText;
    this.classList.add("disable");
    incrementScore();
  } else {
    this.classList.add("redBackground");
    openModal();
    let currentWrongAnswer = this.innerText;
    let modalIncorrectText = `Bad luck, '${currentWrongAnswer}' does not contain a long e sound!`;
    document.getElementById("modal-text").innerHTML = modalIncorrectText;
    this.classList.add("disable");
    incrementWrongAnswer();
  }
}

//Gets the current score from the DOM and increments it by 1
function incrementScore() {

  let oldScore = parseInt(document.getElementById("score").innerText);
  document.getElementById("score").innerText = ++oldScore;

}

//Gets the current tally of incorrect answers from the DOM and increments it by 1
function incrementWrongAnswer() {

  let oldScore = parseInt(document.getElementById("incorrect").innerText);
  document.getElementById("incorrect").innerText = ++oldScore;

}


// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
function openModal() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};