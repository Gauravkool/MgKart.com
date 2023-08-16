import React, { useEffect, useState } from "react";
import { getProductData } from "./API";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Loading from "./Loading";
import CartList from "./CartList";
function CartPage({ cart, updateCart }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const productIds = Object.keys(cart);

  useEffect(
    function () {
      setLoading(true);
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

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="max-w-6xl mx-auto bg-white py-16 px-20">
      <CartList products={products} cart={cart} updateCart={updateCart} />
    </div>
  );
}
export default CartPage;
