import './App.css'
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  List,
  ListItem,
  ListItemText,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  TableContainer,
} from '@mui/material'

function App() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            YashubuStudio
          </Typography>
          <Typography variant="body1">最新技術を、もっと身近に、もっと確実に。</Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" sx={{ py: 4 }}>
        <Box component="section" id="overview" sx={{ mb: 4 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            概要
          </Typography>
          <Typography paragraph>
            YashubuStudioは日本・愛知県を拠点に活動するテクノロジー系スタジオです。
            システム開発、Web制作、AI・自動化、動画配信まで幅広く対応し、個人事業主から
            中小企業までのデジタルニーズにお応えします。
          </Typography>
        </Box>

        <Box component="section" id="services" sx={{ mb: 4 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            主な事業内容
          </Typography>

          <Typography variant="h5" component="h3" gutterBottom>
            ソフトウェア開発・Web制作
          </Typography>
          <List dense>
            <ListItem><ListItemText primary="業務支援アプリケーションの開発" /></ListItem>
            <ListItem><ListItemText primary="オンライン申請や社内検索など日常業務を支えるシステム" /></ListItem>
            <ListItem><ListItemText primary="CMSや動的UIにも対応" /></ListItem>
            <ListItem><ListItemText primary="静的ページからReactによるSPAまで幅広く対応" /></ListItem>
          </List>

          <Typography variant="h5" component="h3" gutterBottom sx={{ mt: 2 }}>
            システム研究・開発
          </Typography>
          <List dense>
            <ListItem><ListItemText primary="検索エンジン、AI連携、P2P分散ネットワークの研究開発" /></ListItem>
            <ListItem><ListItemText primary="意味圧縮・全文検索・ノード構成の自動最適化" /></ListItem>
            <ListItem><ListItemText primary="実験的プロトタイピング支援" /></ListItem>
          </List>

          <Typography variant="h5" component="h3" gutterBottom sx={{ mt: 2 }}>
            動画配信・撮影・編集
          </Typography>
          <List dense>
            <ListItem><ListItemText primary="ライブ配信や録画収録のサポート" /></ListItem>
            <ListItem><ListItemText primary="セミナー・講演会・社内研修など現場での撮影支援" /></ListItem>
            <ListItem><ListItemText primary="動画編集は規模により要相談" /></ListItem>
          </List>

          <Typography variant="h5" component="h3" gutterBottom sx={{ mt: 2 }}>
            アプリ開発
          </Typography>
          <List dense>
            <ListItem><ListItemText primary="Webアプリからモバイルアプリまでマルチプラットフォーム対応" /></ListItem>
            <ListItem><ListItemText primary="要件定義からクラウド連携まで一貫支援" /></ListItem>
            <ListItem><ListItemText primary="PWA化やリアルタイムデータ表示にも対応" /></ListItem>
          </List>
        </Box>

        <Box component="section" id="clients" sx={{ mb: 4 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            対象のお客様
          </Typography>
          <List dense>
            <ListItem><ListItemText primary="フリーランス・講師・YouTuber 等の個人事業主の方" /></ListItem>
            <ListItem><ListItemText primary="1〜50人規模の小規模法人や店舗事業者の方" /></ListItem>
            <ListItem><ListItemText primary="システム部門を持たない中小企業の事業者様" /></ListItem>
          </List>
        </Box>

        <Box component="section" id="strengths" sx={{ mb: 4 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            YashubuStudioの強み
          </Typography>
          <List dense>
            <ListItem><ListItemText primary="本質的な課題を読み取るヒアリング力" /></ListItem>
            <ListItem><ListItemText primary="曖昧な仕様でも形にする技術設計力" /></ListItem>
            <ListItem><ListItemText primary="少人数・小予算でも運用できる品質" /></ListItem>
            <ListItem><ListItemText primary="開発後の継続的な相談・アップデートも対応" /></ListItem>
          </List>
        </Box>

        <Box component="section" id="pricing" sx={{ mb: 4 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            料金の目安（すべて要相談）
          </Typography>
          <TableContainer component={Paper} sx={{ mb: 2 }}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>サービス</TableCell>
                  <TableCell>概算価格（税込）</TableCell>
                  <TableCell>備考</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Web制作</TableCell>
                  <TableCell>¥30,000～</TableCell>
                  <TableCell>ランディングページ～CMS対応まで</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>システム開発</TableCell>
                  <TableCell>¥100,000～</TableCell>
                  <TableCell>業務支援・管理系・API連携等</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>動画配信（撮影含む）</TableCell>
                  <TableCell>¥20,000～</TableCell>
                  <TableCell>配信支援・マルチカメラも対応可能</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>アプリ開発</TableCell>
                  <TableCell>¥500,000～</TableCell>
                  <TableCell>要件により大きく変動</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Typography variant="body2">※価格は目安であり、内容・期間・規模により都度見積を行います。</Typography>
        </Box>

        <Box component="section" id="tech" sx={{ mb: 4 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            対応技術・プログラミング言語
          </Typography>
          <List dense>
            <ListItem><ListItemText primary="バックエンド: Go / Python / Node.js / PHP / Java / Basic / C / C++" /></ListItem>
            <ListItem><ListItemText primary="フロントエンド: React / HTML / CSS / JavaScript" /></ListItem>
            <ListItem><ListItemText primary="その他: SQL / Shell / OBS連携 / SQLite / JSON API / REST API 等" /></ListItem>
          </List>
        </Box>

        <Box component="section" id="contact" sx={{ mb: 4 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            お問い合わせ・ご相談
          </Typography>
          <Typography>メール: <a href="mailto:info@ykvario.com">info@ykvario.com</a></Typography>
          <Typography>電話: 080-6192-0581</Typography>
          <Typography>営業時間: 7:00〜21:00（月～土）</Typography>
          <Typography>
            Webサイト: <a href="https://ykvario.com" target="_blank" rel="noopener noreferrer">https://ykvario.com</a>
          </Typography>
        </Box>
      </Container>
      <Box
        component="footer"
        sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', textAlign: 'center', py: 2 }}
      >
        <Typography variant="body2">&copy; 2024 YashubuStudio</Typography>
      </Box>
    </>
  )
}

export default App
