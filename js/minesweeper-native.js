'use strict'
document.addEventListener('DOMContentLoaded', () => {
    let cellsArr = [],
        bombs = 0,
        bombId = [],
        firstClickIndex = 0,
        firstClick,
        bombStopper = 0,
        cells = document.querySelectorAll('.game__field-cell'),
        flagButton = document.querySelector('.game__flag-button'),
        timer,
        openCounter = 0;
    //Null cells
    let nullCells = function () {
        for (let i = 0; i < 9; i++) {
            cellsArr[i] = [];
            for (let j = 0; j < 9; j++) {
                cellsArr[i][j] = 0;
            };
        };
        bombId = [];
        bombs = 0;
        bombStopper = 0;
    };
    nullCells();

    //First click
    let firstClickHandler = function (e) {
        if (firstClickIndex == 0) {
            firstClick = e.target;
            firstClickIndex = 1;
            let row = Math.floor(e.target.id / 10);
            let col = e.target.id % 10;
            clearInterval(timer);
            startTimer();
            gameStart();
            openCells(row, col);
        };
    }
    function firstCell() {
        cells.forEach((item, index) => {
            item.addEventListener('click', firstClickHandler);
        });
    };
    firstCell();

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
    }

    function openCells(row, col) {

        if (!isValid(row, col)) return;
        var cell = document.getElementById(row + '' + col);


        if (!cell.classList.contains('closed-cell')) return;
        cell.classList.remove('closed-cell');
        cell.classList.remove('flagged-cell');
        openCounter++;
        console.log(openCounter);
        if (openCounter == 71) {
            gameWin();
        }
        if (cells[row][col] >= 100) return;


        if (cellsArr[row][col] !== 0) return;


        for (let x = -1; x <= 1; x++) {
            for (let y = -1; y <= 1; y++) {
                openCells(row + x, col + y);
            }
        }



    }

    //Lose
    function gameLose() {
        clearInterval(timer);
        cells.forEach((item) => {
            item.removeEventListener('click', firstClickHandler);
            item.removeEventListener('click', cellClickHandler);
            document.querySelector('.game__face').style.backgroundImage = 'url(../img/sad-face.png)';
        });
        flagButton.classList.remove('game__flag-button-active');
    };

    //Win
    function gameWin() {
        clearInterval(timer);
        cells.forEach((item) => {
            item.removeEventListener('click', firstClickHandler);
            item.removeEventListener('click', cellClickHandler);
            document.querySelector('.game__face').style.backgroundImage = 'url(../img/win-face.png)';
        });
        flagButton.classList.remove('game__flag-button-active')
        openCounter = 0;
    }

    //Cell click
    let cellClickHandler = function (e) {
        let row = Math.floor(e.target.id / 10);
        let col = e.target.id % 10;

        if (flagButton.classList.contains('game__flag-button-active')) {
            e.target.classList.toggle('flagged-cell');
            return;
        }

        if (e.target.classList.contains('flagged-cell')) return;

        if (e.target.classList.contains('bomb')) {
            e.target.classList.add('bomb-active');
            let closedBombs = document.querySelectorAll('.bomb');
            closedBombs.forEach((item) => {
                item.classList.remove('closed-cell');
                item.classList.remove('flagged-cell');
            })
            gameLose();
            return;
        }
        

        if (openCells(row, col) == false) return;
        openCells(row, col);
    }
    let cellClick = function (row, col) {
        cells.forEach((item, index) => {
            item.addEventListener('click', cellClickHandler);
        });
    };

    //Timer
    function startTimer() {
        let timerDigit1 = document.querySelector('.time1');
        let timerDigit2 = document.querySelector('.time2');
        let timerDigit3 = document.querySelector('.time3');
        let digit1Back = 17;
        let digit2Back = 17;
        let digit3Back = 17;
        timerDigit1.style.backgroundPosition = '-153px';
        timerDigit2.style.backgroundPosition = '-153px';
        timerDigit3.style.backgroundPosition = '-153px';
        timer = setInterval(function () {
            digit1Back -= 17;
            timerDigit3.style.backgroundPosition = digit1Back + 'px';
            if (digit1Back == -153) {
                digit1Back = 17;
                digit2Back -= 17;
                timerDigit2.style.backgroundPosition = digit2Back + 'px';
                if (digit2Back == -153) {
                    digit2Back = 17;
                    digit3Back -= 17;
                    timerDigit1.style.backgroundPosition = digit3Back + 'px';
                }
            }
        }, 1000);
    }
    //Flag
    flagButton.addEventListener('click', (e) => {
        e.target.classList.toggle('game__flag-button-active');
    })

    //Restart
    function gameRestart() {
        clearInterval(timer);
        let restartCells = document.querySelectorAll('.game__field-cell');
        restartCells.forEach((item) => {
            item.className = 'game__field-cell closed-cell';
        });
        firstClickIndex = 0;
        openCounter = 0;
        flagButton.classList.remove('game__flag-button-active')
        nullCells();
        firstCell();
        gameStart();
    }

    document.querySelector('.game__face').addEventListener('click', (e) => {
        document.querySelector('.game__face').style.backgroundImage = 'url(../img/happy-face.png)';
        gameRestart();
    })

    //Start game 
    let gameStart = function () {
        arrBombs();
        bombCounter();
        cellClick();
    }


});