// ContentA.js
import React from 'react';
import { Button } from './SharedComponents'; // Import Button component from SharedComponents
const ContentA = () => {
  return (
    <div>
      <h2>What is this page?</h2>
      <p>This page is the first of hopefully many react modular applications. 
        This one is simple but Im learning
      </p>
      <Button onClick={() => alert('Button clicked in Content A')}>Click here</Button> 
    </div>
  );
};

export { ContentA };
