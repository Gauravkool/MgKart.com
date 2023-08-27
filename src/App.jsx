import React, { useState } from "react";
import ProductListPage from "./ProductListPage";
import { Route, Routes } from "react-router-dom";
import ProductDetail from "./ProductDetail";
import NavBar from "./NavBar";
import Footer from "./Footer";
import NotFound from "./NotFound";
import Signup from "./Signup";
import CartPage from "./CartPage";
import Login from "./LogIn";
import ForgotPassword from "./ForgotPassword";
import Test from "./Test";
import AlertProvider from "./Providers/AlertProvider";
import UserProvider from "./Providers/UserProvider";
import AuthRoute from "./AuthRoute";
import UserRoute from "./UserRoute";
function App() {
  const savedDataString = localStorage.getItem("my-cart" || "{}");
  const savedData = JSON.parse(savedDataString);

  const [cart, setCart] = useState(savedData);
  function handleAddToCart(productId, count) {
    const oldCount = cart[productId] || 0;
    const newCart = { ...cart, [productId]: oldCount + count };
    updateCart(newCart);
  }

  function updateCart(newCart) {
    setCart(newCart);
    const cartString = JSON.stringify(newCart);
    localStorage.setItem("my-cart", cartString);
  }
  const totalCount = Object.keys(cart).reduce(function (previous, current) {
    return previous + cart[current];
  }, 0);
  return (
    <>
      <UserProvider>
        <AlertProvider>
          <div className="bg-gray-200 h-screen overflow-y-scroll flex flex-col">
            <NavBar productCount={totalCount} />
            <div className="grow p-10">
              <Routes>
                <Route
                  index
                  element={
                    <UserRoute>
                      <ProductListPage />
                    </UserRoute>
                  }
                />
                <Route
                  path="/products/:id"
                  element={<ProductDetail addToCart={handleAddToCart} />}
                />
                <Route path="*" element={<NotFound />} />
                <Route
                  path="/cart"
                  element={<CartPage cart={cart} updateCart={updateCart} />}
                />
                <Route
                  path="login"
                  element={
                    <AuthRoute>
                      <Login />
                    </AuthRoute>
                  }
                />
                <Route path="signup" element={<Signup />} />
                <Route path="forgotpassword" element={<ForgotPassword />} />
                <Route path="test" element={<Test />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </AlertProvider>
      </UserProvider>
    </>
  );
}

export default App;
