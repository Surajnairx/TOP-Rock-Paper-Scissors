const programOptions = ["rock", "paper", "scissor"];
let numberOfButtons = document.querySelectorAll(".button").length;

let buttonId;
for (let i = 0; i < numberOfButtons; i++) {
  document.querySelectorAll(".button")[i].addEventListener("click", (event) => {
    buttonId = event.target.id;
    playRound(buttonId, getProgramChoice);
  });
}

function getProgramChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  let randomChoice = programOptions[randomNumber];
  return randomChoice;
}
