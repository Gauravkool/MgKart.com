import React from "react";
import NotFoundImage from "./not-found.jpg"
function NotFound() {
  return (
    <div className="flex items-center justify-center h-full">
      <img
        className=""
        src={NotFoundImage}
      />
    </div>
  );
}
export default NotFound;
