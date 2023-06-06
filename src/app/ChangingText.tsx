'use client';

import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const ChangingText: React.FC = () => {
  const [index, setIndex] = useState<number>(0);
  const roles = ['Web Developer', 'Photographer', 'Musician']; // Roles to cycle through

  // Compute the maximum length role for defining width of the span
  const maxLengthRole = roles.reduce((a, b) => a.length > b.length ? a : b);

  const timerRef = useRef<number | undefined>();

  const handleFocus = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const handleBlur = () => {
    timerRef.current = window.setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 8000);
  };

  useEffect(() => {
    timerRef.current = window.setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 8000); // Change every 8 seconds
    
    return () => {
      if (timerRef.current) clearInterval(timerRef.current); // Clear interval on component unmount
    };
  }, [roles.length]);

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