import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
function CartRow({ product, quantity, handleQuantityChange, onRemove }) {
  function handleChange(e) {
    handleQuantityChange(product.id, +e.target.value);
  }
  function handleRemove() {
    onRemove(product.id);
  }
  return (
    <div className="flex flex-row px-8 py-2 border border-gray-300 items-center space-x-5">
      <span className="w-16 h-16 flex items-center text-2xl">
        <AiOutlineCloseCircle onClick={handleRemove} />
      </span>
      <div className="w-16 h-16">
        <img className="w-full h-full object-cover" src={product.thumbnail} />
      </div>
      <h3 className="grow text-primary-default font-semibold">
        {product.title}
      </h3>
      <span className="w-20 font-semibold">${product.price}</span>
      <div className="w-32">
        <input
          value={quantity}
          onChange={handleChange}
          type="number"
          className="w-12 p-1 border border-gray-200 rounded-md mx-2 font-semibold text-gray-700"
        />
      </div>
      <span className="w-20 font-semibold">${product.price * quantity}</span>
    </div>
  );
}
export default CartRow;
