import React from "react";
import NavigationBar from "../components/public/NavigationBar";
import SignFormInputBasic from "../components/public/SignFormInputBasic";
import SignFormAnimation from "../components/public/SignFormAnimation";

function LoginPage() {
  return (
    <div className="flex flex-col w-screen h-screen">
      <NavigationBar />
      <div className="flex flex-row justify-center h-screen w-screen p-4">
        <div className="flex flex-col justify-center h-11/12 w-1/2 items-center"></div>
        <div className="border-l border-gray-100 h-11/12"></div>
        <div className="flex flex-col justify-center h-11/12 w-1/2 items-center">
          <SignFormAnimation />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
