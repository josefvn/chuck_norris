export const JOKE_SELECT_CHANGE = 'joke_select_change';

/**
 * Class for maintaining a joke list view.
 */
export class JokeView {
  /**
   * @param {HTMLElement} template
   * @param {HTMLElement} target
   */
  constructor(template, target) {
    this.template = template;
    this.target = target;
    this.target.addEventListener('change', this.handleJokeSelectChange);
  }

  /**
   * @param {HTMLElement} target
   * @param {string} text
   */
  appendJoke(target, text, id) {
    target.innerHTML += this.template.innerHTML
      .replace(/{joke}/g, text)
      .replace('{id}', id);
  }

  /**
   * Clear current jokes.
   */
  clearJokes() {
    return this.target.innerHTML = '';
  }

  /**
   * Update jokes with the given jokes array.
   * @param {{joke: string}[]} jokesArray
   */
  update(jokesArray) {
    this.clearJokes();
    jokesArray.forEach(data => this.appendJoke(this.target, data.joke, data.id));
  }

  /**
   * @param {string} value
   * @param {boolean} checked
   * @param {{text: string}} dataset
   */
  handleJokeSelectChange({ target: { value, checked, dataset } }) {
    dispatchEvent(new CustomEvent(JOKE_SELECT_CHANGE, {
      detail: { value, checked, text: dataset.text }
    }));
  }
}
