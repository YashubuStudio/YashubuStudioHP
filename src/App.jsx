import './App.css'

function App() {
  return (
    <>
      <header>
        <h1>YashubuStudio</h1>
        <p>最新技術を、もっと身近に、もっと確実に。</p>
      </header>
      <main>
        <section id="overview">
          <h2>概要</h2>
          <p>
            YashubuStudioは日本・愛知県を拠点に活動するテクノロジー系スタジオです。
            システム開発、Web制作、AI・自動化、動画配信まで幅広く対応し、個人事業主から
            中小企業までのデジタルニーズにお応えします。
          </p>
        </section>

        <section id="services">
          <h2>主な事業内容</h2>
          <h3>ソフトウェア開発・Web制作</h3>
          <ul>
            <li>業務支援アプリケーションの開発</li>
            <li>オンライン申請や社内検索など日常業務を支えるシステム</li>
            <li>CMSや動的UIにも対応</li>
            <li>静的ページからReactによるSPAまで幅広く対応</li>
          </ul>
          <h3>システム研究・開発</h3>
          <ul>
            <li>検索エンジン、AI連携、P2P分散ネットワークの研究開発</li>
            <li>意味圧縮・全文検索・ノード構成の自動最適化</li>
            <li>実験的プロトタイピング支援</li>
          </ul>
          <h3>動画配信・撮影・編集</h3>
          <ul>
            <li>ライブ配信や録画収録のサポート</li>
            <li>セミナー・講演会・社内研修など現場での撮影支援</li>
            <li>動画編集は規模により要相談</li>
          </ul>
          <h3>アプリ開発</h3>
          <ul>
            <li>Webアプリからモバイルアプリまでマルチプラットフォーム対応</li>
            <li>要件定義からクラウド連携まで一貫支援</li>
            <li>PWA化やリアルタイムデータ表示にも対応</li>
          </ul>
        </section>

        <section id="clients">
          <h2>対象のお客様</h2>
          <ul>
            <li>フリーランス・講師・YouTuber 等の個人事業主の方</li>
            <li>1〜50人規模の小規模法人や店舗事業者の方</li>
            <li>システム部門を持たない中小企業の事業者様</li>
          </ul>
        </section>

        <section id="strengths">
          <h2>YashubuStudioの強み</h2>
          <ul>
            <li>本質的な課題を読み取るヒアリング力</li>
            <li>曖昧な仕様でも形にする技術設計力</li>
            <li>少人数・小予算でも運用できる品質</li>
            <li>開発後の継続的な相談・アップデートも対応</li>
          </ul>
        </section>

        <section id="pricing">
          <h2>料金の目安（すべて要相談）</h2>
          <table>
            <thead>
              <tr><th>サービス</th><th>概算価格（税込）</th><th>備考</th></tr>
            </thead>
            <tbody>
              <tr><td>Web制作</td><td>¥30,000～</td><td>ランディングページ～CMS対応まで</td></tr>
              <tr><td>システム開発</td><td>¥100,000～</td><td>業務支援・管理系・API連携等</td></tr>
              <tr><td>動画配信（撮影含む）</td><td>¥20,000～</td><td>配信支援・マルチカメラも対応可能</td></tr>
              <tr><td>アプリ開発</td><td>¥500,000～</td><td>要件により大きく変動</td></tr>
            </tbody>
          </table>
          <p>※価格は目安であり、内容・期間・規模により都度見積を行います。</p>
        </section>

        <section id="tech">
          <h2>対応技術・プログラミング言語</h2>
          <ul>
            <li>バックエンド: Go / Python / Node.js / PHP / Java / Basic / C / C++</li>
            <li>フロントエンド: React / HTML / CSS / JavaScript</li>
            <li>その他: SQL / Shell / OBS連携 / SQLite / JSON API / REST API 等</li>
          </ul>
        </section>

        <section id="contact">
          <h2>お問い合わせ・ご相談</h2>
          <p>メール: <a href="mailto:info@ykvario.com">info@ykvario.com</a></p>
          <p>電話: 080-6192-0581</p>
          <p>営業時間: 7:00〜21:00（月～土）</p>
          <p>Webサイト: <a href="https://ykvario.com" target="_blank" rel="noopener noreferrer">https://ykvario.com</a></p>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 YashubuStudio</p>
      </footer>
    </>
  )
}

export default App
