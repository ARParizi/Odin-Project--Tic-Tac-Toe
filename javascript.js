console.log('X O O   0 1 2');
console.log('  O X   3 4 5');
console.log('O X X   6 7 8');

const gameState = 
[
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
];

function translate1DAddrTo2D(index1d){
    const x = Math.floor(index1d / 3);
    const y = index1d % 3;
    return { x, y };
}