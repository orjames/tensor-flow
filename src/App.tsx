import React from 'react';
import tiger from './tiger.jpg';
import './App.css';
// import ml5.js
import * as ml5 from 'ml5';

interface IAppState {}

interface IAppProps {}

class App extends React.Component<IAppProps, IAppState> {

  classifyImg = () => {
    // initialize the image classifier method with MobileNet
    const classifier = ml5.imageClassifier('MobileNet', modelLoaded)
    // when the model is loaded
    function modelLoaded() {
      console.log('Model Loaded')
    }
    // put the image to classify inside a variable
    classifier.predict(image, 5, function(err, results))
  }



  render() {
    return (
      <div className='App'>
        <h1>Image classification with ML5.js</h1>
        <img src={tiger} id='image' width='400' alt='' />
      </div>
    );
  }
}

export default App;
