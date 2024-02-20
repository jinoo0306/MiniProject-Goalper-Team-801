import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SignFormInputBasic from "../components/public/SignFormInputBasic";
import SignFormInputPassword from "../components/public/SignFormInputPassword";
import SignFormAnimation from "../components/public/SignFormAnimation";

function SignupPage() {
  const [username, setUsername] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [showUsernameErrorMessage, setUsernameShowErrorMessage] =
    useState(false);
  const [showIdErrorMessage, setIdShowErrorMessage] = useState(false);
  const [showPasswordErrorMessage, setPasswordShowErrorMessage] =
    useState(false);
  const [showPasswordCheckErrorMessage, setPasswordCheckShowErrorMessage] =
    useState(false);
  const navigate = useNavigate();

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUsername(e.target.value);
  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setId(e.target.value);
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);
  const handlePasswordCheckChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPasswordCheck(e.target.value);

    if

  const handleSignupClick = () => {
    navigate("/login"); // 로그인 성공 시 대시보드 페이지로 이동
  };

  return (
    <div className="flex flex-col w-screen h-screen">
      <div className="flex flex-row justify-center items-center h-screen w-screen p-4">
        <div className="flex flex-col h-screen w-1/2 justify-center items-center">
          <a className="text-7xl font-bmjua mb-20">Signup</a>
          <SignFormInputBasic
            placeHolder="USERNAME"
            text={username}
            handleTextChange={handleUsernameChange}
          />
          <div
            className={`flex flex-col w-full justify-center pl-percent-13 text-red-400 text-xl mt-3 mb-5 ${
              showUsernameErrorMessage ? "shake" : ""
            }`}
          >
            {showUsernameErrorMessage ? (
              <a>- Invalid username or password.</a>
            ) : (
              <a className="text-gray-500">- 2+ characters including English</a>
            )}
          </div>
          <SignFormInputBasic
            placeHolder="ID"
            text={username}
            handleTextChange={handleIdChange}
          />
          <div
            className={`flex flex-col w-full justify-center pl-percent-13 text-red-400 text-xl mt-3 mb-5 ${
              showUsernameErrorMessage ? "shake" : ""
            }`}
          >
            {showUsernameErrorMessage ? (
              <a>- Invalid username or password.</a>
            ) : (
              <a className="text-gray-500">- 4+ characters including English</a>
            )}
          </div>
          <SignFormInputPassword
            placeHolder="Password"
            text={password}
            handleTextChange={handlePasswordChange}
          />
          <div
            className={`flex flex-col w-full justify-center pl-percent-13 text-red-400 text-xl mt-3 mb-5 ${
              showUsernameErrorMessage ? "shake" : ""
            }`}
          >
            {showUsernameErrorMessage ? (
              <a>- Invalid username or password.</a>
            ) : (
              <a className="text-gray-500">
                - 8+ characters including English & Number & special symbol
              </a>
            )}
          </div>
          <SignFormInputPassword
            placeHolder="Confirm Password"
            text={passwordCheck}
            handleTextChange={handlePasswordCheckChange}
          />
          <div
            className={`flex flex-col w-full justify-center pl-percent-13 text-red-400 text-xl mt-3 mb-5 ${
              showUsernameErrorMessage ? "shake" : ""
            }`}
          >
            {showUsernameErrorMessage ? (
              <a>- Invalid username or password.</a>
            ) : (
              <a className="text-gray-500">
                - 8+ characters including English & Number & special symbol
              </a>
            )}
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
