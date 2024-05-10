// Déclarer les valeurs possibles 

const possibilities = ["rock", "paper", "scissors"];

// Create a function than randomly return "rock", "paper", "scissors"
function getComputerChoice() {
    return possibilities[Math.floor(Math.random() * 3)];
};

// Create a function that takes user choice
function getHumanChoice() {
    let answer = possibilities[parseInt(prompt("1 - Rock, 2 - Paper, 3 - Scissors")) - 1];
    return answer;
}

console.log(getHumanChoice());