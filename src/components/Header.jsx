import { useState } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useTheme,
  useMediaQuery
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { Link } from 'react-router-dom'

const serviceLinks = [
  { label: 'ソフトウェア開発', path: '/software' },
  { label: 'システム研究', path: '/research' },
  { label: '動画配信', path: '/video' },
  { label: 'アプリ開発', path: '/appdev' }
]

const otherLinks = [
  { label: '納品までの流れ', path: '/flow' },
  { label: 'お問い合わせ', path: '/contact' }
]

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open)
  }

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
        {isMobile ? (
          <>
            <IconButton color="inherit" edge="end" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
              <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
                <List>
                  <ListItem button component={Link} to="/services">
                    <ListItemText primary="サービス内容" />
                  </ListItem>
                  {serviceLinks.map((s) => (
                    <ListItem button key={s.path} component={Link} to={s.path}>
                      <ListItemText primary={s.label} />
                    </ListItem>
                  ))}
                  {otherLinks.map((o) => (
                    <ListItem button key={o.path} component={Link} to={o.path}>
                      <ListItemText primary={o.label} />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Drawer>
          </>
        ) : (
          <>
            <Button
              color="inherit"
              onMouseEnter={handleMenuOpen}
              onClick={handleMenuOpen}
              component={Link}
              to="/services"
              sx={{ mr: 1 }}
            >
              サービス内容
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              MenuListProps={{ onMouseLeave: handleMenuClose }}
            >
              {serviceLinks.map((s) => (
                <MenuItem
                  key={s.path}
                  component={Link}
                  to={s.path}
                  onClick={handleMenuClose}
                >
                  {s.label}
                </MenuItem>
              ))}
            </Menu>
            {otherLinks.map((o) => (
              <Button color="inherit" component={Link} to={o.path} key={o.path}>
                {o.label}
              </Button>
            ))}
          </>
        )}
      </Toolbar>
    </AppBar>
  )
}
