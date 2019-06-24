import React from 'react';
import './App.css';

import Keyboard from './Components/Keyboard'

function App() {
  const uppercaseLetters = String.fromCharCode(...[...Array('Z'.charCodeAt(0) - 'A'.charCodeAt(0) + 1).keys()].map(i => i + 'A'.charCodeAt(0)));
  const lowercaseLetters = String.fromCharCode(...[...Array('z'.charCodeAt(0) - 'a'.charCodeAt(0) + 1).keys()].map(i => i + 'a'.charCodeAt(0)));
  const numbers = [1,2,3,4,5,6,7,8,9,0]
  const symbols = ['!','@','#','$','%','^','&','*','(',')']
  return (
    <div className="App">
      < Keyboard print={'hi'}/>
    </div>
  );
}

// String.fromCharCode(...[...Array('Z'.charCodeAt(0) - 'A'.charCodeAt(0) + 1).keys()].map(i => i + 'A'.charCodeAt(0)));

export default App;
