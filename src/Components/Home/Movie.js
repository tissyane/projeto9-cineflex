import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import styled from "styled-components";

export default function Movie({ API }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const promise = axios.get(`${API}/movies`);

    promise.then((response) => {
      setMovies(response.data);
    });
  }, [API]);

  return (
    <>
      {movies.map((movie) => (
        <Poster key={movie.id}>
          <Link to={`/sessoes/${movie.id}`}>
            <img src={movie.posterURL} alt={movie.title} />
          </Link>
        </Poster>
      ))}
    </>
  );
}

const Poster = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  margin-bottom: 11px;

  img {
    width: 129px;
    height: 193px;
    object-fit: cover;
    margin: 8px;
  }
`;
