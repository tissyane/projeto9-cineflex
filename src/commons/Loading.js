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
  margin-top: 70px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100vw;
  }
`;
