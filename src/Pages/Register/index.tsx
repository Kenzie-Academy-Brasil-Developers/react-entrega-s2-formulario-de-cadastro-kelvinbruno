import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

//interfaces
import { IFormRegister } from "../../validators/register";

// context
import { useContext } from "react";
import { RegisterContext } from "../../Contexts/Register";

//components
import Logo from "../../Components/Logo";

//validator
import { registerSchema } from "../../validators/register";

// styles import
import {
  Title1Res,
  InfoSpan,
  ErrorLabel,
  FormLabel,
} from "../../styles/titles and text blocks";
import { PrimaryButton, SecondButton } from "../../styles/buttons";

import {
  FormSelect,
  FormInput,
  InputDiv,
} from "../../styles/inputs and selects";
import { GlobalForm, RegisterDiv } from "../../styles/forms and divs";
// styles import end

export default function Register() {
  const navigate = useNavigate();
  const { signUp } = useContext(RegisterContext); //login function

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm <IFormRegister>({
    resolver: yupResolver(registerSchema),
  });

  return (
    <GlobalForm className="form" onSubmit={handleSubmit(signUp)}>
      <Logo />
      <RegisterDiv className="container user-form">
        <Title1Res>Crie sua conta</Title1Res>
        <InfoSpan>Rapido e grátis, vamos nessa</InfoSpan>

        <InputDiv>
          <FormLabel>Nome</FormLabel>
          <FormInput placeholder="Nome completo" {...register("name")} />
          <ErrorLabel> {errors.name?.message}</ErrorLabel>
        </InputDiv>

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
            {...register("password", { minLength: 8 })}
         
          />
          <ErrorLabel> {errors.password?.message}</ErrorLabel>
        </InputDiv>

        <InputDiv>
          <FormLabel>Confirmar Senha</FormLabel>
          <FormInput
            type="password"
            placeholder="Confirmar senha"
            {...register("passwordConfirmation")}
          />
          <ErrorLabel> {errors.passwordConfirmation?.message}</ErrorLabel>
        </InputDiv>

        <InputDiv>
          <FormLabel>Bio</FormLabel>
          <FormInput placeholder="Fale sobre você" {...register("bio")} />
          <ErrorLabel>{errors.bio?.message}</ErrorLabel>
        </InputDiv>

        <InputDiv>
          <FormLabel>Contato</FormLabel>
          <FormInput placeholder="Fale sobre você" {...register("contact")} />
          <ErrorLabel>{errors.contact?.message}</ErrorLabel>
        </InputDiv>

        <InputDiv>
          <FormLabel>Selecionar módulo</FormLabel>
          <FormSelect {...register("course_module")}>
            <option value="" disabled selected>
              Selecione seu módulo
            </option>

            <option value="Primeiro módulo (Introdução ao Frontend)">
              Primeiro módulo (Introdução ao Frontend)
            </option>

            <option value="Segundo módulo (Frontend Avançado)">
              Segundo módulo (Frontend Avançado)
            </option>

            <option value="Terceiro módulo (Introdução ao Backend)">
              Terceiro módulo (Introdução ao Backend)
            </option>

            <option value="Quarto módulo (Backend Avançado)">
              Quarto módulo (Backend Avançado)
            </option>
          </FormSelect>
          <ErrorLabel>{errors.course_module?.message}</ErrorLabel>
        </InputDiv>

        <InputDiv>
          <PrimaryButton type="submit">Enviar!</PrimaryButton>
        </InputDiv>

        <InfoSpan>Já possui uma conta ?</InfoSpan>

        <InputDiv>
          <SecondButton
            onClick={(event) => {
              event.preventDefault();
              navigate('/');
            }}
          >
            Entrar
          </SecondButton>
        </InputDiv>
      </RegisterDiv>
    </GlobalForm>
  );
}
