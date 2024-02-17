import React from "react";
function SignInputFormBasic(placeHolder: string) {
  return (
    <input
      className="pl-4 w-3/4 h-24 border-2 border-solid border-gray-400 rounded-md bg-white text-3xl focus:border-blue-200"
      placeholder={placeHolder}
      type="text"
    ></input>
  );
}

export default SignInputFormBasic;
