import React from "react";
function CartPage({ cart }) {
  const productIds = Object.keys(cart);
  console.log("product ids",cart, productIds);
  return <div>Cart page</div>;
}
export default CartPage;
