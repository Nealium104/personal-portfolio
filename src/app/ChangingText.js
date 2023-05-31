import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const ChangingText = () => {
  const [index, setIndex] = useState(0);
  const roles = ['Web Developer', 'Photographer', 'Musician']; // Roles to cycle through

  // Compute the maximum length role for defining width of the span
  const maxLengthRole = roles.reduce((a, b) => a.length > b.length ? a : b);

  const timerRef = useRef();

  const handleFocus = () => {
    clearInterval(timerRef.current);
  };

  const handleBlur = () => {
    timerRef.current = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 5000);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 5000); // Change every 5 seconds

    return () => {
      clearInterval(timerRef.current); // Clear interval on component unmount
    };
  }, []);

  return (
    <span
      className="relative inline-block whitespace-nowrap"
      style={{width: `${maxLengthRole.length}ch`}}
      onFocus={handleFocus}
      onBlur={handleBlur}
      tabIndex={0} // Make it focusable
    >
      <TransitionGroup component={null}>
        <CSSTransition
          key={roles[index]}
          timeout={{ enter: 1000, exit: 1000 }}
          classNames="fade"
        >
          <span className="absolute inline-block whitespace-nowrap">{roles[index]}</span>
        </CSSTransition>
      </TransitionGroup>
    </span>
  );
};

export default ChangingText;