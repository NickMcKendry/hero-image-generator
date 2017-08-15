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
      highlightPicker: false,
      preview: true
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

  togglePreview = () => {
    if(this.state.preview === false){
      this.setState({ preview: true })
    } else {
      this.setState({ preview: false })
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
        {this.state.preview ? null :
        <h4 onClick={this.togglePreview} style={{
          cursor: 'pointer'
        }}>X</h4>
      }
        {this.state.preview ?
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
        : null }

        <div className="text-color" style={{
          height: 287,
          marginRight: 10
        }}>
        {this.state.preview ?
          <h4
            onClick={this.toggleTextColor}
            style={{
              cursor: 'pointer'
            }}
            >
              Text Color
          </h4> : null }

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
        {this.state.preview ?
          <h4
            onClick={this.toggleHighlightColor}
            style={{
              cursor: 'pointer'
            }}
            >
            HighLight
          </h4>
          : null }
          {this.state.highlightPicker ?
          <ChromePicker
            color={ this.state.highlightColor }
            onChange={ this.updateHighlightColor }
            className="col-md-4"

          />
        : null}
        </div>
        {this.state.preview ?
        <div style={{
          marginTop: '51%',
          position: 'absolute',
          left: 10
        }}>
          <button className="btn-sm btn-success" onClick={this.togglePreview}>
            Preview
          </button>
        </div>
      : null }
      
      </div>
    )
  }
}
