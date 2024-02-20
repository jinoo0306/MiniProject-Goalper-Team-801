import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavigationBar from "../components/public/NavigationBar";
import SignFormInputBasic from "../components/public/SignFormInputBasic";
import SignFormInputPassword from "../components/public/SignFormInputPassword";
import SignFormAnimation from "../components/public/SignFormAnimation";

function LoginPage() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setId(e.target.value);
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const handleSignUpClick = () => {
    navigate("/signup");
  };

  useEffect(() => {
    console.log(`id : ${id}, password : ${password}`);
  });

  return (
    <div className="flex flex-col w-screen h-screen">
      <NavigationBar />
      <div className="flex flex-row justify-center h-screen w-screen p-4">
        <div className="flex flex-col h-11/12 w-1/2 items-center">
          <a className="text-7xl font-bmjua mt-32 mb-32">Login</a>
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
          <div className="flex items-center justify-center h-28 w-3/4 bg-black rounded-full text-3xl text-white mt-20 cursor-pointer hover:bg-gray-700">
            Login
          </div>
          <div className="flex flex-row justify-center items-center mt-6 text-2xl text-gray-400">
            <a>Don't have an account?</a>
            <a
              className="underline ml-2 cursor-pointer hover:text-gray-700"
              onClick={handleSignUpClick}
            >
              Sign up
            </a>
          </div>
        </div>
        <div className="border-l border-gray-100 h-11/12"></div>
        <div className="flex flex-col justify-center h-11/12 w-1/2 items-center">
          <SignFormAnimation />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
