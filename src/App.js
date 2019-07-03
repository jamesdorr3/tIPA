import React from 'react';
import './App.css';

import Keyboard from './Components/Keyboard'

class App extends React.Component{

  state={
  '!':'','@':'ǝ','#':'','$':'','%':'r','^':'ʌ','&':'','*':'','(':'͡',')':'͡',
    
  '1':'','2':'','3':'ɛ','4':'ɔ','5':'ɾ̃','6':'ǝ','7':'','8':'ɲ','9':'ʊ','0':'ɔ',

  'A':'eɪ','B':'','C':'ɔ','D':'ɾ','E':'i','F':'θ','G':'','H':'ʰ','I':'aɪ','J':'ʒ','K':'kʰ','L':'ɫ','M':'','N':'ŋ','O':'oʊ','P':'pʰ','Q':'','R':'ɚ','S':'ʃ','T':'ð','U':'u','V':'ð','W':'','X':'x','Y':'','Z':'ʒ',
  
  'a':'æ','b':'b','c':'t͡ʃ','d':'d','e':'ɛ','f':'f','g':'g','h':'h','i':'ɪ','j':'d͡ʒ','k':'k','l':'l','m':'m','n':'n','o':'ɑ','p':'p','q':'Ɂ','r':'ɹ','s':'s','t':'t','u':'ʌ','v':'v','w':'w','x':'','y':'j','z':'z',

  ',':',','.':'·',
  
  'textarea':''}

  handleChange = e => {
    this.setState({[e.target.id]:[e.target.value]})
  }

  componentDidMount(){
    document.addEventListener('keydown', e => {
      if (e.target.id === 'textarea' && this.state[e.key] && this.state[e.key].length > 0){
        e.preventDefault()
        this.setState({'textarea': this.state.textarea + this.state[e.key]})
      }
    })
    document.querySelector('input[type="textarea"]').focus()
  }

  render(){
    return (
      <div className="App">

        <h1>Welcome to tIPA</h1>

        < Keyboard className='lowercaseKeyboard' 
        numberRow={['1','2','3','4','5','6','7','8','9','0']}
        topRow={['q','w','e','r','t','y','u','i','o','p']}
        middleRow={['a','s','d','f','g','h','j','k','l']}
        bottomRow={['z','x','c','v','b','n','m',',','.']}
        state={this.state}
        handleChange={this.handleChange}
        />

        < Keyboard className='uppercaseKeyboard' 
        numberRow={['!','@','#','$','%','^','&','*','(',')']}
        topRow={['Q','W','E','R','T','Y','U','I','O','P']}
        middleRow={['A','S','D','F','G','H','J','K','L']}
        bottomRow={['Z','X','C','V','B','N','M','<','>']}
        state={this.state}
        handleChange={this.handleChange}
        />

        <input type='textarea' id='textarea' onChange={this.handleChange} value={this.state.textarea} />
      </div>
    );
  }
}

// String.fromCharCode(...[...Array('Z'.charCodeAt(0) - 'A'.charCodeAt(0) + 1).keys()].map(i => i + 'A'.charCodeAt(0)));

export default App;
