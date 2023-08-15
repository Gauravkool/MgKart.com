import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
function CartRow({ product, quantity }) {
  return (
    <div className="flex flex-row px-8 py-2 border-4 border-white items-center space-x-5">
      <span className="w-16 h-16 flex items-center">
        <AiOutlineCloseCircle />
      </span>
      <div className="w-16 h-16">
        <img className="w-full h-full object-cover" src={product.thumbnail} />
      </div>
      <h3 className="grow">{product.title}</h3>
      <span className="w-20">${product.price}</span>
      <div className="w-32">
        <input
          value={quantity}
          type="number"
          className="w-12 p-1 border border-gray-200 rounded-md mx-2"
        />
      </div>
      <span className="w-20">${product.price * quantity}</span>
    </div>
  );
}
export default CartRow;
