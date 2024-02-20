import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SignFormInputBasic from "../components/public/SignFormInputBasic";
import SignFormInputPassword from "../components/public/SignFormInputPassword";
import SignFormAnimation from "../components/public/SignFormAnimation";

function SignupPage() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const navigate = useNavigate();

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setId(e.target.value);
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const handleSignupClick = () => {
    navigate("/login"); // 로그인 성공 시 대시보드 페이지로 이동
  };

  return (
    <div className="flex flex-col w-screen h-screen">
      <div className="flex flex-row justify-center items-center h-screen w-screen p-4">
        <div className="flex flex-col h-screen w-1/2 justify-center items-center">
          <a className="text-7xl font-bmjua mb-32">Login</a>
          <SignFormInputBasic
            placeHolder="ID"
            text={id}
            handleTextChange={handleIdChange}
          />
          <div className="h-6"></div>
          <SignFormInputPassword
            placeHolder="Password"
            text={password}
            handleTextChange={handlePasswordChange}
          />
          <div
            className={`flex flex-col pl-28 w-full text-red-400 text-xl mt-4 ${
              showErrorMessage ? "shake" : ""
            }`}
          >
            {!showErrorMessage && <br />}
            {showErrorMessage && <a>- Invalid username or password.</a>}
          </div>
          <div
            className="flex items-center justify-center h-28 w-3/4 bg-black rounded-full text-3xl text-white mt-4 cursor-pointer hover:bg-gray-700"
            onClick={handleSignupClick}
          >
            Signup
          </div>
        </div>
        <div className="border-l border-gray-100 h-screen"></div>
        <div className="flex flex-col justify-center h-screen w-1/2 items-center">
          <SignFormAnimation />
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
