import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

import styled from "styled-components";
import { Page } from "../commons/Page";
import { Title } from "../commons/Title";
import { Button } from "../commons/Button";
import { Footer } from "../commons/Footer";

import Loading from "../commons/Loading";
import Seats from "../Components/Seats/Seats";
import BuyerForm from "../Components/Seats/BuyerForm";

export default function SeatsPage({ API }) {
  const [seats, setSeats] = useState({});
  const { sessionId } = useParams();

  useEffect(() => {
    const promise = axios.get(`${API}/showtimes/${sessionId}/seats`);

    promise.then((response) => {
      setSeats(response.data);
    });
  }, [API, sessionId]);

  const check = Object.keys(seats).length === 0;
  return (
    <>
      {check ? (
        <Loading />
      ) : (
        <>
          <Page>
            <Title>
              <h2>Selecione o(s) assento(s)</h2>
            </Title>
            <Seats seats={seats} key={seats.id} />

            <BuyerForm />
            <Button>
              <Link style={{ textDecoration: "none" }} to={"/sucesso/"}>
                Reservar assento(s)
              </Link>
            </Button>
          </Page>
          <Footer>
            <div className="image">
              <img src={seats.movie.posterURL} alt={seats.movie.title} />
            </div>
            <Details>
              <p>{seats.movie.title}</p>
              <p>
                {seats.day.weekday} - {seats.name}
              </p>
            </Details>
          </Footer>
        </>
      )}
    </>
  );
}

const Details = styled.div`
  display: flex;
  flex-direction: column;
`;
