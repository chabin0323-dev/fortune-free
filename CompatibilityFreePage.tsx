import React, { useMemo, useState } from 'react';

type TabType = 'today' | 'tomorrow';

const BLOOD_TYPES = ['血液型', 'A型', 'B型', 'O型', 'AB型'];
const ETO = ['干支', '子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];
const SIGNS = [
  '星座',
  '牡羊座',
  '牡牛座',
  '双子座',
  '蟹座',
  '獅子座',
  '乙女座',
  '天秤座',
  '蠍座',
  '射手座',
  '山羊座',
  '水瓶座',
  '魚座',
];
const RELATIONS = [
  '現在の関係性',
  '片想い',
  '友達以上恋人未満',
  '恋人',
  '復縁',
  '夫婦',
  '複雑な関係',
];

const YEARS = ['年', ...Array.from({ length: 50 }, (_, i) => String(1980 + i))];
const MONTHS = ['月', ...Array.from({ length: 12 }, (_, i) => String(i + 1))];
const DAYS = ['日', ...Array.from({ length: 31 }, (_, i) => String(i + 1))];

function SelectBox({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{
        width: '100%',
        height: '60px',
        borderRadius: '16px',
        padding: '0 18px',
        border: '1px solid rgba(255,255,255,0.08)',
        outline: 'none',
        color: '#fff',
        fontSize: '17px',
        fontWeight: 600,
        background: 'rgba(20, 12, 44, 0.72)',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05)',
        backdropFilter: 'blur(10px)',
      }}
    >
      {options.map((item) => (
        <option key={item} value={item} style={{ color: '#111' }}>
          {item}
        </option>
      ))}
    </select>
  );
}

export default function CompatibilityFreePage() {
  const [tab, setTab] = useState<TabType>('today');

  const [bloodType, setBloodType] = useState('血液型');
  const [eto, setEto] = useState('干支');
  const [sign, setSign] = useState('星座');
  const [year, setYear] = useState('年');
  const [month, setMonth] = useState('月');
  const [day, setDay] = useState('日');

  const [partnerName, setPartnerName] = useState('');
  const [relation, setRelation] = useState('現在の関係性');

  const [resultVisible, setResultVisible] = useState(false);
  const [remainingCount, setRemainingCount] = useState(4);
  const [errorText, setErrorText] = useState('');

  const todayLabel = useMemo(() => '本日 (3/17)', []);
  const tomorrowLabel = useMemo(() => '明日 (3/18)', []);

  const handleFortune = () => {
    const hasAnyInput =
      bloodType !== '血液型' ||
      eto !== '干支' ||
      sign !== '星座' ||
      year !== '年' ||
      month !== '月' ||
      day !== '日' ||
      partnerName.trim() !== '' ||
      relation !== '現在の関係性';

    if (!hasAnyInput) {
      setErrorText('1つ以上入力してから鑑定してください');
      setResultVisible(false);
      return;
    }

    if (remainingCount <= 0) {
      setErrorText('本日の無料鑑定回数を使い切りました');
      setResultVisible(false);
      return;
    }

    setErrorText('');
    setResultVisible(true);
    setRemainingCount((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        background:
          'radial-gradient(circle at 20% 15%, rgba(119, 56, 255, 0.32) 0%, rgba(119, 56, 255, 0) 30%), radial-gradient(circle at 85% 20%, rgba(255, 70, 193, 0.23) 0%, rgba(255, 70, 193, 0) 25%), radial-gradient(circle at 50% 100%, rgba(71, 143, 255, 0.22) 0%, rgba(71, 143, 255, 0) 35%), linear-gradient(180deg, #1b1038 0%, #120925 45%, #090312 100%)',
        fontFamily: '"Hiragino Sans", "Yu Gothic", "Meiryo", sans-serif',
        color: '#fff',
      }}
    >
      <div
        style={{
          position: 'fixed',
          inset: 0,
          pointerEvents: 'none',
          opacity: 0.65,
          backgroundImage:
            'radial-gradient(2px 2px at 20px 30px, rgba(255,255,255,0.8), transparent), radial-gradient(1.5px 1.5px at 120px 80px, rgba(255,255,255,0.5), transparent), radial-gradient(2px 2px at 240px 160px, rgba(255,255,255,0.6), transparent), radial-gradient(1.5px 1.5px at 340px 40px, rgba(255,255,255,0.5), transparent), radial-gradient(2px 2px at 500px 130px, rgba(255,255,255,0.7), transparent)',
          backgroundSize: '600px 300px',
        }}
      />

      <div
        style={{
          maxWidth: '860px',
          margin: '0 auto',
          padding: '46px 20px 80px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div
          style={{
            background: 'rgba(88, 43, 143, 0.45)',
            border: '1px solid rgba(255,255,255,0.10)',
            borderRadius: '34px',
            padding: '28px 18px 32px',
            backdropFilter: 'blur(18px)',
            boxShadow:
              '0 20px 60px rgba(0,0,0,0.35), 0 0 50px rgba(172, 76, 255, 0.15)',
          }}
        >
          <div
            style={{
              fontSize: '54px',
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: '0.02em',
              marginBottom: '10px',
              background: 'linear-gradient(90deg, #ff9b5f, #ffd95f, #73d2ff, #c77dff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 24px rgba(255,255,255,0.12)',
            }}
          >
            AI相性占い
          </div>

          <div
            style={{
              color: 'rgba(255,255,255,0.75)',
              fontSize: '20px',
              fontWeight: 600,
              marginBottom: '34px',
            }}
          >
            二人の星が織りなす、運命の物語
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '18px',
            }}
          >
            <div
              style={{
                background: 'rgba(25, 12, 53, 0.42)',
                borderRadius: '22px',
                padding: '18px',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <div
                style={{
                  fontSize: '16px',
                  fontWeight: 800,
                  color: '#ff98ef',
                  marginBottom: '16px',
                }}
              >
                ● あなた
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '14px',
                  marginBottom: '14px',
                }}
              >
                <SelectBox value={bloodType} onChange={setBloodType} options={BLOOD_TYPES} />
                <SelectBox value={eto} onChange={setEto} options={ETO} />
              </div>

              <div style={{ marginBottom: '14px' }}>
                <SelectBox value={sign} onChange={setSign} options={SIGNS} />
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr 1fr',
                  gap: '10px',
                }}
              >
                <SelectBox value={year} onChange={setYear} options={YEARS} />
                <SelectBox value={month} onChange={setMonth} options={MONTHS} />
                <SelectBox value={day} onChange={setDay} options={DAYS} />
              </div>
            </div>

            <div
              style={{
                background: 'rgba(25, 12, 53, 0.42)',
                borderRadius: '22px',
                padding: '18px',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <div
                style={{
                  fontSize: '16px',
                  fontWeight: 800,
                  color: '#73e6ff',
                  marginBottom: '16px',
                }}
              >
                ● お相手
              </div>

              <input
                type="text"
                placeholder="お名前を入力"
                value={partnerName}
                onChange={(e) => setPartnerName(e.target.value)}
                style={{
                  width: '100%',
                  height: '60px',
                  borderRadius: '16px',
                  padding: '0 18px',
                  border: '1px solid rgba(255,255,255,0.08)',
                  outline: 'none',
                  color: '#fff',
                  fontSize: '17px',
                  fontWeight: 600,
                  background: 'rgba(20, 12, 44, 0.72)',
                  boxSizing: 'border-box',
                  marginBottom: '14px',
                }}
              />

              <SelectBox value={relation} onChange={setRelation} options={RELATIONS} />

              <div
                style={{
                  marginTop: '18px',
                  padding: '14px 16px',
                  borderRadius: '16px',
                  background: 'linear-gradient(90deg, rgba(255,215,100,0.10), rgba(255,120,220,0.08))',
                  border: '1px solid rgba(255,215,100,0.18)',
                  color: 'rgba(255,255,255,0.82)',
                  fontSize: '14px',
                  lineHeight: 1.7,
                }}
              >
                あなたとお相手の波動を読み取り、
                <br />
                無料版では“入口”まで特別に公開します。
              </div>
            </div>
          </div>

          <div
            style={{
              marginTop: '28px',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '12px',
              paddingTop: '22px',
              borderTop: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                background: 'rgba(26, 10, 49, 0.9)',
                padding: '6px',
                borderRadius: '16px',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <button
                onClick={() => setTab('today')}
                style={{
                  border: 'none',
                  height: '42px',
                  padding: '0 22px',
                  borderRadius: '12px',
                  color: '#fff',
                  cursor: 'pointer',
                  fontWeight: 800,
                  fontSize: '15px',
                  background:
                    tab === 'today'
                      ? 'linear-gradient(90deg, #ff31c8, #d54eff)'
                      : 'transparent',
                  boxShadow:
                    tab === 'today'
                      ? '0 0 18px rgba(255,49,200,0.35)'
                      : 'none',
                }}
              >
                {todayLabel}
              </button>

              <button
                onClick={() => setTab('tomorrow')}
                style={{
                  border: 'none',
                  height: '42px',
                  padding: '0 22px',
                  borderRadius: '12px',
                  color: '#fff',
                  cursor: 'pointer',
                  fontWeight: 800,
                  fontSize: '15px',
                  background:
                    tab === 'tomorrow'
                      ? 'linear-gradient(90deg, #6f5bff, #3cc8ff)'
                      : 'transparent',
                  boxShadow:
                    tab === 'tomorrow'
                      ? '0 0 18px rgba(60,200,255,0.28)'
                      : 'none',
                }}
              >
                {tomorrowLabel}
              </button>
            </div>

            <div
              style={{
                padding: '10px 16px',
                borderRadius: '14px',
                fontWeight: 800,
                fontSize: '15px',
                color: '#fff',
                border: '1px solid rgba(255,255,255,0.10)',
                background: 'rgba(255,255,255,0.06)',
                boxShadow: '0 0 20px rgba(255,255,255,0.03)',
              }}
            >
              無料版 本日の残り：
              <span style={{ color: '#ffd95f' }}>{remainingCount}回</span>
            </div>
          </div>

          <div style={{ marginTop: '22px' }}>
            <button
              onClick={handleFortune}
              style={{
                width: '100%',
                height: '74px',
                border: 'none',
                borderRadius: '22px',
                cursor: 'pointer',
                color: '#fff',
                fontSize: '21px',
                fontWeight: 900,
                letterSpacing: '0.05em',
                background: 'linear-gradient(90deg, #e12cff, #7c5cff 60%, #4f65ff)',
                boxShadow:
                  '0 0 30px rgba(225,44,255,0.35), 0 0 60px rgba(79,101,255,0.22)',
              }}
            >
              運命を占う
            </button>
          </div>

          {errorText && (
            <div
              style={{
                marginTop: '14px',
                padding: '14px 16px',
                borderRadius: '14px',
                background: 'rgba(255, 72, 129, 0.12)',
                border: '1px solid rgba(255, 72, 129, 0.28)',
                color: '#ffd2e2',
                fontWeight: 700,
              }}
            >
              {errorText}
            </div>
          )}
        </div>

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
                  minHeight: '760px',
                }}
              >
                <div
                  style={{
                    filter: 'blur(8px)',
                    opacity: 0.72,
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

                  <section style={{ marginBottom: '28px' }}>
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

                  <section style={{ marginBottom: '28px' }}>
                    <div
                      style={{
                        fontSize: '18px',
                        fontWeight: 900,
                        color: '#ff9ce8',
                        marginBottom: '12px',
                      }}
                    >
                      深層メッセージ
                    </div>
                    <div
                      style={{
                        color: 'rgba(255,255,255,0.92)',
                        fontSize: '17px',
                        lineHeight: 2,
                      }}
                    >
                      あなたが感じている迷いは、終わりではなく“始まりの前触れ”です。
                      本当に知るべきなのは、相手の本音と、二人がどこで交わるかという運命の接点です。
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

        <div
          style={{
            textAlign: 'center',
            marginTop: '30px',
            color: 'rgba(255,255,255,0.35)',
            fontSize: '13px',
            fontWeight: 600,
          }}
        >
          m★ke ver.3.1 free
        </div>
      </div>
    </div>
  );
}
