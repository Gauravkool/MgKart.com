import React, { useState } from "react";
import ProductListPage from "./ProductListPage";
import { Route, Routes, json } from "react-router-dom";
import ProductDetail from "./ProductDetail";
import NavBar from "./NavBar";
import Footer from "./Footer";
import NotFound from "./NotFound";
function App() {
  const savedDataString = localStorage.getItem("my-cart" || {});
  const savedData = JSON.parse(savedDataString);
  console.log("saved data is ", savedData);

  const [cart, setCart] = useState(savedData);
  function handleAddToCart(productId, count) {
    const oldCount = cart[productId] || 0;
    const newCart = { ...cart, [productId]: oldCount + count };
    setCart(newCart);
    const cartString = JSON.stringify(newCart);
    localStorage.setItem("my-cart", cartString);
  }
  const totalCount = Object.keys(cart).reduce(function (previous, current) {
    return previous + cart[current];
  }, 0);
  return (
    <>
      <div className="bg-gray-200 h-screen overflow-y-scroll flex flex-col">
        <NavBar productCount={totalCount} />
        <div className="grow">
          <Routes>
            <Route index element={<ProductListPage />} />
            <Route
              path="/products/:id"
              element={<ProductDetail addToCart={handleAddToCart} />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
