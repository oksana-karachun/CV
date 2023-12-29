import { useEffect, useState } from 'react';

export const useView = () => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleScreenSize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener('resize', handleScreenSize);

    return () => {
      window.removeEventListener('resize', handleScreenSize);
    };
  }, []);

  return screenSize < 1024;
};
