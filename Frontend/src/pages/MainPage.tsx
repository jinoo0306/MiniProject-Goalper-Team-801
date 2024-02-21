import React from "react";
import { useNavigate } from "react-router-dom";
import NavigationBar from "../components/public/NavigationBar";
import ToDoStatus from "../components/public/ToDoStatus";

function MainPage() {
  const navigate = useNavigate();

  const handleToDoListClick = () => {
    navigate("/todolist");
  };

  const handleBulletinBoardClick = () => {
    navigate("/bulletinboard");
  };
  return (
    <div className="flex flex-col w-screen h-screen">
      <NavigationBar />
      <div className="flex flex-row justify-center items-center h-screen w-screen p-4">
        <div className="flex flex-col h-full w-1/2 justify-center items-center p-16">
          <div className="flex flex-col w-full h-full justify-center items-center rounded-3xl bg-gray-100">
            <a className="text-6xl font-bmjua mt-24">Today's To Do List</a>

            {/* No.1 To Do List*/}
            <hr className="border-t-2 w-3/4 mt-10 border-gray-400" />
            <div className="flex flex-row items-center w-3/4 text-2xl mt-8 pl-8">
              <a className="w-full">Welcome to Today's To Do List!</a>
              <ToDoStatus statusCode={0} />
            </div>

            {/* No.2 To Do List*/}
            <hr className="border-t-2 w-3/4 mt-8 border-gray-400" />
            <div className="flex flex-row items-center w-3/4 text-2xl mt-8 pl-8">
              <a className="w-full">Welcome to Today's To Do List!</a>
              <ToDoStatus statusCode={1} />
            </div>

            {/* No.3 To Do List*/}
            <hr className="border-t-2 w-3/4 mt-8 border-gray-400" />
            <div className="flex flex-row items-center w-3/4 text-2xl mt-8 pl-8">
              <a className="w-full">Welcome to Today's To Do List!</a>
              <ToDoStatus statusCode={1} />
            </div>

            {/* No.4 To Do List*/}
            <hr className="border-t-2 w-3/4 mt-8 border-gray-400" />
            <div className="flex flex-row items-center w-3/4 text-2xl mt-8 pl-8">
              <a className="w-full">Welcome to Today's To Do List!</a>
              <ToDoStatus statusCode={2} />
            </div>

            {/* No.5 To Do List*/}
            <hr className="border-t-2 w-3/4 mt-8 border-gray-400" />
            <div className="flex flex-row items-center w-3/4 text-2xl mt-8 pl-8">
              <a className="w-full">Welcome to Today's To Do List!</a>
              <ToDoStatus statusCode={2} />
            </div>

            <hr className="border-t-2 w-3/4 mt-8 border-gray-400" />
            <a
              className="w-3/4 text-m mt-28 text-right cursor-pointer"
              onClick={handleToDoListClick}
            >
              see more
            </a>
          </div>
        </div>

        <div className="flex flex-col h-full w-1/2">
          <a className="text-6xl font-bmjua mt-16">Today's popular posts</a>
          <div className="flex flex-col w-full h-2/3 mt-16">
            <div className="flex flex-row">
              <div className="flex flex-row w-80 h-80 bg-gray-100 rounded-3xl mr-6"></div>
              <div className="flex flex-row w-80 h-80 bg-gray-100 rounded-3xl mr-6"></div>
              <div className="flex flex-row w-80 h-80 bg-gray-100 rounded-3xl"></div>
            </div>

            <div className="flex flex-row mt-6">
              <div className="flex flex-row w-80 h-80 bg-gray-100 rounded-3xl mr-6"></div>
              <div className="flex flex-row w-80 h-80 bg-gray-100 rounded-3xl mr-6"></div>
              <div className="flex flex-row w-80 h-80 bg-gray-100 rounded-3xl"></div>
            </div>
          </div>
          <a
            className="w-5/6 text-m mt-14 text-right cursor-pointer"
            onClick={handleBulletinBoardClick}
          >
            see more
          </a>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
