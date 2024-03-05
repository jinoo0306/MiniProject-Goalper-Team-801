import React, { useState } from "react";
import NavigationBar from "../components/public/NavigationBar";
import CRUDButton from "../components/ToDoListPage/CRUDButton";

function BulletInPage() {
  const [pageNumber, setPageNumber] = useState(1);

  return (
    <div className="flex flex-col w-screen h-screen">
      <NavigationBar />
      <div className="flex flex-col items-center h-full w-full p-4">
        <div className="flex mt-8 mb-8 w-3/4 justify-end">
          <CRUDButton colorCode={3} placeHolder="Write a post" />
        </div>

        <div className="flex flex-col justify-center items-center w-full h-24 bg-white">
          <div className="flex flex-row w-3/4 h-full justify-center items-center p-8">
            <a className="text-2xl w-full font-bold text-gray-500 truncate">
              와 진짜 이거 뭐야 말이 되냐 난 진짜 이해가 안된다. 왜 이렇게
              어렵게 만드는거야. 제발 도와줄 사람좀 구합니다......
            </a>
            <a className="text-2xl w-96 font-bold text-blue-600 text-right">
              자유게시판 | 15 시간 | 조진우
            </a>
          </div>
          <hr className="w-3/4 border-1 border-gray-300" />
        </div>

        <div className="flex flex-col justify-center items-center w-full h-24 bg-white">
          <div className="flex flex-row w-3/4 h-full justify-center items-center p-8">
            <a className="text-2xl w-full font-bold text-gray-500 truncate">
              와 진짜 이거 뭐야 말이 되냐 난 진짜 이해가 안된다. 왜 이렇게
              어렵게 만드는거야. 제발 도와줄 사람좀 구합니다......
            </a>
            <a className="text-2xl w-96 font-bold text-blue-600 text-right">
              자유게시판 | 15 시간 | 조진우
            </a>
          </div>
          <hr className="w-3/4 border-1 border-gray-300" />
        </div>

        <div className="flex flex-col justify-center items-center w-full h-24 bg-white">
          <div className="flex flex-row w-3/4 h-full justify-center items-center p-8">
            <a className="text-2xl w-full font-bold text-gray-500 truncate">
              와 진짜 이거 뭐야 말이 되냐 난 진짜 이해가 안된다. 왜 이렇게
              어렵게 만드는거야. 제발 도와줄 사람좀 구합니다......
            </a>
            <a className="text-2xl w-96 font-bold text-blue-600 text-right">
              자유게시판 | 15 시간 | 조진우
            </a>
          </div>
          <hr className="w-3/4 border-1 border-gray-300" />
        </div>

        <div className="flex flex-col justify-center items-center w-full h-24 bg-white">
          <div className="flex flex-row w-3/4 h-full justify-center items-center p-8">
            <a className="text-2xl w-full font-bold text-gray-500 truncate">
              와 진짜 이거 뭐야 말이 되냐 난 진짜 이해가 안된다. 왜 이렇게
              어렵게 만드는거야. 제발 도와줄 사람좀 구합니다......
            </a>
            <a className="text-2xl w-96 font-bold text-blue-600 text-right">
              자유게시판 | 15 시간 | 조진우
            </a>
          </div>
          <hr className="w-3/4 border-1 border-gray-300" />
        </div>

        <div className="flex flex-col justify-center items-center w-full h-24 bg-white">
          <div className="flex flex-row w-3/4 h-full justify-center items-center p-8">
            <a className="text-2xl w-full font-bold text-gray-500 truncate">
              와 진짜 이거 뭐야 말이 되냐 난 진짜 이해가 안된다. 왜 이렇게
              어렵게 만드는거야. 제발 도와줄 사람좀 구합니다......
            </a>
            <a className="text-2xl w-96 font-bold text-blue-600 text-right">
              자유게시판 | 15 시간 | 조진우
            </a>
          </div>
          <hr className="w-3/4 border-1 border-gray-300" />
        </div>

        <div className="flex flex-col justify-center items-center w-full h-24 bg-white">
          <div className="flex flex-row w-3/4 h-full justify-center items-center p-8">
            <a className="text-2xl w-full font-bold text-gray-500 truncate">
              와 진짜 이거 뭐야 말이 되냐 난 진짜 이해가 안된다. 왜 이렇게
              어렵게 만드는거야. 제발 도와줄 사람좀 구합니다......
            </a>
            <a className="text-2xl w-96 font-bold text-blue-600 text-right">
              자유게시판 | 15 시간 | 조진우
            </a>
          </div>
          <hr className="w-3/4 border-1 border-gray-300" />
        </div>

        <div className="flex flex-col justify-center items-center w-full h-24 bg-white">
          <div className="flex flex-row w-3/4 h-full justify-center items-center p-8">
            <a className="text-2xl w-full font-bold text-gray-500 truncate">
              와 진짜 이거 뭐야 말이 되냐 난 진짜 이해가 안된다. 왜 이렇게
              어렵게 만드는거야. 제발 도와줄 사람좀 구합니다......
            </a>
            <a className="text-2xl w-96 font-bold text-blue-600 text-right">
              자유게시판 | 15 시간 | 조진우
            </a>
          </div>
          <hr className="w-3/4 border-1 border-gray-300" />
        </div>

        <div className="flex flex-col justify-center items-center w-full h-24 bg-white">
          <div className="flex flex-row w-3/4 h-full justify-center items-center p-8">
            <a className="text-2xl w-full font-bold text-gray-500 truncate">
              와 진짜 이거 뭐야 말이 되냐 난 진짜 이해가 안된다. 왜 이렇게
              어렵게 만드는거야. 제발 도와줄 사람좀 구합니다......
            </a>
            <a className="text-2xl w-96 font-bold text-blue-600 text-right">
              자유게시판 | 15 시간 | 조진우
            </a>
          </div>
          <hr className="w-3/4 border-1 border-gray-300" />
        </div>

        <div className="flex flex-row w-3/4 justify-center items-center mt-20">
          <div className="flex flex-row justify-center items-center w-32 h-16 bg-gray-200 text-2xl rounded-xl m-2 cursor-pointer">
            Previous
          </div>

          <div className="flex flex-row justify-center items-center w-32 h-16 bg-gray-200 text-2xl rounded-xl m-2 cursor-pointer">
            Next
          </div>
        </div>
      </div>
    </div>
  );
}

export default BulletInPage;
