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
        return "rock"
    } else if (target === "paper") {
        return "paper"
    } else if (target === "scissors") {
        return "scissors"
    }
}

function updateDisplay (humanChoice, computerChoice) {
    let result
    const playerScore = document.querySelector(".player-score")
    const computerScoreSpan= document.querySelector(".computer-score")
    if (humanChoice === computerChoice) {
        result = "It's a draw"
        resultDisplay.textContent = result
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        result = "Paper covers rock, you win"
        humanScore++
        playerScore.textContent = humanScore
        resultDisplay.textContent = result
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        result = "Paper covers rock, you lose"
        computerScore++
        computerScoreSpan.textContent = computerScore
        resultDisplay.textContent = result
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        result = ("Scissors cuts paper, you win!")
        humanScore++
        playerScore.textContent = humanScore
        resultDisplay.textContent = result
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        result = ("Scissors cuts paper, you lose!")
        computerScore++
        computerScoreSpan.textContent = computerScore
        resultDisplay.textContent = result
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        result = ("Rock crushes scissors, you win!")
        humanScore++
        playerScore.textContent = humanScore
        resultDisplay.textContent = result
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        result = ("Rock crushes scissors, you lose!")
        computerScore++
        computerScoreSpan.textContent = computerScore
        resultDisplay.textContent = result
    }
    return [humanScore, computerScore]
}

function game(e) {
    let target = e.target.className
    let computerChoice = getComputerChoice()
    let humanChoice = getHumanChoice(target)
    updateDisplay(humanChoice, computerChoice)
    if (humanScore === 5) {
        alert("Congradulations, you won!!!!!!!!!!!!!!!")
    } else if (computerScore === 5) {
        alert("You lost, would you like to play again?")
    }
}

choices.addEventListener("click", game)