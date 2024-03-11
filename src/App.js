import React, { useEffect, useState } from 'react';
import './App.css';
import AnimatedHeart from './AnimatedHeart';
import HeartPop from './HeartPop';

function App() {
  const [loaded, setLoaded] = useState(false);
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = (event) => {
    const containerRect = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - containerRect.left;
    const offsetY = event.clientY - containerRect.top;

    setHearts((prevHearts) => [
      ...prevHearts,
      { id: Date.now(), x: offsetX, y: offsetY },
    ]);
  };

  const handleAnimationEnd = (id) => {
    setHearts((prevHearts) => prevHearts.filter((heart) => heart.id !== id));
  };

  return (
    <div
      className={`container ${loaded ? 'loaded' : ''}`}
      onClick={handleClick}
    >
      <div className="background-gradient"></div>
      <div className="content">
        <div className="heart-container">
          {hearts.map((heart) => (
            <HeartPop
              key={heart.id}
              x={heart.x}
              y={heart.y}
              onAnimationEnd={() => handleAnimationEnd(heart.id)}
            />
          ))}
        </div>
        <h1 className="title">
          <span className="heart-icon">&#10084;</span> Confession?{' '}
          <span className="heart-icon">&#10084;</span>
        </h1>
        <div className="heart-container">
          <span className="heart-icon">&#10084;</span>
        </div>
        <div className="love-letter">
          <p>Ain,</p>
          <p>Hint : tap tap screen 😆</p>
        </div>
        <div className="heart-animation">
          {[...Array(10)].map((_, index) => (
            <div key={index} className="heart"></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
