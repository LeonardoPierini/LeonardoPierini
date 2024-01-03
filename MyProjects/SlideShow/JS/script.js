'use strict';

const images = [
    { 'id': '1', 'url':'../img/chrono.jpg' },
    { 'id': '2', 'url':'../img/inuyasha.jpg' },
    { 'id': '3', 'url':'../img/tenchi.jpg' },
    { 'id': '4', 'url':'../img/tenjhotenge.jpg' },
    { 'id': '5', 'url':'../img/yuyuhakusho.jpg' },
    { 'id': '6', 'url':'../img/ippo.png' },
]

const containerItems = document.querySelector('#container-items');



const loadImages = ( images, container ) => {
    images.forEach ( image => {
        container.innerHTML += `
            <div class='item' data-number=${image.id}>
                <img src='${image.url}'
            </div>
        `
    })
}

loadImages( images, containerItems );
