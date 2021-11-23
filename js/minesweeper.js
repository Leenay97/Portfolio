$(function () {
    var k = 1;
    var cells = [];
    var stop = 0;
    var timeStop = 0;
    var time = 0;


    function nullCells() {
        for (var i = 0; i < 9; i++) {
            cells[i] = [];
            for (var j = 0; j < 9; j++) {
                cells[i][j] = 0;
            }
        }
    };
    nullCells();
    $('.game__field-cell').on('click', function () {
        if (k == 0) return;
        var time = 0;
        var bombCount = 0;
        var bombRow = 0;
        var bombCol = 0;
        var firstClickCol = +this.id % 10;
        var firstClickRow = Math.floor((+this.id / 10) % 10);
        while (bombCount < 10) {

            bombRow = Math.floor(Math.random() * 9);
            bombCol = Math.floor(Math.random() * 9);
            if (cells[bombRow][bombCol] == 100 || bombRow == firstClickRow && bombCol == firstClickCol) {
                continue;
            } else {
                cells[bombRow][bombCol] = +100;
                var bombCellId = String(bombRow) + String(bombCol);
                var bombCell = document.getElementById(bombCellId);
                $(bombCell).addClass('bomb');
                bombCount++;
            };
        };
        for (var i = 0; i < 9; i++) {
            for (var j = 0; j < 9; j++) {
                var cellDown = i + 1;
                var cellUp = i - 1;
                var cellRight = j + 1;
                var cellLeft = j - 1;
                if (cells[i][j] >= 100) {
                    if (i == 0 && j == 0) {
                        cells[cellDown][j]++;
                        cells[cellDown][cellRight]++;
                        cells[i][cellRight]++;
                    } else if (i == 0 && j == 8) {
                        cells[cellDown][j]++;
                        cells[i][cellLeft]++;
                        cells[cellDown][cellLeft]++;
                    } else if (i == 0 && j !== 8 && j !== 0) {
                        cells[cellDown][j]++;
                        cells[cellDown][cellRight]++;
                        cells[cellDown][cellLeft]++;
                        cells[i][cellLeft]++;
                        cells[i][cellRight]++;
                    } else if (i == 8 && j == 0) {
                        cells[cellUp][j]++;
                        cells[cellUp][cellRight]++;
                        cells[i][cellRight]++;
                    } else if (i == 8 && j == 8) {
                        cells[cellUp][j]++;
                        cells[i][cellLeft]++;
                        cells[cellUp][cellLeft]++;
                    } else if (i == 8 && j !== 8 && j !== 0) {
                        cells[cellUp][j]++;
                        cells[cellUp][cellRight]++;
                        cells[cellUp][cellLeft]++;
                        cells[i][cellLeft]++;
                        cells[i][cellRight]++;
                    } else if (j == 8 && i == 0) {
                        cells[cellDown][j]++;
                        cells[cellDown][cellLeft]++;
                        cells[i][cellLeft]++;
                    } else if (j == 8 && i == 8) {
                        cells[cellUp][j]++;
                        cells[i][cellLeft]++;
                        cells[cellUp][cellLeft]++;
                    } else if (j == 8 && i !== 8 && i !== 0) {
                        cells[cellUp][j]++;
                        cells[cellUp][cellLeft]++;
                        cells[i][cellLeft]++;
                        cells[cellDown][cellLeft]++;
                        cells[cellDown][j]++;
                    } else if (j == 0 && i !== 8 && i !== 0) {
                        cells[cellUp][j]++;
                        cells[cellUp][cellRight]++;
                        cells[i][cellRight]++;
                        cells[cellDown][cellRight]++;
                        cells[cellDown][j]++;
                    } else {
                        cells[cellDown][j]++;
                        cells[cellUp][j]++;
                        cells[i][cellRight]++;
                        cells[i][cellLeft]++;
                        cells[cellDown][cellRight]++;
                        cells[cellUp][cellLeft]++;
                        cells[cellDown][cellLeft]++;
                        cells[cellUp][cellRight]++;
                    }
                }
            }

        }
        for (var i = 0; i < 9; i++) {
            for (var j = 0; j < 9; j++) {
                var cellId = String(i) + String(j);
                var cellNumber = document.getElementById(cellId);
                if (cells[i][j] !== 0 && cells[i][j] < 100) {
                    var bgNumber = 'mine' + cells[i][j];
                    $(cellNumber).addClass(bgNumber);
                };
            }
        }
        function timer(timeStop) {
            if (timeStop == 1) return;
            $('.game__face, .bomb').on('click', function () {;
                clearInterval(seconds);
                time = 0;
                return; 
            });
            var seconds = setInterval(function () {
                time++;
                if (time % 10 == 1) {
                    $('.time3').css('background-position-x', '0px');
                } else if (time % 10 == 2) {
                    $('.time3').css('background-position-x', '-17px');
                } else if (time % 10 == 3) {
                    $('.time3').css('background-position-x', '-34px');
                } else if (time % 10 == 4) {
                    $('.time3').css('background-position-x', '-51px');
                } else if (time % 10 == 5) {
                    $('.time3').css('background-position-x', '-68px');
                } else if (time % 10 == 6) {
                    $('.time3').css('background-position-x', '-85px');
                } else if (time % 10 == 7) {
                    $('.time3').css('background-position-x', '-102px');
                } else if (time % 10 == 8) {
                    $('.time3').css('background-position-x', '-119px');
                } else if (time % 10 == 9) {
                    $('.time3').css('background-position-x', '-136px');
                } else if (time % 10 == 0) {
                    $('.time3').css('background-position-x', '-153px');
                };
                if (Math.floor((time / 10) % 10) == 1) {
                    $('.time2').css('background-position-x', '0px');
                } else if (Math.floor((time / 10) % 10) == 2) {
                    $('.time2').css('background-position-x', '-17px');
                } else if (Math.floor((time / 10) % 10) == 3) {
                    $('.time2').css('background-position-x', '-34px');
                } else if (Math.floor((time / 10) % 10) == 4) {
                    $('.time2').css('background-position-x', '-51px');
                } else if (Math.floor((time / 10) % 10) == 5) {
                    $('.time2').css('background-position-x', '-68px');
                } else if (Math.floor((time / 10) % 10) == 6) {
                    $('.time2').css('background-position-x', '-85px');
                } else if (Math.floor((time / 10) % 10) == 7) {
                    $('.time2').css('background-position-x', '-102px');
                } else if (Math.floor((time / 10) % 10) == 8) {
                    $('.time2').css('background-position-x', '-119px');
                } else if (Math.floor((time / 10) % 10) == 9) {
                    $('.time2').css('background-position-x', '-136px');
                } else if (Math.floor((time / 10) % 10) == 0) {
                    $('.time2').css('background-position-x', '-153px');
                };
                if (Math.floor((time / 100) % 10) == 1) {
                    $('.time1').css('background-position-x', '0px');
                } else if (Math.floor((time / 100) % 10) == 2) {
                    $('.time1').css('background-position-x', '-17px');
                } else if (Math.floor((time / 100) % 10) == 3) {
                    $('.time1').css('background-position-x', '-34px');
                } else if (Math.floor((time / 100) % 10) == 4) {
                    $('.time1').css('background-position-x', '-51px');
                } else if (Math.floor((time / 100) % 10) == 5) {
                    $('.time1').css('background-position-x', '-68px');
                } else if (Math.floor((time / 100) % 10) == 6) {
                    $('.time1').css('background-position-x', '-85px');
                } else if (Math.floor((time / 100) % 10) == 7) {
                    $('.time1').css('background-position-x', '-102px');
                } else if (Math.floor((time / 100) % 10) == 8) {
                    $('.time1').css('background-position-x', '-119px');
                } else if (Math.floor((time / 100) % 10) == 9) {
                    $('.time1').css('background-position-x', '-136px');
                } else if (Math.floor((time / 100) % 10) == 0) {
                    $('.time1').css('background-position-x', '-153px');
                };
            }, 1000);
        };
        k = 0;
        timer();
    });
    function isValid(row, col) {
        return row >= 0
            && row <= 8
            && col >= 0
            && col <= 8;
    }

    var counter = 81;

    function open(row, col) {
        if (!isValid(row, col)) return;
        var cell = document.getElementById(String(row) + String(col));


        if (cell.classList.contains('closed-cell') == false) return;
        cell.classList.remove("closed-cell");
        counter--;
        if (counter == 10) {
            stop = 1;
            timeStop = 1;
            return;
        }
        if (cells[row][col] >= 100) {
            stop = 1;
            timeStop = 1;
            return;
        }

        if (cells[row][col] !== 0) {
            return;
        };

        for (var x = -1; x <= 1; x++) {
            for (var y = -1; y <= 1; y++) {
                open(row + x, col + y);
            }
        }
    };
    $('.game__field-cell').on('click', function () {
        if (stop !== 0) return;
        row = Math.floor(this.id / 10);
        col = this.id % 10;
        if (open(row, col) == false) return;
        open(row, col);

    });
    $('.game__face').on('click', function () {
        nullCells();
        $('.game__field-cell').removeClass('mine1 mine2 mine3 mine4 mine5 bomb');
        $('.game__field-cell').addClass('closed-cell');
        $('.time3').css('background-position-x', '-153px');
        $('.time2').css('background-position-x', '-153px');
        $('.time1').css('background-position-x', '-153px');
        k = 1;
        counter = 81;
        stop = 0;
        timeStop = 1;
        time = 0;
    });
});
