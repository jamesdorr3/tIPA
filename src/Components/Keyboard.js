import React from 'react'

export default class Keyboard extends React.Component{

  makeKeys = arr => {
    return arr.map(key => (
      <span className='key' key={key}>
        <span className='keyName'>{key}</span>
        <input 
          type='text'
          id={key}
          placeholder={this.props.language[key]} 
          value={this.props.language[key]} 
          onChange={this.props.handleChange}
          list='suggestions'
          onClick={(e) => e.target.value = ''}
          onBlur={(e) => e.target.value = this.props.language[key]}
        />
      </span>
    ))
  }

  suggestions = ['a','b','d']

  render(){
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
          {this.suggestions.map(suggestion => <option value={suggestion} />)}
        </datalist>
      </div>
    )
  }
}