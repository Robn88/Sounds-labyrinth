/*document.getElementById("start").addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("start").style.backgroundColor = "red";
}*/

let noESounds = document.getElementsByClassName("noESound");
let ESounds = document.getElementsByClassName("ESound");

for (let noESound of noESounds) {
  noESound.addEventListener("click", function(){
    this.style.backgroundColor = "red";
  })
}

for (let ESound of ESounds) {
  ESound.addEventListener("click", function(){
    this.style.backgroundColor = "green";
  })
}