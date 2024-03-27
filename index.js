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

function playRound(userSelection, programSelection) {
  let program = programSelection();

  console.log(userSelection);
  console.log(program);
  // for rock
  if (userSelection == "rock") {
    document
      .querySelector(".user")
      .childNodes[1].setAttribute("src", `./images/${userSelection}.png`);
    if (program == "rock") {
      document
        .querySelector(".program")
        .childNodes[1].setAttribute("src", `./images/${program}.png`);
      document.querySelector(
        ".heading"
      ).childNodes[1].innerHTML = `IT'S A DRAW`;
    } else if (program == "paper") {
      document
        .querySelector(".program")
        .childNodes[1].setAttribute("src", `./images/${program}.png`);
      document.querySelector(".heading").childNodes[1].innerHTML =
        "DAMMN IT, WE LOST!!";
    } else if (program == "scissor") {
      document
        .querySelector(".program")
        .childNodes[1].setAttribute("src", `./images/${program}.png`);
      document.querySelector(".heading").childNodes[1].innerHTML =
        "VICTORY IS OURS!!";
    }
  }
  // for paper
  if (userSelection == "paper") {
    document;
    document
      .querySelector(".user")
      .childNodes[1].setAttribute("src", `./images/${userSelection}.png`);
    if (program == "rock") {
      document
        .querySelector(".program")
        .childNodes[1].setAttribute("src", `./images/${program}.png`);
      document.querySelector(
        ".heading"
      ).childNodes[1].innerHTML = `VICTORY IS OURS!!`;
    } else if (program == "paper") {
      document
        .querySelector(".program")
        .childNodes[1].setAttribute("src", `./images/${program}.png`);
      document.querySelector(".heading").childNodes[1].innerHTML =
        "IT'S A DRAW";
    } else if (program == "scissor") {
      document
        .querySelector(".program")
        .childNodes[1].setAttribute("src", `./images/${program}.png`);
      document.querySelector(".heading").childNodes[1].innerHTML =
        "DAMMN IT, WE LOST!!";
    }
  }
  // for scissor
  if (userSelection == "scissor") {
    document
      .querySelector(".user")
      .childNodes[1].setAttribute("src", `./images/${userSelection}.png`);
    if (program == "rock") {
      document
        .querySelector(".program")
        .childNodes[1].setAttribute("src", `./images/${program}.png`);
      document.querySelector(
        ".heading"
      ).childNodes[1].innerHTML = `DAMMN IT, WE LOST!!`;
    } else if (program == "paper") {
      document
        .querySelector(".program")
        .childNodes[1].setAttribute("src", `./images/${program}.png`);
      document.querySelector(".heading").childNodes[1].innerHTML =
        "VICTORY IS OURS!!";
    } else if (program == "scissor") {
      document
        .querySelector(".program")
        .childNodes[1].setAttribute("src", `./images/${program}.png`);
      document.querySelector(".heading").childNodes[1].innerHTML =
        "IT'S A DRAW";
    }
  }
}
