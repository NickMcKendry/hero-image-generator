import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { getRandomPhoto } from './requests';
import { HuePicker, AlphaPicker, ChromePicker } from 'react-color'
import Rnd from 'react-rnd'
import Input from './Input'


export default class App extends Component {
  constructor(){
    super()
    this.state = {
      image: '',
      author: '',
      authorUrl: '',
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





  async componentWillMount(){
    await this.getPhoto()
  }


  render() {

    return (
      <div style={{
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        backgroundImage:`url(${this.state.image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}>
      <Input />
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
          marginLeft: "91%"
        }}>
          <button onClick={this.newPhoto} className="btn btn-info" >Different Photo</button>
        </div>

      </div>
    );
  }
}
