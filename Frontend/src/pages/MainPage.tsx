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
    navigate("/bulletin");
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
              <a className="w-full text-gray-500">
                Welcome to Today's To Do List!
              </a>
              <ToDoStatus statusCode={0} />
            </div>

            {/* No.2 To Do List*/}
            <hr className="border-t-2 w-3/4 mt-8 border-gray-400" />
            <div className="flex flex-row items-center w-3/4 text-2xl mt-8 pl-8">
              <a className="w-full text-gray-500">
                Welcome to Today's To Do List!
              </a>
              <ToDoStatus statusCode={1} />
            </div>

            {/* No.3 To Do List*/}
            <hr className="border-t-2 w-3/4 mt-8 border-gray-400" />
            <div className="flex flex-row items-center w-3/4 text-2xl mt-8 pl-8">
              <a className="w-full text-gray-500">
                Welcome to Today's To Do List!
              </a>
              <ToDoStatus statusCode={1} />
            </div>

            {/* No.4 To Do List*/}
            <hr className="border-t-2 w-3/4 mt-8 border-gray-400" />
            <div className="flex flex-row items-center w-3/4 text-2xl mt-8 pl-8">
              <a className="w-full text-gray-500">
                Welcome to Today's To Do List!
              </a>
              <ToDoStatus statusCode={2} />
            </div>

            {/* No.5 To Do List*/}
            <hr className="border-t-2 w-3/4 mt-8 border-gray-400" />
            <div className="flex flex-row items-center w-3/4 text-2xl mt-8 pl-8">
              <a className="w-full text-gray-500">
                Welcome to Today's To Do List!
              </a>
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
              <div className="flex flex-col items-center w-80 h-80 bg-gray-100 rounded-3xl mr-6">
                <a className="w-10/12 text-2xl mt-10 mb-3 text-left text-gray-500 ellipsis-title">
                  1교시 에반데
                </a>
                <hr className="border-t-2 w-10/12 border-gray-400" />
                <a className="w-10/12 h-full text-m mt-3 mb-10 text-left text-gray-500 ellipsis">
                  월요일 1교시 이거 수강신청 해야되냐 말아야되냐...
                </a>
              </div>
              <div className="flex flex-col items-center w-80 h-80 bg-gray-100 rounded-3xl mr-6">
                <a className="w-10/12 text-2xl mt-10 mb-3 text-left text-gray-500 ellipsis-title">
                  React 공부 책 추천
                </a>
                <hr className="border-t-2 w-10/12 border-gray-400" />
                <a className="w-10/12 h-full text-m mt-3 mb-10 text-left text-gray-500 ellipsis">
                  React 공부할 때 추천하는 책 있어요? ㅠㅠ
                </a>
              </div>
              <div className="flex flex-col items-center w-80 h-80 bg-gray-100 rounded-3xl">
                <a className="w-10/12 text-2xl mt-10 mb-3 text-left text-gray-500 ellipsis-title">
                  국가장학금 지원 관련 질문 있어요
                </a>
                <hr className="border-t-2 w-10/12 border-gray-400" />
                <a className="w-10/12 h-full text-m mt-3 mb-10 text-left text-gray-500 ellipsis">
                  국가장학금 지원 관련해서 질문 있어요! ㅠㅠ 궁금한게
                  많아서요... ㅠㅠ
                </a>
              </div>
            </div>

            <div className="flex flex-row mt-6 text-black">
              <div className="flex flex-col items-center w-80 h-80 bg-gray-100 rounded-3xl mr-6">
                <a className="w-10/12 text-2xl mt-10 mb-3 text-left text-gray-500 ellipsis-title">
                  사봉 신청 성공한 사람...?
                </a>
                <hr className="border-t-2 w-10/12 border-gray-400" />
                <a className="w-10/12 h-full text-m mt-3 mb-10 text-left text-gray-500 ellipsis">
                  사회봉사 신청 성공한 사람 있어? ㅠㅠ 이거 들어야 졸업 가능한데
                  어떡하냐 진짜 ㅋㅋ
                </a>
              </div>{" "}
              <div className="flex flex-col items-center w-80 h-80 bg-gray-100 rounded-3xl mr-6">
                <a className="w-10/12 text-2xl mt-10 mb-3 text-left text-gray-500 ellipsis-title">
                  여기 게시판 엄청 편하다
                </a>
                <hr className="border-t-2 w-10/12 border-gray-400" />
                <a className="w-10/12 h-full text-m mt-3 mb-10 text-left text-gray-500 ellipsis">
                  Goalper 게시판 최고! 원하는 정보를 쉽게 찾을 수 있어요!
                </a>
              </div>{" "}
              <div className="flex flex-col items-center w-80 h-80 bg-gray-100 rounded-3xl">
                <a className="w-10/12 text-2xl mt-10 mb-3 text-left text-gray-500 ellipsis-title">
                  정보처리기사 많이 어렵나요...?
                </a>
                <hr className="border-t-2 w-10/12 border-gray-400" />
                <a className="w-10/12 h-full text-m mt-3 mb-10 text-left text-gray-500 ellipsis">
                  정보처리기사 공부하고 있는데 너무 어렵네요... ㅠㅠ 도와주세요
                  ㅠㅠ
                </a>
              </div>
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
