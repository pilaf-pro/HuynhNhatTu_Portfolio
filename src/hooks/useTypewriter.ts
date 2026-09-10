import { useState, useEffect } from 'react';

export interface TypewriterOptions {
  words: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  delayBetweenWords?: number;
  initialWordIndex?: number;
}

export function useTypewriter({
  words,
  typeSpeed = 90,
  deleteSpeed = 50,
  delayBetweenWords = 2000,
  initialWordIndex = 0,
}: TypewriterOptions) {
  const [wordIndex, setWordIndex] = useState(initialWordIndex);
  const [displayText, setDisplayText] = useState(words[initialWordIndex] || '');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!words || words.length === 0) return;

    const currentWord = words[wordIndex % words.length];

    let timer: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      if (displayText !== currentWord) {
        timer = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        }, typeSpeed);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, delayBetweenWords);
      }
    } else {
      if (displayText !== '') {
        timer = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length - 1));
        }, deleteSpeed);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(false);
          setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, typeSpeed);
      }
    }

    return () => clearTimeout(timer);
  }, [
    displayText,
    isDeleting,
    wordIndex,
    words,
    typeSpeed,
    deleteSpeed,
    delayBetweenWords,
  ]);

  return {
    displayText,
    isDeleting,
    wordIndex,
  };
}
