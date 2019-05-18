import React from 'react';
import tiger from './tiger.jpg';
import './App.css';
// import ml5.js
import * as ml5 from 'ml5';

const App: React.FC = () => {
  return (
    <div className='App'>
      <h1>Image classification with ML5.js</h1>
      <img src={tiger} id='image' width='400' alt='' />
    </div>
  );
};

export default App;
