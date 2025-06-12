console.log("hello world")

const choicesArray = ["rock", "paper", "scissors"]
let humanScore = 0
let computerScore = 0
const resultDisplay = document.querySelector(".result")
const choices = document.querySelector(".choices")

function getComputerChoice(array = choicesArray) {
    let number = Math.floor(Math.random() * choicesArray.length)
    return choicesArray[number]
}

function getHumanChoice(target) {
    if (target === "rock") {
        console.log("rock")
        return "rock"
    } else if (target === "paper") {
        console.log("paper")
        return "paper"
    } else if (target === "scissors") {
        console.log("scissors")
        return "scissors"
    }
}

function updateDisplay (humanChoice, computerChoice) {
    let result

    if (humanChoice === computerChoice) {
        result = "It's a draw"
        console.log(result)
        resultDisplay.textContent = result
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        result = "Paper covers rock, you win"
        console.log(result)
        humanScore++
        resultDisplay.textContent = result
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        result = "Paper covers rock, you lose"
        computerScore++
        resultDisplay.textContent = result
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        result = ("Scissors cuts paper, you win!")
        console.log(result)
        humanScore++
        resultDisplay.textContent = result
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        result = ("Scissors cuts paper, you lose!")
        console.log(result)
        computerScore++
        resultDisplay.textContent = result
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        result = ("Rock crushes scissors, you win!")
        console.log(result)
        humanScore++
        resultDisplay.textContent = result
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        result = ("Rock crushes scissors, you lose!")
        console.log(result)
        computerScore++
        resultDisplay.textContent = result
    }
    return [computerScore, humanScore]
}

function playRound(e) {
    let target = e.target.className
    let computerChoice = getComputerChoice()
    let humanChoice = getHumanChoice(target)
    updateDisplay(humanChoice, computerChoice)
    console.log(computerChoice)
    console.log(humanChoice)
}

function game() {
    // call the play game
    // first to five is the winner and the game wins
    playRound()
    console.log(humanScore, computerScore)
    if (humanScore === 5) {
        alert("Congradulations, you won!!!!!!!!!!!!!!!")
    } else if (computerScore === 5) {
        alert("You lost, would you like to play again?")
    }
}

choices.addEventListener("click", playRound)