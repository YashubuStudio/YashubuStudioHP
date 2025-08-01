import { Container, Typography } from '@mui/material'

const items = [
  '社内業務の効率化を目的とした業務支援アプリケーションの開発',
  'オンライン申請や社内検索、帳票出力など日常業務を支えるシステム',
  '管理画面やホームページなどCMSや動的UIにも対応',
  '静的なHTML/CSSページからReactによるSPAまで幅広く対応',
]

export default function Software() {
  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        ソフトウェア開発・Web制作
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
