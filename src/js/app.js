import('../scss/app.scss');
import config from './config';
import { Favorites } from "./favorites";
import { fetchRandomJokes } from './jokeService';
import { JOKE_SELECT_CHANGE, JokeView } from './jokeView';
import { Tabs } from "./tabs";
import { initializeNotifications } from "./notification";

/**
 * @type {Favorites}
 */
let favorites;

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

  /**
   * Add items to favorites list.
   */
  addEventListener(
    JOKE_SELECT_CHANGE,
    ({ detail }) => favorites[detail.checked ? 'add' : 'remove'](detail.value, detail.text)
  );

  // Initialize tabs
  tabs = new Tabs(document.querySelector('#chuck-tabs'));

  // Initialize Favorites
  favorites = new Favorites();

  // Initialize notification
  initializeNotifications();
}

initApp();
