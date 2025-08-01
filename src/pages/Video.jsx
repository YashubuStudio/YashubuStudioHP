import { Container, Typography } from '@mui/material'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

const items = [
  'ライブ配信や録画収録のサポート (YouTube Live / OBS / Zoom 等)',
  'セミナー・講演会・社内研修など現場での撮影・技術支援に対応',
  '三脚・カメラ・マイク・照明など基本的な機材を一通り所持',
  '動画編集も可能だが内容により要相談',
]

export default function Video() {
  return (
    <>
      <Header />
      <Container sx={{ py: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          動画配信・撮影・編集
        </Typography>
        <ul>
          {items.map((text) => (
            <li key={text}>
              <Typography component="span">{text}</Typography>
            </li>
          ))}
        </ul>
      </Container>
      <Footer />
    </>
  )
}
