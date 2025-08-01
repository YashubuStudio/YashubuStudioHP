import { Container, Typography } from '@mui/material'

export default function Software() {
  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        ソフトウェア開発・Web制作
      </Typography>
      <Typography>このページではソフトウェア開発・Web制作の詳細を説明します。</Typography>
    </Container>
  )
}
