import React from 'react'

export default class Keyboard extends React.Component{

  makeKeys = arr => {
    return arr.map(key => (
      <span>
        <label>{key}</label>
        <input type='text' value={this.props.state[key]} />
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