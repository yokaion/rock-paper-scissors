const wrapper = document.querySelector('.wrapper');
const buttons = document.querySelector('.btns');

const selection = document.querySelectorAll('.btn');
selection.forEach((button) => {
    button.addEventListener('click', function(e){
        const para = document.createElement('p');
        para.innerText = e.target.id;
        wrapper.appendChild(para);
    });
});







// Computer generates a random outcome for RPS;
const arr = ['rock', 'paper', 'scissors'];

function computerPlay() {
    return arr[Math.floor(Math.random() * arr.length)];
}
const computerSelection = computerPlay();
        console.log(computerSelection);

const compSelDisplay = document.createElement('div');
compSelDisplay.innerText = 'Computer Selection: ' + computerSelection;
compSelDisplay.classList.add('computer-display');
wrapper.appendChild(compSelDisplay);


// function playRound(playerSelection, computerSelection) {
    
//     if(playerSelection === computerSelection){
//         console.log("draw");
//     }else if(playerSelection == 'rock' && computerSelection 
//             == 'paper' ||
//             playerSelection == 'paper' && computerSelection 
//             == 'scissors' ||
//             playerSelection == 'scissors' && computerSelection
//             == 'rock'
//             ){
//         console.log("You lose");
//     }else if (playerSelection == 'rock' && computerSelection 
//     == 'scissors' ||
//     playerSelection == 'paper' && computerSelection 
//     == 'rock' ||
//     playerSelection == 'scissors' && computerSelection
//     == 'paper'){
//         console.log("You win");
//     }
// };