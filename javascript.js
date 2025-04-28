const game = (function(){
    const gameState =
    [
        ['-', '-', '-'], // 0 1 2
        ['-', '-', '-'], // 3 4 5
        ['-', '-', '-']  // 6 7 8
    ];

    function getGameStateCopy() {
        return gameState.map(inner => [...inner]);
    }

    function placeMark(coordinates, fill) {
        const { x, y } = coordinates;

        if (isNaN(x) || x < 0 || x > 2)
            throw new Error("Request Not Allowed 1")

        if (isNaN(y) || y < 0 || y > 2)
            throw new Error("Request Not Allowed 2")

        if(gameState[x][y] !== '-')
            throw new Error("Request Not Allowed 3")

        if(fill !== 'X' && fill !== 'O')
            throw new Error("Request Not Allowed 4")

        gameState[x][y] = fill;
    }

    let currentPlayer = 'X';

    const getCurrentPlayer = () => currentPlayer;

    function alternatePlayer() {
        if (currentPlayer === 'X')
            currentPlayer = 'O';
        else if (currentPlayer === 'O')
            currentPlayer = 'X';
        else
            throw new Error('Current Player Undefined');
    }

    function newMoveHasWon() {
        return false;
    }
    
    function isBoardFull() {
        return false;
    }
    return { getGameStateCopy, placeMark, getCurrentPlayer, alternatePlayer, newMoveHasWon, isBoardFull};
})();

renderConsole(game.getGameStateCopy());
play();
function play() {
    while(true) {
        const ans = parseInt(prompt(`Player ${game.getCurrentPlayer()}, Which position would you like? (1 - 9)`));

        if (isNaN(ans) || ans < 1 || ans > 9)
            continue;

        const { x, y } = translate1DAddrTo2D(ans - 1);
        if(game.getGameStateCopy()[x][y] !== '-')
            continue;

        game.placeMark({ x, y }, game.getCurrentPlayer());
        renderConsole(game.getGameStateCopy());

        if(game.newMoveHasWon())
        {
            alert(`${currentPlayer} has won`);
            return;
        }

        if(game.isBoardFull())
        {
            alert(`Draw is reached`);
            return;
        }

        game.alternatePlayer();
    }
}

function translate1DAddrTo2D(index1d){
    const x = Math.floor(index1d / 3);
    const y = index1d % 3;
    return { x, y };
}

function renderConsole(gameState) {
    console.log(`${gameState[0][0]} ${gameState[0][1]} ${gameState[0][2]}   1 2 3`);
    console.log(`${gameState[1][0]} ${gameState[1][1]} ${gameState[1][2]}   4 5 6`);
    console.log(`${gameState[2][0]} ${gameState[2][1]} ${gameState[2][2]}   7 8 9`);
    console.log();
}