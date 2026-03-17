import React from 'react';

interface UsageManualProps {
  isOpen: boolean;
  onClose: () => void;
}

const UsageManual: React.FC<UsageManualProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const StepImage: React.FC<{ step: number }> = ({ step }) => {
    return (
      <div className="w-full h-32 bg-gray-900 rounded-lg border border-fuchsia-800/50 relative overflow-hidden mb-3 shadow-inner">
        {step === 1 && (
          <div className="absolute inset-0 p-4 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-fuchsia-400"></div>
              <div className="w-16 h-2 bg-fuchsia-300/50 rounded"></div>
              <div className="ml-auto w-4 h-4 border border-gray-500 rounded flex items-center justify-center text-[8px] text-fuchsia-400">✓</div>
            </div>
            <div className="flex gap-2 mt-4">
              <div className="flex-1 h-6 bg-gray-800 rounded border border-fuchsia-900/50"></div>
              <div className="flex-1 h-6 bg-gray-800 rounded border border-fuchsia-900/50"></div>
            </div>
            <div className="w-full h-8 bg-gray-800 rounded border border-fuchsia-900/50"></div>
            <div className="absolute bottom-2 right-2 text-yellow-400 text-[8px]">※固定可</div>
          </div>
        )}
        {step === 2 && (
          <div className="absolute inset-0 p-4 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
              <div className="w-16 h-2 bg-cyan-300/50 rounded"></div>
            </div>
            <div className="w-full h-8 bg-gray-800 rounded border border-fuchsia-900/50 flex items-center px-2 relative">
              <div className="w-12 h-2 bg-white/80 rounded animate-pulse"></div>
            </div>
            <div className="flex gap-1">
              <div className="px-2 py-0.5 bg-fuchsia-900/40 rounded-full border border-fuchsia-500/30 flex items-center gap-1">
                <div className="w-6 h-1 bg-fuchsia-200/50 rounded"></div>
                <div className="w-1.5 h-1.5 text-red-400 text-[6px]">×</div>
              </div>
              <div className="px-2 py-0.5 bg-fuchsia-900/40 rounded-full border border-fuchsia-500/30">
                <div className="w-6 h-1 bg-fuchsia-200/50 rounded"></div>
              </div>
            </div>
          </div>
        )}
        {step === 3 && (
          <div className="absolute inset-0 p-4 flex flex-col justify-center gap-3">
            <div className="flex items-center gap-2">
              <div className="w-24 h-6 bg-gray-800 rounded border border-white/10"></div>
              <div className="w-12 h-4 bg-fuchsia-900/50 rounded"></div>
            </div>
            <div className="w-full h-10 rounded-lg bg-gradient-to-r from-fuchsia-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-fuchsia-900/30">
              <div className="w-24 h-2 bg-white/90 rounded"></div>
            </div>
          </div>
        )}
        {step === 4 && (
          <div className="absolute inset-0 p-4 flex flex-col items-center">
            <div className="w-12 h-12 rounded-full border-2 border-fuchsia-500 flex items-center justify-center mb-2">
              <div className="text-fuchsia-300 font-bold text-xs">88</div>
            </div>
            <div className="w-32 h-2 bg-yellow-300/50 rounded mb-1"></div>
            <div className="w-full h-1 bg-slate-600 rounded mb-0.5"></div>
            <div className="w-3/4 h-1 bg-slate-600 rounded"></div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" onClick={onClose}></div>
      <div className="relative bg-gray-900 border border-fuchsia-500/30 rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl shadow-fuchsia-900/50 animate-fade-in-up">
        <div className="sticky top-0 bg-gray-900/95 backdrop-blur border-b border-white/10 p-4 flex justify-between items-center z-10">
          <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400 flex items-center gap-2">
            取扱説明書
          </h2>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-white/10 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-6 space-y-8">
          <section>
            <div className="flex items-center gap-3 mb-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-fuchsia-600 text-white font-bold text-lg shadow-lg shadow-fuchsia-600/40">1</span>
              <h3 className="text-lg font-semibold text-fuchsia-200">あなたの情報を入力</h3>
            </div>
            <StepImage step={1} />
            <p className="text-slate-300 text-sm leading-relaxed pl-2 border-l-2 border-fuchsia-800">
              まずは「あなた」の情報を入力します。<br/>
              <span className="text-yellow-400">「情報を固定」</span>にチェックを入れると、次回から入力を省略できます。
            </p>
          </section>
          <section>
            <div className="flex items-center gap-3 mb-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-cyan-600 text-white font-bold text-lg shadow-lg shadow-cyan-600/40">2</span>
              <h3 className="text-lg font-semibold text-cyan-200">お相手の情報を入力</h3>
            </div>
            <StepImage step={2} />
            <p className="text-slate-300 text-sm leading-relaxed pl-2 border-l-2 border-cyan-800">
              占いたい「お相手」の名前を入力します。
            </p>
          </section>
          <section>
            <div className="flex items-center gap-3 mb-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-600 text-white font-bold text-lg shadow-lg shadow-indigo-600/40">3</span>
              <h3 className="text-lg font-semibold text-indigo-200">関係性と日付を選んで占う</h3>
            </div>
            <StepImage step={3} />
            <p className="text-slate-300 text-sm leading-relaxed pl-2 border-l-2 border-indigo-800">
              関係性と日付を選び、<span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-indigo-400 font-bold">「運命を占う」</span>をタップしてください。
            </p>
          </section>
          <section className="pt-4 border-t border-white/10 space-y-4">
            <div>
              <h3 className="text-md font-bold text-red-400 mb-2">※ご利用制限について</h3>
              <p className="text-slate-300 text-sm leading-relaxed pl-2 border-l-2 border-red-800">
                1日の利用上限は「合計5回まで」です。<span className="text-white font-bold">毎日深夜0時にリセット</span>されます。
              </p>
            </div>
            <div>
              <h3 className="text-md font-bold text-green-400 mb-2">【自動保存機能について】</h3>
              <p className="text-slate-300 text-sm leading-relaxed pl-2 border-l-2 border-green-800">
                入力した情報や鑑定結果は、お使いのブラウザに<span className="text-white font-bold">自動的に保存</span>されます。画面を閉じても続きから再開できます。
              </p>
            </div>
            <div>
              <h3 className="text-md font-bold text-cyan-400 mb-2">【個人情報保護について】</h3>
              <p className="text-slate-300 text-sm leading-relaxed pl-2 border-l-2 border-cyan-800">
                データは端末内のみに保持され、外部サーバーには送信されません。安心してご利用いただけます。
              </p>
            </div>
          </section>
        </div>
        <div className="p-4 bg-gray-900/50 border-t border-white/10 text-center">
          <button onClick={onClose} className="px-6 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors text-sm font-medium">
            閉じる
          </button>
        </div>
      </div>
    </div>
  );
};

export default UsageManual;
