import React from "react";
function Button(props) {
  return (
    <div>
      <button
        {...props}
        className="bg-primary-default text-white px-2 py-1 rounded-md hover:bg-primary-light ml-2 "
      ></button>
    </div>
  );
}
export default Button;
