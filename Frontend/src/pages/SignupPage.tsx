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
  const [showUsernameErrorMessage, setShowUsernameErrorMessage] =
    useState(false);
  const [showIdErrorMessage, setShowIdErrorMessage] = useState(false);
  const [showPasswordErrorMessage, setShowPasswordErrorMessage] =
    useState(false);
  const [showPasswordCheckErrorMessage, setShowPasswordCheckErrorMessage] =
    useState(false);

  const [recentClick, setRecentClick] = useState(false);
  const [firstClick, setFirstClick] = useState(false);

  const navigate = useNavigate();

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUsername(e.target.value);
  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setId(e.target.value);
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);
  const handlePasswordCheckChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPasswordCheck(e.target.value);

  const updateStatus = () => {
    setShowUsernameErrorMessage(false);
    setShowIdErrorMessage(false);
    setShowPasswordErrorMessage(false);
    setShowPasswordCheckErrorMessage(false);

    setTimeout(() =>
      setShowUsernameErrorMessage(
        !(
          username.length >= 2 &&
          (/[a-zA-Z]/.test(username) || /[ㄱ-ㅎㅏ-ㅣ가-힣]/.test(username))
        )
      )
    );

    setTimeout(() =>
      setShowIdErrorMessage(
        !(id.length >= 4 && /[a-zA-Z]/.test(id) && /\d/.test(id))
      )
    );

    setTimeout(() =>
      setShowPasswordErrorMessage(
        !(
          password.length >= 8 &&
          /[a-zA-Z]/.test(password) &&
          /\d/.test(password) &&
          /[!@#$%^&*()\-_=+{};:,<.>]/.test(password)
        )
      )
    );

    setTimeout(() =>
      setShowPasswordCheckErrorMessage(
        password != passwordCheck ||
          passwordCheck == "" ||
          showPasswordErrorMessage
      )
    );
  };

  useEffect(() => {
    updateStatus();
  }, [username, id, password, passwordCheck]);

  const handleSignupClick = () => {
    updateStatus();
    console.log(
      `username: ${showUsernameErrorMessage}\nid: ${showIdErrorMessage} \npw: ${showPasswordErrorMessage} \npwCheck: ${showPasswordCheckErrorMessage} \n`
    );
    setRecentClick(true);
    setFirstClick(true);
    setTimeout(() => setRecentClick(false), 400);
    if (
      !(
        showIdErrorMessage ||
        showPasswordErrorMessage ||
        showPasswordCheckErrorMessage ||
        showUsernameErrorMessage
      ) &&
      username &&
      id &&
      password &&
      passwordCheck
    ) {
      navigate("/login");
    } else {
      console.log("로그인 실패!");
    }
  };

  return (
    <div className="flex flex-col w-screen h-screen">
      <div className="flex flex-row justify-center items-center h-screen w-screen p-4">
        <div className="flex flex-col h-screen w-1/2 justify-center items-center">
          <a className="text-7xl font-bmjua mb-20">Signup</a>

          {/* username */}
          <SignFormInputBasic
            placeHolder="USERNAME"
            text={username}
            handleTextChange={handleUsernameChange}
          />
          <div
            className={`flex flex-col w-full justify-center pl-percent-13 text-red-400 text-xl mt-3 mb-5 ${
              showUsernameErrorMessage && recentClick ? "shake" : ""
            }`}
          >
            {username ? (
              showUsernameErrorMessage ? (
                <a>- Invalid username or password.</a>
              ) : (
                <a className="text-blue-500">- Conditions match.</a>
              )
            ) : firstClick ? (
              <a>- Invalid username or password.</a>
            ) : (
              <a className="text-gray-500">
                - 2+ characters including English or Korean
              </a>
            )}
          </div>

          {/* ID */}
          <SignFormInputBasic
            placeHolder="ID"
            text={id}
            handleTextChange={handleIdChange}
          />
          <div
            className={`flex flex-col w-full justify-center pl-percent-13 text-red-400 text-xl mt-3 mb-5 ${
              showIdErrorMessage && recentClick ? "shake" : ""
            }`}
          >
            {id ? (
              showIdErrorMessage ? (
                <a>- Invalid username or password.</a>
              ) : (
                <a className="text-blue-500">- Conditions match.</a>
              )
            ) : firstClick ? (
              <a>- Invalid username or password.</a>
            ) : (
              <a className="text-gray-500">- 4+ characters including English</a>
            )}
          </div>

          {/* password */}
          <SignFormInputPassword
            placeHolder="Password"
            text={password}
            handleTextChange={handlePasswordChange}
          />
          <div
            className={`flex flex-col w-full justify-center pl-percent-13 text-red-400 text-xl mt-3 mb-5 ${
              showPasswordErrorMessage && recentClick ? "shake" : ""
            }`}
          >
            {password ? (
              showPasswordErrorMessage ? (
                <a>- Invalid username or password.</a>
              ) : (
                <a className="text-blue-500">- Conditions match.</a>
              )
            ) : firstClick ? (
              <a>- Invalid username or password.</a>
            ) : (
              <a className="text-gray-500">
                - 8+ characters including English & Number & special symbol
              </a>
            )}
          </div>

          {/* password check */}
          <SignFormInputPassword
            placeHolder="Confirm Password"
            text={passwordCheck}
            handleTextChange={handlePasswordCheckChange}
          />
          <div
            className={`flex flex-col w-full justify-center pl-percent-13 text-red-400 text-xl mt-3 mb-5 ${
              showPasswordCheckErrorMessage && recentClick ? "shake" : ""
            }`}
          >
            {passwordCheck ? (
              showPasswordCheckErrorMessage ? (
                <a>- Invalid username or password.</a>
              ) : (
                <a className="text-blue-500">- Conditions match.</a>
              )
            ) : firstClick ? (
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
