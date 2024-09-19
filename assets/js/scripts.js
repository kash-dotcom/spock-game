// Get the modal
var modal = document.getElementById("instruction-modal");

// Instruction question mark
var btn = document.getElementsByClassName("fa-circle-question")

btn.onclick = function () {
    modal.style.display = "block";
}
/*
// styling of ID on hover
rock.style.backgroudColor = "black"; 
*/

// userChoice - link to ID
let rock =  document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let lizard = document.getElementById("lizard");
let spock = document.getElementById("spock");

//Computer is waiting for a click 

rock.addEventListener("click", rockSelected);
paper.addEventListener("click", paperSelected);
scissors.addEventListener("click", scissorsSelected);
lizard.addEventListener("click", lizardSelected);
spock.addEventListener("click", spockSelected);

//creating userChoice
var userChoice;
function rockSelected() {
    whosTheWinner();
    console.log("user selected; " + userChoice);    
    
}

function paperSelected() {
    whosTheWinner();
    console.log("user selected; " + userChoice);
    
   
}
function scissorsSelected() {
    whosTheWinner();
    console.log("user selected; " + userChoice);
   

    
}
function lizardSelected() {
    whosTheWinner();
    console.log("user selected; " + userChoice);
  
    
}
function spockSelected(event) {
    whosTheWinner();
    console.log("user selected; " + userChoice);
   
}

//creating computerChoice - adpated from - https://www.geeksforgeeks.org/how-to-select-a-random-element-from-array-in-javascript/ - 

let optionsArray = ["rock", "paper", "scissors", "lizard", "spock"];

function computerChoice() {
    let randomChoice = Math.floor(Math.random() * optionsArray.length);
    return optionsArray[randomChoice];
}

//Who's the winner!! Computer Vs Human
function whosTheWinner() {
    let computerChoiceValue = computerChoice();
    let userWins = false;
    console.log("computer selectect: "+ computerChoiceValue)

    if ((userChoice === "rock" && computerChoiceValue === "scissors") || (userChoice === "rock" && computerChoiceValue === "lizard")) {
        userWins = true;
        alert("You win!");
        console.log("user wins");

    } else if ((userChoice === "paper" && computerChoiceValue === "rock")|| (userChoice === "paper" && computerChoiceValue === "spock")) {
        userWins = true;
        alert("You win!");
        console.log("user wins");

    } else if ((userChoice === "scissors" && computerChoiceValue === "lizard") || (userChoice === "scissors" && computerChoiceValue === "paper")) {
        userWins = true;
        alert("You win!");
        console.log("user wins");
    } else {
    alert("Computer wins!")
    console.log("computer wins");
    };
return userWins;
}

/*
rock && computerChoice("scissors")
"Rock crushes scissors"

scissors && computerChoice("rock")
"Rock crushes scissors"

"Scissors cut Paper"

"Paper covers Rock"
"Rock crushes Lizard"
"Lizard poisons Spock"
"Spock smashes Scissors"
"Scissors decapitates Lizard"
"Lizard eats Paper"
"Paper disproves Spock"
"Spock vaporises Rock"
"Rock crushes scissors"

*/
