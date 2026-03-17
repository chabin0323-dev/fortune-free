import React, { useState } from 'react';

export default function CompatibilityFreePage() {
  const [showResult, setShowResult] = useState(false);

  return (
    <div
      style={{
        minHeight: '100vh',
        padding: '40px 20px',
        background: 'linear-gradient(180deg, #1a0f2e, #0d0618)',
        color: '#ffffff',
        fontFamily: 'sans-serif',
      }}
    >
      <h1 style={{ fontSize: '28px', marginBottom: '20px' }}>
        AI相性占い（無料版）
      </h1>

      <button
        onClick={() => setShowResult(true)}
        style={{
          padding: '16px 24px',
          borderRadius: '999px',
          border: 'none',
          background: 'linear-gradient(90deg, #ff00cc, #3333ff)',
          color: '#fff',
          fontWeight: 'bold',
          fontSize: '16px',
          cursor: 'pointer',
        }}
      >
        運命を占う
      </button>

      {showResult && (
        <div style={{ marginTop: '40px' }}>
          <div style={{ marginBottom: '30px' }}>
            <h2 style={{ color: '#ff9ce8' }}>総合鑑定</h2>
            <p style={{ lineHeight: 2 }}>
              二人の相性は非常に良く、ゆっくりと関係が深まる流れにあります。
            </p>
          </div>

          <div style={{ marginBottom: '30px' }}>
            <h2 style={{ color: '#ff9ce8' }}>相手の気持ち</h2>
            <p style={{ lineHeight: 2 }}>
              相手はあなたに対して強い興味と安心感を持っています。
            </p>
          </div>

          <div style={{ position: 'relative', marginTop: '20px' }}>
            <div
              style={{
                filter: 'blur(8px)',
                opacity: 0.7,
                userSelect: 'none',
                pointerEvents: 'none',
              }}
            >
              <div style={{ marginBottom: '30px' }}>
                <h2 style={{ color: '#ff9ce8' }}>二人の未来</h2>
                <p style={{ lineHeight: 2 }}>
                  この関係は時間と共に特別な絆へと変わります。
                </p>
              </div>

              <div style={{ marginBottom: '30px' }}>
                <h2 style={{ color: '#ff9ce8' }}>関係が動く時期</h2>
                <p style={{ lineHeight: 2 }}>
                  近いうちに重要な変化が訪れます。
                </p>
              </div>

              <div style={{ marginBottom: '30px' }}>
                <h2 style={{ color: '#ff9ce8' }}>決定的な転機</h2>
                <p style={{ lineHeight: 2 }}>
                  完全版ではその詳細を明らかにします。
                </p>
              </div>
            </div>

            <div
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  background: 'rgba(10,5,25,0.95)',
                  padding: '30px',
                  borderRadius: '20px',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: '20px', fontWeight: 'bold' }}>
                  この先は完全版で公開
                </div>

                <button
                  style={{
                    marginTop: '15px',
                    padding: '14px 24px',
                    borderRadius: '999px',
                    border: 'none',
                    background: 'linear-gradient(90deg, #ff00cc, #3333ff)',
                    color: '#fff',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                  }}
                  onClick={() => {
                    window.location.href =
                      'https://note.com/like_swan6953/n/nf547dbe67453';
                  }}
                >
                  完全版を見る
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
