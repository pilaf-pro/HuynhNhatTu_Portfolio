import React from 'react';
import { useTypewriter } from '../../hooks/useTypewriter';
import type { TypewriterOptions } from '../../hooks/useTypewriter';

export interface TypewriterProps extends TypewriterOptions {
  prefix?: string;
  className?: string;
  textClassName?: string;
  cursorClassName?: string;
  cursorChar?: string;
  renderCursor?: boolean;
}

export const Typewriter: React.FC<TypewriterProps> = ({
  words,
  prefix = '',
  typeSpeed = 90,
  deleteSpeed = 50,
  delayBetweenWords = 2000,
  initialWordIndex = 0,
  className = '',
  textClassName = '',
  cursorClassName = 'text-blue-600 font-normal ml-0.5',
  cursorChar = '|',
  renderCursor = true,
}) => {
  const { displayText } = useTypewriter({
    words,
    typeSpeed,
    deleteSpeed,
    delayBetweenWords,
    initialWordIndex,
  });

  return (
    <span className={`inline-flex items-center ${className}`}>
      <span className={textClassName}>
        {prefix}
        {displayText}
      </span>
      {renderCursor && (
        <span
          aria-hidden="true"
          className={`inline-block animate-cursor-blink ${cursorClassName}`}
        >
          {cursorChar}
        </span>
      )}
    </span>
  );
};

export default Typewriter;
