import { useState, useEffect } from 'react';

interface WindowSize {
  width: number;
  height: number;
}

const useWindowSize = (initialWidth: number = Infinity, initialHeight: number = Infinity): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: typeof window !== 'undefined' ? window.innerWidth : initialWidth,
    height: typeof window !== 'undefined' ? window.innerHeight : initialHeight,
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return windowSize;
};

export default useWindowSize;
