import { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const promise = axios.get(
      "https://mock-api.driven.com.br/api/v5/cineflex/movies"
    );

    promise.then((response) => {
      setMovies(response.data);
    });
  }, []);

  return (
    <>
      <div className="title">
        <h1>Selecione o filme</h1>
      </div>
      <div className="movies_container">
        {movies.map((data) => (
          <div className="poster">
            <img key={data.id} src={data.posterURL} alt={data.title} />
          </div>
        ))}
      </div>
    </>
  );
}
