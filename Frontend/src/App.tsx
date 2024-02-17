import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "../src/pages/MainPage";
import SignFormAnimation from "./components/public/SignFormAnimation";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignFormAnimation />} />
      </Routes>
    </>
  );
}

export default App;
