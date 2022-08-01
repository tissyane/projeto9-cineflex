import { useState, useEffect } from "react";
import axios from "axios";

import { Page } from "../commons/Page";
import { Title } from "../commons/Title";

import Movie from "../Components/Home/Movie";
import Loading from "../commons/Loading";

export default function HomePage({ API, index }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const promise = axios.get(`${API}/movies`);

    promise.then((response) => {
      setMovies(response.data);
    });
  }, [API]);

  if (movies.length === 0) {
    return <Loading />;
  }

  return (
    <Page>
      <Title>
        <h2>Selecione o filme</h2>
      </Title>

      <Movie movies={movies} key={index} />
    </Page>
  );
}
