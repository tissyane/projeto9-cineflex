import styled from "styled-components";

import { useState } from "react";
import axios from "axios";
import { Button } from "../../commons/Button";
import { Link } from "react-router-dom";

export default function BuyerForm() {
  return (
    <Container>
      <div>
        <p>Nome do comprador:</p>
        <input type="text" placeholder="Digite seu nome..."></input>
      </div>
      <div>
        <p>CPF do comprador:</p>
        <input type="text" placeholder="Digite seu CPF..."></input>
      </div>
      <Button>
        <Link style={{ textDecoration: "none" }} to={"/sucesso/"}>
          Reservar assento(s)
        </Link>
      </Button>
    </Container>
  );
}

const Container = styled.form`
  margin: 30px 24px;
  font-size: 18px;
  line-height: 21.09px;
  color: #293845;

  div {
    margin-bottom: 10px;
  }

  input {
    width: 327px;
    height: 51px;
    margin-top: 5px;
    padding-left: 18px;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 3px;

    &::placeholder {
      font-style: italic;
      font-size: 18px;
      color: #afafaf;
    }
  }
`;
