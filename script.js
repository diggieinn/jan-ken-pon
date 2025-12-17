
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let randomNum = getRandomInt(3);
    let getComputerChoice = ""

    switch (randomNum){
        case 0:
            getComputerChoice = "Scissors"
            break;
        case 1:
            getComputerChoice = "Rock"
            break;
        case 2:
            getComputerChoice = "Paper"
            break;
    }



    return getComputerChoice;
}
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function itSaDraw(){
      document.querySelector(".ResultsMessage").textContent =
    "This is a draw!";
}

function updateResults(){
    humanScore+=0.5;
    computerScore+=0.5;
    document.querySelector(".results").textContent = "Computer: "+ computerScore +" x "+humanScore+ ": Human";

}

function playRound(humanChoice, computerChoice){
    

    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice == computerChoice){
       itSaDraw();
        return;
    }

    if(humanChoice == "rock") {
        if(computerChoice == "scissors"){
            humanScore++;
            document.querySelector(".ResultsMessage").textContent ="It is a win! " + humanChoice + " wins against " + computerChoice
            return;
        }
        else {
            computerScore++;
            document.querySelector(".ResultsMessage").textContent = "You lose! " + humanChoice + " loses against " + computerChoice;
            return;
        }

    }

    if(humanChoice == "paper") {
          if(computerChoice == "rock"){
            humanScore++;
             document.querySelector(".ResultsMessage").textContent ="It is a win! " + humanChoice + " wins against " + computerChoice;
            return;
        }
        else {
            computerScore++;
             document.querySelector(".ResultsMessage").textContent ="You lose! " + humanChoice + " loses against " + computerChoice;
            return;
        }

    }

    if(humanChoice == "scissors") {
        if(computerChoice == "paper"){
            humanScore++;
            document.querySelector(".ResultsMessage").textContent ="It is a win! " + humanChoice + " wins against " + computerChoice;
            return;
        }
        else {
            computerScore++;
            document.querySelector(".ResultsMessage").textContent ="You lose! " + humanChoice + " loses against " + computerChoice;
            return;
        }

    }
     document.querySelector(".ResultsMessage").textContent = "You picked a invalid options, please make sure spelling is correct. Your choice was "+humanChoice;
    return;

    
}

    const rock = document.getElementById("rock")
    const paper = document.getElementById("paper")
    const scissors = document.getElementById("scissors")
    let humanChoice = "";


const wrapper = document.getElementById('wrapper');

wrapper.addEventListener('click', (event) => {
  const isButton = event.target.nodeName === 'BUTTON';
  if (!isButton) {
    return;
  }

  updateResults();
})

rock.addEventListener("click", () => playRound("rock", getComputerChoice()));
paper.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissors.addEventListener("click", () => playRound("scissors", getComputerChoice()));




