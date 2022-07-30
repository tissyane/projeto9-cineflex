import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import axios from "axios";

import styled from "styled-components";

import { Button } from "../../commons/Button";
import { Footer } from "../../commons/Footer";
import { Page } from "../../commons/Page";

export default function Session({ API }) {
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
      {Object.keys(sessions).length === 0 ? (
        "Carregando"
      ) : (
        <Page>
          {sessions.days.map((session) => (
            <>
              <Sessions key={session.id}>
                {session.weekday} - {session.date}
                <div>
                  {session.showtimes.map((time) => (
                    <Link
                      key={time.id}
                      style={{ textDecoration: "none" }}
                      to={`/assentos/${time.id}`}
                    >
                      <Button>{time.name}</Button>
                    </Link>
                  ))}
                </div>
              </Sessions>
            </>
          ))}
        </Page>
      )}
      <Footer>
        <div key={sessions.id}>
          <img src={sessions.posterURL} alt={sessions.title} />
        </div>
        <h1>{sessions.title}</h1>
      </Footer>
    </>
  );
}

const Sessions = styled.div`
  margin-bottom: 22px;
  font-size: 20px;
  line-height: 23.44px;
  color: #293845;

  div {
    display: flex;
    gap: 20px;
    margin-top: 15px;
  }
`;
