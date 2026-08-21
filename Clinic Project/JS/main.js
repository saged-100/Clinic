'use strict';

const navToggle = document.querySelector('.nav-toggle');
const mainMenu = document.querySelector('#main-menu');
const dropdown = document.querySelector('.nav-dropdown');
const dropdownTrigger = document.querySelector('.nav-dropdown__trigger');

if (navToggle && mainMenu) {
  navToggle.addEventListener('click', () => {
    const menuIsOpen = mainMenu.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(menuIsOpen));
  });
}

if (dropdown && dropdownTrigger) {
  dropdownTrigger.addEventListener('click', () => {
    const dropdownIsOpen = dropdown.classList.toggle('is-open');
    dropdownTrigger.setAttribute('aria-expanded', String(dropdownIsOpen));
  });
}

document.addEventListener('click', (event) => {
  if (!dropdown || !dropdownTrigger) return;

  if (!dropdown.contains(event.target)) {
    dropdown.classList.remove('is-open');
    dropdownTrigger.setAttribute('aria-expanded', 'false');
  }
});