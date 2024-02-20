import React from "react";
type SignFormInputBasicProps = {
  placeHolder: string;
  text: string;
  handleTextChange: React.ChangeEventHandler<HTMLInputElement>;
};

function SignFormInputBasic({
  placeHolder,
  text,
  handleTextChange,
}: SignFormInputBasicProps) {
  return (
    <input
      className="p-8 w-3/4 h-24 border-2 border-solid border-gray-400 rounded-md bg-white text-3xl focus:border-blue-200"
      type="text"
      value={text}
      placeholder={placeHolder}
      onChange={handleTextChange}
    ></input>
  );
}

export default SignFormInputBasic;
