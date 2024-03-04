import React from "react";
import NavigationBar from "../components/public/NavigationBar";
import CRUDButton from "../components/ToDoListPage/CRUDButton";

function BulletInPage() {
  return (
    <div className="flex flex-col w-screen h-screen">
      <NavigationBar />
      <div className="flex flex-col items-center h-screen w-screen p-4">
        <div className="flex mt-8 mb-8 w-3/4 justify-end">
          <CRUDButton colorCode={3} placeHolder="Write a post" />
        </div>
        <div className="flex flex-col justify-center items-center w-full h-24 bg-white">
          <div className="flex flex-row w-full h-full justify-center items-center">
            asdf
          </div>
          <hr className="w-3/4 border-1 border-gray-300" />
        </div>
      </div>
    </div>
  );
}

export default BulletInPage;
