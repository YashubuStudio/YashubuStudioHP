import { Container, Typography } from '@mui/material'

export default function Video() {
  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        動画配信・撮影・編集
      </Typography>
      <Typography>このページでは動画配信・撮影・編集の詳細を説明します。</Typography>
    </Container>
  )
}
