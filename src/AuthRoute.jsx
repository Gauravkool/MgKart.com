import React from "react";
import { Navigate } from "react-router";
import { withUser } from "./WithProvider";

function AuthRoute({ user, children }) {
  if (user) {
    return <Navigate to="/" />;
  }
  return children;
}
export default withUser(AuthRoute);
