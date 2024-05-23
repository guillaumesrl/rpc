// Déclarer les valeurs possibles 

const possibilities = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;
const btnList = document.querySelectorAll(".choice");
const resultDiv = document.querySelector(".results");

// Create a function than randomly return "rock", "paper", "scissors"
function getComputerChoice() {
    return possibilities[Math.floor(Math.random() * 3)];
};


// Create round logic
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        resultDiv.textContent = "It's a tie !";
    } else if ((humanChoice === "rock" && computerChoice ==="paper") || 
               (humanChoice === "paper" && computerChoice === "scissors") ||
               (humanChoice === "scissors" && computerChoice === "rock")) {
        computerScore += 1;
        resultDiv.textContent = `${computerChoice} beats ${humanChoice} ! You : ${humanScore} - Comp : ${computerScore}`;
    } else {
        humanScore += 1;
        resultDiv.textContent = `${humanChoice} beats ${computerChoice} ! You : ${humanScore} - Comp : ${computerScore}`;
    }
}


function playGame(){
    const finalResult = document.createElement('p');
    if (humanScore === 5) {
        finalResult.textContent = `You won ! ${humanScore} - ${computerScore}`
        resultDiv.appendChild(finalResult);
        humanScore = 0;
        computerScore = 0;
    } else if (computerScore === 5) {
        finalResult.textContent = `You lose ! ${humanScore} - ${computerScore}`
        resultDiv.appendChild(finalResult);
        humanScore = 0;
        computerScore = 0;
    }
}

btnList.forEach( (btn) => {
    btn.addEventListener("click", () => {
        let humanChoice = btn.textContent.toLowerCase();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        playGame();
    });
});