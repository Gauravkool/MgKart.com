import React, { useEffect, useState } from "react";
import { getProductData } from "./API";
function CartPage({ cart }) {
  const [products, setProducts] = useState([]);
  const productIds = Object.keys(cart);
  console.log("products outside", products.length);
  useEffect(function () {
    const myProductsPromises = productIds.map(function (id) {
      return getProductData(id);
    });
    Promise.all(myProductsPromises).then(function (products) {
      setProducts(products);
    });
  }, []);

  return (
    <div>
      {products.map(function (p) {
        return <div key={p.id}>{p.title}</div>;
      })}
    </div>
  );
}
export default CartPage;
