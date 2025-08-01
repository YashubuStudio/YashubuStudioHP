import { Container, Typography } from '@mui/material'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

const steps = [
  'お問い合わせ',
  'ヒアリング・要件整理',
  'お見積り',
  '契約・開発開始',
  '確認・修正',
  '納品・サポート'
]

export default function Flow() {
  return (
    <>
      <Header />
      <Container sx={{ py: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          納品までの流れ
        </Typography>
        <ol>
          {steps.map((s) => (
            <li key={s}>
              <Typography component="span">{s}</Typography>
            </li>
          ))}
        </ol>
      </Container>
      <Footer />
    </>
  )
}
