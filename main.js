// const readline = require("readline");
const container = document.querySelector(".container");
const blocksArray = document.getElementsByClassName("block");
const restart = document.getElementById("restart");
const endMessage = document.createElement('h2');
endMessage.textContent = `X's turn!`;
endMessage.style.marginTop = '30px';
container.after(endMessage);
const winning_combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
const players = ['X', 'O'];
let currentPlayer = players[0];
restart.addEventListener("click", restartButton);
function restartButton(){
    for(let i = 0; i < blocksArray.length; i++){
        blocksArray[i].textContent = '';
    }
    endMessage.textContent = "X turn!";
    currentPlayer = players[0];
}

function checkTie(){
    for (let i = 0; i < blocksArray.length; i++){
        if (blocksArray[i].textContent === ''){
            return false;
        }
    }
    return true;
}

function checkWin(currentPlayer){
    for (let i = 0; i < winning_combinations.length; i++){
        const [a, b, c] = winning_combinations[i];
        if(blocksArray[a].textContent === currentPlayer && blocksArray[b].textContent === currentPlayer && blocksArray[c].textContent === currentPlayer){
            return true;
        }
    }
    return false;
}

for (let i = 0; i < blocksArray.length; i++){
    blocksArray[i].addEventListener("click", () => {
        if (blocksArray[i].textContent !== ''){
            return;
        }

        blocksArray[i].textContent = currentPlayer;
        if (checkWin(currentPlayer)){
            endMessage.textContent = `Game over! ${currentPlayer} wins!`;
            return;
        }

        if (checkTie()){
            endMessage.textContent = `Game is tied!`;
            return;
        }
        currentPlayer = (currentPlayer === players[0]) ? players[1] : players[0];
        if(currentPlayer === players[0]){
            endMessage.textContent = "X's turn!";
        } else {
            endMessage.textContent= "O's turn!  ";
        }

    })
}
