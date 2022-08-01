import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../../assets/css/reset.css";
import "../../assets/css/styles.css";
import HomePage from "../../Pages/HomePage";
import SessionsPage from "../../Pages/SessionsPage";
import SeatsPage from "../../Pages/SeatsPage";
import Success from "../../Pages/Success";
import Header from "../../commons/Header";

let API = "https://mock-api.driven.com.br/api/v7/cineflex";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
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
