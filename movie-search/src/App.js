import './App.css';
import axios from 'axios'
import {useState} from 'react'
// require('dotenv').config();


function App() {
  let [state, setState] = useState({
    movie: {},
  });
  const fetch = require('node-fetch');
  const url = 'https://api.themoviedb.org/3/authentication';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.REACT_APP_BEARERTOKEN}`
    }
  };
  
  fetch(url, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error('error:' + err));
  const getMovie = () => {
    let apiKey = process.env.REACT_APP_APIKEY
    axios.get(`https://api.themoviedb.org/3/movie/157336?api_key=${apiKey}`)
      .then((res) => {
        setState({...state, movie: res.data})
        // console.log(data)
      })
  }

  return (
    <div className="App">
      <button onClick={() => {
        getMovie();
        }}>CLICK</button>
    <h2>{state.movie.title}</h2>
    </div>
  );
}

export default App;
