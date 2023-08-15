import React from "react";
import CartRow from "./CartRow";

function CartList({ products, cart }) {
  return (
    <div>
      <div className="space-x-5 flex py-2 px-8 bg-gray-300 border border-gray-400">
        <span className="ml-43 grow font-bold">Product</span>

        <span className="font-bold w-20">Price</span>
        <span className="font-bold w-32">Quantity</span>
        <span className="font-bold w-20">Subtotal</span>
      </div>
      {products.map(function (p) {
        return <CartRow product={p} quantity={cart[p.id]} />;
      })}
    </div>
  );
}
export default CartList;
