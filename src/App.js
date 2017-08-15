import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { getRandomPhoto } from './requests';
import { HuePicker, AlphaPicker, ChromePicker } from 'react-color'
import Rnd from 'react-rnd'


export default class App extends Component {
  constructor(){
    super()
    this.state = {
      image: '',
      author: '',
      authorUrl: '',
      inputValue: 'Write A Message',
      textColor: '#fff',
      highlightColor: 'none'
    }
  }



   getPhoto = () => {
    let randomPhoto = getRandomPhoto();
    randomPhoto.then((data) => {
      console.log(data);
      const image = data.data.links.download
      const author = data.data.user.username
      const authorUrl = data.data.links.html
      this.setState({ image, author, authorUrl })
    })
  }

  newPhoto = () => {
   let randomPhoto = getRandomPhoto();
   randomPhoto.then((data) => {
     console.log(data);
     const image = data.data.links.download
     const author = data.data.user.username
     const authorUrl = data.data.links.html
     this.setState({ image, author, authorUrl })
   })
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

  async componentWillMount(){
    await this.getPhoto()
  }


  render() {

    return (
      <div style={{
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        backgroundImage:`url(${this.state.image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}>
        <div
          className="message"
          style={{
          alignSelf: "center"
        }}>
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
        </div>
        <div style={{
          alignSelf: "center",
          margin: 'auto',
          alignItems: "center",
        }}>

          <form>
            <input
              type="text"
              className="input-lg text-center"
              value={this.state.inputValue}
              onChange={e => this.updateInputValue(e)}

              /><br />
              <h4>Text Color</h4>
              <ChromePicker
                color={ this.state.textColor }
                onChange={ this.updateTextColor }
                className="col-md-4"

              />
              <h4>HighLight</h4>
              <ChromePicker
                color={ this.state.highlightColor }
                onChange={ this.updateHighlightColor }
                className="col-md-4"

              />
          </form>
        </div>
        <div
          className="text-center"
          style={{
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          borderRadius:20,
          height: 20,
          width: 200,
          position: 'absolute',
          bottom: 0,
          right: 0
        }}>

            <a href={`${this.state.authorUrl}?utm_source=HERO_IMAGE_GENERATOR&utm_medium=referral&utm_campaign=api-credit`} target='_blank'>
              {this.state.author}
            </a> /&nbsp;
            <a href="https://unsplash.com/" target='_blank'>
              Unsplash
            </a>
        </div>

        <div style={{
          bottom: 0,
        }}>
          <button onClick={this.newPhoto} className="btn btn-info" >Different Photo</button>
        </div>

      </div>
    );
  }
}
