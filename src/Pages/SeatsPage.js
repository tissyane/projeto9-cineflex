import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import styled from "styled-components";

import { Title } from "../commons/Title";
import { Footer } from "../commons/Footer";

import Loading from "../commons/Loading";

import BuyerForm from "../Components/Seats/BuyerForm";
import Seats from "../Components/Seats/Seats";
import { Page } from "../commons/Page";

export default function SeatsPage({ API, index }) {
  const [seats, setSeats] = useState({});
  const [seatIds, setSeatIds] = useState([]);
  const [seatNames, setSeatNames] = useState([]);
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
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
        <Page>
          <Loading />
        </Page>
      ) : (
        <>
          <Page>
            <Title>
              <h2>Selecione o(s) assento(s)</h2>
            </Title>
            <Seats
              key={seats.id}
              seats={seats.seats}
              id={seats.id}
              seatIds={seatIds}
              setSeatIds={setSeatIds}
              seatNames={seatNames}
              setSeatNames={setSeatNames}
            />

            <BuyerForm
              key={index}
              seats={seats}
              name={name}
              setName={setName}
              cpf={cpf}
              setCpf={setCpf}
              seatIds={seatIds}
              seatNames={seatNames}
            />
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
