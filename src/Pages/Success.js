import styled from "styled-components";
import { Button } from "../commons/Button";
import { Page } from "../commons/Page";
import { Title } from "../commons/Title";
export default function Success() {
  return (
    <Page>
      <FinalTitle>
        <h2>
          Pedido feito <br /> com sucesso!
        </h2>
      </FinalTitle>
      <Container>
        {" "}
        <Wrapper>
          <h2>Filme e sessão</h2>
          <div className="sucess_details">
            <h1>Enola Holmes</h1>
            <h1>24/06/2022 - 15:00</h1>
          </div>
        </Wrapper>
        <Wrapper>
          <h2>Ingressos</h2>
          <div className="sucess_details">
            <h1>Assento 12</h1>
            <h1>Assento 13</h1>
          </div>
        </Wrapper>
        <Wrapper>
          <h2>Comprador</h2>
          <div className="sucess_details">
            <h1>Senhor das Estrelas</h1>
            <h1>000.000.000-00</h1>
          </div>
        </Wrapper>
      </Container>

      <Button>
        <p>Voltar para Home</p>
      </Button>
    </Page>
  );
}

const Container = styled.div`
  margin-bottom: 100px;
`;

const FinalTitle = styled(Title)`
  h2 {
    font-weight: 700;
    color: #247a6b;
    text-align: center;
  }
`;

const Wrapper = styled(Title)`
  margin-top: 15px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  .sucess_details {
    font-weight: 400;
    font-size: 22px;
    line-height: 25.78px;
    margin-top: 10px;
    color: #293845;
  }

  h2 {
    font-size: 22px;
    font-weight: 700;
    line-height: 25.78px;
    margin-top: 20px;
  }
`;
