import styled from "styled-components";

export default function Seats({ seats }) {
  return (
    <>
      <Container>
        {seats.seats.map((seat) => (
          <div>{seat.name.padStart(2, "0")}</div>
        ))}
      </Container>
      <Wrapper>
        <div className="subtitle-box">
          <div className="selected"></div>
          <p>Selecionado</p>
        </div>
        <div className="subtitle-box">
          <div className="available"></div>
          <p>Disponível</p>
        </div>
        <div className="subtitle-box">
          <div className="unavailable"></div>
          <p>Indisponível</p>
        </div>
      </Wrapper>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  row-gap: 30px;
  gap: 8px;

  margin-top: -10px;

  div {
    width: 26px;
    height: 26px;

    font-size: 11px;
    line-height: 12.89px;

    background: #c3cfd9;
    border: 1px solid #808f9d;
    border-radius: 12px;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  .subtitle-box {
    margin-top: 20px;
    height: 60px;
    font-size: 13px;
    line-height: 15.23px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    .selected {
      width: 26px;
      height: 26px;

      font-size: 11px;
      line-height: 12.89px;
      background: #8dd7cf;
      border: 1px solid #1aae9e;
      border-radius: 17px;
    }

    .available {
      width: 26px;
      height: 26px;

      font-size: 11px;
      line-height: 12.89px;
      background: #c3cfd9;
      border: 1px solid #7b8b99;
      border-radius: 17px;
    }

    .unavailable {
      width: 26px;
      height: 26px;

      font-size: 11px;
      line-height: 12.89px;
      background: #fbe192;
      border: 1px solid #f7c52b;
      border-radius: 17px;
    }
  }
`;
