import React from 'react';

const SomeText = () => <span>Some text here!</span>

export const TextHello = () => {
    const name = 'Tatyana';
    const age = 25;
    return (
      <p>
        Hello! My name is {name}, I'm {age} y.o., I love React!
      </p>
    )
  }
  
export { SomeText }