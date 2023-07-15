import { useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";

const API_URL =
  " https://api.themoviedb.org/3/movie/upcoming?api_key=e978d37cf754ee2def0362a69807b215&language=en-US&page=1 ";

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data);
  };

  useEffect(() => {
    searchMovies("Transformers");
  });

  return(
    <div className="app">
      <h1>CineStar</h1>
    </div>
  )
};

export default App;
