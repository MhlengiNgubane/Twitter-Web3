import Head from 'next/head' 4.4k (gzipped: 1.6)

const style = {
  wrapper: `flex justify-center h-screen w-screen select-none bg-[#15202b] text-white`,
  content: `max-w-[1400px] w-2/3 flex justify-between`
}

export default Home = () {
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <h2>Sidebar</h2>
        <h2>Feed</h2>
        <h2>widgets</h2>
      </div>
    </div>
  )
}


