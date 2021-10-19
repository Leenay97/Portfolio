

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
        $(trigger).removeClass('hidden');

    };

    var windowHide = function (name) {
        var layerName = '.' + name + '-layer';
        var trigger = document.querySelector(layerName);
        $(trigger).removeClass('hidden');
    };

    $('.close-button').on('click', function () {
        $(this).parents('.window').addClass('hidden');
    });
    $('.size-button').on('click', function () {
        $(this).parents('.window').toggleClass('fullscreen');
    });
    $('.hide-button').on('click', function () {
        $(this).parents('.window').addClass('hidden');
    });

    $('.projects-icon').on('click', function () {
        $('.projects-window').removeClass('hidden');
        $('.projects-layer').removeClass('hidden');
    });
    $('.skills-icon').on('click', function () {
        $('.skills-window').removeClass('hidden');
    });
    $('.explorer-icon').on('click', function () {
        $('.explorer-window').removeClass('hidden');
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

    $('.bottom-bar__start-button').on('click', function () {
        $('.start-menu').toggleClass('hidden');
    });
    $('.desktop').on('click', function () {
        $('.start-menu').addClass('hidden');
    });
    $('.window').on('click', function () {
        $('.start-menu').addClass('hidden');
    });


    $('.projects-window').children('.window__header').children('.window__header-control').children('.hide-button').on('click', function () {
        windowHide('projects');
    });



    $('.projects-window').children('.window__header').children('.window__header-control').children('.close-button').on('click', function () {
        windowClose('projects');
    });

    $('.projects-layer').on('click', function () {
        layerClick('projects');
    });

});