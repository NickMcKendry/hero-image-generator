import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { getRandomPhoto } from './requests';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import dragula from 'react-dragula';
import { HuePicker, AlphaPicker } from 'react-color'


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
   this.setState({ textColor: color.hex })
   console.log(color);
 }

 updateHighlightColor = (color) => {
   this.setState({ highlightColor: color.hex })
   console.log(color);
 }

 componentDidMount(){
   const message = ReactDOM.findDOMNode(this);
   let options = { copy: true }
   dragula(message);
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
        justifyContent: "center"
      }}>

        <img src={this.state.image} style={{
          height: "auto",
          width: "100%",
          resizeMode: "cover",

        }} />
        <div
          className="message"
          style={{
          position: "absolute",
          alignSelf: "center"
        }}>
          <h1 style={{
            minHeight: '0.1em',
            color: this.state.textColor,
            backgroundColor: this.state.highlightColor
          }}>{this.state.inputValue}</h1>
        </div>
        <div className="text-center" style={{
          position: 'absolute',
          zIndex: 1,
          alignSelf: "center",
          margin: 'auto',
          alignItems: "center",
          top: 600
        }}>

          <form>
            <input
              type="text"
              className="input-lg"
              value={this.state.inputValue}
              onChange={e => this.updateInputValue(e)}

              /><br />
              <h4>Text Color</h4>
              <HuePicker
                color={ this.state.textColor }
                onChange={ this.updateTextColor }
              /> <br />
              <h4>HighLight</h4>
              <HuePicker
                color={ this.state.highlightColor }
                onChange={ this.updateHighlightColor }
              />
          </form>
        </div>
        <div style={{
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          position: 'absolute',
          zIndex: 1,
          right: 0,
          bottom: 10,
          borderRadius:20,
          padding: 10,
          paddingTop: 0,
          paddingBottom: 0
        }}>

            <a href={`${this.state.authorUrl}?utm_source=HERO_IMAGE_GENERATOR&utm_medium=referral&utm_campaign=api-credit`} target='_blank'>
              {this.state.author}
            </a> /&nbsp;
            <a href="https://unsplash.com/" target='_blank'>
              Unsplash
            </a>
        </div>

        <div style={{
          position: 'absolute',
          bottom: 0,
          zIndex: 1
        }}>
          <button onClick={this.newPhoto} className="btn btn-info" >Different Photo</button>
        </div>

      </div>
    );
  }
}
