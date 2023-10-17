import React, { FC, useState } from 'react';
import { animated, useSpring } from 'react-spring';

interface DropdownProps {
  trigger: React.ReactElement;
  items: {
    label: string;
    onClick: () => void;
  }[];
}

const Dropdown: FC<DropdownProps> = props => {
  const { items, trigger } = props;
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const animation = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: 'translate(0px, 0px)',
    from: { opacity: 0, transform: 'translate(-20px, -20px)' },
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
    <div className="relative">
      {React.cloneElement(trigger, { onClick: () => setIsVisible(!isVisible) })}

      {isAnimating && (
        <animated.section
          style={animation}
          className="flex flex-col absolute bg-white rounded-xl top-full right-0 overflow-hidden shadow">
          {items.map(item => (
            <div
              key={item.label}
              className="cursor-pointer select-none transition-all hover:bg-shade hover:text-white px-4 py-1 first:pt-2 last:pb-2"
              onClick={item.onClick}>
              {item.label}
            </div>
          ))}
        </animated.section>
      )}
    </div>
  );
};

export default Dropdown;
