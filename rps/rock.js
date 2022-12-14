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
    let computer_points = 0;
    let player_points = 0;
    let winner = undefined;
    for (let i = 0; i < 5; i++) {
        playersSelection = prompt("Rock, Paper or Scissors?").toLowerCase()
        computerSelection = getComputerChoice()
        playRound(playersSelection, computerSelection)
        console.log("Computer chose " + computerSelection)
        console.log("You chose " + playersSelection)
        console.log(outcome)

        if (outcome === "You lose!"){
            computer_points++;
        }
        else if (outcome === "You win!"){
            player_points++;
        } else {
            //No one gets a point
        }

        if (computer_points > player_points) {
            winner = "Computer"
        }
        else if (player_points > computer_points) {
            winner = "Player"
        } else {
            winner = undefined;
        }


    }
    let result;
    if (winner != undefined){
        result = winner + " wins!"
    } else {
        result = "What a day, its a draw!"
    }

    return "Game Over! " + "Computer scored: " + computer_points + ". " + "You scored: " + player_points + "."  + result
}


console.log(game())