const getRandomJoke = async () => {
  const response = await fetch('https://api.chucknorris.io/jokes/random')
  const data = await response.json()
  return data.value
}

export { getRandomJoke }
