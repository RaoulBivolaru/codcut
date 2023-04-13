import useWindowScroll from 'helpers/hooks/useWindowScroll';
import React from 'react';
import { FiArrowUpCircle } from 'react-icons/fi';

const LIMIT = 200;

const ToTop = () => {
  const { y } = useWindowScroll();

  const handlePress = () => {
    window?.scrollTo({ behavior: 'smooth', top: 0 });
  };

  return (
    <>
      {y > LIMIT && (
        <FiArrowUpCircle onClick={handlePress} className="fixed bottom-5 right-5 cursor-pointer text-4xl text-accent" />
      )}
    </>
  );
};

export default ToTop;
