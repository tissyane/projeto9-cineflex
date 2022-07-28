import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./Home.css";

export default function Home({ API }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const promise = axios.get(`${API}/movies`);

    promise.then((response) => {
      setMovies(response.data);
    });
  }, [API]);

  return (
    <>
      <div className="title">
        <h1>Selecione o filme</h1>
      </div>
      <div className="movies_container">
        {movies.map((movie) => (
          <div className="poster">
            <Link to={`/sessoes/`}>
              <img
                key={movie.id}
                id={movie.id}
                src={movie.posterURL}
                alt={movie.title}
              />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
