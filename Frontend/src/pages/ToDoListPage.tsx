import React, { useState } from "react";
import NavigationBar from "../components/public/NavigationBar";
import ToDoStatus from "../components/public/ToDoStatus";
import CRUDButton from "../components/ToDoListPage/CRUDButton";
import DateMove from "../assets/images/ToDoListPage/DateMove.png";
import Empty from "../assets/images/ToDoListPage/ToDoListPageEmpty.png";

function ToDoListPage() {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  // 날짜를 변경하는 함수
  const changeDate = (amount: number) => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + amount);
    setCurrentDate(newDate);
  };

  // 현재 날짜를 지정된 형식으로 반환하는 함수
  const getFormattedDate = (date: Date): string => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // 한 자리 숫자인 경우 앞에 0을 붙여 두 자리로 만듭니다
    const day = date.getDate().toString().padStart(2, "0"); // 한 자리 숫자인 경우 앞에 0을 붙여 두 자리로 만듭니다
    return `${year}.${month}.${day}`;
  };

  return (
    <div className="flex flex-col w-screen h-screen">
      <NavigationBar />
      <div className="flex flex-row justify-center items-center h-screen w-screen p-4">
        <div className="flex flex-col h-full w-1/2 items-center p-4">
          <div className="flex pr-32 w-full justify-end">
            <CRUDButton colorCode={0} placeHolder="Add Task" />
          </div>
          <div className="flex flex-row justify-center items-center mt-8 text-6xl font-bmjua">
            <img
              src={DateMove}
              alt="DateMoveLeft"
              className="w-12 h-12 mr-16 cursor-pointer"
              onClick={() => changeDate(-1)} // 왼쪽 버튼을 눌렀을 때 날짜를 하루 빼기
            />
            {getFormattedDate(currentDate)} {/* 현재 날짜 표시 */}
            <img
              src={DateMove}
              alt="DateMoveRight"
              className="w-12 h-12 transform scale-x-[-1] ml-16 cursor-pointer"
              onClick={() => changeDate(1)} // 오른쪽 버튼을 눌렀을 때 날짜를 하루 더하기
            />
          </div>
          <div className="flex flex-row items-center w-3/4 h-24 text-2xl mt-8 pl-8 pr-12 font-extrabold">
            <a className="w-full">To Do Title</a>
            <a className="text-right">Status</a>
          </div>
          <hr className="border-t-2 w-3/4 border-gray-400" />
          <div className="flex flex-col items-center w-full h-5/6 overflow-scrol hideScrollBar">
            <hr className="border-t-2 w-3/4 border-gray-400" />
            <div className="flex flex-row items-center text-gray-500 w-3/4 h-32 text-2xl pl-8 pr-6">
              <a className="w-full">React 공부</a>
              <ToDoStatus statusCode={2} />
            </div>

            <hr className="border-t-2 w-3/4 border-gray-400" />
            <div className="flex flex-row items-center text-gray-500 w-3/4 h-32 text-2xl pl-8 pr-6">
              <a className="w-full">수강신청</a>
              <ToDoStatus statusCode={2} />
            </div>

            <hr className="border-t-2 w-3/4 border-gray-400" />
            <div className="flex flex-row items-center text-gray-500 w-3/4 h-32 text-2xl pl-8 pr-6">
              <a className="w-full">Next.js 공부</a>
              <ToDoStatus statusCode={1} />
            </div>

            <hr className="border-t-2 w-3/4 border-gray-400" />
            <div className="flex flex-row items-center text-gray-500 w-3/4 h-32 text-2xl pl-8 pr-6">
              <a className="w-full">오늘도 사랑스럽개 정주행</a>
              <ToDoStatus statusCode={0} />
            </div>

            <hr className="border-t-2 w-3/4 border-gray-400" />
            <div className="flex flex-row items-center text-gray-500 w-3/4 h-32 text-2xl pl-8 pr-6">
              <a className="w-full">오늘도 사랑스럽개 정주행</a>
              <ToDoStatus statusCode={0} />
            </div>

            <hr className="border-t-2 w-3/4 border-gray-400" />
            <div className="flex flex-row items-center text-gray-500 w-3/4 h-32 text-2xl pl-8 pr-6">
              <a className="w-full">오늘도 사랑스럽개 정주행</a>
              <ToDoStatus statusCode={0} />
            </div>
          </div>
        </div>
        <div className="border-l border-gray-100 w-px h-full"></div>
        <div className="flex flex-col h-full w-1/2">
          {false && (
            <div className="flex flex-col justify-center items-center w-full h-full text-2xl font-bold">
              <img src={Empty} alt="Empty" className="w-96" />
              Click on To Do TItle to see details.
            </div>
          )}
          {true && (
            <div className="flex flex-col items-center w-full h-full p-4">
              <div className="flex pr-32 w-full justify-end">
                <CRUDButton colorCode={1} placeHolder="Delete Task" />
                <div className="w-4"></div>
                <CRUDButton colorCode={2} placeHolder="Save Task" />
              </div>
              <a className="text-2xl w-3/4 font-bold mt-12 m-4 pl-4">
                To Do Title
              </a>
              <input
                type="text"
                className="w-3/4 h-20 p-4 border-2 border-black rounded-2xl"
                placeholder="Type your task here..."
              ></input>

              <a className="text-2xl w-3/4 font-bold mt-12 m-4 pl-4">Status</a>
              <select className="w-3/4 h-20 p-4 border-2 border-black rounded-2xl text-gray-600">
                <option value="0">Not Started</option>
                <option value="1">In Progress</option>
                <option value="2">Completed</option>
              </select>
              <a className="text-2xl w-3/4 font-bold mt-12 m-4 pl-4">
                Detailed
              </a>
              <textarea
                className="w-3/4 h-96 p-4 border-2 border-black rounded-2xl"
                placeholder="Type your detailed task here..."
              ></textarea>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ToDoListPage;
