import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Portifolio from './pages/portfolio/Portifolio'
import Contact from './pages/contact/Contact'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<Home/>} />
        <Route path='about' element={<About/>}/>
        <Route path='portfolio' element={<Portifolio/>}/>
        <Route path='contact' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
