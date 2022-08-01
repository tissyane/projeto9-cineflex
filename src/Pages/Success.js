import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../commons/Button";
import { Page } from "../commons/Page";
import { Title } from "../commons/Title";

export default function Success() {
  window.scrollTo(0, 0);
  const { state } = useLocation();
  let { cpf, name, time, date, title, seatNames } = state;
  seatNames.sort((a, b) => {
    return a - b;
  });

  return (
    <Page>
      <FinalTitle>
        <h2>
          Pedido feito <br /> com sucesso!
        </h2>
      </FinalTitle>
      <Container>
        <div>
          <h2>Filme e sessão</h2>
          <p>{title}</p>
          <p>{`${date} ${time}`}</p>
        </div>
        <div>
          <h2>Ingressos</h2>
          {seatNames.map((value) => {
            return (
              <p key={value}>
                {value.length > 1 ? `Assento ${value}` : `Assento 0${value}`}
              </p>
            );
          })}
        </div>
        <div>
          <h2>Comprador</h2>
          <p>{`Nome: ${name}`}</p>
          <p>{`CPF: ${cpf}`}</p>
        </div>
      </Container>
      <Link style={{ textDecoration: "none" }} to="/">
        <Button>Voltar pra Home</Button>
      </Link>
    </Page>
  );
}

const Container = styled.div`
  margin-bottom: 100px;

  div {
    margin-top: 15px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  p {
    font-weight: 400;
    font-size: 22px;
    line-height: 25.78px;
    margin-top: 10px;
    color: #293845;
  }

  h2 {
    color: #293845;
    font-size: 22px;
    font-weight: 700;
    line-height: 25.78px;
    margin-top: 20px;
  }
`;

const FinalTitle = styled(Title)`
  h2 {
    font-weight: 700;
    color: #247a6b;
    text-align: center;
  }
`;
