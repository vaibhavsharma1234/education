import Navbar from './compt from 'react'
import{
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import CoursesFor10th from './components/CoursesFor10th';
import CousesForOthersInBoards from './components/CousesForOthersInBoards';
import Chapters from './components/Chapters';

function App() {
  return (
    <>
    {/* <Navbar /> */}
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/courses" element={<CoursesFor10th/>}/>
        <Route exact path="/coursesfor" element={<CousesForOthersInBoards/>}/>
        <Route exact path="/chapters" element={<Chapters/>}/>
      </Routes>
    </Router>
    </>


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
