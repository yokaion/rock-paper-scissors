const arr = ['Rock', 'Paper', 'Scissors'];

function computerPlay() {
    return arr[Math.floor(Math.random() * arr.length)];
}


function game() {

let winCondition = 0;
let loseCondition = 0;

    for(let i=0; i<5; i++) {
        const playerSelection = window.prompt("Enter Rock, Paper, or Scissors: ");
        playerSelectionNew = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
        console.log(playerSelectionNew);

        const computerSelection = computerPlay();
        console.log(computerSelection);

        function playRound(playerSelectionNew, computerSelection){
    
            if (playerSelectionNew == "Rock" && computerSelection  == "Scissors" || 
            playerSelectionNew == "Paper" && computerSelection == "Rock" || 
            playerSelectionNew == "Scissors" && computerSelection == "Paper") {
                    return ("You win. Congrats!");
                
            }else if (playerSelectionNew == "Rock" &&computerSelection == "Paper" || playerSelectionNew == "Paper" && computerSelection == "Scissors" || playerSelectionNew == "Scissors" && computerSelection == "Rock"){
                return ("You lose. Loser!");
            }else if (playerSelectionNew == "Rock" &&computerSelection == "Rock" || playerSelectionNew == "Paper" && computerSelection == "Paper" || playerSelectionNew == "Scissors" && computerSelection == "Scissors") {
                    return ("Draw");
            }else {
                return ("Invalid input. Enter Rock, Scissors, or Paper to play the game.");
            }
            }
        console.log(playRound(playerSelectionNew, computerSelection));

        const oneRound = playRound(playerSelectionNew, computerSelection);
        if(oneRound == "You win. Congrats!"){
            winCondition++;
        }else if (oneRound == "You lose. Loser!") {
            loseCondition++;
        }
        console.log(winCondition);
        console.log(loseCondition);

        if(winCondition >= 3){
            console.log("YOU WON");
            break;
        }else if(loseCondition >= 3){
            console.log("ALL IS LOST");
            break;
        }else if(loseCondition == winCondition){
            console.log("DRAW");
            continue;
        }
        
    }
}

game();
