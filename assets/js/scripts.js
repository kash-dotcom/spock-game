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
    userChoice = "rock"
    console.log("user selected " + userChoice);
    whosTheWinner();    
    
}

function paperSelected() {
    userChoice = "paper"
    console.log("user selected " + userChoice);
    whosTheWinner();
   
}
function scissorsSelected() {
    userChoice = "scissors"
    console.log("user selected " + userChoice);
    whosTheWinner();
    
}
function lizardSelected() {
    userChoice = "lizard"
    console.log("user selected " + userChoice);
    whosTheWinner();
    
}
function spockSelected(event) {
    userChoice = "spock"
    console.log("user selected " + userChoice);
    whosTheWinner();
   
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
    let computerWins = false;
    console.log("computer selected: "+ computerChoiceValue)

    // (1) Rock crushes scissors
    if (userChoice === "rock" 
            && computerChoiceValue === "scissors") {
                    userWins = true;
                    console.log("You win!");
                    console.log("Rock crushes scissors");

    } else if (computerChoiceValue === "rock" 
                && userChoice === "scissors"){
                    computerWins = true;
                    console.log("Computer win!");
                    console.log("Rock crushes scissors");

    //(2) Rock crushes Lizard
    } else if (userChoice === "rock" 
                && computerChoiceValue === "lizard") {
                    userWins = true;
                    console.log("You win!");
                    console.log("Rock crushes Lizard");

    } else if (computerChoiceValue === "rock" 
                && userChoice === "lizard") {
                    computerWins = true;
                    console.log("Computer win!");    
                    console.log("Rock crushes Lizard");

    //(3) Paper covers Rock
    } else if (userChoice === "paper" 
                && computerChoiceValue === "rock") {
                    userWins = true;
                    console.log("You win!");
                    console.log("Paper covers Rock");

    } else if (computerChoiceValue === "paper" 
                && userChoice === "rock") {
                    computerWins = true;
                    console.log("Computer win!");  
                    console.log("Paper covers Rock");

    // (4)Paper disproves Spock
    } else if (userChoice === "paper" 
                && computerChoiceValue === "spock") {     
                    userWins = true;
                    console.log("You win!");
                    console.log("Paper disproves Spock");

    } else if (computerChoiceValue  === "paper" 
                && userChoice === "spock") {
                    computerWins = true;
                    console.log("Computer win!");  
                    console.log("Paper disproves Spock");

    // (5) Scissors decapitates Lizard
    } else if (userChoice === "scissors" 
                && computerChoiceValue === "lizard")  {
                    userWins = true;
                    console.log("You win!");
                    console.log("Scissors decapitates Lizard");
            
    } else if (computerChoiceValue ==="scissors" 
                && userChoice === "lizard") {
                    computerWins = true;
                    console.log("Computer win!");  
                    console.log("Scissors decapitates Lizard");

    // (6) Scissors cut Paper
    } else if (userChoice === "scissors" 
                && computerChoiceValue === "paper") {
                    userWins = true;
                    console.log("You win!");            
                    console.log("Scissors cut Paper")

    } else if (computerChoiceValue === "scissors"
                && userChoice === "paper"){
                    computerWins = true;
                    console.log("Computer win!");  
                    console.log("Scissors cut Paper");

    // (7) Lizard poisons Spock
    }  else if (userChoice === "lizard" 
                && computerChoiceValue === "spock") {
                    userWins = true;
                    console.log("You win!");
                    console.log("Lizard poisons Spock");
        
    } else if (computerChoiceValue === "lizard"
                && userChoice === "spock"){
                    computerWins = true;
                    console.log("Computer win!");  
                    console.log("Lizard poisons Spock");

    // (8) Spock smashes Scissors
    } else if (userChoice === "spock" 
                && computerChoiceValue === "scissors") {
                    userWins = true;
                    console.log("You win!");
                    console.log("Spock smashes Scissors");

    } else if (computerChoiceValue === "spock"
                && userChoice === "scissors"){
                    computerWins = true;
                    console.log("Computer win!");  
                    console.log("Spock smashes Scissors");             
    
        // (9) Lizard eats Paper
    } else if (userChoice === "lizard" 
        && computerChoiceValue === "paper") {
            userWins = true;
            console.log("You win!");
            console.log("Lizard eats Paper");

    } else if (computerChoiceValue === "lizard"
        && userChoice === "paper"){
            computerWins = true;
            console.log("Computer win!");  
            console.log("Lizard eats Paper"); 
      } else {
        console.log("It's a draw")
    }  

}         
/*
        // (10) Spock vaporises Rock
        } if (userChoice === "spock" && computerChoiceValue === "rock") 
            userWins = true;
            //alert("You win!");
            console.log("user wins");
            if ((userChoice || computerChoiceValue === "spock") && (userChoice || computerChoiceValue === "rock")) {
              console.log("Spock vaporises Rock")
        }
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