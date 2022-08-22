import { createContext } from "react";

export const RegisterContext = createContext({});

const RegisterProvider = ({ children }) => {
  return <RegisterContext.Provider value>{children}</RegisterContext.Provider>;
};

export default RegisterProvider