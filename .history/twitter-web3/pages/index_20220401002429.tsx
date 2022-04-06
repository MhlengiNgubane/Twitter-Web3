import type { NextPage } from 'next'

const style = {
  wrapper: `flex justify=center h-screen w-screen select-non bg-`
}

const Home: NextPage = () => {
  return (
    <div>
      <h2>Sidebar</h2>
      <h2>Feed</h2>
      <h2>widgets</h2>
    </div>
  )
}

export default Home
