import React from 'react';

interface WaveTextProps {
  label: string;
}

const WaveText: React.FC<WaveTextProps> = ({ label }) => {
  return (
    <div className="text-center">
      {[label].map((letter, index) => (
        <span 
          key={index}
          style={{animationDelay: `${index * 0.1}s`}}
          className={`inline-block font-[900] text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl animate-wave transform-gpu duration-1000 mx-0.5 ${letter !== ' ' ? `` : ''}`}>
          {letter}
        </span>
      ))}
    </div>
  );
};

export default WaveText;
