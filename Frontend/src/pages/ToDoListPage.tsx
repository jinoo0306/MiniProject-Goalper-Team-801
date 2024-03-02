import React from "react";
import NavigationBar from "../components/public/NavigationBar";
import CRUDButton from "../components/ToDoListPage/CRUDButton";

function ToDoListPage() {
  return (
    <div className="flex flex-col w-screen h-screen">
      <NavigationBar />
      <div className="flex flex-row justify-center items-center h-screen w-screen p-4">
        <div className="flex flex-col h-full w-1/2 items-center p-4 bg-yellow-100">
          <div className="flex pr-32 w-full justify-end">
            <CRUDButton colorCode={0} placeHolder="Add Task" />
          </div>
          <div className="mt-4 text-6xl font-bmjua">2024.07.01</div>
        </div>

        <div className="flex flex-col h-full w-1/2 bg-blue-100"></div>
      </div>
    </div>
  );
}

export default ToDoListPage;
