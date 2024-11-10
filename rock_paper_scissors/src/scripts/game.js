const choices = {
    rock: 'rock',
    paper: 'paper',
    scissors: 'scissors'
};

let getcompChoice = () => {
    let choice;
    const rand = Math.floor(Math.random() * 10);

    switch (rand) {
        case 0:
        case 3:
        case 6:
            choice = choices.scissors;
            break;
        case 1:
        case 5:
        case 7:
            choice = choices.rock;
            break;
        default:
            choice = choices.paper;
            break;
    }
    return choice;
};

let getHumanChoice = () => {
    const getChoice = () => prompt("CHOOSE ONE\n1. Rock\n2. Paper\n3. Scissors ");
    let choice = getChoice().toString();

    if (/rock|1|rk/.test(choice)) {
        return 'rock';
    } else if (/paper|2|pr/.test(choice)) {
        return 'paper';
    } else if (/scissor\d?|3|ss/.test(choice)) {
        return 'scissors';
    } else {
        getChoice();
    }
};


let playGame = () => {
    let humanScore = 0, compScore = 0, count = 0;
    const stopGame = () => count === 5 ? true : false;
    const capitalize = (str) => {
        let string = str.replace(str[0], str[0].toUpperCase());
        return string;
    };

    const playRound = (humanChoice = getHumanChoice(), compChoice = getcompChoice()) => {

        let result = '';

        switch (true) {
            case humanChoice === compChoice:
                result = `[Draw]\n${capitalize(humanChoice)} equals ${capitalize(compChoice)}`;
                compScore += 1; humanScore += 1;
                break;
            case humanChoice === 'rock' && compChoice === 'paper':
            case humanChoice === 'scissors' && compChoice === 'rock':
            case humanChoice === 'paper' && compChoice === 'scissors':
                result = `[You Lose]\n${capitalize(compChoice)} beats ${capitalize(humanChoice)} `;
                compScore += 1;
                break;
            case compChoice === 'rock' && humanChoice === 'paper':
            case compChoice === 'scissors' && humanChoice === 'rock':
            case compChoice === 'paper' && humanChoice === 'scissors':
                result = `[You Win]\n${capitalize(humanChoice)} beats ${capitalize(compChoice)}`;
                humanScore += 1;
                break;
        }
        return result;
    };

    alert("Hello, Gamer!");
    alert(`To get us started make a choice`);

    while (!stopGame()) {
        let playLog = playRound();
        alert(playLog);
        console.log(playLog);
        count++;
    }

    alert(`Scores:\n\nYour Score: ${humanScore}\nComp Score: ${compScore}\n\n${humanScore > compScore ? "You win" : humanScore === compScore ? "It's a tie" : "You lose"}`);
};

playGame();