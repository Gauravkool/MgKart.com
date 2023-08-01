import React from "react";
function TableRow({ number, index }) {
  return (
    <div className="p-1 text-lg text-indigo-500">
      {number} x {index} = {number * index}
    </div>
  );
}
export default TableRow;
