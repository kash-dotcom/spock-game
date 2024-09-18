// Get the modal
var modal = document.getElementById("instruction-modal");

// Instruction question mark
var btn = document.getElementsByClassName("fa-circle-question")

btn.onclick = function () {
    modal.style.display = "block";
}


//listening for the click
let rock = document.getElementsByClassName("rock");

function selected(event) {
    console.log(event);
    return "rock"
};

rock.addEventListener("click", selected);





// userChoice


let paper = document.getElementsByName("paper")
let scissors = document.getElementsByName("scissors")
let lizard = document.getElementsByName("lizard")
let spock = document.getElementsByName("spock")

let userChoice;
let computerChoice;

if (userChoice == "rock" && computerChoice == "scissors" || userChoice == "rock" && computerChoice == "lizard") {
    userWins = true;

} else if (userChoice == "paper" && computerChoice == "rock"|| userChoice == "paper" && computerChoice == "spock") {
    userWins = true;

} else (userChoice == "scissors" && computerChoice == "lizard" || userChoice == "scissors" && computerChoice == "paper"); {
    userWins = true;
}


