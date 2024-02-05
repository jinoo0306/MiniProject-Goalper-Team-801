import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyles";
import MainPage from "../pages/MainPage";

function App() {
  return (
    <>
      <GlobalStyle />

      <Route path="/" element={<MainPage />} />
    </>
  );
}

export default App;
