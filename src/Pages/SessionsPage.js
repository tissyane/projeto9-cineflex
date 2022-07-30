import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { Page } from "../commons/Page";
import { Title } from "../commons/Title";
import { Footer } from "../commons/Footer";

import Session from "../Components/Session/Session";

export default function SessionsPage({ API }) {
  const [sessions, setSessions] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    const promise = axios.get(`${API}/movies/${movieId}/showtimes`);

    promise.then((response) => {
      setSessions(response.data);
    });
  }, [API, movieId]);

  return (
    <>
      <Page>
        <Title>
          <h2>Selecione o horário</h2>
        </Title>

        <Session sessions={sessions} key={sessions.id} />
      </Page>

      <Footer key={sessions.id}>
        <div className="image">
          <img src={sessions.posterURL} alt={sessions.title} />
        </div>
        <p>{sessions.title}</p>
      </Footer>
    </>
  );
}
