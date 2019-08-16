import React from 'react';
import './App.css';

import Keyboard from './Components/Keyboard'
import Textarea from 'react-textarea-autosize';

class App extends React.Component{

  state={

    selected: 'English, Phonetic',

    languages: {

      'English, Phonetic': {

        suggestions: ['æ','ɑ','ɒ','aɪ','aʊ','dʒ','ə','eɪ','ɛ','i','ɪ','ʒ','ŋ','ɔ','ɔɪ','oʊ','ʃ','tʃ','θ','ð','ʌ','ʊ','ʍ','ʔ'],

        '!':'','@':'ǝ','#':'','$':'','%':'r','^':'ʌ','&':'','*':'','(':'͡',')':'͡',
          
        '1':'','2':'','3':'ɛ','4':'ɔ','5':'ɾ̃','6':'ǝ','7':'','8':'ɲ','9':'ʊ','0':'ɔ',
      
        'A':'eɪ','B':'','C':'ɔ','D':'ɾ','E':'i','F':'θ','G':'','H':'ʰ','I':'aɪ','J':'ʒ','K':'kʰ','L':'ɫ','M':'ʍ','N':'ŋ','O':'oʊ','P':'pʰ','Q':'','R':'ɚ','S':'ʃ','T':'ð','U':'u','V':'ð','W':'ʍ','X':'x','Y':'','Z':'ʒ',
        
        'a':'æ','b':'b','c':'t͡ʃ','d':'d','e':'ɛ','f':'f','g':'g','h':'h','i':'ɪ','j':'d͡ʒ','k':'k','l':'l','m':'m','n':'n','o':'ɑ','p':'p','q':'Ɂ','r':'ɹ','s':'s','t':'t','u':'ʌ','v':'v','w':'w','x':'','y':'j','z':'z',
      
        ',':'ˌ','.':'.','~':'̃',"'":'ˈ',";":'ǝ',":":''
      },

      'English, Orthographic': {

        suggestions: ['æ','ɑ','ɒ','aɪ','aʊ','dʒ','ə','eɪ','ɛ','i','ɪ','ʒ','ŋ','ɔ','ɔɪ','oʊ','ʃ','tʃ','θ','ð','ʌ','ʊ','ʍ','ʔ'],

        '!':'','@':'ǝ','#':'','$':'','%':'r','^':'ʌ','&':'','*':'','(':'͡',')':'͡',
          
        '1':'ɪ','2':'ʒ','3':'ɛ','4':'ɔ','5':'ɾ̃','6':'ǝ','7':'ɫ','8':'ɲ','9':'ʊ','0':'ɔ',
      
        'A':'','B':'','C':'ɔ','D':'ɾ','E':'i','F':'θ','G':'','H':'ʰ','I':'ɪ','J':'ʒ','K':'kʰ','L':'ɫ','M':'','N':'ŋ','O':'oʊ','P':'pʰ','Q':'','R':'ɚ','S':'ʃ','T':'ð','U':'u','V':'ð','W':'','X':'x','Y':'','Z':'ʒ',
        
        'a':'a','b':'b','c':'','d':'d','e':'e','f':'f','g':'g','h':'h','i':'i','j':'j','k':'k','l':'l','m':'m','n':'n','o':'o','p':'p','q':'','r':'ɹ','s':'s','t':'t','u':'u','v':'v','w':'w','x':'','y':'','z':'z',
      
        ',':'ˌ','.':'.','~':'̃',"'":'ˈ',";":'ǝ',":":''
      },

      'Spanish - Español': {

        suggestions: ['a'],

        '!':'','@':'','#':'','$':'','%':'','^':'','&':'','*':'','(':'͡',')':'͡',
          
        '1':'','2':'','3':'','4':'','5':'','6':'','7':'','8':'','9':'','0':'',
      
        'A':'','B':'β','C':'t͡ʃ','D':'ð','E':'','F':'','G':'ɣ','H':'ʰ','I':'','J':'j','K':'','L':'ʎ','M':'','N':'ŋ','O':'','P':'pʰ','Q':'','R':'r','S':'ʃ','T':'','U':'u','V':'ð','W':'','X':'','Y':'','Z':'',
        
        'a':'a','b':'b','c':'θ','d':'d̪','e':'e','f':'f','g':'g','h':'h','i':'i','j':'h','k':'k','l':'l','m':'m','n':'n','o':'o','p':'p','q':'','r':'ɾ','s':'s','t':'t̪','u':'u','v':'v','w':'w','x':'','y':'ʝ','z':'z',
      
        ',':'ˌ','.':'.',';':'ɲ','~':'̃',"'":'ˈ'
      },

      'Off': {

        suggestions:[],

        '!':'','@':'','#':'','$':'','%':'','^':'','&':'','*':'','(':'',')':'',
          
        '1':'','2':'','3':'','4':'','5':'','6':'','7':'','8':'','9':'','0':'',
      
        'A':'','B':'','C':'','D':'','E':'','F':'','G':'','H':'','I':'','J':'','K':'','L':'','M':'','N':'','O':'','P':'','Q':'','R':'','S':'','T':'','U':'','V':'','W':'','X':'','Y':'','Z':'',
        
        'a':'','b':'','c':'','d':'','e':'','f':'','g':'','h':'','i':'','j':'','k':'','l':'','m':'','n':'','o':'','p':'','q':'','r':'','s':'','t':'','u':'','v':'','w':'','x':'','y':'','z':'',
      
        ',':'','.':'',';':''
      },

      'Mandarin (Chinese) - 普通话': {

        suggestions:['ɛ','ə','ɪ','kʰ','ŋ','pʰ','ɻ','ɻ̩','ʂ','ɕ','tʰ','t͡s','t͡sʰ','ʈ͡ʂʰ','ʈ͡ʂ','t͡ɕ','t͡ɕʰ','ʊ','ʋ','ɥ','ɥ','ɤ'],

        '!':'','@':'','#':'','$':'','%':'','^':'̯','&':'','*':'','(':'',')':'',
          
        '1':'','2':'','3':'','4':'','5':'','6':'','7':'','8':'','9':'','0':'',
      
        'A':'ɛ','B':'','C':'ʈ͡ʂʰ','D':'','E':'ə','F':'','G':'','H':'x','I':'ɪ','J':'','K':'kʰ','L':'','M':'','N':'ŋ','O':'','P':'pʰ','Q':'','R':'ɻ̩','S':'ʂ','T':'tʰ','U':'ʊ','V':'','W':'ʋ','X':'','Y':'ɥ','Z':'ʈ͡ʂ',
        
        'a':'','b':'','c':'t͡sʰ','d':'','e':'','f':'','g':'','h':'','i':'','j':'t͡ɕ','k':'','l':'','m':'','n':'','o':'','p':'','q':'t͡ɕʰ','r':'ɻ','s':'','t':'','u':'','v':'y','w':'','x':'ɕ','y':'j','z':'t͡s',
      
        ',':'ˌ','.':'',';':'ɤ',':':'ɥ'
      },

    },
    
    'textarea':''
  }
  
  // componentDidMount(){ // add NO ctrl or option or command
    // this.setState({selected: Object.keys(this.state.languages)[0]})
    // document.querySelector('#textarea').focus()
    // document.addEventListener('input', e => {
      // debugger
      // this.setState({textarea: e.data})
      // this.setState({textarea: e.key}) // 'Unidentified' on mobile
      // this.setState({textarea: e.code}) // mobile reg (not tipa), desktop other
      // this.setState({textarea: e.keyCode}) // always 229
    //   if (e.target.id === 'textarea' && this.state.languages[this.state.selected][e.key] && this.state.languages[this.state.selected][e.key] !== null){
    //     e.preventDefault()
    //     const langPlusKey = `${this.state.selected} ${e.key}`
    //     this.setState({'textarea': this.state.textarea + (localStorage.getItem(langPlusKey) || this.state.languages[this.state.selected][e.key])})
    //   }
    //   else if (e.key === 'Backspace' && e.target.id && e.target.id !== 'textarea'){
    //     this.changeKey(e)
    //   }
    // })
  // }

  changeKey = e => {
    // const langPlusKey = `${this.state.selected} ${e.target.id}`
    // if(e.target.value==='reset'){
    //   localStorage.removeItem(langPlusKey)
    // }else{
    //   localStorage.setItem(langPlusKey, e.target.value)
    // }
    // debugger
    this.setState({
      languages:{
        ...this.state.languages,
        [this.state.selected]:{
          ...this.state.languages[this.state.selected],
          [e.target.id]: e.target.value
        }
      }
    })
  }

  changeTextarea = e => {
    const val = e.target.value.split('')
    const last = val.pop()
    if(this.state.languages[this.state.selected][last]){
      this.setState({textarea: val.join('') + this.state.languages[this.state.selected][last]})
    }else{
      this.setState({textarea: e.target.value})
    }
  }

  handleSelect = (e) => {
    this.setState({selected: e.target.value})
  }

  removeLocalStorage = () => {
    Object.keys(localStorage).forEach(item => {
      if(item.includes(this.state.selected)){
        localStorage.removeItem(item)
      }
  })
  }

  render(){
    return (
      <div className="App">

        <h1>tIPA</h1>

        <p>Quickly type the International Phonetic Alphabet (IPA)</p>
        <ol>
          <li>Choose a language ('English, Phonologic' is the default)</li>
          <li>Type in the text box ('Start typing here!')</li>
          <li>The keys pressed will be replaced by the symbols in the virtual keyboards</li>
        </ol>

        <select value={this.state.selected} onChange={this.handleSelect}>
            {Object.keys(this.state.languages).sort().map(language => (
              <option key={language} value={language}>{language}</option>
            ))}
        </select>
        {/* <p>
          <button onClick={this.removeLocalStorage} value='Reset'>Reset Keys</button>
        </p> */}

        < Keyboard className='lowercaseKeyboard' 
        numberRow={['1','2','3','4','5','6','7','8','9','0']}
        topRow={['q','w','e','r','t','y','u','i','o','p']}
        middleRow={['a','s','d','f','g','h','j','k','l',';']}
        bottomRow={['z','x','c','v','b','n','m',',','.']}
        languageKeys={this.state.languages[this.state.selected]}
        languageName={this.state.selected}
        handleChange={this.changeKey}
        />

        < Keyboard className='uppercaseKeyboard' 
        numberRow={['!','@','#','$','%','^','&','*','(',')']}
        topRow={['Q','W','E','R','T','Y','U','I','O','P']}
        middleRow={['A','S','D','F','G','H','J','K','L',':']}
        bottomRow={['Z','X','C','V','B','N','M','<','>']}
        languageKeys={this.state.languages[this.state.selected]}
        languageName={this.state.selected}
        handleChange={this.changeKey}
        />
        <textarea autocomplete='no' rows="5" id='textarea' placeholder='Start typing here!' onChange={this.changeTextarea} value={this.state.textarea}/>

      </div>
    );
  }
}

// String.fromCharCode(...[...Array('Z'.charCodeAt(0) - 'A'.charCodeAt(0) + 1).keys()].map(i => i + 'A'.charCodeAt(0)));

export default App;
