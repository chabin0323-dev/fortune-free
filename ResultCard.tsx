
import React, { useState } from 'react';
import type { FortuneResult, DivinationDetail } from '../types';
import ScoreCircle from './ScoreCircle';

interface ResultCardProps {
  result: FortuneResult;
  names: { name1: string; name2: string };
  dateStr: string;
}

type DivinationType = 'nameCompatibility' | 'constellationCompatibility' | 'bloodTypeCompatibility' | 'fiveElementsCompatibility';

const divinationTabs: { key: DivinationType; label: string; icon: React.ReactElement }[] = [
  { key: 'nameCompatibility', label: '姓名判断', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" /><path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" /></svg> },
  { key: 'constellationCompatibility', label: '星座', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 14.464A1 1 0 106.465 13.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zm-1.414-2.12a1 1 0 011.414 0l.707.707a1 1 0 11-1.414 1.414l-.707-.707a1 1 0 010-1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"/></svg> },
  { key: 'bloodTypeCompatibility', label: '血液型', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" /></svg> },
  { key: 'fiveElementsCompatibility', label: '五行', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg> },
];

const DetailSection: React.FC<{ title: string; icon: React.ReactElement<any>; children: React.ReactNode }> = ({ title, icon, children }) => (
  <div className="w-full bg-fuchsia-900/30 border border-fuchsia-800/40 rounded-lg p-4">
    <div className="flex items-center gap-2 mb-2">
      {React.cloneElement(icon, { className: "h-5 w-5 text-fuchsia-300" })}
      <h4 className="text-lg font-semibold text-fuchsia-300">{title}</h4>
    </div>
    <div className="text-slate-200 text-sm whitespace-pre-wrap bg-fuchsia-900/20 p-4 rounded-lg">
        {children}
    </div>
  </div>
);

const DivinationContent: React.FC<{ detail: DivinationDetail }> = ({ detail }) => (
  <>
    <h5 className="text-md font-semibold text-yellow-300 mb-2">{detail.title}</h5>
    <p>{detail.content}</p>
  </>
);

const TabContentCard: React.FC<{ detail: DivinationDetail }> = ({ detail }) => (
    <div className="bg-fuchsia-900/20 p-4 rounded-b-lg animate-fade-in-up">
      <h4 className="text-lg font-semibold text-yellow-300 mb-2">{detail.title}</h4>
      <p className="text-slate-200 text-sm whitespace-pre-wrap">{detail.content}</p>
    </div>
);

const ResultCard: React.FC<ResultCardProps> = ({ result, names, dateStr }) => {
  const [activeTab, setActiveTab] = useState<DivinationType>('nameCompatibility');

  return (
    <div className="w-full max-w-lg mx-auto bg-black/50 backdrop-blur-sm border border-fuchsia-800/50 rounded-2xl shadow-2xl shadow-fuchsia-500/20 p-6 md:p-8 animate-fade-in-up">
      <div className="text-center mb-6">
        <div className="inline-block px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/30 mb-3 shadow-[0_0_15px_rgba(234,179,8,0.2)]">
            <span className="text-yellow-300 font-bold tracking-widest text-sm md:text-base">
                {dateStr} の運勢
            </span>
        </div>
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-yellow-300">
          {names.name1} & {names.name2}
        </h2>
        <p className="text-slate-300">の相性占い結果</p>
      </div>

      <div className="flex flex-col items-center space-y-6">
        <ScoreCircle score={result.score} />
        
        <div className="text-center w-full">
          <h3 className="text-xl font-semibold text-yellow-300 mb-2">{result.title}</h3>
          <p className="text-slate-200 whitespace-pre-wrap">{result.reading}</p>
        </div>

        <DetailSection 
          title="ワンポイントアドバイス"
          icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" /></svg>}
        >
          <div className="flex flex-col gap-3">
            <p className="mb-2">{result.advice}</p>
            
            <div className="grid grid-cols-2 gap-2 pt-3 border-t border-fuchsia-500/30">
                {/* Lucky Number */}
                <div className="flex flex-col items-center bg-fuchsia-950/40 p-2 rounded border border-fuchsia-700/30">
                    <span className="text-yellow-300 font-bold text-[10px] uppercase mb-1">Lucky No.</span>
                    <span className="text-2xl font-bold text-white tracking-widest drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]">{result.luckyNumber}</span>
                </div>
                
                {/* Lucky Color */}
                <div className="flex flex-col items-center bg-fuchsia-950/40 p-2 rounded border border-fuchsia-700/30">
                    <span className="text-cyan-300 font-bold text-[10px] uppercase mb-1">Color</span>
                    <span className="text-sm font-bold text-white">{result.luckyColor}</span>
                </div>
                
                {/* Lucky Item - Full Width */}
                <div className="col-span-2 flex items-center justify-between bg-fuchsia-950/40 px-3 py-2 rounded border border-fuchsia-700/30">
                    <span className="text-pink-300 font-bold text-[10px] uppercase">Item</span>
                    <span className="text-sm font-bold text-white">{result.luckyItem}</span>
                </div>
            </div>
          </div>
        </DetailSection>

        <DetailSection 
          title="二人の総合運勢"
          icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M5.507 3.509A2.25 2.25 0 017.545 2.5h4.91a2.25 2.25 0 012.038 1.01l3.5 6.5a2.25 2.25 0 010 2.98l-3.5 6.5A2.25 2.25 0 0112.455 19.5H7.545a2.25 2.25 0 01-2.038-1.01l-3.5-6.5a2.25 2.25 0 010-2.98l3.5-6.5z" /></svg>}
        >
          <DivinationContent detail={result.generalFortune} />
        </DetailSection>
        
        <DetailSection 
          title="運命分析"
          icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" /></svg>}
        >
          <DivinationContent detail={result.destinyAnalysis} />
        </DetailSection>

        <div className="w-full bg-fuchsia-900/30 border border-fuchsia-800/40 rounded-lg overflow-hidden">
          <div className="flex overflow-x-auto no-scrollbar">
            {divinationTabs.map(({ key, label, icon }) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex-1 min-w-[80px] flex items-center justify-center gap-2 p-3 text-sm font-semibold transition-colors duration-300 ${
                  activeTab === key
                    ? 'bg-fuchsia-800/50 text-yellow-300'
                    : 'bg-transparent text-slate-300 hover:bg-fuchsia-800/20'
                }`}
              >
                {icon}
                <span className="hidden sm:inline">{label}</span>
              </button>
            ))}
          </div>
          <TabContentCard detail={result[activeTab]} />
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
