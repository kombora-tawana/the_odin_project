console.log("Hello, Gamer!");

const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    let choice;
    const rand = Math.floor(Math.random() * 10);

    switch (rand) {
        case 0:
        case 3:
        case 6:
            choice = choices[0];
            break;
        case 1:
        case 5:
        case 8:
            choice = choices[1];
            break;
        default:
            choice = choices[2];
            break;
    }
    return choice;
}

function getHumanChoice() {
    let resp = prompt(":Choose One:\n1. Rock\n2. Paper\n3. Scissors ");
    return resp.toLowerCase();
}

let humanScore = 0, computerScore = 0;

function playGame(hChoice, cChoice) {
    if (hChoice == cChoice) {
        humanScore++ && computerScore++
        return
    };
    
}