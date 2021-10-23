

$(function () {

    var windowClose = function (name) {
        var layerName = '.' + name + '-layer';
        var trigger = document.querySelector(layerName);
        console.log(trigger);
        $(trigger).addClass('hidden');
    };

    var layerClick = function (name) {
        var windowName = '.' + name + '-window';
        var layerName = '.' + name + '-layer';
        var trigger = document.querySelector(windowName);
        var layer = document.querySelector(layerName);
        console.log(trigger);
        $(trigger).toggleClass('hidden');

    };

    var windowHide = function (name) {
        var layerName = '.' + name + '-layer';
        var trigger = document.querySelector(layerName);
        $(trigger).removeClass('hidden');
    };

    var layerAdd = function (name) {
        var className = '.' + name + '-layer';
        var layer = document.querySelector(className);
        $('.bottom-container').append(layer);
        $(layer).removeClass('hidden');
    };

    $('.close-button').on('click', function () {
        $(this).parents('.window').addClass('hidden');
    });
    $('.size-button').on('click', function () {
        $(this).toggleClass('size-button-active')
        $(this).parents('.window').toggleClass('fullscreen');
    });
    $('.hide-button').on('click', function () {
        $(this).parents('.window').addClass('hidden');
    });

    $('.projects-icon').on('click', function () {
        $('.projects-window').removeClass('hidden');
        layerAdd('projects');
    });
    $('.skills-icon').on('click', function () {
        $('.skills-window').removeClass('hidden');
        layerAdd('skills');
    });
    $('.explorer-icon').on('click', function () {
        $('.explorer-window').removeClass('hidden');
    });
    $('.about-icon').on('click', function () {
        $('.about-window').removeClass('hidden');
        layerAdd('about');
    });

    setInterval(function(){
    var date = new Date;
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
    dateTime = hours + ':' + minutes;
    document.querySelector('.bottom-bar__time').innerHTML = dateTime;
    
    }, 300);


    $('.bottom-bar__start-button').on('click', function () {
        $('.start-menu').toggleClass('hidden');
        $(this).toggleClass('active');
    });
    $('.desktop').on('click', function () {
        $('.start-menu').addClass('hidden');
    });
    $('.window').on('click', function () {
        $('.start-menu').addClass('hidden');
    });


    $('.projects-window').children('.window__wrapper').children('.window__header').children('.window__header-control').children('.hide-button').on('click', function () {
        windowHide('projects');
        $('.projects-layer').removeClass('active');
    });
    $('.projects-window').children('.window__wrapper').children('.window__header').children('.window__header-control').children('.close-button').on('click', function () {
        windowClose('projects');
        $('.projects-layer').addClass('active');
    });
    $('.projects-layer').on('click', function () {
        layerClick('projects');
        $('.projects-layer').toggleClass('active');
    });

    $('.about-window').children('.window__wrapper').children('.window__header').children('.window__header-control').children('.hide-button').on('click', function () {
        windowHide('about');
        $('.about-layer').removeClass('active');
    });
    $('.about-window').children('.window__wrapper').children('.window__header').children('.window__header-control').children('.close-button').on('click', function () {
        windowClose('about');
        $('.about-layer').addClass('active');
    });
    $('.about-layer').on('click', function () {
        layerClick('about');
        $('.about-layer').toggleClass('active');
    });


    $('.skills-window').children('.window__wrapper').children('.window__header').children('.window__header-control').children('.hide-button').on('click', function () {
        windowHide('skills');
        $('.skills-layer').removeClass('active');
    });
    $('.skills-window').children('.window__wrapper').children('.window__header').children('.window__header-control').children('.close-button').on('click', function () {
        windowClose('skills');
        $('.skills-layer').addClass('active');
    });
    $('.skills-layer').on('click', function () {
        layerClick('skills');
        $('.skills-layer').toggleClass('active');
    });

});