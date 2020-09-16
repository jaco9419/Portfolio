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
const a = document.createElement('a');
const p = document.createElement('p');

portfolioItems.map(item => {
  portfolio.innerHTML += `
  <a
          href=${item.href}
          class="portfolio__item"
          target="_blank"
        >
          <p class="portfolio__description">
            Netflix Land Page<br /><br />HTML, CSS, Javascript
          </p>
          <img
            src=${item.src}
            alt="Netflix-Land-Page Project"
            class="portfolio__img"
          />
        </a>
  `
})

//a.innerHTML = `<p>${portfolioItems[0].href}</p>`

// a.setAttribute('href', portfolioItems[0].href);
// a.setAttribute('class', 'portfolio__item');
// a.setAttribute('target', '_blank');
// p.setAttribute('class', 'portfolio__description');
// a.appendChild(p);
//portfolio.appendChild(a);

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
