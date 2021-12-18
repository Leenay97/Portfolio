'use strict'
document.addEventListener('DOMContentLoaded', () => {
    let gameStopper = 0,
        cellsArr = [],
        stop = 0,
        timeStop = 0,
        time = 0,
        bombs = 0,
        bombId = [],
        firstClickIndex = 0,
        firstClick,
        bombStopper = 0,
        cells = document.querySelectorAll('.game__field-cell');
    //Null cells
    let nullCells = function () {
        for (let i = 0; i < 9; i++) {
            cellsArr[i] = [];
            for (let j = 0; j < 9; j++) {
                cellsArr[i][j] = 0;
            };
        };
    };
    nullCells();

    //First Cell click event
    cells.forEach((item, index) => {
        item.addEventListener('click', (e) => {
            if (firstClickIndex == 0) {
                firstClick = e.target;
                firstClickIndex = 1;
                console.log(firstClick.id);
                e.target.classList.remove('closed-cell');
            };
            openCells();
            gameStart();
        });
    });

    //Arrange bombs
    let arrBombs = function () {
        while (bombs < 10) {
            let bombRow = Math.floor(Math.random() * 9);
            let bombCol = Math.floor(Math.random() * 9);
            let bombCellId = bombCol + '' + bombRow;
            if (bombId.indexOf(bombCellId) !== -1 || bombCellId == firstClick.id) continue;
            bombId.push(bombCellId);
            cellsArr[bombCol][bombRow] = 100;
            bombs++;
        }
        bombId.forEach((item, i) => {
            document.getElementById(item).classList.add('bomb');
        })
    }

    //Bomb counter 

    let bombCounter = function () {
        if (bombStopper == 1) return;
        cellsArr.forEach((row, rowNum) => {
            row.forEach((cell, colNum) => {
                if (cell >= 100) {
                    if (colNum <= 7) row[colNum + 1]++;
                    if (colNum >= 1) row[colNum - 1]++;
                    if (rowNum <= 7) cellsArr[rowNum + 1][colNum]++;
                    if (rowNum >= 1) cellsArr[rowNum - 1][colNum]++;
                    if (colNum <= 7 && rowNum <= 7) cellsArr[rowNum + 1][colNum + 1]++;
                    if (colNum <= 7 && rowNum >= 1) cellsArr[rowNum - 1][colNum + 1]++;
                    if (colNum >= 1 && rowNum >= 1) cellsArr[rowNum - 1][colNum - 1]++;
                    if (colNum >= 1 && rowNum <= 7) cellsArr[rowNum + 1][colNum - 1]++;
                }
            })
        });

        cellsArr.forEach((row, rowNum) => {
            row.forEach((cell, colNum) => {
                if (cellsArr[rowNum][colNum] !== 0 || cellsArr[rowNum][colNum] <= 100) {
                    document.getElementById(rowNum + '' + colNum).classList.add(`mine${cellsArr[rowNum][colNum]}`);
                }
            })
        });
        console.log(cellsArr);
        bombStopper = 1;

    }

    function isValid(row, col) {
        return row >= 0
            && row <= 8
            && col >= 0
            && col <= 8;
    };

    let openCells = function (row, col) {
        if (!isValid(row, col)) return;
        let cell = document.getElementById(row + '' + col);
        

        if (cell.classList.contains('closed-cell')) return;

        cell.classList.remove('closed-cell');
        console.log(cellsArr[row][col])
        if (cellsArr[row][col] !== 0) return;

        
        for (let x = -1; x <= 1; x++) {
            for (let y = -1; y <= 1; y++) {
                openCells(row + y, col + x);
            }
        }

    }

    //Cell click
    let cellClick = function (row, col) {
        cells.forEach((item, index) => {
            item.addEventListener('click', (e) => {
                let row = Math.floor(e.target.id / 10);
                let col = e.target.id % 10;
                openCells(row, col);

            });
        });
    };

    //Start game 
    let gameStart = function () {
        arrBombs();
        bombCounter();
        cellClick();
    }


});