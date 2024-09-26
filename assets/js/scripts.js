
//------------------------------------Modal--------------------------------------
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("instructions");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
//------------------------------------User Selection--------------------------------------
// userChoice - link to ID
let rock = document.getElementById("rock");
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

// Image shown when user selects 
let userChoiceRock = document.getElementById("user-img-rock");
let userChoicePaper = document.getElementById("user-img-paper");
let userChoiceScissors = document.getElementById("user-img-scissors");
let userChoiceLizard = document.getElementById("user-img-lizard");
let userChoiceSpock = document.getElementById("user-img-spock");
let startGame = document.getElementById("how-to-play");

/**
 * 
 */
function rockSelected() {
    let userChoice = "rock";
    console.log("user: " + userChoice);
    whosTheWinner(userChoice);
    userChoiceRock.style.display = "block";
    userChoicePaper.style.display = "none";
    userChoiceScissors.style.display = "none";
    userChoiceLizard.style.display = "none";
    userChoiceSpock.style.display = "none";
    startGame.style.display = "none";
    return userChoice;
}
/**
 * 
 */
function paperSelected() {
    let userChoice = "paper";
    console.log("user: " + userChoice);
    whosTheWinner(userChoice);
    userChoicePaper.style.display = "block";
    userChoiceRock.style.display = "none";
    userChoiceScissors.style.display = "none";
    userChoiceLizard.style.display = "none";
    userChoiceSpock.style.display = "none";
    startGame.style.display = "none";
    return userChoice;

}
/**
 * 
 */
function scissorsSelected() {
    let userChoice = "scissors";
    console.log("user: " + userChoice);
    whosTheWinner(userChoice);
    userChoiceScissors.style.display = "block";
    userChoiceRock.style.display = "none";
    userChoicePaper.style.display = "none";
    userChoiceLizard.style.display = "none";
    userChoiceSpock.style.display = "none";
    startGame.style.display = "none";
    return userChoice;

}
/**
 * 
 */
function lizardSelected() {
    let userChoice = "lizard";
    console.log("user: " + userChoice);
    whosTheWinner(userChoice);
    userChoiceLizard.style.display = "block";
    userChoiceRock.style.display = "none";
    userChoicePaper.style.display = "none";
    userChoiceScissors.style.display = "none";
    userChoiceSpock.style.display = "none";
    startGame.style.display = "none";
    return userChoice;


}
/**
 * User selecting spock - diplay: the other choices and instructions at the begining 
 */
function spockSelected() {
    let userChoice = "spock";
    console.log("user: " + userChoice);
    whosTheWinner(userChoice);
    userChoiceSpock.style.display = "block";
    userChoiceRock.style.display = "none";
    userChoicePaper.style.display = "none";
    userChoiceScissors.style.display = "none";
    userChoiceLizard.style.display = "none";
    startGame.style.display = "none";
    return userChoice;
}

//------------------------------------Computer's selection----------------------------------
//creating computerChoice - adpated from - https://www.geeksforgeeks.org/how-to-select-a-random-element-from-array-in-javascript/ - 

let optionsArray = ["rock", "paper", "scissors", "lizard", "spock"];

/**
 * The computer makes a random selection
 */
function computerChoice() {
    let randomChoice = Math.floor(Math.random() * optionsArray.length);
    return optionsArray[randomChoice];
}

//-------------------------------Who's the Winner------------------------------------------
/**
* Who's the winner!! Computer Vs Human
 */
function whosTheWinner(userChoice) {
    const computerChoiceValue = computerChoice();
    let userWins = false;
    let computerWins = false;
    computerSelectionImg(computerChoiceValue);

    console.log("computer: " + computerChoiceValue);
    // console.log("Winner?? user " + userChoice);

    if (userChoice === computerChoiceValue) {
        console.log("It's a draw");

    } else if ((userChoice === "rock" && computerChoiceValue === "scissors") || (userChoice === "rock" && computerChoiceValue === "lizard")) {
        userWins = true;
        console.log("user wins");
        //console.log("It's gonna be...: "+ computerChoiceValue);

    } else if ((userChoice === "paper" && computerChoiceValue === "rock") || (userChoice === "paper" && computerChoiceValue === "spock")) {
        userWins = true;
        console.log("user wins");
        //console.log("It's gonna be...: "+ computerChoiceValue);

    } else if ((userChoice === "scissors" && computerChoiceValue === "lizard") || (userChoice === "scissors" && computerChoiceValue === "paper")) {
        userWins = true;
        console.log("user Wins");
        //console.log("It's gonna be...: "+ computerChoiceValue);

    } else if ((userChoice === "lizard" && computerChoiceValue === "spock") || (userChoice === "lizard" && computerChoiceValue === "paper")) {
        userWins = true;
        console.log("user Wins");
        // console.log("It's gonna be...: "+ computerChoiceValue);

    } else if ((userChoice === "spock" && computerChoiceValue === "scissors") || (userChoice === "spock" && computerChoiceValue === "rock")) {
        userWins = true;
        console.log("user Wins");
        //console.log("It's gonna be...: "+ computerChoiceValue);

    } else {
        computerWins = true;
        console.log("computer wins");
    }
    // computerSelectionImg(computerChoiceValue);
    verseOutcome(computerChoiceValue, userChoice)
    updateScores(userWins, computerWins);
    battleWinner(userWins, computerWins);
    return {
        // reference - problem solving exercise with Gemmini AI that taught me how to return more than one value
        userWins: userWins,
        //computerChoiceValue: computerChoiceValue,
    };

}

/**  
 * calcuations for displaying on screen who is the winner
 */
function battleWinner(userWins, computerWins) {
    let winner = "Computer Wins"
    if (userWins === true) {
        winner = "You Win"
    } else if (computerWins === true) {
        winner = "Computer Wins"
    } else if (computerWins === false && userWins === false) {
        winner = ""
    } else {
        winner = "Opps... something went wrong. Try again"
    }

    showWinner(winner);
    return winner

}

//shows the winner on the screen
/** 
* displaying who is the winner on screen
*/
function showWinner(winner) {
    var showOutcome = document.getElementById("winner");
    showOutcome.innerHTML = `<h3>${winner}`;
}


//--------------------------------------Scoring ---------------------------------------
//Adapted from Code Insitutes - Love Maths assessment

/**
* Counting the number of games won
*/
function updateScores(userWins, computerWins) {

    let userScore = 0;
    let computerScore = 0;

    if (userWins === true) {
        userScore = parseInt(document.getElementById("scores-player").innerText);
        document.getElementById("scores-player").innerText = ++userScore
        console.log("User: " + userScore);
        ''
    } else if (computerWins === true) {
        computerScore = parseInt(document.getElementById("scores-robot").innerText);
        document.getElementById("scores-robot").innerText = ++computerScore;
        console.log("Computer: " + computerScore);

    } else {

    }
    gameSetMatch(userScore, computerScore);

    return {
        userScore: userScore,
        computerScore: computerScore
    }
}


/**
*Showing who was the first to reach 5
*/
function gameSetMatch(userScore, computerScore) {
    let gameOver = document.getElementById("game-over");
    let restart = document.getElementById("restart");
    if (userScore >= 5) {
        gameOver.innerHTML = "Game Set Match: Player Wins!";
        restart.style.display ="block";
        console.log("Game Set Match: Player Wins!");
    } else if (computerScore >= 5) {
        gameOver.innerHTML = "Game Over...Computer Wins";
        restart.style.display ="block";
        console.log("Game Set Match: Computer Win!");
    }
}
// restart the game and turn the score 
restart = document.getElementById("restart");

restart.addEventListener("click", function() {
  location.reload();
});



/*
function startAgain(userScore, computerScore)
/*

/** 
*computer selection - show image
*/
function computerSelectionImg(computerChoiceValue) {
    // Image shown when computer selects 
    let robotChoiceRock = document.getElementById("robot-img-rock");
    let robotChoicePaper = document.getElementById("robot-img-paper");
    let robotChoiceScissors = document.getElementById("robot-img-scissors");
    let robotChoiceLizard = document.getElementById("robot-img-lizard");
    let robotChoiceSpock = document.getElementById("robot-img-spock");

    //console.log("Img: Computer " + computerChoiceValue);

    switch (computerChoiceValue) {
        case "rock":
            robotChoiceRock.style.display = "block";
            robotChoicePaper.style.display = "none";
            robotChoiceScissors.style.display = "none";
            robotChoiceLizard.style.display = "none";
            robotChoiceSpock.style.display = "none";
            break;
        case "paper":
            robotChoiceRock.style.display = "none";
            robotChoicePaper.style.display = "block";
            robotChoiceScissors.style.display = "none";
            robotChoiceLizard.style.display = "none";
            robotChoiceSpock.style.display = "none";
            break;
        case "scissors":
            robotChoiceRock.style.display = "none";
            robotChoicePaper.style.display = "none";
            robotChoiceScissors.style.display = "block";
            robotChoiceLizard.style.display = "none";
            robotChoiceSpock.style.display = "none";
            break;
        case "lizard":
            robotChoiceRock.style.display = "none";
            robotChoicePaper.style.display = "none";
            robotChoiceScissors.style.display = "none";
            robotChoiceLizard.style.display = "block";
            robotChoiceSpock.style.display = "none";
            break;
        case "spock":
            robotChoiceRock.style.display = "none";
            robotChoicePaper.style.display = "none";
            robotChoiceScissors.style.display = "none";
            robotChoiceLizard.style.display = "none";
            robotChoiceSpock.style.display = "block";
            break;
        default:
    }

}
/**
 * Calcuating the verse that is shown on screen - taking in the computers choice and users
 */
function verseOutcome(computerChoiceValue, userChoice) {
    let outcome;

    // Outcome verse
    if ((userChoice === "rock" && computerChoiceValue === "scissors") ||
        (computerChoiceValue === "rock" && userChoice === "scissors")) {
        outcome = "Rock crushes scissors";

    } else if ((userChoice === "scissors" && computerChoiceValue === "paper") ||
        (computerChoiceValue === "scissors" && userChoice === "paper")) {
        outcome = "Scissors cut Paper";

    } else if ((userChoice === "paper" && computerChoiceValue === "rock") ||
        (computerChoiceValue === "paper" && userChoice === "rock")) {
        outcome = "Paper covers Rock";

    } else if ((userChoice === "rock" && computerChoiceValue === "lizard") ||
        (computerChoiceValue === "rock" && userChoice === "lizard")) {
        outcome = "Rock crushes Lizard";

    } else if ((userChoice === "lizard" && computerChoiceValue === "spock") ||
        (computerChoiceValue === "lizard" && userChoice === "spock")) {
        outcome = "Lizard poisons Spock";

    } else if ((userChoice === "spock" && computerChoiceValue === "scissors") ||
        (computerChoiceValue === "spock" && userChoice === "scissors")) {
        outcome = "Spock smashes Scissors";

    } else if ((userChoice === "scissors" && computerChoiceValue === "lizard") ||
        (computerChoiceValue === "scissors" && userChoice === "lizard")) {
        outcome = "Scissors decapitates Lizard";

    } else if ((userChoice === "lizard" && computerChoiceValue === "paper") ||
        (computerChoiceValue === "lizard" && userChoice === "paper")) {
        outcome = "Lizard eats Paper";

    } else if ((userChoice === "paper" && computerChoiceValue === "spock") ||
        (computerChoiceValue === "paper" && userChoice === "spock")) {
        outcome = "Paper disproves Spock";

    } else if ((userChoice === "spock" && computerChoiceValue === "rock") ||
        (computerChoiceValue === "spock" && userChoice === "rock")) {
        outcome = "Spock vaporizes Rock";

    } else if (computerChoiceValue === userChoice) {
        outcome = "It's a draw!";
    } else {
        console.log("Have a rethink");
    }

    showVerseOutcome(outcome);
    console.log("message: " + outcome);
    return outcome;
}


//----------------------- shows the verse of the winning outcome-------------------------

/**
 * Displaying the verse on sceen
 * 
 */
function showVerseOutcome(outcome) {
    var showOutcome = document.getElementById("outcome");
    showOutcome.innerHTML = `<h1>${outcome}</h1>`;
}

/*
//https://hackernoon.com/add-event-listener-to-multiple-elements-in-javascript 
// and https://fjolt.com/article/javascript-multiple-elements-addeventlistener

// remove the instructions and start the game
let startGame = document.getElementById("how-to-play");
const imageBtnArray = [userChoiceRock, userChoicePaper, userChoiceScissors, userChoiceLizard, userChoiceSpock]

imageBtnArray.addEventListener("click", function() {
        startGame.style.display = "none";
    });

/*
// Reference - needed
function verseOutcome(computerChoiceValue, userChoice) {
    let outcome;

    console.log("message: " + userChoice);
    const winningCombinations = [
        ["scissors", "paper"], "Scissors cut Paper",
        ["paper", "rock"], "Paper covers Rock",
        ["rock", "lizard"], "Rock crushes Lizard",
        ["lizard", "spock"], "Lizard poisons Spock",
        ["spock", "scissors"], "Spock smashes Scissors",
        ["scissors", "lizard"],
        ["lizard", "paper"],
        ["paper", "spock"],
        ["spock", "rock"],
        ["rock", "scissors"],

    ];

    const winningMessages = [
        "Scissors cut Paper",
        "Paper covers Rock",
        "Rock crushes Lizard",
        "Lizard poisons Spock",
        "Spock smashes Scissors",
        "Scissors decapitates Lizard",
        "Lizard eats Paper",
        "Paper disproves Spock",
        "Spock vaporizes Rock",
        "Rock crushes scissors",

    ];

    for (let i = 0; i < winningCombinations.length; i++) {
        const [option1, option2] = winningCombinations[i];
        if ((userChoice === option1 && computerChoiceValue === option2) || (userChoice === option2 && computerChoiceValue === option1)) {
        outcome = winningMessages[i];
        break;
        }
    }

    if (outcome === undefined) {
        if (userChoice === computerChoiceValue) {
        outcome = "It's a draw";
        } else {
        outcome = "unknown";
        }
    }
//updates the outcome div with the output of the outcome
document.getElementById("outcome").innerText = `${outcome}`;
console.log(outcome);
    return outcome;
}
*/
/*
    /*
    if ((userChoice === scissors && computerChoiceValue === "paper") || (userChoice === paper && computerChoiceValue === "paper")) {
        outcome = "Scissors cut Paper";
    */

//code institute - Love Maths project
/**
 * Gets the current score from the DOM and increments it by 1
 */



/**
 * Gets the current tally of incorrect answers from the DOM and increments it by 1
 */




/*
if (userChoice === "rock") {
    userChoiceRock.style.display = "block";
}

else if (userChoice === "paper") {
    userChoicePaper.style.display = "block";

} else if (userChoice === "scissors") {
    userChoiceScissors.style.display = "block";
} 

else if (userChoice === "lizard") {
    userChoiceLizard.style.display = "block";
} 

else if (userChoice === "spock") {
    userChoiceSpock.style.display = "block";
}
// Toggle visibility of the Rock Element
//onclick hide and show  https://www.youtube.com/watch?v=-oQnDrNzTTA
//https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp
//https://www.washington.edu/accesscomputing/webd2/student/unit5/module2/lesson5.html
//showing user selection

/*
 function userClick() {
    var choiceBtn = document.getElementsByClassName("user-selection");
    showUser = document.getElementById(showUser())
    console.log(showUser)

    var displaySettings = choiceBtn[0].style.visibility;

    if(displaySettings == "hidden") {
        choiceBtn[0].style.visibility = "visible";
    } else {
        choiceBtn[0].style.visibility = "hidden";
    }
 }*/





/*
choiceBtn.forEach(choiceBtn => {
   choiceBtn.addEventListener("click", () => {
       showUser
   }
   )
})



// taking and removing class https://stackoverflow.com/questions/15843581/how-to-correctly-iterate-through-getelementsbyclassname
 

// toggle between different elements hidding and showing them https://stackoverflow.com/questions/38958854/how-to-toggle-off-an-element-when-another-element-is-activated

/*
//iterating through loop https://stackoverflow.com/questions/39452193/loop-through-array-and-add-event-listener-click-to-each
// create an array - https://www.w3schools.com/js/js_arrays.asp
 
const userMarker = document.getElementsByClassName("user-selection"); 

console.log(userMarker);
/*
userMarker.forEach(function) {
   userMarker.addEventListener("click", )
      

   };

*/


/*
//Who's the winner!! Computer Vs Human
function whosTheWinner() {
    let computerChoiceValue = computerChoice();
    var outcome;
    var winner;*/


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

/*
if ((userChoice === scissors && computerChoiceValue === "paper") || (userChoice === paper && computerChoiceValue === "paper")) {
    outcome = "Scissors cut Paper";
*/