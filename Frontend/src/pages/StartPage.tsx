import React from "react";
import { useNavigate } from "react-router-dom";
import ToDoListImage from "../assets/images/StartPage/ToDoList.png";
import BulletinBoard from "../assets/images/StartPage/BulletinBoard.png";
import BuyBooks from "../assets/images/StartPage/BuyBooks.png";

function StartPage() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/login");
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-8xl font-bold mt-32">The best helper for studying</h1>
      <h2 className="text-4xl font-bold mt-14 text-gray-500">
        Get the best help for your studies with Goalper
      </h2>
      <div className="flex flex-row justify-center items-center mt-28 w-100 h-96">
        <div className="flex flex-col justify-center items-center m-5 w-4/12 h-full bg-gray-100 rounded-3xl shadow-2xl">
          <img src={ToDoListImage} alt="To Do List Image" className="h-64" />
          <a className="text-5xl mt-4 font-bmjua">To Do List</a>
        </div>
        <div className="flex flex-col justify-center items-center m-5 w-4/12 h-full bg-gray-100 rounded-3xl shadow-2xl">
          <img src={BulletinBoard} alt="To Do List Image" className="h-64" />
          <a className="text-5xl mt-4 font-bmjua">Bulletin Board</a>
        </div>
        <div className="flex flex-col justify-center items-center m-5 w-4/12 h-full bg-gray-100 rounded-3xl shadow-2xl">
          <img src={BuyBooks} alt="To Do List Image" className="h-64" />
          <a className="text-5xl mt-4 font-bmjua">Buy Books</a>
        </div>
      </div>
      <div
        className="flex flex-col justify-center items-center mt-28 w-72 h-28 bg-black rounded-full text-white text-3xl cursor-pointer hover-scale"
        onClick={handleButtonClick}
      >
        Get started
      </div>
    </div>
  );
}

export default StartPage;
