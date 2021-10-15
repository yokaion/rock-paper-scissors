//create a function computerPlay() that will ranodmly return Rock, Paper, or Scissors
const arr = ['Rock', 'Paper', 'Scissors'];

function computerPlay() {
    return arr[Math.floor(Math.random() * arr.length)];
}

//take an input from the player in a string form of Rock, Paper, or Scissors
const playerSelection = window.prompt("Enter Rock, Paper, or Scissors: ");

console.log(playerSelection);

const computerSelection = computerPlay();
console.log(computerSelection);
//create a function that takes to parameters playerSelection and computerSelection and returns a string that declares the winner of the round
function resultRound(playerSelection, computerSelection){
    //conditions where the player wins
   if (playerSelection == "Rock" & computerSelection  == "Scissors" || 
   playerSelection == "Paper" & computerSelection == "Rock" || 
   playerSelection == "Scissors" & computerSelection == "Paper") {
    return ("You win. Congrats!");
    //conditions where the player loses
   }else if (playerSelection == "Rock" &computerSelection == "Paper" || playerSelection == "Paper" & computerSelection == "Scissors" || playerSelection == "Scissors" & computerSelection == "Rock"){
       return ("You lose. Loser!");
   }else {
       return ("Draw");
   }
}
   
   
console.log(resultRound(playerSelection,computerSelection))