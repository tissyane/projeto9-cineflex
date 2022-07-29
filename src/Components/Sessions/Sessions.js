import { useState, useEffect } from "react";
import axios from "axios";

import { Link, useParams } from "react-router-dom";

import "./Sessions.css";

export default function Sessions({ API }) {
  const [sessions, setSessions] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    const promise = axios.get(`${API}/movies/${movieId}/showtimes`);

    promise.then((response) => {
      setSessions(response.data);
    });
  }, [API, movieId]);
  console.log(sessions);

  return (
    <>
      {Object.keys(sessions).length === 0 ? (
        "Carregando"
      ) : (
        <>
          <div className="title">
            <h1>Selecione o horário</h1>
          </div>
          <div className="sessions_container">
            {sessions.days.map((session) => (
              <div className="sessions">
                <div className="sessions_day">
                  {session.weekday} - {session.date}
                </div>
                <div className="time">
                  {session.showtimes.map((time) => (
                    <Link
                      style={{ textDecoration: "none" }}
                      to={`/assentos/${time.id}`}
                      key={time.id}
                    >
                      <div className="sessions_time" key={time.id}>
                        {time.name}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
      <div className="footer">
        <div className="chosed_movie">
          <img src={sessions.posterURL} alt={sessions.title} />
        </div>
        <h1>{sessions.title}</h1>
      </div>
    </>
  );
}
