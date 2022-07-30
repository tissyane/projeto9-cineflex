import styled from "styled-components";
import { Title } from "../../commons/Title";
import Movie from "../../Components/Home/Movie";

export default function HomePage({ API }) {
  return (
    <>
      <Title>
        <h2>Selecione o filme</h2>
      </Title>
      <MovieWrapper>
        <Movie API={API} />
      </MovieWrapper>
    </>
  );
}

const MovieWrapper = styled.div`
  margin: 0 auto;
  margin-left: 30px;
  margin-right: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
