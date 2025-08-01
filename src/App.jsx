import './App.css'
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
} from '@mui/material'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Software from './pages/Software.jsx'
import Research from './pages/Research.jsx'
import Video from './pages/Video.jsx'
import AppDev from './pages/AppDev.jsx'

function App() {
  return (
    <BrowserRouter>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{ flexGrow: 1, color: 'inherit', textDecoration: 'none' }}
          >
            YashubuStudio
          </Typography>
          <Button color="inherit" component={Link} to="/software">
            ソフトウェア開発
          </Button>
          <Button color="inherit" component={Link} to="/research">
            システム研究
          </Button>
          <Button color="inherit" component={Link} to="/video">
            動画配信
          </Button>
          <Button color="inherit" component={Link} to="/appdev">
            アプリ開発
          </Button>
        </Toolbar>
      </AppBar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/software" element={<Software />} />
        <Route path="/research" element={<Research />} />
        <Route path="/video" element={<Video />} />
        <Route path="/appdev" element={<AppDev />} />
      </Routes>

      <Box
        component="footer"
        sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', textAlign: 'center', py: 2 }}
      >
        <Typography variant="body2">&copy; 2024 YashubuStudio</Typography>
      </Box>
    </BrowserRouter>
  )
}

export default App
