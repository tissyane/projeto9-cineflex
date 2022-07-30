import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../../assets/css/reset.css";
import "../../assets/css/styles.css";
import styled from "styled-components";
import HomePage from "../../Pages/HomePage";
import SessionsPage from "../../Pages/SessionsPage";
import SeatsPage from "../../Pages/SeatsPage";
import Success from "../../Pages/Success";

let API = "https://mock-api.driven.com.br/api/v7/cineflex";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header>
          <h1>CINEFLEX</h1>{" "}
        </Header>
        <Routes>
          <Route path="/" element={<HomePage API={API} />} />
          <Route
            path="/sessoes/:movieId"
            element={<SessionsPage API={API} />}
          />
          <Route
            path="/assentos/:sessionId"
            element={<SeatsPage API={API} />}
          />
          <Route path="/sucesso/" element={<Success />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

const Header = styled.div`
  width: 100vw;
  height: 67px;

  position: fixed;
  left: 0;
  top: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #c3cfd9;

  h1 {
    color: #e8833a;
    font-size: 34px;
    line-height: 40px;
    text-transform: uppercase;
  }
`;
