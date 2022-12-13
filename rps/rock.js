let computersNumber = Math.floor(Math.random() * 3) + 1

function getComputerChoice(){
    if (computersNumber === 1){
        return "Rock"
    }
    else if (computersNumber === 2){
        return "Paper"
    }
    else return "Scissors"
}

let playersSelection = prompt("Rock, Paper or Scissors?").toLowerCase()
let computerSelection = getComputerChoice()

function playRound(playersSelection,computerSelection) {
    if (playersSelection === "rock"){
        if (computerSelection === "Rock"){
            return "Draw!"
        }
        else if (computerSelection === "Paper"){
            return "You lose!"
        }
        else return "You win!"
    }
    else if (playersSelection === "paper"){
        if (computerSelection === "Rock"){
            return "You win!"
        }
        else if (computerSelection === "Paper"){
            return "Draw!"
        }
        else return "You lose!"
    }
    else {
        if (computerSelection === "Rock"){
            return "You lose!"
        }
        else if (computerSelection === "Paper"){
            return "You win!"
        }
        else return "Draw!"
    }

}

console.log("Computer chose " + getComputerChoice())
console.log("You chose " + playersSelection)
console.log(playRound(playersSelection,computerSelection))