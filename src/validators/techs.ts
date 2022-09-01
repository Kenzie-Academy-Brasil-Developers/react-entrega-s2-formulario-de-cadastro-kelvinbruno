import * as yup from "yup";

export const techsSchema = yup.object().shape({
    title: yup.string().required("Título obrigatório"),
    status: yup.string().required("Status obrigatório"),
  });


  export interface ITech {
    id?: string;
    title: string;
    status: string;
    updated_at?: string;
    created_at?: string;
  }

  export interface IWork {
    id?: string;
    title: string;
    description: string;
    deploy_url: string;
    updated_at?: string;
    created_at?: string;
  }