import React from "react";
import { ImSpinner3 } from "react-icons/im";
function Loading() {
  return (
    <div className="text-primary-dark text-6xl animate-spin flex items-center justify-center">
      <ImSpinner3 />
    </div>
  );
}
export default Loading;
