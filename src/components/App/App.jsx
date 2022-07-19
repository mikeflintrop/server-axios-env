
import axios from 'axios';
import './App.css';
import {useState} from 'react';
function App () {

  const [gifs, setGifs] = useState([]);

  const handleClick = () => {

    axios.get('/gif')
    .then(response => {
      console.log(response);
      setGifs(response.data.data);
    })
    .catch(error => {
      console.log(error);
    });
  };

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">APIs</h1>
          <h4><i>APIs</i></h4>
          <button onClick={handleClick}>GIFs PLZ</button>
        </header>
        <br/>
        {gifs.map((gif, i) => {
            return <img key={i} src={gif.images.original.url}></img>
          })}
      </div>
    );
  
};

export default App;
