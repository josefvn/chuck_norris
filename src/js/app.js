import('../scss/app.scss');
import config from './config';
import { fetchRandomJokes } from './jokeService';
import { JokeView } from './jokeView';
import { Tabs } from "./tabs";

/**
 * Currently fetched jokes.
 * @type {Array}
 */
let jokes = [];

/**
 * @type {JokeView}
 */
let jokeView;

/**
 * @type {Tabs}
 */
let tabs;

/**
 * HTML Element references
 * @type {HTMLElement}
 */
let loadButton;

/**
 * Load button click handler.
 */
async function handleLoadButtonClick() {
  loadButton.classList.add('is-loading');
  jokes = await fetchRandomJokes(config.api.limit);
  jokeView.update(jokes);
  loadButton.classList.remove('is-loading');
}

/**
 * Initialize the application
 */
function initApp() {
  // Cache HTML elements
  loadButton = document.querySelector('#load_button');

  // Add event listeners
  loadButton.addEventListener('click', handleLoadButtonClick);

  // Initialize the joke view/list
  jokeView = new JokeView(
    document.querySelector('#joke_template'),
    document.querySelector('#joke_section')
  );

  tabs = new Tabs(document.querySelector('#chuck-tabs'));
}

initApp();
