import React, { useState } from "react";
import NavigationBar from "../components/public/NavigationBar";
import CRUDButton from "../components/ToDoListPage/CRUDButton";
import DateMove from "../assets/images/ToDoListPage/DateMove.png";

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
      {" "}
      {/* 전체 화면을 차지하는 컨테이너 */}
      <NavigationBar />
      <div className="flex flex-row justify-center items-center h-screen w-screen p-4">
        {" "}
        {/* 네비게이션바를 제외한 전체 */}
        <div className="flex flex-col h-full w-1/2 items-center p-4 bg-yellow-100">
          {" "}
          {/* 왼쪽 컨테이너 */}
          <div className="flex pr-32 w-full justify-end">
            <CRUDButton colorCode={0} placeHolder="Add Task" />
          </div>
          <div className="flex flex-row justify-center items-center mt-8 text-6xl font-bmjua">
            {" "}
            {/* 날짜 */}
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
          <div className="flex flex-row items-center w-3/4 h-32 bg-red-100 text-2xl mt-8 pl-8">
            asdf
          </div>
          <hr className="border-t-2 w-3/4 border-gray-400" />
          <div className="To Do List 컨테이너 flex flex-col items-center mt-8 w-full h-5/6 overflow-y-auto hideScrollBar">
            asd
          </div>
        </div>
        <div className="flex flex-col h-full w-1/2 bg-blue-100">
          {" "}
          {/* 오른쪽 컨테이너 */}
        </div>
      </div>
    </div>
  );
}

export default ToDoListPage;
