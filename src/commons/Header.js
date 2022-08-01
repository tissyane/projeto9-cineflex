import styled from "styled-components";
import backarrow from "../assets/images/backarrow.png";
import { useNavigate, useLocation } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Container>
      {location.pathname !== "/" ? (
        <img src={backarrow} alt="back" onClick={() => navigate(-1)} />
      ) : (
        ""
      )}
      <h1>CINEFLEX</h1>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 67px;

  position: fixed;
  left: 0;
  top: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #c3cfd9;

  img {
    width: 20px;
    color: red;
    position: fixed;
    left: 15px;
    &:hover {
      transform: scale(1.2);
      filter: brightness(300%);
    }
  }

  h1 {
    color: #e8833a;
    font-size: 34px;
    line-height: 40px;
    text-transform: uppercase;
  }
`;
