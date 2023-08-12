import React, { useEffect, useState } from "react";
import { getProductData } from "./API";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Loading from "./Loading";
function CartPage({ cart, updateCart }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const productIds = Object.keys(cart);
  console.log("products outside", products);
  useEffect(function () {
    const myProductsPromises = productIds.map(function (id) {
      return getProductData(id);
    });
    Promise.all(myProductsPromises).then(function (products) {
      setProducts(products);
      setLoading(false);
    });
  }, [cart]);

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

  function handleChange() {
    console.log("handle change called");
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
              value={cart[p.id]}
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
    </div>
  );
}
export default CartPage;
