import { Joke } from '../types/api.ts'

const baseUrl = import.meta.env.VITE_API_BASE_URL

const getRandomJoke = async (): Promise<Joke> => {
  const response = await fetch(`${baseUrl}/jokes/random`)
  return await response.json()
}

export { getRandomJoke }
