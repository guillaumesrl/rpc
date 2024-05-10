// Déclarer les valeurs possibles 

const possibilities = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

// Create a function than randomly return "rock", "paper", "scissors"
function getComputerChoice() {
    return possibilities[Math.floor(Math.random() * 3)];
};

// Create a function that takes user choice
function getHumanChoice() {
    let humanChoice = '';
    while (!possibilities.includes(humanChoice.toLowerCase()))
    {
        humanChoice = prompt("Enter your choice : Rock, Paper or Scissors ?");
        if (humanChoice === null) {
            console.log("Round canceled by user");
            return null;
        }
    }
    return humanChoice.toLowerCase();
}

// Create round logic

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie !");
    } else if ((humanChoice === "rock" && computerChoice ==="paper") || 
               (humanChoice === "paper" && computerChoice === "scissors") ||
               (humanChoice === "scissors" && computerChoice === "rock")) {
        computerScore += 1;
        console.log(`You lose ! ${computerChoice} beats ${humanChoice} !`);
    } else {
        humanScore += 1;
        console.log(`You win ! ${humanChoice} beats ${computerChoice}`);
    }
}


function playGame(){
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log(`You won ! ${humanScore} - ${computerScore}`);
    } else if (humanScore < computerScore) {
        console.log(`You lose ! ${humanScore} - ${computerScore}`);
    } else {
        console.log(`It's a tie ! ${humanScore} - ${computerScore}`);
    }
}

playGame();