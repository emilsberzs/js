let outcome = '';
let message = '';
let winner;
let computersNumber = Math.floor(Math.random() * 3) + 1;
let playersSelection = "";
let computerSelection = "";

function getComputerChoice() {
    computersNumber = Math.floor(Math.random() * 3) + 1;
    if (computersNumber === 1) {
        return "Rock"
    }
    else if (computersNumber === 2) {
        return "Paper"
    }
    else return "Scissors"
}


function playRound(playersSelection, computerSelection) {
    if (playersSelection === "rock") {
        if (computerSelection === "Rock") {
            outcome = "Draw!"
        }
        else if (computerSelection === "Paper") {
            outcome = "You lose!"
        }
        else outcome = "You win!"
    }
    else if (playersSelection === "paper") {
        if (computerSelection === "Rock") {
            outcome = "You win!"
        }
        else if (computerSelection === "Paper") {
            outcome = "Draw!"
        }
        else outcome = "You lose!"
    }
    else if (playersSelection === 'scissors') {
        if (computerSelection === "Rock") {
            outcome = "You lose!"
        }
        else if (computerSelection === "Paper") {
            outcome = "You win!"
        }
        else outcome = "Draw!"
    }
    else outcome = "Something went wrong, please reload the page."



    if (outcome === "Draw!") {
        message = "Draw, You both chose " + playersSelection
    }
    else if (outcome === "You lose!") {
        message = "You lost! " + computerSelection + " beats " + playersSelection + "!"
    }
    else if (outcome === "You win!") {
        message = "You win! " + playersSelection + " beats " + computerSelection + "!"
    }
    else message = "Something went wrong, please reload the page"
}

function game() {
    for (let i = 0; i < 5; i++) {
        playersSelection = prompt("Rock, Paper or Scissors?").toLowerCase()
        computerSelection = getComputerChoice()
        playRound(playersSelection, computerSelection)
        console.log("Computer chose " + computerSelection)
        console.log("You chose " + playersSelection)
        console.log(outcome)
    }
    return "Game Over!"
}


console.log(game())