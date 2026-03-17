{resultVisible && (
  <div style={{ marginTop: '26px' }}>
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '12px',
        marginBottom: '16px',
      }}
    >
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '10px 16px',
          borderRadius: '999px',
          border: '1px solid rgba(255,100,220,0.28)',
          background: 'rgba(255, 90, 210, 0.08)',
          color: '#ffb0ef',
          fontWeight: 800,
          fontSize: '14px',
        }}
      >
        ● 無料版ダイジェスト表示
      </div>

      <button
        style={{
          border: 'none',
          padding: '14px 24px',
          borderRadius: '999px',
          color: '#fff',
          cursor: 'pointer',
          fontWeight: 900,
          fontSize: '16px',
          background: 'linear-gradient(90deg, #ff67c8, #9f58ff)',
          boxShadow:
            '0 0 22px rgba(255,103,200,0.30), 0 0 42px rgba(159,88,255,0.20)',
        }}
        onClick={() => {
          window.location.href = 'https://note.com/like_swan6953/n/nf547dbe67453';
        }}
      >
        完全版を見る
      </button>
    </div>

    <div
      style={{
        borderRadius: '30px',
        padding: '40px 28px',
        background:
          'linear-gradient(180deg, rgba(20, 5, 35, 0.98) 0%, rgba(12, 4, 24, 0.98) 100%)',
        border: '1px solid rgba(255,255,255,0.06)',
        backdropFilter: 'blur(20px)',
        boxShadow:
          '0 20px 70px rgba(0,0,0,0.45), 0 0 50px rgba(173, 70, 255, 0.14)',
      }}
    >
      <div
        style={{
          color: 'rgba(255,255,255,0.58)',
          fontSize: '15px',
          fontWeight: 700,
          marginBottom: '14px',
        }}
      >
        2026年3月17日 / あなた × {partnerName || 'お相手'}
      </div>

      <h2
        style={{
          fontSize: 'clamp(34px, 5vw, 56px)',
          lineHeight: 1.16,
          margin: '0 0 28px',
          fontWeight: 900,
          letterSpacing: '-0.03em',
        }}
      >
        今日の二人は
        <span
          style={{
            background: 'linear-gradient(90deg, #ffd66b, #ff86da)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          「深く結ばれやすい相性」
        </span>
        の流れに入っています
      </h2>

      <section style={{ marginBottom: '28px' }}>
        <div
          style={{
            fontSize: '18px',
            fontWeight: 900,
            color: '#ff9ce8',
            marginBottom: '12px',
          }}
        >
          総合鑑定
        </div>
        <div
          style={{
            color: 'rgba(255,255,255,0.92)',
            fontSize: '17px',
            lineHeight: 2,
          }}
        >
          {partnerName || 'お相手'}との相性は、今日は水面下で深まりやすい流れがあります。
          まだ形になっていないご縁でも、印象が育ちやすいタイミングです。
          あなたの誠実さと慎重さは、相手に安心感を与えやすい魅力として映っています。
          今日は表面の動きよりも、見えない部分の感情が静かに強まりやすい日です。
        </div>
      </section>

      <section style={{ marginBottom: '28px' }}>
        <div
          style={{
            fontSize: '18px',
            fontWeight: 900,
            color: '#ff9ce8',
            marginBottom: '12px',
          }}
        >
          相手の気持ち
        </div>
        <div
          style={{
            color: 'rgba(255,255,255,0.92)',
            fontSize: '17px',
            lineHeight: 2,
          }}
        >
          {partnerName || 'お相手'}は、あなたに対して単なる好印象以上の意識を持っている可能性があります。
          ただし今日は、気持ちを表に出すより、内側で確かめるような流れが強めです。
          そのため、反応が静かでも気持ちが薄いとは限りません。
        </div>
      </section>

      <div
        style={{
          position: 'relative',
          marginTop: '6px',
        }}
      >
        <div
          style={{
            filter: 'blur(7px)',
            opacity: 0.75,
            userSelect: 'none',
            pointerEvents: 'none',
          }}
        >
          <section style={{ marginBottom: '28px' }}>
            <div
              style={{
                fontSize: '18px',
                fontWeight: 900,
                color: '#ff9ce8',
                marginBottom: '12px',
              }}
            >
              二人の未来
            </div>
            <div
              style={{
                color: 'rgba(255,255,255,0.92)',
                fontSize: '17px',
                lineHeight: 2,
              }}
            >
              このご縁は、ゆっくりと形を持ち始める未来を秘めています。
              今すぐ劇的に変わるよりも、少しずつ距離が縮まり、
              心の奥で特別な存在へ変わっていく流れです。
              二人の関係は、ある時期を境に空気が変わりやすく、
              その転機をどう迎えるかが未来を左右します。
            </div>
          </section>

          <section style={{ marginBottom: '28px' }}>
            <div
              style={{
                fontSize: '18px',
                fontWeight: 900,
                color: '#ff9ce8',
                marginBottom: '12px',
              }}
            >
              関係が動く時期
            </div>
            <div
              style={{
                color: 'rgba(255,255,255,0.92)',
                fontSize: '17px',
                lineHeight: 2,
              }}
            >
              近いうちに、相手の態度や連絡の流れに小さな変化が出やすいタイミングがあります。
              その変化は一見さりげなく見えても、
              後から振り返ると重要な分岐点だったと感じやすいでしょう。
              焦らず、しかし見逃さないことが鍵になります。
            </div>
          </section>

          <section style={{ marginBottom: '10px' }}>
            <div
              style={{
                fontSize: '18px',
                fontWeight: 900,
                color: '#ff9ce8',
                marginBottom: '12px',
              }}
            >
              決定的な転機
            </div>
            <div
              style={{
                color: 'rgba(255,255,255,0.92)',
                fontSize: '17px',
                lineHeight: 2,
              }}
            >
              二人の未来には、ただ待つだけでは見えない“決定的な転機”があります。
              それは偶然のように見えて、実は必然に近い流れです。
              完全版では、その転機がいつ訪れやすいのか、
              そして相手が本当に望んでいる関係の形まで詳しく読み解きます。
            </div>
          </section>
        </div>

        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
        >
          <div
            style={{
              width: '100%',
              maxWidth: '560px',
              borderRadius: '28px',
              padding: '30px 24px',
              textAlign: 'center',
              background:
                'linear-gradient(180deg, rgba(9, 5, 20, 0.96) 0%, rgba(18, 10, 36, 0.98) 100%)',
              border: '1px solid rgba(255,255,255,0.09)',
              boxShadow:
                '0 0 40px rgba(0,0,0,0.45), 0 0 50px rgba(144, 95, 255, 0.12)',
              backdropFilter: 'blur(8px)',
            }}
          >
            <div
              style={{
                fontSize: '14px',
                fontWeight: 800,
                letterSpacing: '0.08em',
                color: '#ffd96b',
                marginBottom: '10px',
              }}
            >
              ここから先は完全版で公開
            </div>

            <div
              style={{
                fontSize: '32px',
                fontWeight: 900,
                lineHeight: 1.4,
                marginBottom: '12px',
              }}
            >
              二人の未来・動く時期・
              <br />
              決定的な転機を読む
            </div>

            <div
              style={{
                color: 'rgba(255,255,255,0.82)',
                fontSize: '17px',
                lineHeight: 1.9,
                marginBottom: '20px',
              }}
            >
              ここまで読んだあなたは、
              <br />
              この恋の続きを知る準備ができています。
            </div>

            <div
              style={{
                display: 'grid',
                gap: '10px',
                maxWidth: '420px',
                margin: '0 auto 22px',
              }}
            >
              {[
                '相手が本当に考えていること',
                '二人の未来の流れ',
                '関係が動くタイミング',
                '決定的な転機の意味',
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    padding: '14px 16px',
                    borderRadius: '14px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.05)',
                    color: 'rgba(255,255,255,0.92)',
                    fontWeight: 800,
                    fontSize: '15px',
                  }}
                >
                  {item}
                </div>
              ))}
            </div>

            <button
              style={{
                border: 'none',
                width: '100%',
                maxWidth: '420px',
                height: '68px',
                borderRadius: '999px',
                cursor: 'pointer',
                color: '#fff',
                fontSize: '22px',
                fontWeight: 900,
                letterSpacing: '0.03em',
                background: 'linear-gradient(90deg, #ea36ff, #8f5cff, #5967ff)',
                boxShadow:
                  '0 0 26px rgba(234,54,255,0.40), 0 0 58px rgba(89,103,255,0.24)',
              }}
              onClick={() => {
                window.location.href = 'https://note.com/like_swan6953/n/nf547dbe67453';
              }}
            >
              完全版を今すぐ見る
            </button>

            <div
              style={{
                marginTop: '12px',
                color: 'rgba(255,255,255,0.56)',
                fontSize: '13px',
                fontWeight: 600,
              }}
            >
              無料版では核心部分を非公開にしています
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)}
