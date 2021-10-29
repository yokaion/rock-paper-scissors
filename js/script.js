const arr = ['rock', 'paper', 'scissors'];

function computerPlay() {
    return arr[Math.floor(Math.random() * arr.length)];
}
const computerSelection = computerPlay();
        console.log(computerSelection);

const playerSelection = document.querySelectorAll('.btn');

playerSelection.forEach((button) => {
    button.addEventListener('click', function(e) {
        console.log(e.target.id);
    });
});

function playRound(playerSelection, computerSelection) {
    
    if(playerSelection == computerSelection){
        console.log("draw");
    }else if(playerSelection == 'rock' && computerSelection 
            == 'paper' ||
            playerSelection == 'paper' && computerSelection 
            == 'scissors' ||
            playerSelection == 'scissors' && computerSelection
            == 'rock'
            ){
        console.log("You lose");
    }else if (playerSelection == 'rock' && computerSelection 
    == 'scissors' ||
    playerSelection == 'paper' && computerSelection 
    == 'rock' ||
    playerSelection == 'scissors' && computerSelection
    == 'paper'){
        console.log("You win");
    }
};