'use strict';
const face = document.querySelector('.js-face');

const head = document.querySelector('.js-head');


face.innerHTML = ':)';





function handleClick(){
    face.innerHTML = ';)';
}

function handlemouseLeave(){
    face.innerHTML = ':)';
}

head.addEventListener('click', handleClick);
head.addEventListener('mouseleave', handlemouseLeave);