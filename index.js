console.log("hello world")

const choices = ["rock", "paper", "scissors"]

let humanScore = 0
let computerScore = 0

function getComputerChoice(array = choices) {
    let number = Math.floor(Math.random() * choices.length)
    return choices[number]
}

function getHumanChoice() {
    let choice = prompt("Please enter a choice of rock, paper or scissors")
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
        console.log("Paper covers rock, you win")
        humanScore ++
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("Paper covers rock, you lose")
        computerScore ++
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("Scissors cuts paper, you win!")
        humanScore ++
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("Scissors cuts paper, you lose!")
        computerScore ++
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("Rock crushes scissors, you win!")
        humanScore ++
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("Rock crushes scissors, you lose!")
        computerScore ++
    }
    console.log(humanScore, computerScore)
    return [computerScore, humanScore]
}
