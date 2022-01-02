'use strict'

document.addEventListener('DOMContentLoaded', () => {

    let showWindow = function (name) {
        let windowName = document.querySelector(`.${name}-window`);
        console.log(windowName);
        hideAll();
        windowName.classList.remove('hide');
        windowName.classList.add('show');
    };

    let hideWindow = function (name) {
        let windowName = document.querySelector(`.${name}-window`);
        console.log(windowName);
        windowName.classList.remove('show');
        windowName.classList.add('hide');
    };

    function hideAll() {
        let windowName = document.querySelectorAll(`.window`);
        windowName.forEach((item) => {
            item.classList.remove('show');
            item.classList.add('hide');
        });
    }

    function showLayer(name) {
        let layer = document.querySelector(`.${name}-layer`);
        layer.classList.add('show');
        layer.classList.remove('hide');
    }

    function hideLayer(name) {
        let layer = document.querySelector(`.${name}-layer`);
        layer.classList.add('hide');
        layer.classList.remove('show');
    }


    //Клик на иконки
    let icons = document.querySelectorAll('.desktop__icon');

    icons.forEach((item, index) => {
        item.addEventListener('click', (e) => {
            let targetName = item.classList[1].split('-')[0];
            if (e.target.classList.contains('minesweeper-icon')
                || e.target.parentElement.classList.contains('minesweeper-icon')
                && window.screen.height <= 430){
                alert('turn your phone');
            } else {
            showWindow(targetName);
            console.log(targetName);
            showLayer(targetName);
            let allLayers = document.querySelectorAll('.bottom-layer');
            allLayers.forEach((item)=> {
                item.style.order = 0;
            })
            document.querySelector(`.${targetName}-layer`).style.order = 1;
        }
        });
    });

    //Крестик
    let closeButtons = document.querySelectorAll('.close-button');
    console.log(closeButtons);

    closeButtons.forEach((item, index) => {
        item.addEventListener('click', (e) => {
            console.log(e.target);
            let target = e.target;
            let parentWindow = target.parentElement.parentElement.parentElement.parentElement;
            let targetName = parentWindow.classList[1].split('-')[0];
            parentWindow.classList.add('hide');
            parentWindow.classList.remove('show');
            hideLayer(targetName);
        });
    });

    //Fullscreen
    let fullScreenButtons = document.querySelectorAll('.size-button');
    fullScreenButtons.forEach((item, index) => {
        item.addEventListener('click', (e) => {
            console.log(e.target);
            let target = e.target;
            let parentWindow = target.parentElement.parentElement.parentElement.parentElement;
            parentWindow.classList.toggle('fullscreen');
            target.classList.toggle('size-button__active');
        });
    });

    //Hidebuttons
    let hideButtons = document.querySelectorAll('.hide-button');
    hideButtons.forEach((item, index) => {
        item.addEventListener('click', (e) => {
            console.log(e.target);
            let parentWindow = e.target.parentElement.parentElement.parentElement.parentElement;
            parentWindow.classList.add('hide');
            parentWindow.classList.remove('show');
            let layer = document.querySelector(`.${parentWindow.classList[1].split('-')[0]}-layer`);
            layer.classList.remove('active');
        });
    });

    //LayerClick
    let layers = document.querySelectorAll('.bottom-layer');
    layers.forEach((item, i) => {
        item.addEventListener('click', (e) => {
            let layerName = item.classList[1].split('-')[0];
            let windowName = document.querySelector(`.${layerName}-window`);
            windowName.classList.toggle('hide');
            windowName.classList.toggle('show');
            // item.classList.remove('active');
            // if (windowName.classList.contains('show')) {
            //     item.classList.add('active');
            // } else {
            //     item.classList.remove('active');
            // }
        });
    })

    //Time
    
    setInterval(()=>{
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    if (hours < 10) hours = '0' + hours;
    if (minutes < 10) minutes = '0' + minutes;
    let bottomTime = `${hours}:${minutes}`;
    document.querySelector('.bottom-bar__time').innerHTML = bottomTime;
    console.log('a')
    }, 400);

    //Start Button 
    let startMenu = document.querySelector('.start-menu');
    let startButton = document.querySelector('.bottom-bar__start-button');
    console.log(startButton)
    startButton.addEventListener('click', (e) => {
        startMenu.classList.toggle('hide');
    });

    //Hide start menu
    document.body.addEventListener('click', (e) => {
        if (!e.target.classList.contains('start-list') 
        && !e.target.classList.contains('bottom-bar__start-button')
        && !e.target.classList.contains('start-list_point') 
        && !e.target.classList.contains('start-menu')
        && !e.target.classList.contains('start-icon')) {
            startMenu.classList.add('hide');
        }
    });

    //Start menu points
    let startPoint = document.querySelectorAll('.start-list_point');
    startPoint.forEach( (item, i) => {
        item.addEventListener('click', (e) => {
            let targetName = item.classList[1].split('-')[0];
            showWindow(targetName);
            console.log(targetName);
            showLayer(targetName);
            let allLayers = document.querySelectorAll('.bottom-layer');
            allLayers.forEach((item)=> {
                item.style.order = 0;
            });
            startMenu.classList.add('hide');
        });
    });
});