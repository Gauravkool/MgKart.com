import React, { useEffect, useState } from "react";
import { getProductData } from "./API";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Loading from "./Loading";
function CartPage({ cart, updateCart }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [localCart, setLocalCart] = useState(cart);
  const productIds = Object.keys(cart);
  
  console.log(localCart)
  useEffect(
    function () {
      setLocalCart(cart);
    },
    [cart]
  );
  useEffect(
    function () {
      const myProductsPromises = productIds.map(function (id) {
        return getProductData(id);
      });
      Promise.all(myProductsPromises).then(function (products) {
        setProducts(products);
        setLoading(false);
      });
    },
    [cart]
  );

  function handleRemove(e) {
    const productId = e.currentTarget.getAttribute("productid");
    console.log("remove products by id", productId);
    const newCart = { ...cart };
    console.log("before cart", newCart);
    delete newCart[productId];
    updateCart(newCart);
    console.log("after cart", newCart);
    setLoading(true);
  }

  function handleChange(e) {
    const newValue = +e.target.value;
    const productId = e.target.getAttribute("productId");
    console.log("newValue", " productid", newValue, productId);
    const newLocalCart = { ...localCart, [productId]: newValue };
    setLocalCart(newLocalCart);
  }

  function handleUpdateCart() {
    updateCart(localCart);
  }

  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      {products.map(function (p) {
        return (
          <div key={p.id}>
            {p.title}
            <input
              productid={p.id}
              value={localCart[p.id]}
              type="number"
              onChange={handleChange}
              className="w-12 p-1 border border-gray-200 rounded-md mx-2"
            />
            <button productid={p.id} onClick={handleRemove}>
              <AiOutlineCloseCircle />
            </button>
          </div>
        );
      })}
      <button
        className="bg-indigo-700"
        onClick={handleUpdateCart}
      >
        Update cart
      </button>
    </div>
  );
}
export default CartPage;
