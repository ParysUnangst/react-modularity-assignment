// ContentB.js
import React from 'react';
import { Button } from './SharedComponents'; // Import Button component from SharedComponents

const ContentB = () => {
  return (
    <div>
      <h2>How will I continue to get better?</h2>
      <p>Practice makes perfect, but studying helps!:)</p>
      <Button onClick={() => alert('Button clicked in Content B')}>Click here</Button> 
    </div>
  );
};

export { ContentB };
