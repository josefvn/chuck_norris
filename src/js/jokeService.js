import config from './config';

/**
 * Remotely fetches random jokes.
 * @param {number} limit
 * @returns {Promise<*>}
 */
export async function fetchRandomJokes(limit) {
  let result;
  try {
    result = await fetch(`${config.api.endpoint}/jokes/random/${limit}`)
  } catch (err) {
    alert('Attempt to load jokes failed!');
  }
  return (await result.json()).value;
}
