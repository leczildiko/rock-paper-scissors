const computerChoiceDisplay = document.getElementById('computer')
const userChoiceDisplay = document.getElementById('user')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')

let userChoice
let computerChoice
let result
let pScore = 0;
let cScore = 0;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    
    const hands = document.querySelectorAll(".hands img");

    hands.forEach(hand => {
        hand.addEventListener("animationend", function() {
          this.style.animation = "";
        });
      });

    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1
    console.log(randomNumber)
    const computerHand = document.querySelector(".computer-hand"); 

    if(randomNumber === 1) {
        computerChoice = 'rock'
    }
    if(randomNumber === 2) {
        computerChoice = 'paper'
    }
    if(randomNumber === 3) {
        computerChoice = 'scissors'
    }

    setTimeout(() => {
        computerHand.src = `./assets/${computerChoice}.png`;
    }, 2000)
    computerHand.style.animation = "shakeComputer 2s ease";
    
    
}

function getResult() {
    const playerHand = document.querySelector(".player-hand");
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");

    if(computerChoice === userChoice) {
        result = 'döntetlen'
    }
    if(computerChoice === 'rock' && userChoice === 'paper') {
        result = 'nyertél'
        pScore++
    }
    if(computerChoice === 'rock' && userChoice === 'scissors') {
        result = 'vesztettél'
        cScore++
    }
    if(computerChoice === 'paper' && userChoice === 'rock') {
        result = 'vesztettél'
        cScore++
    }
    if(computerChoice === 'paper' && userChoice === 'scissors') {
        result = 'nyertél'
        pScore++
    }
    if(computerChoice === 'scissors' && userChoice === 'rock') {
        result ='nyertél'
        pScore++
    }
    if(computerChoice === 'scissors' && userChoice === 'paper') {
        result = 'vesztettél'
        cScore++
    }

    
    setTimeout(() => {
        resultDisplay.innerHTML = result
        playerHand.src = `./assets/${userChoice}.png`;

        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }, 2000)
    playerHand.style.animation = "shakePlayer 2s ease";
    
}

