import React, { useContext } from "react";
import { Navigate } from "react-router";

import { withUser } from "./WithProvider";

function UserRoute({user, children }) {
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
}
export default withUser(UserRoute);
