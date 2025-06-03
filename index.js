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
    return choice
}

function playRound(params) {
    console.log("inside the play round function")
    let computerChoice = getComputerChoice()
    console.log(computerChoice)
}

