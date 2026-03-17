import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CompatibilityFreePage from './pages/CompatibilityFreePage';

function HomePage() {
  return (
    <div style={{ padding: '40px' }}>
      <h1>トップページ</h1>
      <a href="/compatibility-free">無料版へ</a>
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
