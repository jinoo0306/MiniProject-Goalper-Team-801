import React from "react";
import { Routes, Route } from "react-router-dom";
import StartPage from "../src/pages/StartPage";
import MainPage from "../src/pages/MainPage";
import LoginPage from "../src/pages/LoginPage";
import SignupPage from "../src/pages/SignupPage";
import ToDoListPage from "../src/pages/ToDoListPage";
import BulletInPage from "../src/pages/BulletInPage";
import BuyBooksPage from "../src/pages/BuyBooksPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/todolist" element={<ToDoListPage />} />
        <Route path="/bulletin" element={<BulletInPage />} />
        <Route path="/buybooks" element={<BuyBooksPage />} />
      </Routes>
    </>
  );
}

export default App;
