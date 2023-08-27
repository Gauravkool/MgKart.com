import { useContext } from "react";
import { AlertContext, CartContext, UserContext } from "./Contexts";
const WithProvider = (provider) => (IncomingComponent) => (props) => {
  const contextData = useContext(provider);
  return <IncomingComponent {...props} {...contextData} />;
};

export default WithProvider;

export const withAlert = WithProvider(AlertContext);
export const withUser = WithProvider(UserContext);
export const withCart = WithProvider(CartContext);
