import('../scss/app.scss');
import config from './config';
import {Favorites, FAVORITES_UPDATED} from "./favorites";
import {fetchRandomJokes} from './jokeService';
import {JOKE_SELECT_CHANGE, JokeView} from './jokeView';
import {Tabs} from "./tabs";
import {clearNotifications, initialiseNotifications, makeNotification} from "./notification";
import {Session} from './session';

/**
 * @type {Favorites} Favorites data store
 */
let favorites;

/**
 * @type {HTMLElement} Counter indicating the number of favorites
 */
let favoritesCounter;

/**
 * @type {JokeView} Favorites view
 */
let favoritesView;

/**
 * @type {Array} Currently fetched jokes
 */
let jokes = [];

/**
 * @type {JokeView} Joke view
 */
let jokeView;

/**
 * @type {HTMLInputElement}
 */
let randomizeCheckbox;

/**
 * @type {number} Timer interval reference
 */
let randomizeInterval = -1;

/**
 * @type {HTMLElement} Refresh button
 */
let refreshButton;

/**
 * @type {Session} User session management
 */
let session;

/**
 * @type {Tabs} Tabs component
 */
let tabs;

/**
 * Updates favorites view as favorites are added/removed
 */
function updateFavoritesFeed() {
  favoritesCounter.innerHTML = favorites.all().length;

  if (favorites.all().length === 0) {
    const favoriteSection = document.querySelector('#favorite_section');
    favoriteSection.innerHTML = makeNotification('You do not currently have any favorites...');
    return;
  }

  favoritesView.update(
    favorites.all().map(
      item => ({id: item.id, joke: item.text, checked: true})
    )
  );

  const maxFavoritesReached = favorites.all().length >= 10;
  if (maxFavoritesReached) {
    randomizeCheckbox.parentElement.setAttribute('disabled', true);
  } else {
    randomizeCheckbox.parentElement.removeAttribute('disabled');
  }
  randomizeCheckbox.disabled = maxFavoritesReached;
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
 * Turns randomization of favorites on/off
 */
function handleChangeRandomizeFavorites() {
  if (randomizeInterval > -1) clearInterval(randomizeInterval);
  if (randomizeCheckbox.checked) {
    randomizeInterval = setInterval(handleRandomizeInterval, config.randomiseInterval);
  }
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
 * Fired when it's time to fetch a random joke
 * TODO: Don't fetch if previous joke request is still 'pending'
 */
async function handleRandomizeInterval() {
  const {id, joke} = (await fetchRandomJokes(1))[0];
  favorites.add(id, joke);
}

/**
 * Initialise application event listeners
 */
function initialiseListeners() {
  refreshButton.addEventListener('click', handleLoadButtonClick);

  addEventListener(
    JOKE_SELECT_CHANGE,
    ({detail}) => favorites[detail.checked ? 'add' : 'remove'](detail.value, detail.text)
  );

  addEventListener(FAVORITES_UPDATED, updateFavoritesFeed);
  addEventListener(FAVORITES_UPDATED, updateChuckFeedTicks);

  randomizeCheckbox.addEventListener('change', handleChangeRandomizeFavorites);
}

/**
 * Initialise the application
 */
function initialiseApplication() {
  favoritesCounter = document.querySelector('.favorites-counter');
  randomizeCheckbox = document.querySelector('#randomize_favorites');
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
  session = new Session();

  initialiseListeners();
  initialiseNotifications();
  updateFavoritesFeed();

  // Cheating a bit to reduce FOUC.
  setTimeout(() => document.body.style.display = 'block', 100);
}

initialiseApplication();
