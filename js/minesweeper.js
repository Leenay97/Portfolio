$(function () {
    var k = 1;
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
                // if (cells[i] !== NaN) {
                document.getElementById(i).innerHTML = cells[i];
                // };
            };
            k = 0;
        }else{
            return false;
        };
        console.log(k);
    });
    $(function () {
        $('.game__field-cell').on('click', function () {
            $(this).addClass('active-cell');
        });
    });
});
