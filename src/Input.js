import React, { Component } from 'react'
import { HuePicker, AlphaPicker, ChromePicker } from 'react-color'
import Rnd from 'react-rnd'

export default class Input extends Component {

  constructor(){
    super()
    this.state = {
      inputValue: 'Write A Message',
      textColor: '',
      highlightColor: '',
      textPicker: false,
      highlightPicker: false
    }
  }

  updateInputValue = (e) => {
    this.setState({ inputValue: e.target.value })
  }

  updateTextColor = (color) => {
    this.setState({ textColor: `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a} )` })
    console.log(color);
  }

  updateHighlightColor = (color) => {
    this.setState({ highlightColor: `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a} )` })
    console.log(color);
  }

  toggleTextColor = () => {
     if(this.state.textPicker === false){
       this.setState({ textPicker: true })
     } else {
       this.setState({ textPicker: false })
     }
  }

  toggleHighlightColor = () => {
     if(this.state.highlightPicker === false){
       this.setState({ highlightPicker: true })
     } else {
       this.setState({ highlightPicker: false })
     }
  }

  render(){
    return (
      <div className="text-center"
        style={{
          display: 'flex',
          width: 0
        }}
        >
        <Rnd
          default = {{
            x: 530,
            y: 200,
            width: 400,
            height: 200,
          }}
        >
          <h1
            style={{
            minHeight: '0.1em',
            fontSize: 'auto',
            color: this.state.textColor,
            backgroundColor: this.state.highlightColor
          }}>{this.state.inputValue}</h1>
        </Rnd>
        <div className="col-md-7 text-center"
            style={{
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              left: 520,
              top: 150,

            }}
          >
          <input
            type="text"
            value={this.state.inputValue}
            onChange={e => this.updateInputValue(e)}
            className="form-control"
            style={{
              width: 400,
              textAlign: 'center'
            }}
          />
        </div>
        <div className="text-color" style={{
          height: 287,
          marginRight: 10
        }}>
          <h4
            onClick={this.toggleTextColor}
            style={{
              cursor: 'pointer'
            }}
            >
              Text Color
          </h4>
          {this.state.textPicker ?
          <ChromePicker
            color={ this.state.textColor }
            onChange={ this.updateTextColor }
            className="col-md-4"

          />
        : null}
        </div>
        <div className="highlight-color" style={{
          height: 287
        }}>
          <h4
            onClick={this.toggleHighlightColor}
            style={{
              cursor: 'pointer'
            }}
            >
            HighLight
          </h4>
          {this.state.highlightPicker ?
          <ChromePicker
            color={ this.state.highlightColor }
            onChange={ this.updateHighlightColor }
            className="col-md-4"

          />
        : null}
        </div>
      </div>
    )
  }
}
