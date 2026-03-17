import { useEffect, useState } from 'react';

export default function CompatibilityFreePage() {

  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');

  const [blood1, setBlood1] = useState('');
  const [blood2, setBlood2] = useState('');

  const [zodiac1, setZodiac1] = useState('');
  const [zodiac2, setZodiac2] = useState('');

  const [year1, setYear1] = useState('');
  const [month1, setMonth1] = useState('');
  const [day1, setDay1] = useState('');

  const [year2, setYear2] = useState('');
  const [month2, setMonth2] = useState('');
  const [day2, setDay2] = useState('');

  const [eto1, setEto1] = useState('');
  const [eto2, setEto2] = useState('');

  const [result, setResult] = useState('');
  const [count, setCount] = useState(0);

  const years = Array.from({ length: 46 }, (_, i) => String(1980 + i));
  const months = Array.from({ length: 12 }, (_, i) => String(i + 1));
  const days = Array.from({ length: 31 }, (_, i) => String(i + 1));
  const etoList = ['子','丑','寅','卯','辰','巳','午','未','申','酉','戌','亥'];

  const todayKey = new Date().toLocaleDateString('ja-JP');
  const storageDateKey = 'compatibilityFreeDate';
  const storageCountKey = 'compatibilityFreeCount';

  useEffect(() => {

    const savedDate = localStorage.getItem(storageDateKey);
    const savedCount = localStorage.getItem(storageCountKey);

    if (savedDate === todayKey) {
      setCount(savedCount ? Number(savedCount) : 0);
    } else {
      localStorage.setItem(storageDateKey, todayKey);
      localStorage.setItem(storageCountKey, '0');
      setCount(0);
    }

    // ページ読み込み時は結果を消す
    setResult('');

  }, [todayKey]);

  const handleCheck = () => {

    const hasAnyInput = [
      name1,name2,
      blood1,blood2,
      zodiac1,zodiac2,
      year1,month1,day1,
      year2,month2,day2,
      eto1,eto2
    ].some(v => v !== '');

    if (!hasAnyInput) {
      setResult('どれか1つ入力してください。');
      return;
    }

    // 開発中は999にする（公開前に5へ戻す）
    if (count >= 999) {
      setResult('本日の無料鑑定は5回までです。');
      return;
    }

    const nextCount = count + 1;
    setCount(nextCount);

    localStorage.setItem(storageDateKey, todayKey);
    localStorage.setItem(storageCountKey, String(nextCount));

    const mainName = name1 || name2 || 'あなた';
    const partnerName = name1 && name2 ? name2 : 'お相手';

    const messages = [
      '今は焦らず関係を温める時期です。',
      '自然な会話を増やすことで距離が縮まりやすいです。',
      '優しい言葉が2人の関係を良くします。',
      '今は相手の気持ちを大切にする時期です。',
      '小さな行動が恋を前進させます。'
    ];

    const advice = [
      'まずは短い会話を増やしてみましょう。',
      '相手を追いすぎないことが大切です。',
      '焦らないことが成功の鍵です。',
      '自然体で接するのが良いでしょう。',
      '相手を理解しようとする姿勢が大切です。'
    ];

    const msg = messages[Math.floor(Math.random()*messages.length)];
    const adv = advice[Math.floor(Math.random()*advice.length)];

    setResult(
`${mainName}さんと${partnerName}の無料鑑定結果です。

${msg}

【ワンポイント】
${adv}

本日の無料鑑定回数は ${Math.min(nextCount,5)} / 5 です。`
    );
  };

  const handleProClick = () => {
    window.location.href = '/compatibility-pro';
  };

  const inputStyle = {
    display:'block' as const,
    marginBottom:'10px',
    padding:'12px',
    width:'280px',
    borderRadius:'10px',
    border:'1px solid #ccc',
    fontSize:'16px'
  };

  const selectStyle = {
    display:'block' as const,
    marginBottom:'10px',
    padding:'12px',
    width:'306px',
    borderRadius:'10px',
    border:'1px solid #ccc',
    fontSize:'16px',
    backgroundColor:'white'
  };

  return (

<div style={{
background:'#f7f8fc',
minHeight:'100vh',
padding:'24px'
}}>

<div style={{
maxWidth:'420px',
margin:'0 auto',
background:'white',
borderRadius:'20px',
padding:'24px',
boxShadow:'0 8px 24px rgba(0,0,0,0.08)'
}}>

<h1 style={{
color:'#222',
fontSize:'28px',
marginBottom:'8px',
textAlign:'center'
}}>
無料相性占い
</h1>

<p style={{
color:'#666',
textAlign:'center',
marginBottom:'20px'
}}>
分かる情報だけでも鑑定できます
</p>

<p style={{
textAlign:'center',
fontWeight:'bold',
marginBottom:'20px'
}}>
本日の無料鑑定回数: {Math.min(count,5)} / 5
</p>

<h2>1人目</h2>

<input
placeholder="1人目の名前"
value={name1}
onChange={(e)=>setName1(e.target.value)}
style={inputStyle}
/>

<select value={blood1} onChange={(e)=>setBlood1(e.target.value)} style={selectStyle}>
<option value="">血液型</option>
<option value="A">A型</option>
<option value="B">B型</option>
<option value="O">O型</option>
<option value="AB">AB型</option>
</select>

<select value={zodiac1} onChange={(e)=>setZodiac1(e.target.value)} style={selectStyle}>
<option value="">星座</option>
<option value="牡羊座">牡羊座</option>
<option value="牡牛座">牡牛座</option>
<option value="双子座">双子座</option>
<option value="蟹座">蟹座</option>
<option value="獅子座">獅子座</option>
<option value="乙女座">乙女座</option>
<option value="天秤座">天秤座</option>
<option value="蠍座">蠍座</option>
<option value="射手座">射手座</option>
<option value="山羊座">山羊座</option>
<option value="水瓶座">水瓶座</option>
<option value="魚座">魚座</option>
</select>

<div style={{display:'flex',gap:'8px'}}>

<select value={year1} onChange={(e)=>setYear1(e.target.value)} style={{...selectStyle,width:'100px'}}>
<option value="">年</option>
{years.map(y=> <option key={y}>{y}</option>)}
</select>

<select value={month1} onChange={(e)=>setMonth1(e.target.value)} style={{...selectStyle,width:'90px'}}>
<option value="">月</option>
{months.map(m=> <option key={m}>{m}</option>)}
</select>

<select value={day1} onChange={(e)=>setDay1(e.target.value)} style={{...selectStyle,width:'90px'}}>
<option value="">日</option>
{days.map(d=> <option key={d}>{d}</option>)}
</select>

</div>

<select value={eto1} onChange={(e)=>setEto1(e.target.value)} style={selectStyle}>
<option value="">干支</option>
{etoList.map(e=> <option key={e}>{e}</option>)}
</select>

<h2>2人目</h2>

<input
placeholder="2人目の名前"
value={name2}
onChange={(e)=>setName2(e.target.value)}
style={inputStyle}
/>

<button
onClick={handleCheck}
style={{
width:'100%',
padding:'14px',
borderRadius:'12px',
border:'none',
background:'#4f46e5',
color:'white',
fontSize:'16px',
fontWeight:'bold',
cursor:'pointer',
marginTop:'20px'
}}
>
鑑定する
</button>

{result && (

<div style={{
whiteSpace:'pre-line',
background:'#f3f4f6',
borderRadius:'14px',
padding:'16px',
marginTop:'20px'
}}>
{result}
</div>

)}

<div style={{
background:'#fff7ed',
border:'1px solid #fdba74',
borderRadius:'14px',
padding:'16px',
textAlign:'center',
marginTop:'20px'
}}>

<p style={{marginBottom:'12px'}}>
もっと詳しい鑑定結果や深い相性を知りたい方は有料版をご利用ください
</p>

<button
onClick={handleProClick}
style={{
padding:'12px 20px',
borderRadius:'10px',
border:'none',
background:'#ea580c',
color:'white',
fontWeight:'bold',
cursor:'pointer'
}}
>
有料版はこちら
</button>

</div>

</div>
</div>

  );
}