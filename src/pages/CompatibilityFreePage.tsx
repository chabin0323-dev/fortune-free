import React, { useState } from 'react';

export default function CompatibilityFreePage() {
  const [showResult, setShowResult] = useState(false);

  return (
    <div
      style={{
        minHeight: '100vh',
        padding: '40px 20px',
        background: 'linear-gradient(180deg, #1a0f2e, #0d0618)',
        color: '#fff',
        fontFamily: 'sans-serif',
      }}
    >
      <h1 style={{ fontSize: '28px', marginBottom: '20px' }}>
        AI相性占い（無料版）
      </h1>

      {/* ボタン */}
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

      {/* 結果 */}
      {showResult && (
        <div style={{ marginTop: '40px' }}>
          {/* 見える部分 */}
          <div style={{ marginBottom: '30px' }}>
            <h2 style={{ color: '#ff9ce8' }}>総合鑑定</h2>
            <p style={{ lineHeight: 2 }}>
              二人の相性は非常に良く、ゆっくりと関係が深まる流れにあります。
              焦らず信頼を育てることで、特別な関係へと進展していきます。
            </p>
          </div>

          <div style={{ marginBottom: '30px' }}>
            <h2 style={{ color: '#ff9ce8' }}>相手の気持ち</h2>
            <p style={{ lineHeight: 2 }}>
              相手はあなたに対して強い興味と安心感を持っています。
              ただし、今はまだ慎重に距離を測っている段階です。
            </p>
          </div>

          {/* ▼ぼかしゾーン */}
          <div style={{ position: 'relative', marginTop: '20px' }}>
            {/* ぼかし本体 */}
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
                  ある時期を境に、急激に距離が縮まる可能性があります。
                </p>
              </div>

              <div style={{ marginBottom: '30px' }}>
                <h2 style={{ color: '#ff9ce8' }}>関係が動く時期</h2>
                <p style={{ lineHeight: 2 }}>
                  近いうちに重要な変化が訪れます。
                  そのタイミングを逃さないことが鍵になります。
                </p>
              </div>

              <div style={{ marginBottom: '30px' }}>
                <h2 style={{ color: '#ff9ce8' }}>決定的な転機</h2>
                <p style={{ lineHeight: 2 }}>
                  二人の未来には大きな転機があります。
                  完全版ではその詳細を明らかにします。
                </p>
              </div>
            </div>

            {/* 上にかぶせる */}
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
