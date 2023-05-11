import React from 'react'
import AndroidApp from './AndroidApp'
import OurResults from './OurResults'
import OfflineCenter from './OfflineCenter'
import Table from './Table'
import Home1 from './hero/Home1'
import Navbar from './Navbar'
import Testimonial from './Testimonial'
function Home() {
  return (
    <>
      <Navbar />
      <Home1 />
      <AndroidApp />
      <OurResults />
      <OfflineCenter />
      <Testimonial />
      <Table />
    </>
  )
}

export default Home
