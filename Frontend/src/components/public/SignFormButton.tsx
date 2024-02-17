import React from "react";

function SignFormButton(viewText: string) {
  return (
    <div className="flex justify-center items-center w-3/4 h-24 bg-black rounded-full text-white text-3xl">
      {viewText}
    </div>
  );
}

export default SignFormButton;
