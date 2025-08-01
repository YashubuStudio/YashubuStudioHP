import { Container, Typography } from '@mui/material'

const items = [
  '検索エンジン、AI連携、P2P分散ネットワークなどの研究開発',
  '意味圧縮・全文検索・ノード構成の自動最適化といった応用分野に注力',
  '実験的・検証的なプロトタイピング支援も対応可能',
]

export default function Research() {
  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        システム研究・開発
      </Typography>
      <ul>
        {items.map((text) => (
          <li key={text}>
            <Typography component="span">{text}</Typography>
          </li>
        ))}
      </ul>
    </Container>
  )
}
