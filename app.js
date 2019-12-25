let userScore = 0;
let compScore = 0;
const userScoreSpan = document.getElementById("user-score");
const compScoreSpan = document.getElementById("comp-score");
const scoreBoardDiv = document.querySelector(".score-board");
const resultP = document.querySelector(".result > p ");
const rockDiv = document.getElementById("r");
const paperDiv = document.getElementById("p");
const scissorsDiv = document.getElementById("s");

function compRandomChoice() {
    const choices = ['r', 'p', 's'];
    var compChoice = choices[Math.floor(Math.random() * choices.length)];
    return compChoice;
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function win(userChoice, computerChoice) {
    userScore++;
    userScoreSpan.innerHTML = userScore;
    resultP.innerHTML = convertToWord(userChoice) + " beats " + convertToWord(computerChoice) + ". You win.";
}

function lose(userChoice, computerChoice) {
    compScore++;
    compScoreSpan.innerHTML = compScore;
    resultP.innerHTML = convertToWord(computerChoice) + " beats " + convertToWord(userChoice) + ". You lose.";
}

function draw(userChoice, computerChoice) {
    resultP.innerHTML = convertToWord(computerChoice) + " equals " + convertToWord(userChoice) + ". Its a draw.";
}

function game(userChoice) {
    const computerChoice = compRandomChoice();
    switch (userChoice + computerChoice) {
        case "pr":
        case "rs":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "sr":
        case "ps":
            lose(userChoice, computerChoice);
            break;
        case "pp":
        case "rr":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rockDiv.addEventListener('click', () => {
        game("r");
    });

    paperDiv.addEventListener('click', () => {
        game("p");
    });

    scissorsDiv.addEventListener('click', () => {
        game("s");
    });
}

main();