import React from "react";
import { Link } from "react-router-dom";
function SideBar() {
  return (
    <div className="flex flex-col bg-gray-400 w-80 h-screen space-y-3 p-2">
      <Link to="/assignments" className="text-indigo-900 font-semibold">Assignments</Link>
      <Link to="/lectures" className="text-indigo-900 font-semibold">Lectures</Link>
    </div>
  );
}
export default SideBar;
