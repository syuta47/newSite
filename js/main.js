'use strict';

{

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const sh = document.getElementById('sh');
const sp = document.getElementById('sp');
const sm = document.getElementById('sm');
const sktImg = document.querySelector('.skt img');
const desH1 = document.querySelector('.description h1');
const c = document.querySelector('.count');

const showHokkaidouBtn = document.getElementById('h-btn');
const hokkaidouImg = document.querySelector('img[src="img/541.png"]');

const lastBtn = document.getElementById('message');
const last = document.getElementById('last');
const LB = document.getElementById('last-btn');

const Myicon = document.querySelector('.my_icon');
const show = document.getElementById('show');
const main = document.getElementById('main');


btn1.addEventListener('click', () => {
  sh.classList.toggle('active');
});

btn2.addEventListener('click', () => {
  sp.classList.toggle('active');
});

btn3.addEventListener('click', () => {
  sm.classList.toggle('active');
});

btn4.addEventListener('click', () => {
  sktImg.classList.toggle('moved');
});

function remove() {
  desH1.classList.remove('active2');
  a = true;
}

let i = 0;
let a = true;


btn5.addEventListener('click', () => {
  if (a !== true) {
    return;
  }
  desH1.classList.add('active2');
  setTimeout(remove,2000);
  i++;
  c.textContent = `Count ${i}`;
  a = false;
});


showHokkaidouBtn.addEventListener('click', () => {
  hokkaidouImg.classList.toggle('hokkaidou');
});

function show1() {
  last.classList.add('active');
}
function unShow() {
  last.classList.remove('active');
}
function removeActive3() {
  last.classList.remove('active3');
}

lastBtn.addEventListener('click', () => {
  last.classList.add('active3');
  setTimeout(show1,10);
});
LB.addEventListener('click', () => {
  unShow();
  setTimeout(removeActive3,1010);
});


Myicon.addEventListener('click', () => { 
  Myicon.classList.toggle('fa-spin');
});

show.addEventListener('click', () => {
  if (main.className === 'menu-open') {
    main.className = '';
  } else {
    main.className = 'menu-open';
  }
});

}
