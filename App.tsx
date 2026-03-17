import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CompatibilityFreePage from './pages/CompatibilityFreePage';

function HomePage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        padding: '40px',
        backgroundColor: '#ffffff',
        color: '#111111',
      }}
    >
      <h1>トップページです</h1>
      <p>ここは確認用のホームです。</p>
      <a href="/compatibility-free">無料版へ</a>
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
