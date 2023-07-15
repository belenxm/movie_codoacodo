import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import "./App.css";
import SearchIcon from "./search.svg";

const API_URL ='http://www.omdbapi.com?apikey=b6003d8a';
  //" https://api.themoviedb.org/3/movie/upcoming?api_key=e978d37cf754ee2def0362a69807b215&language=en-US&page=1 ";//

/*const movie1 = {
  "Title": "Amazing Spiderman Syndrome",
  "Year": "2012",
  "omdb":"tt2586634",
  "Type":"movie",
  "Poster":"N/A"
}*/




const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("titanic");
  });

  return (
    <div className="app">
      <h1>CineStar</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img  
          src={SearchIcon} 
          alt="search" 
          onClick={() => searchMovies(searchTerm)}
         />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

    
     
      

export default App;
