import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";

import { useNavigate } from "react-router-dom";

import { toastError, toastSuccess } from "../../Toasts/toasts";

import { KenziehubAPI } from "../../services/api";

import { ILogin } from "../../validators/login";

import { IDev } from "../../validators/login";

export const LoginContext = createContext<ILoginContext>({} as ILoginContext);

interface ILoginProviderProps {
  children: ReactNode;
}

export interface ILoginContext {
  signIn: (data: ILogin) => void;
  user: IDev | null;
  logout: () => void;
  loading: Boolean;
  updateUserData: () => void;
}

const LoginProvider = ({ children }: ILoginProviderProps) => {
  const [user, setUser] = useState<IDev | null>(null);
  const [loading, setLoading] = useState<Boolean>(true);

  const navigate = useNavigate();

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("@kenziehub:token");
      console.log(token);

      try {
        const response = await KenziehubAPI.get(`/profile`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(response.data);
        setLoading(false);
      } catch (errors) {
        navigate("/");
        console.error(errors);
        setLoading(false);
      }
    }
    //   if (token) {
    //     try {
    //       updateUserData();
    //       setLoading(false);
    //     } catch (error) {
    //       console.log(error);
    //       setLoading(false);
    //     }
    //   } else {
    //     navigate("/");
    //   }
    // }

    //   try {
    //     const response = await KenziehubAPI.post(`/users/techs`, data, {
    //       headers: { Authorization: `Bearer ${token}` },
    //     });
    //     const { title } = response.data;
    //     toastSuccess(`${title} foi cadastrada`);
    //     updateUserData();
    //   } catch (errors) {
    //     toastError(`Tech já existe na lista`);
    //     console.error(errors);
    //   }
    // }

    loadUser();
  }, []);

  function logout() {
    setUser(null);
    window.localStorage.clear();
    navigate("/");
  }

  async function updateUserData() {
    const token = localStorage.getItem("@kenziehub:token");
    console.log(token);

    try {
      const response = await KenziehubAPI.get(`/profile`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(response.data);
      setLoading(false);
    } catch (errors) {
      navigate("/");
      console.error(errors);
      setLoading(false);
      toastError("Não foi possível atualizar os dados");
    }
  }

  const signIn = async (data: ILogin) => {
    window.localStorage.clear();

    KenziehubAPI.post("/sessions", data)
      .then((response) => {
        const { user: userResponse, token } = response.data;

        setUser(userResponse);

        window.localStorage.setItem("@kenziehub:token", token);
        // KenziehubAPI.defaults.headers.authorization = `Bearer ${token}`;

        // KenziehubAPI.post('/users/techs', {
        //   title: "React 1232",
        //   status: "Iniciante"
        // }).then(console.log('a'))

        toastSuccess("Login realizado com sucesso!");
      })
      .then(() => navigate("/dashboard")) // feito assim para poder carregar o toast antes
      .catch((err) => {
        toastError("Senha e/ou e-mail estão incorretos");
      });
  };

  return (
    <LoginContext.Provider
      value={{ user, signIn, logout, loading, updateUserData }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;

export function useLoginContext(): ILoginContext {
  const context = useContext(LoginContext);

  return context;
}
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
