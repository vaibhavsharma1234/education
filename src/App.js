import AndroidApp from './components/AndroidApp'
import Navbar from './components/Navbar'
import OurResults from './components/OurResults'
import OfflineCenter from './components/OfflineCenter'

function App() {
  return (
    <div className="App">
      <Navbar />
      <AndroidApp/>
      <OurResults/>
      <OfflineCenter/>
      
    </div>
  )
}

export default App
