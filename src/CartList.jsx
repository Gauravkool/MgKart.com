import React, { useEffect, useState } from "react";
import CartRow from "./CartRow";
import Button from "./Button";
import { withCart } from "./WithProvider";

function CartList({ cart, updateCart }) {
  const [quantityMap, setQuantityMap] = useState();

  const cartToQuantityMap = () =>
    cart.reduce(
      (m, cartItem) => ({
        ...m,
        [cartItem.product.id]: cartItem.quantity,
      }),
      {}
    );
  useEffect( 
    function () {
      setQuantityMap(cartToQuantityMap);
    },
    [cart]
  );
  function handleQuantityChange(productId, newValue) {
    const newQuantityMap = { ...quantityMap, [productId]: newValue };
    setQuantityMap(newQuantityMap);
  }
  function handleUpadteCartClick() {
    updateCart(quantityMap);
  }
  function handleRemove(productId) {
    const newQuantityMap = cartToQuantityMap();
    delete newQuantityMap[productId];
    updateCart(newQuantityMap);
  }
  return (
    <div>
      <div className="space-x-5 flex py-2 px-8 border border-gray-400 bg-gray-100">
        <span className="ml-43 grow font-bold">Product</span>
        <span className="font-bold w-20">Price</span>
        <span className="font-bold w-32">Quantity</span>
        <span className="font-bold w-20">Subtotal</span>
      </div>
      {cart.map((cartItem) => {
        return (
          <CartRow
            key={cartItem.product.id}
            product={cartItem.product}
            quantity={quantityMap[cartItem.product.id]|| cartItem.quantity}
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
export default withCart(CartList);
