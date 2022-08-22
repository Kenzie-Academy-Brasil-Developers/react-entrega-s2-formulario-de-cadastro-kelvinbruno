
import { createContext  } from "react";




import { toastError, toastSuccess } from "../../Toasts/toasts";

import { KenziehubAPI } from "../../services/api";
export const RegisterContext = createContext({});

const RegisterProvider = ({ children }) => {
const signUp = (data) =>{

  delete data.passwordConfirmation;

  KenziehubAPI.post('/users', data).then(
    toastSuccess('Conta criada com sucesso')
    .catch((err) => {
      console.log(err)
      toastError('Ops! Algo deu errado')
    })
  )
}


  
  return <RegisterContext.Provider value ={{signUp}}>{children}</RegisterContext.Provider>;
};

export default RegisterProvider







// const LoginProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   const history = useHistory();

//   useEffect(() => {
//     async function loadUser() {
//       const token = localStorage.getItem("@kenziehub:token");

//       if (token) {
//         KenziehubAPI.defaults.headers.authorization = `Bearer ${token}`;

//         KenziehubAPI.get("/profile")
//           .then((data) => setUser(data))
//           .catch((error) => console.log(error));
//       }
//     }

//     loadUser();
//   }, []);

//   function logout() {
//     setUser(null);
//     window.localStorage.clear();
//     history.push("/");
//   }

//   const signIn = async (data) => {
//     console.log(data);
//     window.localStorage.clear();

//     KenziehubAPI.post("/sessions", data)
//       .then((response) => {
//         const { user: userResponse, token } = response.data;

//         setUser(userResponse);

//         window.localStorage.setItem("@kenziehub:token", token);
//         KenziehubAPI.defaults.headers.authorization = `Bearer ${token}`;

//         toast.success("Login realizado com sucesso!", {
//           position: "top-right",
//           autoClose: 5000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//         });
//       })
//       .then(() => history.push("/dashboard")) // feito assim para poder carregar o toast antes
//       .catch((err) => {
//         toast.error("Senha e/ou e-mail estão incorretos", {
//           position: "top-right",
//           autoClose: 5000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//         });
//       });
//   };

//   return (
//     <LoginContext.Provider value={{ user, signIn, logout }}>
//       {children}
//     </LoginContext.Provider>
//   );
// };


