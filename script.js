// Projects array
const projects = [
  {
    name: 'Project 1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aliquid cupiditate vitae tempore temporibus quo, eum pariatur. Neque sed ab in et architecto? In cumque obcaecati temporibus incidunt. A assumenda explicabo perspiciatis soluta tempora facilis suscipit culpa quo, alias nesciunt omnis similique quisquam fuga consectetur error laboriosam! Quis, quos repellendus.',
    image: ['./images/pop-up-image.svg', './images/snapshot-portfolio.svg'],
    technologies: ['codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Codepen'],
    live: 'https://vgonma.github.io/PersonalPortfolio/',
    github: 'https://github.com/Vgonma',
  },

  {
    name: 'Project 2',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aliquid cupiditate vitae tempore temporibus quo, eum pariatur. Neque sed ab in et architecto? In cumque obcaecati temporibus incidunt. A assumenda explicabo perspiciatis soluta tempora facilis suscipit culpa quo, alias nesciunt omnis similique quisquam fuga consectetur error laboriosam! Quis, quos repellendus.',
    image: ['./images/pop-up-image.svg', './images/snapshot-portfolio.svg'],
    technologies: ['codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Codepen'],
    live: 'https://vgonma.github.io/personalportfolio/',
    github: 'https://github.com/Vgonma',
  },

  {
    name: 'Project 3',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aliquid cupiditate vitae tempore temporibus quo, eum pariatur. Neque sed ab in et architecto? In cumque obcaecati temporibus incidunt. A assumenda explicabo perspiciatis soluta tempora facilis suscipit culpa quo, alias nesciunt omnis similique quisquam fuga consectetur error laboriosam! Quis, quos repellendus.',
    image: ['./images/pop-up-image.svg', './images/snapshot-portfolio.svg'],
    technologies: ['codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Codepen'],
    live: 'https://vgonma.github.io/personalportfolio/',
    github: 'https://github.com/Vgonma',
  },

  {
    name: 'Project 4',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aliquid cupiditate vitae tempore temporibus quo, eum pariatur. Neque sed ab in et architecto? In cumque obcaecati temporibus incidunt. A assumenda explicabo perspiciatis soluta tempora facilis suscipit culpa quo, alias nesciunt omnis similique quisquam fuga consectetur error laboriosam! Quis, quos repellendus.',
    image: ['./images/pop-up-image.svg', './images/snapshot-portfolio.svg'],
    technologies: ['codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Codepen'],
    live: 'https://vgonma.github.io/personalportfolio/',
    github: 'https://github.com/Vgonma',
  },

  {
    name: 'Project 5',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aliquid cupiditate vitae tempore temporibus quo, eum pariatur. Neque sed ab in et architecto? In cumque obcaecati temporibus incidunt. A assumenda explicabo perspiciatis soluta tempora facilis suscipit culpa quo, alias nesciunt omnis similique quisquam fuga consectetur error laboriosam! Quis, quos repellendus.',
    image: ['./images/pop-up-image.svg', './images/snapshot-portfolio.svg'],
    technologies: ['codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Codepen'],
    live: 'https://vgonma.github.io/personalportfolio/',
    github: 'https://github.com/Vgonma',
  },

  {
    name: 'Project 6',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aliquid cupiditate vitae tempore temporibus quo, eum pariatur. Neque sed ab in et architecto? In cumque obcaecati temporibus incidunt. A assumenda explicabo perspiciatis soluta tempora facilis suscipit culpa quo, alias nesciunt omnis similique quisquam fuga consectetur error laboriosam! Quis, quos repellendus.',
    image: ['./images/pop-up-image.svg', './images/snapshot-portfolio.svg'],
    technologies: ['codekit', 'GitHub', 'JavaScript', 'Bootstrap', 'Codepen'],
    live: 'https://vgonma.github.io/personalportfolio/',
    github: 'https://github.com/Vgonma',
  },
];
const body = document.querySelector('body');

const seeMore = document.querySelectorAll('.see-project-button');
seeMore.forEach((button) => {
  button.addEventListener('click', () => {
    const popUp = document.createElement('section');
    popUp.classList.add('pop-up', 'flex');
    popUp.innerHTML = `<div class="pop-up-container flex">
    <div class="disabled-button">
        <img src="./images/cross-grey.svg" alt="disabled-button">
    </div>
    <div class="mobile-project-image">
        <img src="./images/white-cross.svg" alt="disabled-button" class="white-cross">
        <img src="${projects[button.id].image[0]}" alt="project image">
    </div>
    <div class="desktop-project-image">
        <img src="${projects[button.id].image[1]}" alt="project image">
    </div>
    <h2 class="title">${projects[button.id].name}</h2>
    <ul class="tech-list flex">
    </ul>
    <p>
        ${projects[button.id].description}
    </p>
    <div class="pop-up-buttons flex">
      <a class="pop-up-button-link" href="${projects[button.id].live}" target="__blank"><button class="button">See Live <img src="./images/icon-see-live.svg" alt=""></button></a>
      <a class="pop-up-button-link" href="${projects[button.id].github}" target="__blank"><button class="button">See Source <img src="./images/icon-github-white.svg" alt=""></button></a>
    </div>
  </div>`;
    body.appendChild(popUp);
    const techList = document.querySelector('.tech-list');
    for (let i = 0; i < projects[button.id].technologies.length; i += 1) {
      const techItem = document.createElement('li');
      techItem.classList.add('infoListItem');
      techItem.innerHTML = projects[button.id].technologies[i];
      techList.appendChild(techItem);
    }

    const closeMobile = document.querySelector('.white-cross');
    const closeDesktop = document.querySelector('.disabled-button');
    closeMobile.addEventListener('click', () => {
      body.removeChild(popUp);
    });
    closeDesktop.addEventListener('click', () => {
      body.removeChild(popUp);
    });
  });
});

const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuItems = document.querySelectorAll('.mobile-menu ul li');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('mobile-menu-active');
  hamburger.classList.toggle('is-active');
});

mobileMenuItems.forEach((li) => {
  li.addEventListener('click', () => {
    mobileMenu.classList.remove('mobile-menu-active');
    hamburger.classList.remove('is-active');
  });
});

const form = document.querySelector('.contactForm');
const formName = document.querySelector('#name');
const email = document.querySelector('#email');
const commentArea = document.querySelector('.commentArea');
const submitMessage = document.createElement('small');

function validate() {
  const temp = email.value.toLowerCase();
  let i = 0;
  let valid = true;
  while (i < temp.length && valid) {
    if (temp[i] !== email.value[i]) {
      valid = false;
    }
    i += 1;
  }
  return valid;
}

form.addEventListener('submit', (e) => {
  const valid = validate();
  if (!valid) {
    e.preventDefault();
    submitMessage.classList.add('submit-message', 'error');
    submitMessage.innerText = 'Email should be lowercase';
    form.appendChild(submitMessage);
  } else {
    submitMessage.innerText = 'Form sent successfully';
    submitMessage.classList.add('valid');
  }
});

let storedData = {
  name: '',
  email: '',
  comments: '',
};

form.addEventListener('change', () => {
  storedData.name = formName.value;
  storedData.email = email.value;
  storedData.comments = commentArea.value;
  localStorage.setItem('formData', JSON.stringify(storedData));
});
