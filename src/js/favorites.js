const FAVORITES = 'favorites';

/**
 * Class for maintaining favorites.
 */
export class Favorites {
  /**
   * @param {number} limit Number of items to limit the favorites list to.
   */
  constructor(limit = 10) {
    this.limit = limit;
    this.favorites = JSON.parse(localStorage.getItem(FAVORITES)) || [];
  }

  /**
   * Adds a favorite
   * @param {string|number} id
   * @param {string} text
   */
  add(id, text) {
    if (this.has(id)) return;

    this.favorites.push({
      id: parseInt(id, 10),
      text
    });

    if (this.favorites.length > this.limit) {
      this.favorites.shift();
    }

    this.store();
  }

  /**
   * Indicates whether a favorite with the given id exists.
   * @param {string|number} id
   * @returns {boolean}
   */
  has(id) {
    return this.favorites.some(item => item.id === parseInt(id, 10));
  }

  /**
   * Removes a favorite by id.
   * @param {number|string} id
   */
  remove(id) {
    const index = this.favorites.findIndex(item => item.id === parseInt(id, 10));
    this.favorites.splice(index, 1);
    this.store();
  }

  /**
   * Commit the favorites to localStorage
   */
  store() {
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }
}
