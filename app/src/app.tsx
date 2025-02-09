import './app.css'
import { useQuery } from '@tanstack/react-query'
import { getRandomJoke } from './api'
import { Button } from './ui/button'
import { Typography } from './ui/typography'

function App() {
  const { data, isFetching, refetch } = useQuery({
    queryKey: [ 'jokes' ],
    queryFn: getRandomJoke
  })

  const handleFetchJokesClick = async () => {
    await refetch()
  }

  return (
    <main className='flex flex-col gap-4 h-dvh items-center justify-center'>
      <img
        alt='Chuck Norris'
        className='m-4 opacity-25'
        src='/chuck_400px.png'
        height={200}
        width={200}
      />
      <Typography variant='h1'>Chuck Norris Jokes</Typography>
      <Button onClick={handleFetchJokesClick}>Fetch me some Jokes!</Button>

      {isFetching && <Typography>Loading...</Typography>}

      {!isFetching && data &&
        <Typography>{data}</Typography>
      }
    </main>
  )
}

export { App }
