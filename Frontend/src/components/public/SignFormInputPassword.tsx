import React from "react";
type SignFormInputPasswordProps = {
  placeHolder: string;
  text: string;
  handleTextChange: React.ChangeEventHandler<HTMLInputElement>;
};

function SignFormInputPassword({
  placeHolder,
  text,
  handleTextChange,
}: SignFormInputPasswordProps) {
  return (
    <input
      className="p-8 w-3/4 h-24 border-2 border-solid border-gray-400 rounded-md bg-white text-3xl focus:border-blue-200"
      placeholder={placeHolder}
      type="password"
      value={text}
      onChange={handleTextChange}
    ></input>
  );
}

export default SignFormInputPassword;
