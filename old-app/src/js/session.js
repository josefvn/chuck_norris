import { containsIOL, lcAlphaOnly, has3xSequence, hasDoubleCharacters } from "./validators";

export class Session {
  constructor() {
    this.loginModal = document.querySelector('#login_modal');
    this.loginButton = document.querySelector('#login_button');
    this.username = document.querySelector('#username');
    this.password = document.querySelector('#password');
    this.passwordHelp = document.querySelector('#password_help');
    this.usernameHelp = document.querySelector('#username_help');

    this.loginButton.addEventListener('click', this.handleSubmit.bind(this));
    this.login();
  }

  /**
   * Handles login submit
   */
  handleSubmit(event) {
    event.preventDefault();

    const validPassword = this.validatePassword(this.password.value);
    const validUsername = this.validateUsername(this.username.value);

    if (validPassword && validUsername) {
      localStorage.setItem('username', this.username.value);
      this.loginModal.classList.remove('is-active');
    }
  }

  /**
   * Indicates whether a user has logged in.
   * @returns {boolean}
   */
  isLoggedIn() {
    return !!localStorage.getItem('username');
  }

  /**
   * Starts the login process
   */
  login() {
    if (this.isLoggedIn()) return;
    this.loginModal.classList.add('is-active');
  }

  /**
   * Validate username and set errors
   * @param {string} username
   * @returns {boolean}
   */
  validateUsername(username) {
    const errors = [];

    if (username === '') {
      errors.push(`<li>Username is required</li>`);
    }

    this.usernameHelp.innerHTML = errors.join('');
    this.username.classList[errors.length ? 'add' : 'remove']('is-danger');

    return errors.length === 0;
  }

  /**
   * Validate password and set errors
   * @param {string} password
   * @returns {boolean}
   */
  validatePassword(password) {
    const errors = [];

    // Check for empty password
    if (!password) {
      errors.push(`<li>Password cannot be empty</li>`);
    }

    // Check for max password length exceeded
    if (password.length > 32) {
      errors.push(`<li>Password is too long</li>`);
    }

    // Allow lowercase alphabetic characters only
    if (!lcAlphaOnly(password)) {
      errors.push(`<li>Lowercase alphabetic characters only</li>`);
    }

    // Disallow i, O, l
    if (containsIOL(password)) {
      errors.push(`<li>May not contain  i, O, or l.</li>`);
    }

    // Require 3x sequential characters
    if (!has3xSequence(password)) {
      errors.push(`<li>Must contain 3x sequential alphabetic characters</li>`)
    }

    // Require at least 1x doubles aa, bb, cc etc.
    if (!hasDoubleCharacters(password)) {
      errors.push(`<li>Must contain at least one double pair</li>`)
    }

    this.password.classList[errors.length ? 'add' : 'remove']('is-danger');
    this.passwordHelp.innerHTML = errors.join('');

    return errors.length === 0;
  }
}
