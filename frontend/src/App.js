import './App.css';
import react, {useState} from 'react';
import staticData from './staticJson.json';
import MovieCard from './MovieCard';
const App = () => {

  // const [color, setColor] = useState('red');
  // const changeColor = () => {
  //   setColor('cornflowerblue');
  // }
  const [movieData, setMovieData] = useState(staticData)
  return (
    <div className="App">
      {/* <div className="classToChange" 
      style={{backgroundColor: color, height:'50px'}}
      ></div>
      <button onClick={() => changeColor()}>CLICK TO CHANGE COLOR</button> */}
      {/* <p>{JSON.stringify(staticData)}</p> */}
      <h2>My Movie Collection</h2>
<div className="movie-collection">
      { staticData.map(movie => (
        <MovieCard 
        title={movie.Title}
        year={movie.Year}
        poster={movie.Poster}
        key={movie.Plot}
        />
      ))}
</div>
    </div>
  );
}

export default App;
