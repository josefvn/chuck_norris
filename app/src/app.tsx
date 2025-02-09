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
        className='-mt-16 opacity-25'
        src='/chuck_400px.png'
        height={200}
        width={200}
      />
      <Typography variant='h1'>Chuck Norris Jokes</Typography>
      <hr className="border-t border-gray-300 w-md"/>

      <div className="my-8">
        <Button onClick={handleFetchJokesClick}>Fetch me a joke!</Button>
      </div>

      <div className="h-16 mx-16 text-center">
        {isFetching && <Typography>Loading...</Typography>}

        {!isFetching && data &&
          <Typography>{data}</Typography>
        }
      </div>
    </main>
  )
}

export { App }
