import { Container, Typography } from '@mui/material'

const items = [
  'Webアプリからモバイルアプリまでマルチプラットフォームに対応',
  '要件定義・画面設計・バックエンド実装・クラウド連携を一貫支援',
  'PWA化や非同期処理、リアルタイムデータ表示などにも対応',
]

export default function AppDev() {
  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        アプリ開発
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
