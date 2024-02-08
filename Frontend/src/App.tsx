import React from "react";
import { Routes, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyles";
import MainPage from "../pages/MainPage";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </>
  );
}

export default App;
