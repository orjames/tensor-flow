import React from 'react';
import tiger from './tiger.jpg';
import './App.css';
// import ml5.js
import * as ml5 from 'ml5';

interface IAppState {}

interface IAppProps {}

class App extends React.Component<IAppProps, IAppState> {
  state = {
    predictions: [], // starting as empty array for img predictions
  };

  setPredictions = (pred: any) => {
    // Set the predictions state with model predictions
    this.setState({
      predictions: pred,
    });
  };

  classifyImg = () => {
    // initialize the image classifier method with MobileNet
    const classifier = ml5.imageClassifier('MobileNet', modelLoaded);
    // when the model is loaded
    function modelLoaded() {
      console.log('Model Loaded');
    }
    // put the image to classify inside a variable
    const image = document.getElementById('image');
    classifier.predict(image, 5, function(err: any, results: any) {
      // print results to the console
      console.log(results);
    });
  };

  componentDidMount() {
    // once the component has mounted, start the classification
    this.classifyImg;
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
