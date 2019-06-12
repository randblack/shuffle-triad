import React, { Component } from 'react';
import './App.css';
import Rand from './Rand.js';
import Shuffle from './components/shuffle';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrls: [
        '../0.png',
        '../1.png',
        '../2.png',
        '../3.png',
        '../4.png',
        '../5.png',
        '../6.png',
        '../7.png',
        '../8.png',
        '../9.png',
        '../10.png',
        '../11.png',
        '../12.png',
        '../13.png',
        '../14.png',
        '../15.png'
      ],
      clicked: [],
      score: 0
    };
  };

  userGuess = (imgSrc) => {
    console.log(imgSrc);
    for (let i = 0; i < this.state.clicked.length; i++) {
      if (this.state.clicked[i] !== imgSrc) {

        this.setState({ score: this.state.score + 1 });
      } else {
        window.alert('you lose')
        this.setState({ score: 0 });
        this.setState({ clicked: [] });
        console.log(this.state.clicked)
      }
    }
    if (this.state.score === 14) {
      window.alert('you win');
      this.setState({ score: 0 });
      this.setState({ clicked: [] });
    }
    this.state.clicked.push(imgSrc);
    console.log(this.state.clicked)
  };

  randomize = (event) => {



    var randomize = [];
    var copied = this.state.imageUrls.slice();
    while (copied.length > 0) {
      let randomIndex = Math.floor(Math.random() * copied.length);
      let spliced = copied.splice(randomIndex, 1)[0];
      randomize.push(spliced);
    }
    this.setState({
      imageUrls: randomize
    });
  }

  render() {

    return (
      <div className="App">
        <header className="grid-container App-header">
          <div className="menu"><Rand score={this.state.score} /></div>

          <Shuffle userGuess={this.userGuess} randomize={this.randomize} imageUrls={this.state.imageUrls} />

        </header>
      </div>
    );
  }
}

export default App;