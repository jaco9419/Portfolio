import { portfolioItems } from './data.js';

//Handle Menu

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    });
});

//Handle data for portfolio items

const portfolio = document.querySelector('.portfolio');

portfolioItems.map(item => {
  portfolio.innerHTML += `
  <a
          href=${item.href}
          class="portfolio__item"
          target="_blank"
        >
          <p class="portfolio__description">
            ${item.title}<br /><br />${item.technologies}
          </p>
          <img
            src=${item.src}
            alt=${item.title}
            class="portfolio__img"
          />
        </a>
  `
})

//Typing Effect

const message = document.querySelector('.section__subtitle--intro');
const words = ['software_developer    ', "let's_get_in_touch!    "];
let i = 0;
let timer;

function typingEffect() {
    let word = words[i].split('');
    var loopTyping = function () {
        if (word.length > 0) {
            message.innerHTML += word.shift();
        } else {
            deletingEffect();
            return false;
        }
        timer = setTimeout(loopTyping, 300);
    };
    loopTyping();
}

function deletingEffect() {
    let word = words[i].split('');
    var loopDeleting = function () {
        if (word.length > 0) {
            word.pop();
            message.innerHTML = word.join('');
        } else {
            if (words.length > i + 1) {
                i++;
            } else {
                i = 0;
            }
            typingEffect();
            return false;
        }
        timer = setTimeout(loopDeleting, 200);
    };
    loopDeleting();
}

typingEffect();
