'use strict';

const openBtn = document.querySelector('#open-btn');
const closeBtn = document.querySelector('#close-btn');
const mobileMenu = document.querySelector('#mobile-menu');

openBtn.addEventListener('click', () => {
  closeBtn.classList.remove('hidden');
  mobileMenu.classList.remove('hidden');
  openBtn.classList.add('hidden');
});

closeBtn.addEventListener('click', () => {
  closeBtn.classList.add('hidden');
  mobileMenu.classList.add('hidden');
  openBtn.classList.remove('hidden');
});
