import React from "react";
import NavigationBar from "../components/public/NavigationBar";

function MainPage() {
  return (
    <div className="flex flex-col w-screen h-screen">
      <NavigationBar />
      <div className="flex flex-row justify-center items-center h-screen w-screen p-4">
        <div className="flex flex-col h-full w-1/2 justify-center items-center p-16">
          <div className="flex flex-col w-full h-full justify-center items-center rounded-3xl bg-gray-100">
            <a className="text-6xl font-bmjua">Today's To Do List</a>
          </div>
        </div>

        <div className="flex flex-col justify-center h-full w-1/2 items-center bg-blue-100"></div>
      </div>
    </div>
  );
}

export default MainPage;
