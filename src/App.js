// App.js
import React from 'react';
import Header from './components/Header'; // Default import
import { ContentA } from './components/ContentA'; // Named import
import { ContentB } from './components/ContentB'; // Named import
import { Button } from './components/SharedComponents'; // Named import
import Footer from './components/Footer'; // Default import

const App = () => {
  return (
    <div>
      <Header />
      <ContentA />
      <ContentB />
      <Button onClick={() => alert('Button clicked!')}>Click me</Button>
      <Footer />
    </div>
  );
};

export default App;
