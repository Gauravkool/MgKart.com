import React from "react";
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
import CartProvider from "./Providers/CartProvider";
function App() {
  return (
    <>
      <UserProvider>
        <AlertProvider>
          <CartProvider>
            <div className="bg-gray-200 h-screen overflow-y-scroll flex flex-col">
              <NavBar />
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
                  <Route path="/products/:id" element={<ProductDetail />} />
                  <Route path="*" element={<NotFound />} />
                  <Route path="/cart" element={<CartPage />} />
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
          </CartProvider>
        </AlertProvider>
      </UserProvider>
    </>
  );
}

export default App;
