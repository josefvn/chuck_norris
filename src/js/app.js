import('../scss/app.scss');
import config from './config';
import { Favorites, FAVORITES_UPDATED } from "./favorites";
import { fetchRandomJokes } from './jokeService';
import { JOKE_SELECT_CHANGE, JokeView } from './jokeView';
import { Tabs } from "./tabs";
import { clearNotifications, initialiseNotifications, makeNotification } from "./notification";

/**
 * @type {Favorites} Favorites data store
 */
let favorites;

/**
 * @type {Array} Currently fetched jokes
 */
let jokes = [];

/**
 * @type {JokeView} Joke view
 */
let jokeView;

/**
 * @type {JokeView} Favorites view
 */
let favoritesView;

/**
 * @type {Tabs} Tabs component
 */
let tabs;

/**
 * @type {HTMLElement} Refresh button
 */
let refreshButton;

/**
 * Updates favorites view as favorites are added/removed
 */
function updateFavoritesFeed() {
  if (favorites.all().length === 0) {
    const favoriteSection = document.querySelector('#favorite_section');
    favoriteSection.innerHTML = makeNotification('You do not currently have any favorites...');
    return;
  }

  favoritesView.update(
    favorites.all().map(
      item => ({ id: item.id, joke: item.text, checked: true })
    )
  );
}

/**
 * Synchronizes ticks on the Chuck feed as favorites are added/removed from the favorites tab
 */
function updateChuckFeedTicks() {
  const jokeSection = document.querySelector('#joke_section');
  const inputs = [...jokeSection.querySelectorAll('input[type=checkbox]')];

  inputs.forEach(input => {
    input.checked = favorites.all().find(favorite => favorite.id === parseInt(input.value, 10));
  });
}

/**
 * Load button click handler.
 */
async function handleLoadButtonClick() {
  refreshButton.classList.add('is-loading');
  jokes = await fetchRandomJokes(config.api.limit);
  jokeView.update(jokes);
  updateChuckFeedTicks();
  refreshButton.classList.remove('is-loading');
  clearNotifications();
}

/**
 * Initialise application event listeners
 */
function initialiseListeners() {
  refreshButton.addEventListener('click', handleLoadButtonClick);

  addEventListener(
    JOKE_SELECT_CHANGE,
    ({ detail }) => favorites[detail.checked ? 'add' : 'remove'](detail.value, detail.text)
  );

  addEventListener(FAVORITES_UPDATED, updateFavoritesFeed);
  addEventListener(FAVORITES_UPDATED, updateChuckFeedTicks);
}

/**
 * Initialise the application
 */
function initialiseApplication() {
  refreshButton = document.querySelector('#load_button');

  jokeView = new JokeView(
    document.querySelector('#joke_template'),
    document.querySelector('#joke_section')
  );

  favoritesView = new JokeView(
    document.querySelector('#joke_template'),
    document.querySelector('#favorite_section')
  );

  tabs = new Tabs(document.querySelector('#chuck-tabs'));
  favorites = new Favorites();

  initialiseListeners();
  initialiseNotifications();
  updateFavoritesFeed();
}

initialiseApplication();
