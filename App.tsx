import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CompatibilityFreePage from './pages/CompatibilityFreePage';

function HomePage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        padding: '40px',
        background:
          'radial-gradient(circle at top left, #2b145a 0%, #140a2b 45%, #090312 100%)',
        color: '#fff',
        fontFamily:
          '"Hiragino Sans", "Yu Gothic", "Meiryo", sans-serif',
      }}
    >
      <h1
        style={{
          fontSize: '40px',
          fontWeight: 800,
          marginBottom: '12px',
          background: 'linear-gradient(90deg, #ffb36b, #ff63d8, #73d2ff)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        AI相性占い
      </h1>

      <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.82)' }}>
        ここは確認用のホームです。
      </p>

      <div style={{ marginTop: '28px' }}>
        <a
          href="/compatibility-free"
          style={{
            display: 'inline-block',
            textDecoration: 'none',
            padding: '14px 24px',
            borderRadius: '999px',
            color: '#fff',
            fontWeight: 700,
            background: 'linear-gradient(90deg, #ff33cc, #5b6cff)',
            boxShadow:
              '0 0 20px rgba(255, 51, 204, 0.35), 0 0 40px rgba(91, 108, 255, 0.25)',
          }}
        >
          無料版を見る
        </a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/compatibility-free" element={<CompatibilityFreePage />} />
      </Routes>
    </BrowserRouter>
  );
}
