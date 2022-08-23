import LoginProvider from "./Login";
import RegisterProvider from "./Register";
import TechsProvider from "./Techs";

const Providers = ({ children }) => {
  return (
    <RegisterProvider>
      <LoginProvider>
        <TechsProvider>{children} </TechsProvider>
      </LoginProvider>
    </RegisterProvider>
  );
};

export default Providers;
