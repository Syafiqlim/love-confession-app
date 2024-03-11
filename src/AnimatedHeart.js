// AnimatedHeart.js
import React from 'react';
import { useSpring, animated } from 'react-spring';

function AnimatedHeart() {
  const styles = useSpring({
    loop: true,
    from: { scale: 1 },
    to: { scale: 1.2 },
    config: { duration: 1000 },
  });

  return (
    <animated.span style={styles} className="heart-icon">
      &#10084;
    </animated.span>
  );
}

export default AnimatedHeart;
