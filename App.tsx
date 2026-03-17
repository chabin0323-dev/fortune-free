src/pages/CompatibilityFreePage.tsx
import CompatibilityFreePage from './pages/CompatibilityFreePage';

function HomePage() {
  return (
    <div
      style={{
        backgroundColor: 'white',
        minHeight: '100vh',
        padding: '40px',
      }}
    >
      <h1 style={{ color: 'black' }}>トップページです</h1>
      <p style={{ color: 'black' }}>ここは確認用のホームです。</p>
    </div>
  );
}

export default function CompatibilityFreePage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/compatibility-free" element={<CompatibilityFreePage />} />
      </Routes>
    </BrowserRouter>
  );
}
