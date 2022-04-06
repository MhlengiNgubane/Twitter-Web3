import type { NextPage } from 'next'

const style = {
  wrapper: `flex justify=center h-screen w-screen select-none bg-[#15202b] text-white`,
  content: `max-w-[1400px] w-2/3 flex jus`
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
