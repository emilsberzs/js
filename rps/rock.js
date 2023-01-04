let computer_points = 0;
let player_points = 0;
let outcome = '';
let message = '';
let computersNumber = Math.floor(Math.random() * 3) + 1;
let computerSelection = getComputerChoice();

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


function makeMessage(playersSelection, computerSelection) {
    if (outcome === "Draw!") {
        message = "Draw, You both chose " + playersSelection
    }
    else if (outcome === "You lose!") {
        message = "You lost! " + computerSelection + " beats " + playersSelection + "!"
    }
    else if (outcome === "You win!") {
        message = "You win! " + playersSelection + " beats " + computerSelection + "!"
    }
    else if (outcome === "Something went wrong, please reload the page. Top part.") {
        message = "Something went wrong in top part and passed it down to bottom"
    } else {
        message = "Something went wrong at the bottom"
    }
}


function displayCurrentScore() {
    //Create <p> to store result
    const result_display = document.createElement('p')

    //Initialize the outcome_div
    const outcome_div = document.querySelector('#outcome_div');

    //Reset round info before posting new outcome
    while (outcome_div.firstChild) {
        outcome_div.removeChild(outcome_div.firstChild)
    }


    //Add result text to the new paragraph
    result_display.textContent = message;

    //Append the outcome <p> to #result div
    outcome_div.appendChild(result_display)
}


function updateTotalScore() {
    if (outcome === "You lose!") {
        computer_points++;
    }
    else if (outcome === "You win!") {
        player_points++;
    } else {
        //Fu Bar
    }


    //Create two <p> for player point counter and computer point counter
    const player_p = document.createElement('p')
    player_p.id = "p_p";
    const computer_p = document.createElement('p')
    computer_p.id = "c_p";

    //Fill player_p and computer_p with player_points and computer_points
    player_p.textContent = "Player Points: " + player_points
    computer_p.textContent = "Computer Points: " + computer_points

    //Append player_p and computer_p to outcome_div
    outcome_div.appendChild(player_p)
    outcome_div.appendChild(computer_p)

    //Create <p>

}

function resetPoints() {
    computer_points = 0;
    player_points = 0;
    location.reload()
}

function checkScore() {
    if (computer_points === 5){
        updateTotalScore()
        alert("Computer Won!")
        resetPoints()
    } 
    else if (player_points === 5) {
        updateTotalScore()
        alert("Player Won!")
        resetPoints()
    }
    else {
       /// No idea 
    }
}


function playRound(playersSelection, computerSelection) {

    if (playersSelection === "rock") {
        if (computerSelection === "Rock") {
            outcome = "Draw!"
        }
        else if (computerSelection === "Paper") {
            outcome = "You lose!"
        }
        else if (computerSelection === "Scissors") {
            outcome = "You win!"
        }
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
    else outcome = "Something went wrong, please reload the page. Top part."

    makeMessage(playersSelection, computerSelection)
    displayCurrentScore()
    updateTotalScore()
    checkScore()

}

//Each pressed button plays one round
document.getElementById('rock').addEventListener('click', function () { playRound('rock', getComputerChoice()) })
document.getElementById('paper').addEventListener('click', function () { playRound('paper', getComputerChoice()) })
document.getElementById('scissors').addEventListener('click', function () { playRound('scissors', getComputerChoice()) })