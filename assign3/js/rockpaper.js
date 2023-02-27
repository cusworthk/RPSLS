let moves = ['rock','lizard','spock','scissors','paper'];

function round(playerChoice) {
    let computerChoice = Math.floor(Math.random()*5);
    let result;

    if(computerChoice == 0) {
        document.getElementById("result").innerHTML = "its a tie";
    
    } else if(computerChoice == 1 || computerChoice == 3) {
        result = "you win because " + moves[playerChoice] + " beats " + moves[(computerChoice + playerChoice)%5];
        document.getElementById("result").innerHTML = result;

    } else {
        result = "you lose because " + moves[(computerChoice + playerChoice)%5] + " beats " + moves[playerChoice];
        document.getElementById("result").innerHTML = result;
    }
}