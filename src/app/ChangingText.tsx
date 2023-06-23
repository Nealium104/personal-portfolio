'use client'

import React, { useState, useEffect } from 'react';

const RoleScroller: React.FC = () => {
  const [index, setIndex] = useState<number>(0);
  const [fade, setFade] = useState<boolean>(false);
  const [isInteracting, setIsInteracting] = useState<boolean>(false);

  const roles: string[] = ['Web Developer', 'Photographer', 'Musician'];

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (!isInteracting) {
      timer = setInterval(() => {
        setFade(true);
        setTimeout(() => {
          setIndex((index + 1) % roles.length);
          setFade(false);
        }, 1000);
      }, 5000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [index, isInteracting]);

  return (
    <div className="">
      <div
      className='rolesContainer'
        tabIndex={0}
        onMouseEnter={() => setIsInteracting(true)}
        onMouseLeave={() => setIsInteracting(false)}
        onFocus={() => setIsInteracting(true)}
        onBlur={() => setIsInteracting(false)}
      >
        Neal Grindstaff 
        <div className={`role ${fade ? 'fadeOutAndDown' : 'fadeInAndUp'}`}>
          {roles[index]}
        </div>
      </div>
    </div>
  );
};

export default RoleScroller;