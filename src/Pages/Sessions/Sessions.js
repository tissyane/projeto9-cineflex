import styled from "styled-components";
import { Title } from "../../commons/Title";
import Session from "../../Components/Session/Session";

export default function Sessions({ API }) {
  return (
    <>
      <Title>
        <h2>Selecione o horário</h2>
      </Title>
      <SessionWrapper>
        <Session API={API} />
      </SessionWrapper>
    </>
  );
}

const SessionWrapper = styled.div`
  margin-bottom: 110px;
`;
