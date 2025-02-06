import config from './config';

/**
 * Remotely fetches random jokes.
 * @param {number} limit
 * @returns {Promise<*>}
 */
export async function fetchRandomJokes(limit) {
  const fetchPromises = [];

  for (let i = 0; i < limit; i++) {
    fetchPromises.push(fetch(`${config.api.endpoint}/jokes/random`).then(result => result.json()));
  }

  try {
    const results = await Promise.all(fetchPromises);
    return results.map(data => ({ id: data.id, joke: data.value }));
  } catch (err) {
    alert('Attempt to load jokes failed!');
    return [];
  }
}
