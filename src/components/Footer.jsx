import { Box, Typography } from '@mui/material'

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', textAlign: 'center', py: 2 }}
    >
      <Typography variant="body2">&copy; 2024 YashubuStudio</Typography>
    </Box>
  )
}
