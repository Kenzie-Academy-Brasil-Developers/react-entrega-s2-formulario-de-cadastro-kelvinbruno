import { ReactNode } from "react";
import LoginProvider from "./Login";
import RegisterProvider from "./Register";
import TechsProvider from "./Techs";

interface IProviders {
  children: ReactNode;
}

const Providers = ({ children }: IProviders) => {
  return (
    <RegisterProvider>
      <LoginProvider>
        <TechsProvider>{children}</TechsProvider>
      </LoginProvider>
    </RegisterProvider>
  );
};

export default Providers;
