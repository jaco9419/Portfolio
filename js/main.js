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

// portfolioItems.map(item => {
//   portfolio.innerHTML += `
//   <a
//           href=${item.href}
//           class="portfolio__item"
//           target="_blank"
//         >
//           <p class="portfolio__description">
//             ${item.title}<br /><br />${item.technologies}
//           </p>
//           <img
//             src=${item.src}
//             alt=${item.title}
//             class="portfolio__img"
//           />
//         </a>
//   `
// })

portfolioItems.map(item => {
    let string = '';
    string += `
    <div
            
            class="portfolio__item"
            
          >
            <p class="portfolio__description">
              <span class="underline">${item.title}</span><br /><br /><span class="technologies">${item.technologies}</span><br />
              
            </p>
            <div class="portfolio__links">`
     
    if (item.codepen) {
        string += `
        <a class="portfolio__link" href=${item.codepen} target="_blank"><i class="fab fa-codepen"></i></a>
        `
    }

    if (item.github) {
        string += `
        <a class="portfolio__link" href=${item.github} target="_blank"><i class="fab fa-github"></i></a>
        `
    }

    if (item.page) {
        string += `
        <a class="portfolio__link" href=${item.page} target="_blank"><i class="fas fa-external-link-alt"></i></a>
        `
    } 
            
    string +=`
            </div>
            <img
              src=${item.src}
              alt=${item.title}
              class="portfolio__img"
            />
          </div>
    `
    portfolio.innerHTML += string;
    console.log(string);
    return portfolio;
    
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
