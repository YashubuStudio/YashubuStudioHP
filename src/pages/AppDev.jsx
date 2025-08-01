import { Container, Typography } from '@mui/material'

export default function AppDev() {
  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        アプリ開発
      </Typography>
      <Typography>このページではアプリ開発の詳細を説明します。</Typography>
    </Container>
  )
}
