import React from "react";

type CRUDButton = {
  colorCode: number;
  placeHolder: string;
};

function CRUDButton({ colorCode, placeHolder }: CRUDButton) {
  const buttonBorderColor = [
    "border-blue-200",
    "border-red-200",
    "border-green-400",
  ];
  const buttonFontColor = ["text-blue-500", "text-red-500", "text-green-700"];
  return (
    <div
      className={`w-32 h-12 rounded-2xl border-4 ${buttonBorderColor[colorCode]} ${buttonFontColor[colorCode]} text-center flex items-center justify-center`}
    >
      {placeHolder}
    </div>
  );
}

export default CRUDButton;
