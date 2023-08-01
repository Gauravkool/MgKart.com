import React from "react";
import { RiShoppingBagLine } from "react-icons/Ri";
function NavBar({ productCount }) {
  return (
    <div className="py-4 bg-white">
      <div className="max-w-6xl mx-auto h-16 flex justify-between">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png" />
        <div className="flex flex-col items-center">
          <span className="text-5xl text-primary-default">
            <RiShoppingBagLine />
          </span>
          <span className="-m-7">{productCount}</span>
        </div>
      </div>
    </div>
  );
}
export default NavBar;
