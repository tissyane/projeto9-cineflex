import styled from "styled-components";
import loading from "../assets/images/giphy.gif";

export default function Loading() {
  return (
    <Load>
      <img src={loading} alt="Logotipo"></img>;
    </Load>
  );
}

const Load = styled.div`
  background-color: white;
  height: 100vh;

  img {
    width: 100vw;
  }
`;
