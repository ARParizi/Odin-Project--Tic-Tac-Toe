const gameState =
[
    [' ', ' ', ' '], // 0 1 2
    [' ', ' ', ' '], // 3 4 5
    [' ', ' ', ' ']  // 6 7 8
];

function translate1DAddrTo2D(index1d){
    const x = Math.floor(index1d / 3);
    const y = index1d % 3;
    return { x, y };
}

let currentPlayer = 'X';

function alternatePlayer() {
    if (currentPlayer === 'X')
        currentPlayer = 'O';
    else if (currentPlayer === 'O')
        currentPlayer = 'X';
    else
        throw new Error('Current Player Undefined');
}

renderConsole();
game();
function game() {
    while(true) {
        const ans = parseInt(prompt(`Player ${currentPlayer}, Which position would you like? (0 - 8)`));

        if (isNaN(ans) || ans < 0 || ans > 8)
            continue;

        const coordinates = translate1DAddrTo2D(ans);
        if(gameState[coordinates.x][coordinates.y] !== ' ')
            continue;

        gameState[coordinates.x][coordinates.y] = currentPlayer;
        renderConsole();

        if(newMoveHasWon())
        {
            alert(`${currentPlayer} has won`);
            return;
        }

        alternatePlayer();
    }
}

function newMoveHasWon() {
    return false;
}

function renderConsole() {
    console.log(`${gameState[0][0]} ${gameState[0][1]} ${gameState[0][2]}   0 1 2`);
    console.log(`${gameState[1][0]} ${gameState[1][1]} ${gameState[1][2]}   3 4 5`);
    console.log(`${gameState[2][0]} ${gameState[2][1]} ${gameState[2][2]}   6 7 8`);
    console.log();
    console.log();
}