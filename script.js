'use strict';

// navbar variables
const nav = document.querySelector('.mobile-nav');
const navMenuBtn = document.querySelector('.nav-menu-btn');
const navCloseBtn = document.querySelector('.nav-close-btn');
const extend  = document.querySelector('.extend');

let currentProjects = 3;
extend.addEventListener('click', (e)=>{
  const projectList = [...document.querySelectorAll('.post li')];
  e.target.classList.add('show-loader');

  for(let i = currentProjects; i < currentProjects + 3; i++){
    setTimeout(function(){
      e.target.classList.remove('show-loader');
      if(projectList[i]){
        projectList[i].style.display = 'flex';
      }
    }, )
  }
  currentProjects += 3;

  //hide extend button after fully loaded
  if(currentProjects >= projectList.length){
    event.target.classList.add('loaded');
  }

});



// navToggle function
const navToggleFunc = function () { nav.classList.toggle('active'); }

navMenuBtn.addEventListener('click', navToggleFunc);
navCloseBtn.addEventListener('click', navToggleFunc);

// theme toggle variables
const themeBtn = document.querySelectorAll('.theme-btn');


for (let i = 0; i < themeBtn.length; i++) {

  themeBtn[i].addEventListener('click', function () {

    // toggle `light-theme` & `dark-theme` class from `body`
    // when clicked `theme-btn`
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    for (let i = 0; i < themeBtn.length; i++) {

      // When the `theme-btn` is clicked,
      // it toggles classes between `light` & `dark` for all `theme-btn`.
      themeBtn[i].classList.toggle('light');
      themeBtn[i].classList.toggle('dark');
    }
  })
}

// scroll up button
const scrollUpBtn = document.querySelector('.scroll-up-btn');

window.onscroll = () => {
  if (window.scrollY > 400) {
    scrollUpBtn.classList.add('show');

  } else {
    scrollUpBtn.classList.remove('show');
  }
};

// Scroll to top button

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function scrollToDown() {
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}
