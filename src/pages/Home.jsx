import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActionArea,
} from '@mui/material'
import { Link } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

const services = [
  {
    title: 'ソフトウェア開発・Web制作',
    path: '/software',
    desc: '業務支援アプリやホームページ制作などをトータルで対応'
  },
  {
    title: 'システム研究・開発',
    path: '/research',
    desc: 'AI連携や分散技術を活用した高度なシステム開発'
  },
  {
    title: '動画配信・撮影・編集',
    path: '/video',
    desc: '配信・撮影から編集までワンストップでサポート'
  },
  {
    title: 'アプリ開発',
    path: '/appdev',
    desc: 'Webからモバイルまでマルチプラットフォームに対応'
  },
]

export default function Home() {
  return (
    <>
      <Header />
      <Box sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', py: 6, textAlign: 'center' }}>
        <Typography variant="h3" component="h1">
          YashubuStudio
        </Typography>
        <Typography variant="h6">最新技術を、もっと身近に、もっと確実に。</Typography>
      </Box>
      <Container sx={{ py: 4 }}>
        <Typography variant="h5" gutterBottom>
          実際の例・イメージ
        </Typography>
        <Box sx={{ bgcolor: 'grey.200', p: 4, textAlign: 'center', mb: 4 }}>
          <Typography>(ここに事例の画像が入ります)</Typography>
        </Box>
      </Container>
      <Container sx={{ py: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          サービス内容
        </Typography>
        <Grid container spacing={2}>
          {services.map((s) => (
            <Grid item xs={12} sm={6} md={3} key={s.path}>
              <Card>
                <CardActionArea component={Link} to={s.path} sx={{ height: '100%' }}>
                  <CardContent sx={{ textAlign: 'center' }}>
                    <Typography variant="h6" component="div" gutterBottom>
                      {s.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {s.desc}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </>
  )
}
