import React, { useState } from "react";
import BasicProfile from "../../assets/images/NavigationBar/BasicProfile.png";
import ProfileMenuImage from "../../assets/images/NavigationBar/ProfileMenuImage.png";
function NavigationBar() {
  const [profileCode] = useState("");
  const Profile =
    profileCode === "" ? (
      <img
        className="h-16 w-16 rounded-full mr-9"
        src={BasicProfile}
        alt="Empty Profile"
      />
    ) : (
      <img
        className="h-16 w-16 rounded-full mr-9"
        src={profileCode}
        alt="Profile Image"
      />
    );
  return (
    <div className="flex flex-row justify-center items-center h-24 bg-gray-100">
      <div className="flex flex-row p-6 w-4/5">
        <a className="text-4xl font-passion mr-24">Goalper</a>
        <a className="text-2xl ml-10 cursor-pointer mr-20">To Do List</a>
        <a className="text-2xl ml-10 cursor-pointer mr-20">Bulletin Board</a>
        <a className="text-2xl ml-10 cursor-pointer">Buy Books</a>
      </div>
      <div className="flex flex-row p-6 justify-end items-center w-1/5">
        {Profile}
        <img
          src={ProfileMenuImage}
          alt="Profile Menu"
          className="h-4 w-4 cursor-pointer"
        />
      </div>
    </div>
  );
}

export default NavigationBar;
