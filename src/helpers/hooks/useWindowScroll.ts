import { useState, useEffect } from 'react';

interface ScrollPosition {
  x: number;
  y: number;
}

const useWindowScroll = (): ScrollPosition => {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({ x: 0, y: 0 });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        setScrollPosition({ x: window.scrollX, y: window.scrollY });
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return scrollPosition;
};

export default useWindowScroll;
