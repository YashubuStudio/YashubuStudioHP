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
  { title: 'ソフトウェア開発・Web制作', path: '/software' },
  { title: 'システム研究・開発', path: '/research' },
  { title: '動画配信・撮影・編集', path: '/video' },
  { title: 'アプリ開発', path: '/appdev' },
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
        <Typography variant="h4" component="h2" gutterBottom>
          対応可能な業務内容
        </Typography>
        <Grid container spacing={2}>
          {services.map((s) => (
            <Grid item xs={12} sm={6} md={3} key={s.path}>
              <Card>
                <CardActionArea component={Link} to={s.path} sx={{ height: '100%' }}>
                  <CardContent>
                    <Typography variant="h6" component="div">
                      {s.title}
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
