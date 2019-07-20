import React from 'react'

export default class Keyboard extends React.Component{

  makeKeys = arr => {
    return arr.map(key => (
      <span className='key' key={key}>
        <span className='keyName'>{key}</span>
        <input 
          type='text'
          id={key}
          placeholder={localStorage.getItem(`${this.props.languageName} ${key}`) || this.props.languageKeys[key]} 
          value={localStorage.getItem(`${this.props.languageName} ${key}`) || this.props.languageKeys[key]} 
          onChange={this.props.handleChange}
          list='suggestions'
          onClick={(e) => e.target.value = ''}
          onBlur={(e) => e.target.value = this.props.languageKeys[key]}
        />
      </span>
    ))
  }

  render(){
    // console.log(this.props.languageName)
    return(
      <div className={this.props.className + ' keyboard'}>
        <div className='numbers-row row'>
          <span></span>
          {this.makeKeys(this.props.numberRow)}
          <span></span>
        </div>
        <div className='top-row row'>
          <span></span>
          {this.makeKeys(this.props.topRow)}
          <span></span>
        </div>
        <div className='middle-row row'>
          <span></span>
          {this.makeKeys(this.props.middleRow)}
          <span></span>
        </div>
        <div className='bottom-row row'>
          <span></span>
          {this.makeKeys(this.props.bottomRow)}
          <span></span>
        </div>
        <datalist id='suggestions'>
          {this.props.languageKeys.suggestions ? this.props.languageKeys.suggestions.map(suggestion => <option key={suggestion} value={suggestion} />) : null}
        </datalist>
      </div>
    )
  }
}