import { AppBar, Toolbar, Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
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
  )
}
