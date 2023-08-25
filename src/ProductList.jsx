import React from "react";
import Product from "./Product";
function ProductList({ products }) {
  return (
    <div className="grid-cols-3 gap-2 md:grid space-y-3 md:space-y-0">
      {products.map(function (item) {
        return <Product key={item.id} {...item} />;
      })}
    </div>
  );
}
export default ProductList;
