import React from "react";
import NavigationBar from "../components/public/NavigationBar";
import CRUDButton from "../components/ToDoListPage/CRUDButton";

function ToDoListPage() {
  return (
    <div className="flex flex-col w-screen h-screen">
      <NavigationBar />
      <div className="flex flex-row justify-center items-center h-screen w-screen p-4">
        <div className="flex flex-col h-full w-1/2 justify-center items-center p-16 bg-red-100">
          <CRUDButton colorCode={0} placeHolder="Create" />
          <CRUDButton colorCode={1} placeHolder="Delete" />
          <CRUDButton colorCode={2} placeHolder="Edit" />
        </div>

        <div className="flex flex-col h-full w-1/2 bg-blue-100"></div>
      </div>
    </div>
  );
}

export default ToDoListPage;
