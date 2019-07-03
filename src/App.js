import React from 'react';
import './App.css';

import Keyboard from './Components/Keyboard'

class App extends React.Component{
  state={'a':'a','b':'b','c':'c','d':'d'}
  render(){
    return (
      <div className="App">
        < Keyboard className='lowercaseKeyboard' 
        numberRow={['a']}
        topRow={['b']}
        middleRow={['c']}
        bottomRow={['d']}
        state={this.state}
        />
      </div>
    );
  }
}

// String.fromCharCode(...[...Array('Z'.charCodeAt(0) - 'A'.charCodeAt(0) + 1).keys()].map(i => i + 'A'.charCodeAt(0)));

export default App;
