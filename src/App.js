import React from 'react';
import './App.css';
import { Intro, About } from './sections';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Intro/>
        <About/>
      </header>
    </div>
  );
}

export default App;
