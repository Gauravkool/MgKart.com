import React, { useEffect, useState } from "react";
import CartRow from "./CartRow";
import Button from "./Button";

function CartList({ products, cart, updateCart }) {
  const [localCart, setLocalCart] = useState(cart);
  useEffect(
    function () {
      setLocalCart(cart);
    },
    [cart]
  );
  function handleQuantityChange(productId, newValue) {
    console.log("newValue", " productid", newValue, productId);
    const newLocalCart = { ...localCart, [productId]: newValue };
    setLocalCart(newLocalCart);
  }
  function handleUpadteCartClick() {
    updateCart(localCart);
  }
  function handleRemove(productId) {
    const newCart = { ...cart };
    console.log("before cart", newCart);
    delete newCart[productId];
    updateCart(newCart);
    console.log("after cart", newCart);
  }
  return (
    <div>
      <div className="space-x-5 flex py-2 px-8 border border-gray-400 bg-gray-100">
        <span className="ml-43 grow font-bold">Product</span>
        <span className="font-bold w-20">Price</span>
        <span className="font-bold w-32">Quantity</span>
        <span className="font-bold w-20">Subtotal</span>
      </div>
      {products.map(function (p) {
        return (
          <CartRow
            key={p.id}
            product={p}
            quantity={localCart[p.id]}
            handleQuantityChange={handleQuantityChange}
            onRemove={handleRemove}
          />
        );
      })}
      <div className="flex justify-end py-2 px-8">
        <Button onClick={handleUpadteCartClick}>Update Cart</Button>
      </div>
    </div>
  );
}
export default CartList;
