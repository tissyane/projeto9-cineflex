// import { useState, useEffect } from "react";
// import axios from "axios";

import { Link } from "react-router-dom";

import "./Sessions.css";

export default function Sessions({ API, id }) {
  // const [session, setSession] = useState({});
  // const { movieId } = useParams();

  // useEffect(() => {
  //   const promise = axios.get(`${API}/movies/${movieId}/showtimes`);

  //   promise.then((response) => {
  //     setSession(response.data);
  //   });
  // }, [API, movieId]);

  const session = [
    {
      id: 24062021,
      weekday: "Quinta-feira",
      date: "24/06/2021",
      time: "15:00",
      showtimes: [
        {
          name: "15:00",
          id: 1,
        },
        {
          name: "19:00",
          id: 2,
        },
      ],
    },
    {
      id: 25062021,
      weekday: "Sexta-feira",
      date: "25/06/2021",
      time: "19:00",
      showtimes: [
        {
          name: "15:00",
          id: 3,
        },
        {
          name: "19:00",
          id: 4,
        },
      ],
    },
  ];

  return (
    <>
      <div className="title">
        <h1>Selecione o horário</h1>
      </div>
      <div>
        {session.map((data) => (
          <div className="sessions">
            <div className="sessions_day">
              {data.weekday} - {data.date}
            </div>
            <div className="sessions_time">
              <Link to={"/assentos/"}>{data.time}</Link>
            </div>
          </div>
        ))}
      </div>
      <div className="footer">
        <div className="chosed_movie">
          <img src={"./image6.png"} alt={"movie_poster"} />
        </div>
        <h1>Enola Holmes</h1>
      </div>
    </>
  );
}
