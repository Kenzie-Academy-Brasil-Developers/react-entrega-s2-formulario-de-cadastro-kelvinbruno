import { createContext, useState, useEffect } from "react";

import axios from "axios";

import { useHistory } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { KenziehubAPI } from "../../services/api";

export const LoginContext = createContext({});

const LoginProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    


  });

  function logout() {
    setUser({});
    window.localStorage.clear();
    history.push("/");
  }

  const history = useHistory();

  const signIn = async (data) => {
    console.log(data);

    KenziehubAPI.post("/sessions", data).then((response) => {
      const { user: userResponse, token } = response.data;

      setUser(userResponse);

      window.localStorage.setItem("@kenziehub:token", token);
      KenziehubAPI.defaults.headers.authorization = `Bearer ${token}`;
    });

    const response = await KenziehubAPI.post("/sessions", data);

    const { user: userResponse } = response.data;
  };

  // function onSubmitFunction(data) {
  //   axios
  //     .post("https://kenziehub.herokuapp.com/sessions", data)
  //     .then((response) => {
  //       console.log(response);
  //       window.localStorage.clear();
  //       setUser(response.data.user);

  //       window.localStorage.setItem("authToken", response.data.token);
  //       setTimeout(() => history.push("/dashboard"), 2000);
  //       toast.success("Login realizado com sucesso!", {
  //         position: "top-right",
  //         autoClose: 5000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       toast.error("Senha e/ou e-mail estão incorretos", {
  //         position: "top-right",
  //         autoClose: 5000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //       });
  //     });
  // }

  return <LoginContext.Provider value>{children}</LoginContext.Provider>;
};

export default LoginProvider;
