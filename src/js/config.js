export default {
  api: {
    /**
     * @type {string} ICNDb APi endpoint
     */
    endpoint: 'https://api.icndb.com',

    /**
     * @type {number} Number of jokes to load
     */
    limit: 10,
  },

  /**
   * @type {number} Number of milliseconds between favorite randomization
   */
  randomiseInterval: 5000,
}
