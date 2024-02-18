import React from "react";
import { Routes, Route } from "react-router-dom";
import StartPage from "../src/pages/StartPage";
import MainPage from "../src/pages/MainPage";
import SignFormAnimation from "./components/public/SignFormAnimation";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </>
  );
}

export default App;
