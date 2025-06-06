import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Navbar from './Components/Layout/Navbar'

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    </>
  )
}

export default App
