import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CompatibilityFreePage from './pages/CompatibilityFreePage';

function HomePage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        padding: '40px',
        background: 'linear-gradient(180deg, #1a0f2e, #0d0618)',
        color: '#fff',
        fontFamily: 'sans-serif',
      }}
    >
      <h1 style={{ fontSize: '32px', marginBottom: '20px' }}>
        AI相性占い
      </h1>

      <p style={{ marginBottom: '30px' }}>
        二人の未来を占います
      </p>

      <a
        href="/compatibility-free"
        style={{
          display: 'inline-block',
          padding: '14px 24px',
          borderRadius: '999px',
          background: 'linear-gradient(90deg, #ff00cc, #3333ff)',
          color: '#fff',
          textDecoration: 'none',
          fontWeight: 'bold',
        }}
      >
        無料で占う
      </a>
    </div>
  );
}

export default function MainApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/compatibility-free" element={<CompatibilityFreePage />} />
      </Routes>
    </BrowserRouter>
  );
}
