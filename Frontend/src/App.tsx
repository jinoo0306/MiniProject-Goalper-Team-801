import React from "react";
import { Routes, Route } from "react-router-dom";
import StartPage from "../src/pages/StartPage";
import MainPage from "../src/pages/MainPage";
import LoginPage from "../src/pages/LoginPage";
import NavigationBar from "../src/components/public/NavigationBar";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavigationBar />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
