import AndroidApp from './components/AndroidApp'
import Navbar from './components/Navbar'
import Home from './components/hero/Home'
import OurResults from './components/OurResults'
import OfflineCenter from './components/OfflineCenter'
import Table from './components/Table'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <AndroidApp />
      <OurResults />
      <OfflineCenter />
      <Table />
    </div>
  )
}

export default App
