import React, { useState } from "react";
import TableRow from "./TableRow";

function Table() {
  const [num, setNum] = useState(2);
  const [upto, setUpto] = useState(10);

  let rows = [];
  for (let i = 1; i <= upto; i++) {
    rows.push(<TableRow number={num} index={i} />);
  }

  function handleNumChange(e) {
    const newNum = +e.target.value;
    setNum(newNum);
  }
  function handleUptoChange(e) {
    const newUpto = +e.target.value;
    setUpto(newUpto);
  }
  return (
    <div className="p-2">
      {num > 20 ? (
        <div className="border border-green-500">
          Nice job ! {num} tak pahuch gaye
        </div>
      ) : (
        <div className="border border-red-500">
          {" "}
          Mahnat karlo bhai, Abhi tak {num} tak hi pahuvhe ho{" "}
        </div>
      )}
      <div className="mb-2">
        <input
          onChange={handleNumChange}
          type="text"
          className="border border-gray-700 rounded-md "
          value={num}
        />
        <input
          onChange={handleUptoChange}
          type="text"
          className="border border-gray-700 rounded-md "
          value={upto}
        />
      </div>
      {rows}
    </div>
  );
}

export default Table;
