import * as yup from "yup";

import { ITech, IWork } from "./techs";

export const loginSchema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup.string().required("Senha obrigatória"),
  });


  export interface ILogin {
    email: string;
    password: string;
  }

  export interface IDev {
    id?: string;
    name: string;
    avatar_url?: string;
    contact: string;
    email: string;
    course_module: string;
    bio: string;
    techs: ITech[] | [];
    works?: IWork[] | [];
  }

  