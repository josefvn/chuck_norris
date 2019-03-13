/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + chunkId + ".app.js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							var error = new Error('Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')');
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"./src/js/config.js\");\n/* harmony import */ var _favorites__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./favorites */ \"./src/js/favorites.js\");\n/* harmony import */ var _jokeService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jokeService */ \"./src/js/jokeService.js\");\n/* harmony import */ var _jokeView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jokeView */ \"./src/js/jokeView.js\");\n/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabs */ \"./src/js/tabs.js\");\n/* harmony import */ var _notification__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notification */ \"./src/js/notification.js\");\n/* harmony import */ var _session__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./session */ \"./src/js/session.js\");\nPromise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.t.bind(null, /*! ../scss/app.scss */ \"./src/scss/app.scss\", 7));\n\n\n\n\n\n\n\n\n/**\n * @type {Favorites} Favorites data store\n */\nlet favorites;\n\n/**\n * @type {HTMLElement} Counter indicating the number of favorites\n */\nlet favoritesCounter;\n\n/**\n * @type {JokeView} Favorites view\n */\nlet favoritesView;\n\n/**\n * @type {Array} Currently fetched jokes\n */\nlet jokes = [];\n\n/**\n * @type {JokeView} Joke view\n */\nlet jokeView;\n\n/**\n * @type {HTMLInputElement}\n */\nlet randomizeCheckbox;\n\n/**\n * @type {number} Timer interval reference\n */\nlet randomizeInterval = -1;\n\n/**\n * @type {HTMLElement} Refresh button\n */\nlet refreshButton;\n\n/**\n * @type {Session} User session management\n */\nlet session;\n\n/**\n * @type {Tabs} Tabs component\n */\nlet tabs;\n\n/**\n * Updates favorites view as favorites are added/removed\n */\nfunction updateFavoritesFeed() {\n  favoritesCounter.innerHTML = favorites.all().length;\n\n  if (favorites.all().length === 0) {\n    const favoriteSection = document.querySelector('#favorite_section');\n    favoriteSection.innerHTML = Object(_notification__WEBPACK_IMPORTED_MODULE_5__[\"makeNotification\"])('You do not currently have any favorites...');\n    return;\n  }\n\n  favoritesView.update(\n    favorites.all().map(\n      item => ({ id: item.id, joke: item.text, checked: true })\n    )\n  );\n\n  const maxFavoritesReached = favorites.all().length >= 10;\n  if (maxFavoritesReached) {\n    randomizeCheckbox.parentElement.setAttribute('disabled', true);\n  } else {\n    randomizeCheckbox.parentElement.removeAttribute('disabled');\n  }\n  randomizeCheckbox.disabled = maxFavoritesReached;\n}\n\n/**\n * Synchronizes ticks on the Chuck feed as favorites are added/removed from the favorites tab\n */\nfunction updateChuckFeedTicks() {\n  const jokeSection = document.querySelector('#joke_section');\n  const inputs = [...jokeSection.querySelectorAll('input[type=checkbox]')];\n\n  inputs.forEach(input => {\n    input.checked = favorites.all().find(favorite => favorite.id === parseInt(input.value, 10));\n  });\n}\n\n/**\n * Turns randomization of favorites on/off\n */\nfunction handleChangeRandomizeFavorites() {\n  if (randomizeInterval > -1) clearInterval(randomizeInterval);\n  if (randomizeCheckbox.checked) {\n    randomizeInterval = setInterval(handleRandomizeInterval, _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].randomiseInterval);\n  }\n}\n\n/**\n * Load button click handler.\n */\nasync function handleLoadButtonClick() {\n  refreshButton.classList.add('is-loading');\n  jokes = await Object(_jokeService__WEBPACK_IMPORTED_MODULE_2__[\"fetchRandomJokes\"])(_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.limit);\n  jokeView.update(jokes);\n  updateChuckFeedTicks();\n  refreshButton.classList.remove('is-loading');\n  Object(_notification__WEBPACK_IMPORTED_MODULE_5__[\"clearNotifications\"])();\n}\n\n/**\n * Fired when it's time to fetch a random joke\n * TODO: Don't fetch if previous joke request is still 'pending'\n */\nasync function handleRandomizeInterval() {\n  const { id, joke } = (await Object(_jokeService__WEBPACK_IMPORTED_MODULE_2__[\"fetchRandomJokes\"])(1))[0];\n  favorites.add(id, joke);\n}\n\n/**\n * Initialise application event listeners\n */\nfunction initialiseListeners() {\n  refreshButton.addEventListener('click', handleLoadButtonClick);\n\n  addEventListener(\n    _jokeView__WEBPACK_IMPORTED_MODULE_3__[\"JOKE_SELECT_CHANGE\"],\n    ({ detail }) => favorites[detail.checked ? 'add' : 'remove'](detail.value, detail.text)\n  );\n\n  addEventListener(_favorites__WEBPACK_IMPORTED_MODULE_1__[\"FAVORITES_UPDATED\"], updateFavoritesFeed);\n  addEventListener(_favorites__WEBPACK_IMPORTED_MODULE_1__[\"FAVORITES_UPDATED\"], updateChuckFeedTicks);\n\n  randomizeCheckbox.addEventListener('change', handleChangeRandomizeFavorites);\n}\n\n/**\n * Initialise the application\n */\nfunction initialiseApplication() {\n  favoritesCounter = document.querySelector('.favorites-counter');\n  randomizeCheckbox = document.querySelector('#randomize_favorites');\n  refreshButton = document.querySelector('#load_button');\n\n  jokeView = new _jokeView__WEBPACK_IMPORTED_MODULE_3__[\"JokeView\"](\n    document.querySelector('#joke_template'),\n    document.querySelector('#joke_section')\n  );\n\n  favoritesView = new _jokeView__WEBPACK_IMPORTED_MODULE_3__[\"JokeView\"](\n    document.querySelector('#joke_template'),\n    document.querySelector('#favorite_section')\n  );\n\n  tabs = new _tabs__WEBPACK_IMPORTED_MODULE_4__[\"Tabs\"](document.querySelector('#chuck-tabs'));\n  favorites = new _favorites__WEBPACK_IMPORTED_MODULE_1__[\"Favorites\"]();\n  session = new _session__WEBPACK_IMPORTED_MODULE_6__[\"Session\"]();\n\n  initialiseListeners();\n  Object(_notification__WEBPACK_IMPORTED_MODULE_5__[\"initialiseNotifications\"])();\n  updateFavoritesFeed();\n\n  // Cheating a bit to reduce FOUC.\n  setTimeout(() => document.body.style.display = 'block', 100);\n}\n\ninitialiseApplication();\n\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/config.js":
/*!**************************!*\
  !*** ./src/js/config.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  api: {\n    /**\n     * @type {string} ICNDb APi endpoint\n     */\n    endpoint: 'https://api.icndb.com',\n\n    /**\n     * @type {number} Number of jokes to load\n     */\n    limit: 10,\n  },\n\n  /**\n   * @type {number} Number of milliseconds between favorite randomization\n   */\n  randomiseInterval: 5000,\n});\n\n\n//# sourceURL=webpack:///./src/js/config.js?");

/***/ }),

/***/ "./src/js/favorites.js":
/*!*****************************!*\
  !*** ./src/js/favorites.js ***!
  \*****************************/
/*! exports provided: FAVORITES_UPDATED, Favorites */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FAVORITES_UPDATED\", function() { return FAVORITES_UPDATED; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Favorites\", function() { return Favorites; });\nconst FAVORITES_STORAGE_KEY = 'favorites';\nconst FAVORITES_UPDATED = 'favorites-updated';\n\n/**\n * Class for maintaining favorites.\n */\nclass Favorites {\n  /**\n   * @param {number} limit Number of items to limit the favorites list to.\n   */\n  constructor(limit = 10) {\n    this.limit = limit;\n    this.favorites = JSON.parse(localStorage.getItem(FAVORITES_STORAGE_KEY)) || [];\n  }\n\n  /**\n   * @returns {[]}\n   */\n  all() {\n    return this.favorites;\n  }\n\n  /**\n   * Adds a favorite\n   * @param {string|number} id\n   * @param {string} text\n   */\n  add(id, text) {\n    if (this.has(id)) return;\n\n    this.favorites.push({\n      id: parseInt(id, 10),\n      text\n    });\n\n    if (this.favorites.length > this.limit) {\n      this.favorites.shift();\n    }\n\n    this.store();\n    dispatchEvent(new Event(FAVORITES_UPDATED));\n  }\n\n  /**\n   * Indicates whether a favorite with the given id exists.\n   * @param {string|number} id\n   * @returns {boolean}\n   */\n  has(id) {\n    return this.favorites.some(item => item.id === parseInt(id, 10));\n  }\n\n  /**\n   * Removes a favorite by id.\n   * @param {number|string} id\n   */\n  remove(id) {\n    const index = this.favorites.findIndex(item => item.id === parseInt(id, 10));\n    this.favorites.splice(index, 1);\n    this.store();\n    dispatchEvent(new Event(FAVORITES_UPDATED));\n  }\n\n  /**\n   * Commit the favorites to localStorage\n   */\n  store() {\n    localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(this.favorites));\n  }\n}\n\n\n//# sourceURL=webpack:///./src/js/favorites.js?");

/***/ }),

/***/ "./src/js/jokeService.js":
/*!*******************************!*\
  !*** ./src/js/jokeService.js ***!
  \*******************************/
/*! exports provided: fetchRandomJokes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchRandomJokes\", function() { return fetchRandomJokes; });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"./src/js/config.js\");\n\n\n/**\n * Remotely fetches random jokes.\n * @param {number} limit\n * @returns {Promise<*>}\n */\nasync function fetchRandomJokes(limit) {\n  let result;\n  try {\n    result = await fetch(`${_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.endpoint}/jokes/random/${limit}`)\n  } catch (err) {\n    alert('Attempt to load jokes failed!');\n  }\n  return (await result.json()).value;\n}\n\n\n//# sourceURL=webpack:///./src/js/jokeService.js?");

/***/ }),

/***/ "./src/js/jokeView.js":
/*!****************************!*\
  !*** ./src/js/jokeView.js ***!
  \****************************/
/*! exports provided: JOKE_SELECT_CHANGE, JokeView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"JOKE_SELECT_CHANGE\", function() { return JOKE_SELECT_CHANGE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"JokeView\", function() { return JokeView; });\nconst JOKE_SELECT_CHANGE = 'joke_select_change';\n\n/**\n * Class for maintaining a joke list view.\n */\nclass JokeView {\n  /**\n   * @param {HTMLElement} template\n   * @param {HTMLElement} target\n   */\n  constructor(template, target) {\n    this.template = template;\n    this.target = target;\n    this.target.addEventListener('change', this.handleJokeSelectChange);\n  }\n\n  /**\n   * @param {HTMLElement} target\n   * @param {string} text\n   * @param {string} id\n   * @param {boolean} checked\n   */\n  appendJoke(target, text, id, checked = false) {\n    target.innerHTML += this.template.innerHTML\n      .replace(/{joke}/g, text)\n      .replace('{id}', id)\n      .replace(/{checked}/g, checked ? 'checked' : '');\n  }\n\n  /**\n   * Clear current jokes.\n   */\n  clearJokes() {\n    return this.target.innerHTML = '';\n  }\n\n  /**\n   * Update jokes with the given jokes array.\n   * @param {{joke: string}[]} jokesArray\n   */\n  update(jokesArray) {\n    this.clearJokes();\n    jokesArray.forEach(data => this.appendJoke(this.target, data.joke, data.id, data.checked || false));\n  }\n\n  /**\n   * @param {string} value\n   * @param {boolean} checked\n   * @param {{text: string}} dataset\n   */\n  handleJokeSelectChange({ target: { value, checked, dataset } }) {\n    dispatchEvent(new CustomEvent(JOKE_SELECT_CHANGE, {\n      detail: { value, checked, text: dataset.text }\n    }));\n  }\n}\n\n\n//# sourceURL=webpack:///./src/js/jokeView.js?");

/***/ }),

/***/ "./src/js/notification.js":
/*!********************************!*\
  !*** ./src/js/notification.js ***!
  \********************************/
/*! exports provided: initialiseNotifications, clearNotifications, makeNotification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialiseNotifications\", function() { return initialiseNotifications; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearNotifications\", function() { return clearNotifications; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"makeNotification\", function() { return makeNotification; });\nconst initialiseNotifications = () => {\n  const notifications = [...document.querySelectorAll('.notification > button.delete')];\n  notifications.forEach(button => {\n    button.addEventListener('click', () => button.parentElement.remove());\n  })\n};\n\nconst clearNotifications = () => {\n  const notifications = [...document.querySelectorAll('.notification')];\n  notifications.forEach(item => item.remove());\n};\n\nconst makeNotification = notification => `\n    <div class=\"notification\">\n      <span>${notification}</span>\n    </div>\n`;\n\n\n//# sourceURL=webpack:///./src/js/notification.js?");

/***/ }),

/***/ "./src/js/session.js":
/*!***************************!*\
  !*** ./src/js/session.js ***!
  \***************************/
/*! exports provided: Session */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Session\", function() { return Session; });\n/* harmony import */ var _validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validators */ \"./src/js/validators.js\");\n\n\nclass Session {\n  constructor() {\n    this.loginModal = document.querySelector('#login_modal');\n    this.loginButton = document.querySelector('#login_button');\n    this.username = document.querySelector('#username');\n    this.password = document.querySelector('#password');\n    this.passwordHelp = document.querySelector('#password_help');\n    this.usernameHelp = document.querySelector('#username_help');\n\n    this.loginButton.addEventListener('click', this.handleSubmit.bind(this));\n    this.login();\n  }\n\n  /**\n   * Handles login submit\n   */\n  handleSubmit(event) {\n    event.preventDefault();\n\n    const validPassword = this.validatePassword(this.password.value);\n    const validUsername = this.validateUsername(this.username.value);\n\n    if (validPassword && validUsername) {\n      localStorage.setItem('username', this.username.value);\n      this.loginModal.classList.remove('is-active');\n    }\n  }\n\n  /**\n   * Indicates whether a user has logged in.\n   * @returns {boolean}\n   */\n  isLoggedIn() {\n    return !!localStorage.getItem('username');\n  }\n\n  /**\n   * Starts the login process\n   */\n  login() {\n    if (this.isLoggedIn()) return;\n    this.loginModal.classList.add('is-active');\n  }\n\n  /**\n   * Validate username and set errors\n   * @param {string} username\n   * @returns {boolean}\n   */\n  validateUsername(username) {\n    const errors = [];\n\n    if (username === '') {\n      errors.push(`<li>Username is required</li>`);\n    }\n\n    this.usernameHelp.innerHTML = errors.join('');\n    this.username.classList[errors.length ? 'add' : 'remove']('is-danger');\n\n    return errors.length === 0;\n  }\n\n  /**\n   * Validate password and set errors\n   * @param {string} password\n   * @returns {boolean}\n   */\n  validatePassword(password) {\n    const errors = [];\n\n    // Check for empty password\n    if (!password) {\n      errors.push(`<li>Password cannot be empty</li>`);\n    }\n\n    // Check for max password length exceeded\n    if (password.length > 32) {\n      errors.push(`<li>Password is too long</li>`);\n    }\n\n    // Allow lowercase alphabetic characters only\n    if (!Object(_validators__WEBPACK_IMPORTED_MODULE_0__[\"lcAlphaOnly\"])(password)) {\n      errors.push(`<li>Lowercase alphabetic characters only</li>`);\n    }\n\n    // Disallow i, O, l\n    if (Object(_validators__WEBPACK_IMPORTED_MODULE_0__[\"containsIOL\"])(password)) {\n      errors.push(`<li>May not contain  i, O, or l.</li>`);\n    }\n\n    // Require 3x sequential characters\n    if (!Object(_validators__WEBPACK_IMPORTED_MODULE_0__[\"has3xSequence\"])(password)) {\n      errors.push(`<li>Must contain 3x sequential alphabetic characters</li>`)\n    }\n\n    // Require at least 1x doubles aa, bb, cc etc.\n    if (!Object(_validators__WEBPACK_IMPORTED_MODULE_0__[\"hasDoubleCharacters\"])(password)) {\n      errors.push(`<li>Must contain at least one double pair</li>`)\n    }\n\n    this.password.classList[errors.length ? 'add' : 'remove']('is-danger');\n    this.passwordHelp.innerHTML = errors.join('');\n\n    return errors.length === 0;\n  }\n}\n\n\n//# sourceURL=webpack:///./src/js/session.js?");

/***/ }),

/***/ "./src/js/tabs.js":
/*!************************!*\
  !*** ./src/js/tabs.js ***!
  \************************/
/*! exports provided: Tabs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Tabs\", function() { return Tabs; });\nclass Tabs {\n  /**\n   * @param {HTMLElement} target\n   */\n  constructor(target) {\n    this.target = target;\n    this.tabButtons = this.target.querySelectorAll('.tab');\n\n    // Add event tab 'click' event listeners\n    [...this.tabButtons].forEach(tab => {\n      tab.addEventListener('click', this.handleTabClick.bind({ tab, instance: this }));\n    });\n  }\n\n  hideAllTabContent() {\n    [...this.tabButtons].forEach(tab => {\n      const id = `#${tab.dataset.tabContent}`;\n      const tabContent = document.querySelector(id);\n      tabContent.classList.add('is-hidden');\n    });\n  }\n\n  /**\n   * @param {string} tabId\n   */\n  showTabContent(tabId) {\n    document.querySelector(`#${tabId}`).classList.remove('is-hidden');\n  }\n\n  handleTabClick() {\n    // Switch tab is-active class\n    [...this.instance.tabButtons].forEach(tab => tab.classList.remove('is-active'));\n    this.tab.classList.add('is-active');\n\n    // Show/hide respective tab content\n    this.instance.hideAllTabContent();\n    this.instance.showTabContent(this.tab.dataset.tabContent);\n  }\n}\n\n\n//# sourceURL=webpack:///./src/js/tabs.js?");

/***/ }),

/***/ "./src/js/validators.js":
/*!******************************!*\
  !*** ./src/js/validators.js ***!
  \******************************/
/*! exports provided: hasDoubleCharacters, has3xSequence, lcAlphaOnly, containsIOL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hasDoubleCharacters\", function() { return hasDoubleCharacters; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"has3xSequence\", function() { return has3xSequence; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"lcAlphaOnly\", function() { return lcAlphaOnly; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"containsIOL\", function() { return containsIOL; });\nconst hasDoubleCharacters = s => {\n  for (let i = 0; i <= s.length - 2; i++) {\n    if (s[i] === s[i + 1]) return true;\n  }\n  return false;\n};\n\nconst has3xSequence = s => {\n  for (let i = 0; i <= s.length - 3; i++) {\n    if (s.charCodeAt(i) + 1 === s.charCodeAt(i + 1) && s.charCodeAt(i + 1) + 1 === s.charCodeAt(i + 2)) {\n      return true;\n    }\n  }\n  return false;\n};\n\nconst lcAlphaOnly = s => !!s.match(/^[a-z]+$/);\n\nconst containsIOL = s => !!s.match(/[iOl]/g);\n\n\n//# sourceURL=webpack:///./src/js/validators.js?");

/***/ })

/******/ });