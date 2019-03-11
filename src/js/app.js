import('../scss/app.scss');
import config from './config';

let appData = [];
let jokeTemplate, jokeSection, loadButton;

async function fetchRandomJokes() {
  let result;
  loadButton.classList.add('is-loading');
  try {
    result = await fetch(`${config.api.endpoint}/jokes/random/${config.api.limit}`)
  } catch (err) {
    console.error('Attempt to load jokes failed!');
  }
  appData = (await result.json()).value;
  updateDisplay(appData);
}

function updateDisplay(appData) {
  jokeSection.innerHTML = '';
  appData.forEach(data => {
    jokeSection.innerHTML += jokeTemplate.innerHTML.replace('{joke}', data.joke);
  });
  loadButton.classList.remove('is-loading');
}

function initApp() {
  jokeTemplate = document.querySelector('#joke_template');
  jokeSection = document.querySelector('#joke_section');
  loadButton = document.querySelector('#load_button');

  loadButton.addEventListener('click', fetchRandomJokes);
}

initApp();
