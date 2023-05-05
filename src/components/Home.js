import React from 'react'
import AndroidApp from './AndroidApp'
import OurResults from './OurResults'
import OfflineCenter from './OfflineCenter'
import Table from './Table'
import About from './About'

function Home() {
  return (
    <>
    <div>
    <About/>
    <OurResults/>
    <OfflineCenter/>
    <Table/>
    <AndroidApp/>
    </div>
    </>
  )
}

export default Home