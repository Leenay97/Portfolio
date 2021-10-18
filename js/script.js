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
$('.projects-icon').on('click', function () {
    $('.projects-window').show();
});

});