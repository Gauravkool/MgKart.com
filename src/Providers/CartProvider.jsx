import React, { useEffect, useState } from "react";
import { CartContext } from "../Contexts";
import { withCart } from "../WithProvider";
import { getCart, getProductsByIds, saveCart } from "../API";
function CartProvider({ isLoggedIn, user, children }) {
  const [cart, setCart] = useState([]);
  console.log("cart is cartProvier", cart);
  useEffect(
    function () {
      if (isLoggedIn) {
        getCart().then((savedCart) => {
          setCart(savedCart);
        });
      } else {
        const savedDataString = localStorage.getItem("my-cart" || "{}");
        const savedData = JSON.parse(savedDataString);
        getProductsByIds(Object.keys(savedData)).then((products) => {
          const savedCart = products.map((p) => ({
            product: p,
            quantity: savedData[p.id],
          }));
          setCart(savedCart);
        });
      }
    },
    [isLoggedIn]
  );
  function addToCart(productId, count) {
    const oldCount = cart[productId] || 0;
    const newCart = { ...cart, [productId]: oldCount + count };
    updateCart(newCart);
  }

  function updateCart(newCart) {
    setCart(newCart);
    if (isLoggedIn) {
      saveCart(newCart);
    } else {
      const cartString = JSON.stringify(newCart);
      localStorage.setItem("my-cart", cartString);
    }
  }
  const cartCount = cart.reduce(function (previous, current) {
    return previous + current.quantity;
  }, 0);
  return (
    <CartContext.Provider value={{ cart, cartCount, updateCart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}
export default withCart(CartProvider);
