import React from 'react';
import './App.css';

import Keyboard from './Components/Keyboard'

class App extends React.Component{

  state={

    selected: 'English',

    languages: {

      English: {

        '!':'','@':'ǝ','#':'','$':'','%':'r','^':'ʌ','&':'','*':'','(':'͡',')':'͡',
          
        '1':'','2':'','3':'ɛ','4':'ɔ','5':'ɾ̃','6':'ǝ','7':'','8':'ɲ','9':'ʊ','0':'ɔ',
      
        'A':'eɪ','B':'','C':'ɔ','D':'ɾ','E':'i','F':'θ','G':'','H':'ʰ','I':'aɪ','J':'ʒ','K':'kʰ','L':'ɫ','M':'','N':'ŋ','O':'oʊ','P':'pʰ','Q':'','R':'ɚ','S':'ʃ','T':'ð','U':'u','V':'ð','W':'','X':'x','Y':'','Z':'ʒ',
        
        'a':'æ','b':'b','c':'t͡ʃ','d':'d','e':'ɛ','f':'f','g':'g','h':'h','i':'ɪ','j':'d͡ʒ','k':'k','l':'l','m':'m','n':'n','o':'ɑ','p':'p','q':'Ɂ','r':'ɹ','s':'s','t':'t','u':'ʌ','v':'v','w':'w','x':'','y':'j','z':'z',
      
        ',':',','.':'·',
      }

    },
    
    'textarea':''
  }

  suggestions = ['a','b']
  
  componentDidMount(){
    document.querySelector('input[type="textarea"]').focus()
    document.addEventListener('keydown', e => {
      if (e.target.id === 'textarea' && this.state.languages[this.state.selected][e.key] && this.state.languages[this.state.selected][e.key] != ''){
        e.preventDefault()
        this.setState({'textarea': this.state.textarea + this.state.languages[this.state.selected][e.key]})
      }
    })
  }

  changeKey = e => {
    this.setState({
      languages:{
        ...this.state.languages,
        [this.state.selected]:{
          ...this.state.languages[this.state.selected],
          [e.target.id]:[e.target.value]
        }
      }
    })
  }

  changeTextarea = e => {
    this.setState({textarea: e.target.value})
  }

  handleSelect = (e) => {
    debugger
  }

  render(){
    return (
      <div className="App">

        <h1>Welcome to tIPA</h1>

        <select value={this.state.preset} onChange={this.handleSelect}>
          {Object.keys(this.state.languages).map(language => (
            <option value={language}>{language}</option>
          ))}
        </select>

        < Keyboard className='lowercaseKeyboard' 
        numberRow={['1','2','3','4','5','6','7','8','9','0']}
        topRow={['q','w','e','r','t','y','u','i','o','p']}
        middleRow={['a','s','d','f','g','h','j','k','l']}
        bottomRow={['z','x','c','v','b','n','m',',','.']}
        state={this.state.languages[this.state.selected]}
        handleChange={this.changeKey}
        />

        < Keyboard className='uppercaseKeyboard' 
        numberRow={['!','@','#','$','%','^','&','*','(',')']}
        topRow={['Q','W','E','R','T','Y','U','I','O','P']}
        middleRow={['A','S','D','F','G','H','J','K','L']}
        bottomRow={['Z','X','C','V','B','N','M','<','>']}
        state={this.state.languages[this.state.selected]}
        handleChange={this.changeKey}
        />

        <input type='textarea' id='textarea' onChange={this.changeTextarea} value={this.state.textarea} />
      </div>
    );
  }
}

// String.fromCharCode(...[...Array('Z'.charCodeAt(0) - 'A'.charCodeAt(0) + 1).keys()].map(i => i + 'A'.charCodeAt(0)));

export default App;
