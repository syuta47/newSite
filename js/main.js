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
const hokkaidouBtn = document.getElementById('h-btn');
const hokkaidouImg = document.querySelector('img[src="img/541.png"]');
const lastBtn = document.getElementById('message');
const last = document.getElementById('last');
const LB = document.getElementById('last-btn');


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

hokkaidouBtn.addEventListener('click', () => {
  hokkaidouImg.classList.toggle('hokkaidou');
});

lastBtn.addEventListener('click', () => {
  last.classList.add('active');
});
LB.addEventListener('click', () => {
  last.classList.remove('active');
});

}
