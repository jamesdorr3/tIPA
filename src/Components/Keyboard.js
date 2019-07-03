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
      <div className={this.props.className}>
        <div className='numbers-row'>
          {this.makeKeys(this.props.numberRow)}
        </div>
        <div className='top-row'>
          {this.makeKeys(this.props.topRow)}
        </div>
        <div>
          {this.makeKeys(this.props.middleRow)}
        </div>
        <div className='bottom-row'>
          {this.makeKeys(this.props.bottomRow)}
        </div>
      </div>
    )
  }
}