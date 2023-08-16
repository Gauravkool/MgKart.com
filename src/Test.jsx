import React from "react";
import CartRow from "./CartRow";
import { dummyProducts } from "./dummyProducts";
import CartList from "./CartList";
function Test() {
  return (
    <div className="p-4 bg-white">
      <CartList products={dummyProducts} cart={{ 1: 2, 2: 4, 3: 6 }} />
    </div>
  );
}
export default Test;
