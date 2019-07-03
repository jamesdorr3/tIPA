import React from 'react'

export default class Keyboard extends React.Component{

  makeKeys = arr => {
    return arr.map(key => (
      <span className='key' key={key}>
        <span className='keyName'>{key}</span>
        <input 
          type='text'
          id={key}
          value={this.props.state[key]} 
          onChange={this.props.handleChange}
        />
      </span>
    ))
  }

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
      </div>
    )
  }
}