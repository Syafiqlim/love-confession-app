// HeartBurst.js
import React from 'react';
import { useSpring, animated } from 'react-spring';

const HeartBurst = ({ x, y }) => {
  const styles = useSpring({
    from: { scale: 0, opacity: 1 },
    to: { scale: 1.5, opacity: 0 },
    config: { tension: 200, friction: 10, duration: 500 },
    onRest: () => {}, // Optional callback function
  });

  return (
    <animated.div
      style={{
        position: 'absolute',
        left: x,
        top: y,
        transform: styles.scale.interpolate((scale) => `scale(${scale})`),
        opacity: styles.opacity,
      }}
    >
      &#10084;
    </animated.div>
  );
};

export default HeartBurst;
