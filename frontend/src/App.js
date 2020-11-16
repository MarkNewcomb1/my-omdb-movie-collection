import './App.css';
import { useState } from 'react';
import staticData from './staticJson.json';
import MovieCard from './components/MovieCard';
import Search from './components/Search';
const App = () => {
  const [movieData, setMovieData] = useState(staticData);
  const [searchValue, setSearchValue] = useState('');

  const calcuateAverageAge = () => {
    return Math.floor(movieData.reduce((acc, curr) => {
      return acc + parseInt(curr.Year)
    }, 0) / movieData.length);
  }

  return (
    <div className="App">
      <h2>My Movie Collection</h2>
      <h3>Average age of movie: {calcuateAverageAge()}</h3>
      <Search
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <div className="movie-collection">
        {movieData.map(movie => {

          if (!movie.Title.toLowerCase().includes(searchValue)) {
            return null;
          }

          return (
            <MovieCard
              title={movie.Title}
              year={movie.Year}
              poster={movie.Poster}
              key={movie.Plot}
            />
          )
        })}
</div>
    </div>
  );
}

export default App;
