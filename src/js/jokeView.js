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
  }

  /**
   * @param {HTMLElement} target
   * @param {string} text
   */
  appendJoke(target, text) {
    target.innerHTML += this.template.innerHTML.replace('{joke}', text);
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
    jokesArray.forEach(data => this.appendJoke(this.target, data.joke));
  }
}
