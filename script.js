
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
function getHumanChoice(){

    let humanChoice = prompt("Rock, Paper or Scissors?")

    return humanChoice;

}
function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice == computerChoice){
        alert("It is a draw " + humanChoice + " draws against " + computerChoice)
        return;
    }

    if(humanChoice == "rock") {
        if(computerChoice == "scissors"){
            humanScore++;
            alert("It is a win " + humanChoice + " wins against " + computerChoice);
            return;
        }
        else {
            computerScore++;
             alert("You lose " + humanChoice + " loses against " + computerChoice);
            return;
        }

    }

    if(humanChoice == "paper") {
          if(computerChoice == "rock"){
            humanScore++;
             alert("It is a win " + humanChoice + " wins against " + computerChoice);
            return;
        }
        else {
            computerScore++;
             alert("You lose " + humanChoice + " loses against " + computerChoice);
            return;
        }

    }

    if(humanChoice == "scissors") {
        if(computerChoice == "paper"){
            humanScore++;
             alert("It is a win " + humanChoice + " wins against " + computerChoice);
            return;
        }
        else {
            computerScore++;
             alert("You lose " + humanChoice + " loses against " + computerChoice);
            return;
        }

    }
     alert("You picked a invalid options, please make sure spelling is correct. Your choice was "+humanChoice)
    return;

    
}
function playGame(){
    playRound(getHumanChoice(), getComputerChoice())
    alert("Your score: "+ humanScore + " " + "Computer Score: " +computerScore)
    playRound(getHumanChoice(), getComputerChoice())
    alert("Your score: "+ humanScore + " " + "Computer Score: " +computerScore)
    playRound(getHumanChoice(), getComputerChoice())
    alert("Your score: "+ humanScore + " " + "Computer Score: " +computerScore)
    playRound(getHumanChoice(), getComputerChoice())
    alert("Your score: "+ humanScore + " " + "Computer Score: " +computerScore)
    playRound(getHumanChoice(), getComputerChoice())
    alert("Final Result: "+ humanScore + " " + "Computer Score: " +computerScore)
}

playGame();
