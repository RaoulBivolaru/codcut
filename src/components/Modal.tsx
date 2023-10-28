import React, { FC, PropsWithChildren, useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { animated, useSpring } from 'react-spring';

interface ModalProps {
  trigger: React.ReactElement;
}

const Modal: FC<PropsWithChildren<ModalProps>> = props => {
  const { children, trigger } = props;
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const animation = useSpring({
    opacity: isVisible ? 1 : 0,
    scale: isVisible ? 1 : 0.9,
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
          <div className="fixed inset-0 opacity-60 bg-brand z-10" onClick={() => setIsVisible(false)}></div>
          <animated.section
            style={animation}
            className="rounded-lg fixed bg-white z-10 inset-0 m-auto h-fit w-[90%] max-w-6xl max-md:max-h-[650px] flex">
            <AiOutlineCloseCircle
              className="text-accent text-2xl top-5 right-5 absolute cursor-pointer"
              onClick={() => setIsVisible(false)}
            />
            <div className="overflow-y-auto">
              <div className="p-10">{children}</div>
            </div>
          </animated.section>
        </>
      )}
    </>
  );
};

export default Modal;
