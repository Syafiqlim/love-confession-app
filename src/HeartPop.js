import React, { useEffect } from 'react';
import './HeartPop.css';

const HeartPop = ({ x, y, onAnimationEnd }) => {
  useEffect(() => {
    const timeout = setTimeout(() => onAnimationEnd(), 2000); // Adjust the duration of the animation
    return () => clearTimeout(timeout);
  }, [onAnimationEnd]);

  return (
    <div className="heart-pop" style={{ left: x, top: y }}>
      <span>&#10084;</span> {/* Heart icon */}
      <span className="text">???</span> {/* Text */}
    </div>
  );
};

export default HeartPop;
