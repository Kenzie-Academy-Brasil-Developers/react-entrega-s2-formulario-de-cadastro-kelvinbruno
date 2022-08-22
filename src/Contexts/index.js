import LoginProvider from "./Login";
import RegisterProvider from "./Register/RegisterContext";


const Providers = ({ children }) => {
    return <RegisterProvider><LoginProvider>{children}</LoginProvider></RegisterProvider>
};

export default Providers;