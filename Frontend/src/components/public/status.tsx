import React from "react";
function Status(statusCode: number) {
  const statusBackgroundColor = [
    "bg-gray-300",
    "bg-yellow-100",
    "bg-green-200",
  ];
  const statusFontColor = [
    "text-gray-600",
    "text-yellow-700",
    "text-green-700",
  ];
  const statusText = ["Not Started", "In Progress", "Completed"];
  return (
    <div
      className={`flex justify-center items-center w-32 h-12 rounded-full ${statusBackgroundColor[statusCode]} ${statusFontColor[statusCode]} text-base`}
    >
      {statusText[statusCode]}
    </div>
  );
}

export default Status;
