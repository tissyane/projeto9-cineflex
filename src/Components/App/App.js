import { BrowserRouter, Routes, Route } from "react-router-dom";

import "../assets/css/reset.css";
import "../assets/css/styles.css";

import Header from "../Header/Header";
import Home from "../Home/Home";
import Seats from "../Seats/Seats";
import Sessions from "../Sessions/Sessions";
import Success from "../Success/Success";

let API = "https://mock-api.driven.com.br/api/v5/cineflex";

export default function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home API={API} />} />
          <Route path="/sessoes/" element={<Sessions />} />
          <Route path="/assentos/" element={<Seats />} />
          <Route path="/sucesso/" element={<Success />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
