console.log("hello world")

const choices = ["rock", "paper", "scissors"]

let humanScore = 0
let computerScore = 0

function getComputerChoice(array = choices) {
    let number = Math.floor(Math.random() * choices.length)
    return choices[number]
}

function getHumanChoice() {
    // let choice = prompt("Please enter a choice of rock, paper or scissors")
    let choice = "rock"
    return choice.toLowerCase()
}

function playRound(params) {
    let computerChoice = getComputerChoice()
    let humanChoice = getHumanChoice()
    let result
    console.log(computerChoice)
    console.log(humanChoice)
    if (humanChoice === computerChoice) {
        result = "It's a draw"
        console.log(result)
        return result
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        result = "Paper covers rock, you win"
        console.log(result)
        humanScore ++
        return result
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        result = "Paper covers rock, you lose"
        computerScore ++
        return result
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        result = ("Scissors cuts paper, you win!")
        console.log(result)
        humanScore ++
        return result
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        result = ("Scissors cuts paper, you lose!")
        console.log(result)
        computerScore ++
        return result
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        result = ("Rock crushes scissors, you win!")
        console.log(result)
        humanScore ++
        return result
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        result = ("Rock crushes scissors, you lose!")
        console.log(result)
        computerScore ++
        return result
    }
    return [computerScore, humanScore]
}

function game() {
    // call the play game
    // first to five is the winner and the game wins
    playRound()
    console.log(humanScore, computerScore)
    if (humanScore === 5) {
        alert("Congradulations, you won!!!!!!!!!!!!!!!")        
    }   else if (computerScore === 5) {
        alert("You lost, would you like to play again?")
    }
}

game()