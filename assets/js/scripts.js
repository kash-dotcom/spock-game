// Get the modal

function toggle (){
    var modal = document.getElementById("fa-circle-question");
    modal.classList.toggle('active')

}
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

//Getting class
let choiceBtn = document.getElementsByClassName("selection-btn")


//Changing colour of buttons once user selects
function userChoiceBtn() {
    rock.style.backgroundColor = "black";
    rock.style.borderStyle = "solid";
    rock.style.borderWidth = "4px";
    rock.style.borderColor = "#ffbd59";
    
    }

//creating userChoice
var userChoice;
function rockSelected() {
    userChoice = "rock";
    console.log("user selected " + userChoice);
    whosTheWinner(); 
    userChoiceBtn();  
}

function paperSelected() {
    userChoice = "paper";
    console.log("user selected " + userChoice);
    whosTheWinner();
    userChoiceBtn();  
   
}
function scissorsSelected() {
    userChoice = "scissors";
    console.log("user selected " + userChoice);
    whosTheWinner();
    userChoiceBtn();  
    
}
function lizardSelected() {
    userChoice = "lizard";
    console.log("user selected " + userChoice);
    whosTheWinner();
    userChoiceBtn();  
    
}
function spockSelected(event) {
    userChoice = "spock";
    console.log("user selected " + userChoice);
    whosTheWinner();
    userChoiceBtn();  
   
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
    var outcome;
    var winner;
    
    console.log("computer selected: "+ computerChoiceValue);

    // (1) Rock crushes scissors
    if (userChoice === "rock" 
        && computerChoiceValue === "scissors") {
            outcome = "Rock crushes scissors";
            winner = "You win!";
            return winner + '<br>' + outcome;
                    

    } else if (computerChoiceValue === "rock" 
        && userChoice === "scissors"){                
            outcome = "Rock crushes scissors";
            winner = "Computer win!";
            return winner + '<br>' + outcome;

    //(2) Rock crushes Lizard
    } else if (userChoice === "rock" 
        && computerChoiceValue === "lizard") {
            outcome = "Rock crushes Lizard";
            winner = "You win!";
            return winner + '<br>' + outcome;

    } else if (computerChoiceValue === "rock" 
        && userChoice === "lizard") {
            outcome = "Rock crushes Lizard";
            winner = "Computer win!"; 
            return winner + '<br>' + outcome; 

    //(3) Paper covers Rock
    } else if (userChoice === "paper" 
        && computerChoiceValue === "rock") {
            outcome = "Paper covers Rock";
            winner = "You win!";
            return winner + '<br>' + outcome;

    } else if (computerChoiceValue === "paper" 
        && userChoice === "rock") {
            winner = "Computer win!"; 
            outcome = "Paper covers Rock";
            return winner + '<br>' + outcome;  

    // (4)Paper disproves Spock
    } else if (userChoice === "paper" 
        && computerChoiceValue === "spock") {     
            winner = "You win!";
            outcome = "Paper disproves Spock";
            return winner + '<br>' + outcome;

    } else if (computerChoiceValue  === "paper" 
        && userChoice === "spock") {
            outcome = "Paper disproves Spock";
            winner = "Computer win!";
            return winner + '<br>' + outcome;

    // (5) Scissors decapitates Lizard
    } else if (userChoice === "scissors" 
        && computerChoiceValue === "lizard")  {
            outcome = "Scissors decapitates Lizard";
            winner = "You win!";
            return winner + '<br>' + outcome;
            
    } else if (computerChoiceValue ==="scissors" 
        && userChoice === "lizard") {
            outcome = "Scissors decapitates Lizard";
            winner = "Computer win!"; 
            return winner + '<br>' + outcome;

    // (6) Scissors cut Paper
    } else if (userChoice === "scissors" 
        && computerChoiceValue === "paper") {        
            outcome = "Scissors cut Paper";
            winner = "You win!";
            return winner + '<br>' + outcome;

    } else if (computerChoiceValue === "scissors"
        && userChoice === "paper"){
            outcome = "Scissors cut Paper";
            winner = "Computer win!";
            return winner + '<br>' + outcome;  

    // (7) Lizard poisons Spock
    }  else if (userChoice === "lizard" 
        && computerChoiceValue === "spock") {
            outcome = "Lizard poisons Spock";
            winner = "You win!";
            return winner + '<br>' + outcome;
        
    } else if (computerChoiceValue === "lizard"
        && userChoice === "spock"){
            outcome = "Lizard poisons Spock";
            winner = "Computer win!";
            return winner + '<br>' + outcome;  

    // (8) Spock smashes Scissors
    } else if (userChoice === "spock" 
        && computerChoiceValue === "scissors") {
            outcome = "Spock smashes Scissors";
            winner = "You win!";
            return winner + '<br>' + outcome;

    } else if (computerChoiceValue === "spock"
        && userChoice === "scissors") { 
            outcome = "Spock smashes Scissors";  
            winner = "Computer win!";
            return winner + '<br>' + outcome;        
    
        // (9) Lizard eats Paper
    } else if (userChoice === "lizard" 
        && computerChoiceValue === "paper") {
            outcome = "Lizard eats Paper";
            winner = "You win!";
            return winner + '<br>' + outcome;

    } else if (computerChoiceValue === "lizard"
        && userChoice === "paper"){
            outcome = "Lizard eats Paper"; 
            winner = "Computer win!";
            return winner + '<br>' + outcome;
        
        // (10) Spock vaporises Rock
    } else if (userChoice === "spock" 
        && computerChoiceValue === "rock") {
            outcome = "Spock vaporises Rock";
            winner = "You win!";
            return winner + '<br>' + outcome;

    } else if (computerChoiceValue === "spock"
        && userChoice === "rock") {          
            outcome = "Spock vaporises Rock"; 
            winner = "Computer win!";
            return winner + '<br>' + outcome;

    } else {
        outcome ="It's a draw";
        result = "Try again";
        return outcome + "<br>" + result; 
    } 
};


let outcome = document.getElementById("outcome")

outcome.innerHTML=  `
    <h1> ${whosTheWinner()}</h1>`;
     
/*

        // Draw
        if (userChoice === computerChoiceValue) {
            //alert("It's a draw")
            userWins = false;
            computerWins = false;
        }
          
    
    else {
    //alert("Computer wins!")
    console.log("computer wins");
    };
return userWins;
}
/*
// Outcome verse
if ((userChoice || computerChoiceValue === "rock")&& (userChoice || computerChoiceValue === "scissors")) {
    console.log("Rock crushes scissors")

} else if ((userChoice || computerChoiceValue === "scissors")&& (userChoice || computerChoiceValue === "paper")) {
    console.log("Scissors cut Paper")

} else if ((userChoice || computerChoiceValue === "paper")&& (userChoice || computerChoiceValue === "rock")) {
    console.log("Paper covers Rock")

} else if ((userChoice || computerChoiceValue === "rock")&& (userChoice || computerChoiceValue === "lizard")) {
    console.log("Rock crushes Lizard")

} else if ((userChoice || computerChoiceValue === "lizard")&& (userChoice || computerChoiceValue === "spock")) {
    console.log("Lizard poisons Spock")

} else if ((userChoice || computerChoiceValue === "spock")&& (userChoice || computerChoiceValue === "scissors")) {
    console.log("Spock smashes Scissors")
    
} else if ((userChoice || computerChoiceValue === "scissors")&& (userChoice || computerChoiceValue === "lizard")) {
    console.log("Scissors decapitates Lizard")
    
} else if ((userChoice || computerChoiceValue === "lizard")&& (userChoice || computerChoiceValue === "paper")) {
    console.log("Lizard eats Paper")
    
} else if ((userChoice || computerChoiceValue === "paper")&& (userChoice || computerChoiceValue === "spock")) {
    console.log("Paper disproves Spock")
    
} else if ((userChoice || computerChoiceValue === "spock")&& (userChoice || computerChoiceValue === "rock")) {
    console.log("Spock vaporises Rock")
    
} else if ((userChoice || computerChoiceValue === "rock")&& (userChoice || computerChoiceValue === "scissors")) {
    console.log("Scissors cut Paper")
    
}
    */