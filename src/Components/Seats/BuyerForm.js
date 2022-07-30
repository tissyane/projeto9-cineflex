import styled from "styled-components";

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
    </Container>
  );
}

const Container = styled.div`
  margin: 42px 0;
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
