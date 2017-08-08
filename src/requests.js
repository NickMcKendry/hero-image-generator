import axios from 'axios';

const getRandomPhoto = () =>{
  return axios.get('https://api.unsplash.com/photos/random?client_id=2e00eff25470101b0d2922bd998c1cfb2cca152b463df64b5931867ba71e95e8')
}

export {
  getRandomPhoto
}
