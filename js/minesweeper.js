$(function () {
    var k = 1;
    var time = 0;
    console.log(k);
    var cells = [0];
    for (var i = 0; i < 81; i++) {
        cells[i] = 0;
    };
    $('.game__field-cell').on('click', function () {
        if (k == 1) {
            $(this).addClass('active-cell');
            var a = [];
            var firstClick = this.id;
            while (a.length < 10) {
                var push = 0;
                push = Math.floor(Math.random() * 80 + 1);
                if (a.indexOf(push) == -1) {
                    a.push(push);
                };
            };
            console.log(a);
            for (var i = 0; i < 10; i++) {
                var cellNumber = document.getElementById(a[i]);
                $(cellNumber).addClass('bomb');
                cells[a[i]] = 100;
                ++cells[a[i] + 9];
                ++cells[a[i] - 9];
                if (a[i] == 8 || a[i] == 17 || a[i] == 26 || a[i] == 35 || a[i] == 44 || a[i] == 53 || a[i] == 62 || a[i] == 71 || a[i] == 80) {
                    ++cells[a[i] - 1];
                    ++cells[a[i] - 10];
                    ++cells[a[i] + 8];
                } else if (a[i] % 9 == 0 || a[i] == 0) {
                    ++cells[a[i] + 1];
                    ++cells[a[i] + 10];
                    ++cells[a[i] - 8];
                } else {
                    ++cells[a[i] - 1];
                    ++cells[a[i] - 10];
                    ++cells[a[i] + 8];
                    ++cells[a[i] + 1];
                    ++cells[a[i] + 10];
                    ++cells[a[i] - 8];
                };

            };
            for (var i = 0; i < 81; i++) {
                var cell = document.getElementById(i);
                if (cells[i] == 1){
                    $(cell).addClass('mine1');
                } else if (cells[i] == 2){
                    $(cell).addClass('mine2');
                } else if (cells[i] == 3){
                    $(cell).addClass('mine3');
                } else if (cells[i] == 4){
                    $(cell).addClass('mine4');
                }
            };
            k = 0;
            setInterval(function(){
                ++time;
                if (time%10 == 1){
                    $('.time3').css('background-position-x', '0px');
                } else if (time%10 == 2){
                    $('.time3').css('background-position-x', '-17px');
                } else if (time%10 == 3){
                    $('.time3').css('background-position-x', '-34px');
                } else if (time%10 == 4){
                    $('.time3').css('background-position-x', '-51px');
                } else if (time%10 == 5){
                    $('.time3').css('background-position-x', '-68px');
                } else if (time%10 == 6){
                    $('.time3').css('background-position-x', '-85px');
                } else if (time%10 == 7){
                    $('.time3').css('background-position-x', '-102px');
                } else if (time%10 == 8){
                    $('.time3').css('background-position-x', '-119px');
                } else if (time%10 == 9){
                    $('.time3').css('background-position-x', '-136px');
                } else if (time%10 == 0){
                    $('.time3').css('background-position-x', '-153px');
                };
                if (Math.floor((time / 10) % 10) == 1){
                    $('.time2').css('background-position-x', '0px');
                } else if (Math.floor((time / 10) % 10) == 2){
                    $('.time2').css('background-position-x', '-17px');
                } else if (Math.floor((time / 10) % 10) == 3){
                    $('.time2').css('background-position-x', '-34px');
                } else if (Math.floor((time / 10) % 10) == 4){
                    $('.time2').css('background-position-x', '-51px');
                } else if (Math.floor((time / 10) % 10) == 5){
                    $('.time2').css('background-position-x', '-68px');
                } else if (Math.floor((time / 10) % 10) == 6){
                    $('.time2').css('background-position-x', '-85px');
                } else if (Math.floor((time / 10) % 10) == 7){
                    $('.time2').css('background-position-x', '-102px');
                } else if (Math.floor((time / 10) % 10) == 8){
                    $('.time2').css('background-position-x', '-119px');
                } else if (Math.floor((time / 10) % 10) == 9){
                    $('.time2').css('background-position-x', '-136px');
                } else if (Math.floor((time / 10) % 10) == 0){
                    $('.time2').css('background-position-x', '-153px');
                };
                if (Math.floor((time / 100) % 10) == 1){
                    $('.time1').css('background-position-x', '0px');
                } else if (Math.floor((time / 100) % 10) == 2){
                    $('.time1').css('background-position-x', '-17px');
                } else if (Math.floor((time / 100) % 10) == 3){
                    $('.time1').css('background-position-x', '-34px');
                } else if (Math.floor((time / 100) % 10) == 4){
                    $('.time1').css('background-position-x', '-51px');
                } else if (Math.floor((time / 100) % 10) == 5){
                    $('.time1').css('background-position-x', '-68px');
                } else if (Math.floor((time / 100) % 10) == 6){
                    $('.time1').css('background-position-x', '-85px');
                } else if (Math.floor((time / 100) % 10) == 7){
                    $('.time1').css('background-position-x', '-102px');
                } else if (Math.floor((time / 100) % 10) == 8){
                    $('.time1').css('background-position-x', '-119px');
                } else if (Math.floor((time / 100) % 10) == 9){
                    $('.time1').css('background-position-x', '-136px');
                } else if (Math.floor((time / 100) % 10) == 0){
                    $('.time1').css('background-position-x', '-153px');
                };
            }, 1000);
            
            
        };
    });
    
    $(function () {
        $('.game__field-cell').on('click', function () {
            $(this).addClass('active-cell');
        });
    });
});
