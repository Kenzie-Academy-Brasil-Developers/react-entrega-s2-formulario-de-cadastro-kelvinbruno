import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";

import * as yup from "yup";

import { Logo } from "../../styles/logos";

import { GlobalForm } from "../../styles/forms";

import {
  FormInput,
  PrimaryButton,
  SecondButton,
  ErrorLabel,
  LoginDiv,
  Title1Res,
  InfoSpan,
  FormLabel,
  FormSelect,
  InputDiv,
} from "../../styles/global";

export default function Login() {
  const history = useHistory();

  const formSchema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    bio: yup.string().required("Biografia obrigatória"),
    name: yup.string().required("Nome de usuário obrigatório"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .test(
        "passwordRequirements",
        "Senha deve possuir no mínimo 8 caracteres tendo entre eles: Uma letra maiscúla, uma letra minuscula, um caractere especial e um número.",
        (value) =>
          [/[a-z]/, /[A-Z]/, /[0-9]/, /[^a-zA-Z0-9]/].every((pattern) =>
            pattern.test(value)
          )
      ),
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
    console.log(data);
  };

  return (
    <GlobalForm className="form" onSubmit={handleSubmit(onSubmitFunction)}>
      <Logo>Kenzie Hub</Logo>
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
        <SecondButton  onClick={(event) =>{event.preventDefault(); history.push(`/register`)}}>Cadastre-se</SecondButton>
      </LoginDiv>
    </GlobalForm>
  );
}
