import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Software from './pages/Software.jsx'
import Research from './pages/Research.jsx'
import Video from './pages/Video.jsx'
import AppDev from './pages/AppDev.jsx'
import Services from './pages/Services.jsx'
import Contact from './pages/Contact.jsx'
import Flow from './pages/Flow.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/software" element={<Software />} />
        <Route path="/research" element={<Research />} />
        <Route path="/video" element={<Video />} />
        <Route path="/appdev" element={<AppDev />} />
        <Route path="/flow" element={<Flow />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
