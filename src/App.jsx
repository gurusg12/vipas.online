import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import NavBar from './Components/NavBar'
import About from './Pages/About'
import Services from './Pages/Service'
import Our_Website from './Pages/Our_Website'
import { Contact } from './Pages/Contact'

const App = () => {
  return (
    <div className="h-screen w-screen bg-slate-800 ">
      <div><NavBar/></div>

    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services />} />
        <Route path="/ourWebsite" element={<Our_Website />} />
        <Route path="/conatct" element={<Contact />} />
      </Routes>
    </div>
  )
}


export default App