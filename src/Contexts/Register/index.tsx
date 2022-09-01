import { createContext, ReactNode, useContext } from "react";

import { IFormRegister } from "../../validators/register";

import { toastError, toastSuccess } from "../../Toasts/toasts";

import { KenziehubAPI } from "../../services/api";

interface IRegisterProviderProps {
  children: ReactNode;
}
interface IRegisterContext {
  signUp: (data: IFormRegister) => void;
}

export const RegisterContext = createContext<IRegisterContext>(
  {} as IRegisterContext
);

const RegisterProvider = ({ children }: IRegisterProviderProps) => {
  const signUp = (data: IFormRegister) => {
    delete data.passwordConfirmation;

    KenziehubAPI.post("/users", data)
      .then((response) => {
        console.log(response);
        toastSuccess("Conta criada com sucesso !");
      })
      .catch((err) => {
        console.log(err);
        toastError("Ops! Algo deu errado");
      });
  };

  return (
    <RegisterContext.Provider value={{ signUp }}>
      {children}
    </RegisterContext.Provider>
  );
};

export default RegisterProvider;

export function useRegisterContext(): IRegisterContext {
  const context = useContext(RegisterContext);
  return context;
}
