import { createContext, useState, useEffect } from "react";



import { useHistory } from "react-router-dom";

import { toastError, toastSuccess } from "../../Toasts/toasts";

import { KenziehubAPI } from "../../services/api";

export const LoginContext = createContext({});

const LoginProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const history = useHistory();

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("@kenziehub:token");

      if (token) {
        KenziehubAPI.defaults.headers.authorization = `Bearer ${token}`;

        KenziehubAPI.get("/profile")
          .then((data) => setUser(data))
          .catch((error) => console.log(error));
      }
    }

    loadUser();
  }, []);

  function logout() {
    setUser(null);
    window.localStorage.clear();
    history.push("/");
  }

  const signIn = async (data) => {
    console.log(data);
    window.localStorage.clear();

    KenziehubAPI.post("/sessions", data)
      .then((response) => {
        const { user: userResponse, token } = response.data;

        setUser(userResponse);

        window.localStorage.setItem("@kenziehub:token", token);
        KenziehubAPI.defaults.headers.authorization = `Bearer ${token}`;

        toastSuccess("Login realizado com sucesso!");
      })
      .then(() => history.push("/dashboard")) // feito assim para poder carregar o toast antes
      .catch((err) => {
        toastError("Senha e/ou e-mail estão incorretos");
      });
  };

  return (
    <LoginContext.Provider value={{ user, signIn, logout }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;

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
