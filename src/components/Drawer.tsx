import React, { FC, PropsWithChildren, useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { animated, useSpring } from 'react-spring';

interface DrawerProps {
  trigger: React.ReactElement;
}

const Drawer: FC<PropsWithChildren<DrawerProps>> = props => {
  const { children, trigger } = props;
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const animation = useSpring({
    x: isVisible ? 0 : 300,
    onStart: () => {
      if (isVisible) {
        document.body.classList.add('overflow-hidden');
        setIsAnimating(true);
      }
    },

    onRest: () => {
      if (!isVisible) {
        document.body.classList.remove('overflow-hidden');
        setIsAnimating(false);
      }
    },
  });

  return (
    <>
      {React.cloneElement(trigger, { onClick: () => setIsVisible(!isVisible) })}

      {isAnimating && (
        <>
          <div className="fixed inset-0 opacity-60 bg-brand h-screen" onClick={() => setIsVisible(false)}></div>
          <animated.section style={animation} className="fixed bg-shade top-0 bottom-0 right-0 p-10 w-6/12">
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
};

export default Drawer;
