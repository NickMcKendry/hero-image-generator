import React, { Component } from 'react'
import { HuePicker, AlphaPicker, ChromePicker } from 'react-color'
import Rnd from 'react-rnd'

export default class Input extends Component {

  constructor(){
    super()
    this.state = {
      inputValue: '',
      textColor: '',
      highlightColor: ''
    }
  }

  updateInputValue = (e) => {
    this.setState({ inputValue: e.target.value })
  }

  render(){
    return (
      <div className="container">
        <Rnd
          default = {{
            x: -100,
            y: -100,
            width: 400,
            height: 200,
          }}
        >
          <h1 style={{
            minHeight: '0.1em',
            fontSize: 'auto',
            color: this.state.textColor,
            backgroundColor: this.state.highlightColor
          }}>{this.state.inputValue}</h1>
        </Rnd>
        <div className="input-group">
          <input
            type="text"
            value={this.state.inputValue}
            onChange={e => this.updateInputValue(e)}
            />
        </div>
      </div>
    )
  }
}
