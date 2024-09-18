// Get the modal
var modal = document.getElementById("instruction-modal");

// Instruction question mark
var btn = document.getElementsByClassName("fa-circle-question")

btn.onclick = function () {
    modal.style.display = "block";
}


// userChoice
let rock =  document.getElementById("rock");
let paper = document.getElementById("paper")
let scissors = document.getElementById("scissors")
let lizard = document.getElementById("lizard")
let spock = document.getElementById("spock")

let userChoice;

//creating userChoice
function rockSelected(event) {
    userChoice = "rock";
    console.log(userChoice);
}
function paperSelected(event) {
    userChoice = "paper";
    console.log(userChoice);
}
function scissorsSelected(event) {
    userChoice = "scissors";
    console.log(userChoice);
}
function lizardSelected(event) {
    userChoice = "lizard";
    console.log(userChoice);
}
function spockSelected(event) {
    userChoice = "spock";
    console.log(userChoice);
}
rock.addEventListener("click", rockSelected);
paper.addEventListener("click", paperSelected);
scissors.addEventListener("click", scissorsSelected);
lizard.addEventListener("click", lizardSelected);
spock.addEventListener("click", spockSelected);


//creating computerChoice - https://www.geeksforgeeks.org/how-to-select-a-random-element-from-array-in-javascript/


let optionsArray = ["rock", "paper", "scissors", "lizard", "spock"];

function computerChoice() {
    console.log(optionsArray[(Math.floor(Math.random() * optionsArray.length))]);
}
computerChoice()

//Who's the winner!! Computer Vs Human
function whosTheWinner() {
if (userChoice == "rock" && computerChoice == "scissors" || userChoice == "rock" && computerChoice == "lizard") {
    userWins = true;
    alert("")
} else if (userChoice == "paper" && computerChoice == "rock"|| userChoice == "paper" && computerChoice == "spock") {
    userWins = true;
    console.log(userWins);


} else (userChoice == "scissors" && computerChoice == "lizard" || userChoice == "scissors" && computerChoice == "paper"); {
    userWins = true;
    console.log(userWins);
}
}
console.log(userWins);
