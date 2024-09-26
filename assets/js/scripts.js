
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
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
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
    verseOutcome(computerChoiceValue, userChoice);
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
    let winner = "Computer Wins";
    if (userWins === true) {
        winner = "You Win";
    } else if (computerWins === true) {
        winner = "Computer Wins";
    } else if (computerWins === false && userWins === false) {
        winner = "";
    } else {
        winner = "Opps... something went wrong. Try again";
    }

    showWinner(winner);
    return winner;

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
        document.getElementById("scores-player").innerText = ++userScore;
        console.log("User: " + userScore);
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
    };
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