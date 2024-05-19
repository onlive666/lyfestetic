// script.js

document.addEventListener("DOMContentLoaded", () => {
    const chessboard = document.getElementById('chessboard');
    const board = [];
    const pieces = {
        'rook': '♜', 'knight': '♞', 'bishop': '♝', 'queen': '♛', 'king': '♚', 'pawn': '♟',
        'ROOK': '♖', 'KNIGHT': '♘', 'BISHOP': '♗', 'QUEEN': '♕', 'KING': '♔', 'PAWN': '♙'
    };

    function createBoard() {
        for (let i = 0; i < 8; i++) {
            board[i] = [];
            for (let j = 0; j < 8; j++) {
                const square = document.createElement('div');
                square.classList.add((i + j) % 2 === 0 ? 'white' : 'black');
                chessboard.appendChild(square);
                board[i][j] = square;
            }
        }
    }

    function setPieces() {
        const initialPositions = [
            ['rook', 'knight', 'bishop', 'queen', 'king', 'bishop', 'knight', 'rook'],
            ['pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn'],
            [], [], [], [],
            ['PAWN', 'PAWN', 'PAWN', 'PAWN', 'PAWN', 'PAWN', 'PAWN', 'PAWN'],
            ['ROOK', 'KNIGHT', 'BISHOP', 'QUEEN', 'KING', 'BISHOP', 'KNIGHT', 'ROOK']
        ];

        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                if (initialPositions[i][j]) {
                    board[i][j].innerText = pieces[initialPositions[i][j]];
                }
            }
        }
    }

    createBoard();
    setPieces();
});