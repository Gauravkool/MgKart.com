import React, { useEffect, useState } from "react";
import { getProductsByIds } from "./API";

import Loading from "./Loading";
import CartList from "./CartList";
function CartPage({ cart, updateCart }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(
    function () {
      setLoading(true);
      const productIds = Object.keys(cart);
      getProductsByIds(productIds).then(function (products) {
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
