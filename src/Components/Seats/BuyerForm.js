import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { Button } from "../../commons/Button";
import Loading from "../../commons/Loading";
import { Page } from "../../commons/Page";

export default function BuyerForm({
  seats,
  name,
  setName,
  cpf,
  setCpf,
  seatNames,
  seatIds,
}) {
  const [sent, setSent] = useState(false);

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    if (seatIds.length === 0) {
      return alert("Escolha pelo menos um assento");
    }
    const promise = axios.post(
      "https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many",
      {
        ids: seatIds,
        name: name,
        cpf: cpf,
      }
    );

    setSent(true);

    promise.then(() => {
      navigate("/sucesso", {
        replace: false,
        state: {
          cpf: cpf,
          name: name,
          time: seats.name,
          date: seats.day.date,
          title: seats.movie.title,
          seatNames: seatNames,
        },
      });
    });
  }

  return (
    <>
      {sent === true ? (
        <Page>
          <Loading />
        </Page>
      ) : (
        <ContainerForm onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Nome do comprador:</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Digite seu nome..."
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="cpf">CPF do comprador:</label>
            <input
              id="cpf"
              name="cpf"
              type="text"
              placeholder="Digite seu CPF... (000.000.000-00)"
              pattern="^([0-9]){3}\.([0-9]){3}\.([0-9]){3}-([0-9]){2}$"
              value={cpf}
              required
              onChange={(e) => setCpf(e.target.value)}
            />
          </div>
          <ButtonFinal type="submit">Reservar assento(s)</ButtonFinal>
        </ContainerForm>
      )}
    </>
  );
}

const ContainerForm = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  label {
    display: block;
    font-size: 18px;
    margin-top: 9px;
    margin-bottom: 3px;
    color: #293845;
  }
  input {
    padding-left: 18px;
    width: 85vw;
    max-width: 450px;
    height: 51px;
    background-color: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 3px;
    font-size: 18px;
    outline: none;
  }
  input::placeholder {
    font-style: italic;
    color: #afafaf;
  }
`;

const ButtonFinal = styled(Button)`
  margin-top: 30px;
  margin-bottom: 100px;
`;
