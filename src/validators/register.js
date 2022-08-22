import * as yup from "yup";

export const registerSchema = yup.object().shape({
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
    .oneOf([yup.ref("password")], "Senha e confirmação precisam estar iguais"),
  contact: yup.string().required("Contato obrigatório"),
  course_module: yup.string().required("Módulo é necessário para cadastro"),
});
