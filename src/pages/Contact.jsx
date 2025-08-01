import { Container, Typography, Button } from '@mui/material'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import { CONTACT_FORM_URL } from '../contactFormURL.js'

export default function Contact() {
  return (
    <>
      <Header />
      <Container sx={{ py: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          お問い合わせ
        </Typography>
        <Typography sx={{ mb: 2 }}>
          下記のフォームからお気軽にご連絡ください。
        </Typography>
        <iframe
          title="contact form"
          src={CONTACT_FORM_URL}
          width="100%"
          height="600"
          style={{ border: 0 }}
        />
        <Button variant="contained" color="primary" href={CONTACT_FORM_URL} sx={{ mt: 2 }}>
          フォームを開く
        </Button>
      </Container>
      <Footer />
    </>
  )
}
