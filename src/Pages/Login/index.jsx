import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";

// context
import { useContext } from "react";
import { LoginContext } from "../../Contexts/Login";

//validator
import { loginSchema } from "../../validators/login";

//components
import Logo from "../../Components/Logo";

// styles import
import { FormInput, InputDiv } from "../../styles/inputs and selects";
import {
  Title1Res,
  InfoSpan,
  ErrorLabel,
  FormLabel,
} from "../../styles/titles and text blocks";
import { PrimaryButton, SecondButton } from "../../styles/buttons";
import { GlobalForm, LoginDiv } from "../../styles/forms and divs";
// styles import end

export default function Login({ setUser }) {
  const history = useHistory();

  const{signIn} = useContext(LoginContext); //login function

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmitFunction = (data) => {
    axios
      .post("https://kenziehub.herokuapp.com/sessions", data)
      .then((response) => {
        console.log(response);
        window.localStorage.clear();
        setUser(response.data.user);

        window.localStorage.setItem("authToken", response.data.token);
        setTimeout(() => history.push("/dashboard"), 2000);
        toast.success("Login realizado com sucesso!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((err) => {
        console.log(err);
        toast.error("Senha e/ou e-mail estão incorretos", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  return (
    <GlobalForm className="form" onSubmit={handleSubmit(onSubmitFunction)}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <Logo />
      <LoginDiv className="container user-form">
        <Title1Res>Login</Title1Res>

        <InputDiv>
          <FormLabel>Email</FormLabel>
          <FormInput placeholder="Email" {...register("email")} />
          <ErrorLabel>{errors.email?.message}</ErrorLabel>
        </InputDiv>
        <InputDiv>
          <FormLabel>Senha</FormLabel>
          <FormInput
            type="password"
            placeholder="Senha"
            {...register("password")}
          />
          <ErrorLabel> {errors.password?.message}</ErrorLabel>
        </InputDiv>

        <InputDiv>
          <PrimaryButton type="submit">Enviar!</PrimaryButton>
        </InputDiv>

        <InfoSpan>Ainda não possui uma conta ?</InfoSpan>
        <SecondButton
          onClick={(event) => {
            event.preventDefault();
            history.push(`/register`);
          }}
        >
          Cadastre-se
        </SecondButton>
      </LoginDiv>
    </GlobalForm>
  );
}
