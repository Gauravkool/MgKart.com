import React from "react";
import CartRow from "./CartRow";

function CartList({ products, cart }) {
  return (
    <div>
      <h3>this is Header</h3>
      {products.map(function (p) {
        return <CartRow product={p} quantity={cart[p.id]} />;
      })}
    </div>
  );
}
export default CartList;
