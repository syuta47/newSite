'use strict';

{

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const sh = document.getElementById('sh');
const sp = document.getElementById('sp');
const sm = document.getElementById('sm');
const sktImg = document.querySelector('.skt img');

btn1.addEventListener('click', () => {
  sh.classList.add('active');
});

btn2.addEventListener('click', () => {
  sp.classList.add('active');
});

btn3.addEventListener('click', () => {
  sm.classList.add('active');
});

btn4.addEventListener('click', () => {
  sktImg.classList.toggle('moved');
});

}