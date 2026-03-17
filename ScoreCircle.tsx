
import React, { useState, useEffect } from 'react';

interface ScoreCircleProps {
  score: number;
}

const ScoreCircle: React.FC<ScoreCircleProps> = ({ score }) => {
  const [displayScore, setDisplayScore] = useState(0);

  useEffect(() => {
    const animationDuration = 1500; // ms
    const frameRate = 60; // fps
    const totalFrames = animationDuration / (1000 / frameRate);
    const increment = score / totalFrames;
    let currentFrame = 0;

    const timer = setInterval(() => {
      currentFrame++;
      const newScore = Math.min(score, Math.floor(displayScore + increment));
      setDisplayScore(newScore);

      if (currentFrame >= totalFrames) {
        clearInterval(timer);
        setDisplayScore(score); // Ensure final score is exact
      }
    }, 1000 / frameRate);

    return () => clearInterval(timer);
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [score]);

  const radius = 60;
  const stroke = 8;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (displayScore / 100) * circumference;

  const getScoreColor = (s: number) => {
    if (s < 40) return 'text-blue-400';
    if (s < 70) return 'text-yellow-400';
    return 'text-pink-400';
  };
  
  const getStrokeColor = (s: number) => {
    if (s < 40) return 'stroke-blue-400';
    if (s < 70) return 'stroke-yellow-400';
    return 'stroke-pink-400';
  }

  return (
    <div className="relative flex items-center justify-center">
      <svg
        height={radius * 2}
        width={radius * 2}
        className="-rotate-90"
      >
        <circle
          stroke="#4a044e"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          className={`transition-all duration-300 ease-out ${getStrokeColor(score)}`}
          stroke="currentColor"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference + ' ' + circumference}
          style={{ strokeDashoffset, strokeLinecap: 'round' }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>
      <div className="absolute flex flex-col items-center">
        <span className={`font-bold text-4xl ${getScoreColor(score)}`}>
          {displayScore}
        </span>
        <span className="text-sm text-slate-300">点</span>
      </div>
    </div>
  );
};

export default ScoreCircle;
