import React, { Component } from 'react';
import './App.css';

const calcColors = () => {
  const colors = ["1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"]
  let color = ""
  for (let i = 0; i < 6; i++) {
    color += colors[Math.floor(Math.random() * colors.length)]
  }
  return color
}

class App extends Component {
  render() {
    return (
      <div className="App" style={{"background-color": `#${calcColors()}`}}>
        <img src="anton.png" className="anton" alt="Anton"></img>
        <span style={{"color": `#${calcColors()}`}}>.</span>
        <img src="pizza.png" className="pizza" alt="Pizza"></img>
      </div>
    );
  }
}

export default App;
