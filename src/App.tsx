import React from 'react';
import tiger from './tiger.jpg';
import werewolf from './werewolf.jpg';
import mermaid from './mermaid.jpg';
import './App.css';
// import ml5.js
import * as ml5 from 'ml5';

interface IAppState {}

interface IAppProps {}

class App extends React.Component<IAppProps, IAppState> {
  state = {
    predictions: [], // Set the empty array predictions state
  };

  setPredictions = (pred: any) => {
    // Set the prediction state with the model predictions
    this.setState({
      predictions: pred,
    });
  };

  classifyImg = () => {
    // Initialize the Image Classifier method with MobileNet
    const classifier = ml5.imageClassifier('MobileNet', modelLoaded);
    // When the model is loaded
    function modelLoaded() {
      console.log('Model Loaded!');
    }
    // Put the image to classify inside a variable
    const image = document.getElementById('image');
    // Make a prediction with a selected image
    classifier
      .predict(image, 5, function(err: any, results: any) {
        // Return the results
        return results;
      })
      .then((results: any) => {
        // Set the predictions in the state
        this.setPredictions(results);
      });
  };

  componentDidMount() {
    // once the component has mount, start the classification
    this.classifyImg();
  }

  render() {
    // First set the predictions to a default value while loading
    let predictions: any = <div className='loader' />;
    // Map over the predictions and return each prediction with probability
    if (this.state.predictions.length > 0) {
      predictions = this.state.predictions.map((pred: any, i) => {
        console.log('pred', pred);
        let className = pred.label;
        let probability = pred.confidence;
        // round the probability with 2 decimal
        probability = Math.floor(probability * 10000) / 100 + '%';
        return (
          <div key={i}>
            {(i + 1).toString()}. Prediction: {className} at {probability}{' '}
          </div>
        );
      });
    }

    return (
      <div className='App'>
        <h1>Image classification for all you bitch ass hoes</h1>
        <img src={werewolf} id='image' width='400' alt='' />
        {predictions}
      </div>
    );
  }
}

export default App;
