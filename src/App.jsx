import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Software from './pages/Software.jsx'
import Research from './pages/Research.jsx'
import Video from './pages/Video.jsx'
import AppDev from './pages/AppDev.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/software" element={<Software />} />
        <Route path="/research" element={<Research />} />
        <Route path="/video" element={<Video />} />
        <Route path="/appdev" element={<AppDev />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
