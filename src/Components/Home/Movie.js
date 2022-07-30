import { Link } from "react-router-dom";

import styled from "styled-components";

export default function Movie({ movies }) {
  return (
    <MovieWrapper>
      {movies.map((movie) => (
        <Poster key={movie.id}>
          <Link to={`/sessoes/${movie.id}`}>
            <img src={movie.posterURL} alt={movie.title} />
          </Link>
        </Poster>
      ))}
    </MovieWrapper>
  );
}

const MovieWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

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
