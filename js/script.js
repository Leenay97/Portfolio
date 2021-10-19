/*$(function(){

    var str = 'Hey, nice to see you!<br>Welcome to my portfolio website!<br>Want to see more? Press Y/N ',
        i = 0,
        isTag,
        text;

    (function type(){
        text = str.slice(0, ++i) + '|';
        if (text === str) return;

        document.getElementById('hello-screen').innerHTML = text;

        var char = text.slice(-1);
        if( char === '<' ) isTag = true;
        if( char === '>' ) isTag = false;
    
        if (isTag) return type();
        setTimeout(type, 40);
        
    }());
    window.addEventListener('keypress', function(){
    if (event.key === 'y') {
        $('.hello-screen').hide();
        $('main').show();
    }else if (event.key === 'n') {
        $('header').append('Bye');
        return false;
    };
    
    });
});*/
$(function () {
    $('.close-button').on('click', function () {
        $(this).parents('.window').hide();
    });
    $('.size-button').on('click', function () {
        $(this).parents('.window').toggleClass('fullscreen');
    });
    $('.hide-button').on('click', function () {
        $(this).parents('.window').hide();
    });

    $('.projects-icon').on('click', function () {
        $('.projects-window').show();
    });
    $('.skills-icon').on('click', function () {
        $('.skills-window').show();
    });
    $('.explorer-icon').on('click', function () {
        $('.explorer-window').show();
    });

    var date = new Date;
    console.log(date);
    var minutes = date.getMinutes();
    var hours = date.getHours();
    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();
    if (date.getMinutes() < 10) {
        minutes = '0' + minutes;
    };
    if (date.getHours() < 10) {
        hours = '0' + hours;
    };
    if (date.getMonth() < 10) {
        month = '0' + month;
    };
    if (date.getDate() < 10) {
        day = '0' + day;
    };
    month++
    dateTime = hours + ':' + minutes + '<br>' + day + '.' + month + '.' + year;
    $('.bottom-bar__time').append(dateTime);

    $('.bottom-bar__start-button').on('click', function(){
        $('.start-menu').toggleClass('hidden');
    });
    $('.desktop').on('click', function(){
        $('.start-menu').addClass('hidden');
    });
    $('.window').on('click', function(){
        $('.start-menu').addClass('hidden');
    });
});