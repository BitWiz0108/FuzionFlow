import React, { useEffect, useState } from "react";
import "./index.module.scss";

interface TypewriterEffectProps {
  text: string;
  speed: number;
}

const TitleTypewriterEffect: React.FC<TypewriterEffectProps> = ({ text, speed }) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const intervalId = setInterval(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearInterval(intervalId);
    } else {
      setTimeout(() => {
        setDisplayText('');
        setIndex(0);
      }, 2000);
    }
  }, [text, speed, index]);

  return (
    <div className=" h-48 flex items-center justify-center mx-auto px-4 lg:px-16 pb-2">
      <div className="w-full text-center font-extrabold leading-snug text-2xl sm:text-3xl lg:text-5xl xl:text-6xl px-2 sm:px-5 xl:px-10 2xl:px-12">
        {displayText}
      </div>
    </div>
  );
};

export default TitleTypewriterEffect;
