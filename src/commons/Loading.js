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
  position: fixed;
  top: 200px;
  left: 10px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100vw;
  }
`;
