import React from "react";

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

  const { signIn } = useContext(LoginContext); //login function

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  return (
    <GlobalForm className="form" onSubmit={handleSubmit(signIn)}>
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
