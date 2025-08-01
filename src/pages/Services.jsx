import { Container, Typography, Box, Link as MuiLink } from '@mui/material'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import { Link } from 'react-router-dom'

const services = [
  {
    title: 'ソフトウェア開発・Web制作',
    path: '/software',
    desc: '社内業務の効率化を目的とした業務支援アプリケーションの開発から、オンライン申請、社内検索、帳票出力など日常業務を支えるシステムまで幅広く対応します。管理画面やホームページなどCMSや動的UIにも対応し、静的なHTML/CSSページからReactによるSPAまでトータルにサポートします。'
  },
  {
    title: 'システム研究・開発',
    path: '/research',
    desc: '検索エンジン、AI連携、P2P分散ネットワークなど、先端技術の研究開発を行います。意味圧縮・全文検索・ノード構成の自動最適化といった応用分野にも注力し、実験的プロトタイピングにも柔軟に対応します。'
  },
  {
    title: '動画配信・撮影・編集',
    path: '/video',
    desc: 'ライブ配信や録画収録の技術支援から、セミナー・講演会・社内研修など現場での撮影まで幅広くサポートします。三脚・カメラ・マイク・照明など基本的な機材を一通り所持しており、動画編集も内容によりご相談可能です。'
  },
  {
    title: 'アプリ開発',
    path: '/appdev',
    desc: 'Webアプリからモバイルアプリまでマルチプラットフォームに対応します。要件定義から画面設計、バックエンド実装、クラウド連携まで一貫して支援し、PWA化や非同期処理、リアルタイムデータ表示など高度なニーズにも対応します。'
  }
]

export default function Services() {
  return (
    <>
      <Header />
      <Container sx={{ py: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          サービス内容
        </Typography>
        {services.map((s) => (
          <Box key={s.path} sx={{ mb: 4 }}>
            <Typography variant="h5" component={Link} to={s.path} sx={{ textDecoration: 'none', color: 'primary.main' }}>
              {s.title}
            </Typography>
            <Typography sx={{ mt: 1 }}>{s.desc}</Typography>
          </Box>
        ))}
      </Container>
      <Footer />
    </>
  )
}
