import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as yup from "yup";

//components
import Logo from "../../Components/Logo";

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
  const history = useHistory();

  const formSchema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    bio: yup.string().required("Biografia obrigatória"),
    name: yup.string().required("Nome de usuário obrigatório"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
        "Senha deve possuir no mínimo 8 caracteres tendo entre eles: Uma letra maiscúla, uma letra minúscula, um caractere especial e um número."
      ),
    // .test( // por algum motivo não funcionava o minLength
    //   "passwordRequirements",
    //   "Senha deve possuir no mínimo 8 caracteres tendo entre eles: Uma letra maiscúla, uma letra minuscula, um caractere especial e um número.",
    //   (value) =>
    //     [/[a-z]/, /[A-Z]/, /[0-9]/, /[^a-zA-Z0-9]/].every((pattern) =>
    //       pattern.test(value)
    //     )
    //     // [/[a-z]/, /[A-Z]/, /[0-9]/, /[^a-zA-Z0-9]/]
    // ),
    passwordConfirmation: yup
      .string()
      .required("Confirmação de senha obrigatória")
      .oneOf(
        [yup.ref("password")],
        "Senha e confirmação precisam estar iguais"
      ),
    contact: yup.string().required("Contato obrigatório"),
    course_module: yup.string().required("Módulo é necessário para cadastro"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    delete data.passwordConfirmation; // password confirmation para ter certeza que pessoas colocarão as senhas certas mas não há necessidade de envio para API

    axios
      .post("https://kenziehub.herokuapp.com/users", data)
      .then((response) => {
        console.log(response);
        toast.success("Conta criada com sucesso!", {
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
        toast.error("Ops! Algo deu errado", {
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
            rules={{ required: true, minLength: 3 }}
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
              history.push(`/`);
            }}
          >
            Entrar
          </SecondButton>
        </InputDiv>
      </RegisterDiv>
    </GlobalForm>
  );
}
