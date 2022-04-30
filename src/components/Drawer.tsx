import React, { PropsWithChildren, useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { animated, useSpring } from 'react-spring';

interface DrawerProps {
  trigger: React.ReactElement;
}

export default function ({
  children,
  trigger,
}: PropsWithChildren<DrawerProps>) {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const animation = useSpring({
    x: isVisible ? 0 : 300,
    onStart: () => {
      if (isVisible) {
        setIsAnimating(true);
      }
    },

    onRest: () => {
      if (!isVisible) {
        setIsAnimating(false);
      }
    },
  });

  return (
    <>
      {React.cloneElement(trigger, { onClick: () => setIsVisible(!isVisible) })}

      {isAnimating && (
        <>
          <div
            className="absolute inset-0 opacity-60 bg-brand h-screen"
            onClick={() => setIsVisible(false)}></div>
          <animated.section
            style={animation as any}
            className="fixed bg-shade top-0 bottom-0 right-0 p-10 w-6/12">
            <AiOutlineCloseCircle
              className="text-accent text-2xl top-5 right-5 absolute cursor-pointer"
              onClick={() => setIsVisible(false)}
            />
            {children}
          </animated.section>
        </>
      )}
    </>
  );
}
