import ModalHeader from "../ModalHeader";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { techsSchema } from "../../validators/techs";

import { ModalDiv } from "../../styles/forms and divs";

import { UseTechsContext } from "../../Contexts/Techs";

import { PrimaryButton } from "../../styles/buttons";
import {
  InputDiv,
  FormInput,
  FormSelect,
} from "../../styles/inputs and selects";

import { ITech } from "../../validators/techs";

import { FormLabel, ErrorLabel } from "../../styles/titles and text blocks";

export default function RegisterModal() {
  const { registerTech } = UseTechsContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ITech>({
    resolver: yupResolver(techsSchema),
  });

  return (
    <form className="form" onSubmit={ handleSubmit(registerTech)}>
      <ModalDiv>
        <ModalHeader titleContent="Cadastrar Tecnologia" />

        <InputDiv>
          <FormLabel>Nome</FormLabel>
          <FormInput {...register("title")} placeholder="Tecnologia" />
          <ErrorLabel>{errors.title?.message}</ErrorLabel>
        </InputDiv>

        <InputDiv>
          <FormLabel>Selecionar módulo</FormLabel>
          <FormSelect {...register("status")}>
            <option value="" disabled selected>
              Selecione o status
            </option>

            <option value="Iniciante">Iniciante</option>

            <option value="Intermediário">Intermediário</option>

            <option value="Avançado">Avançado</option>
          </FormSelect>

          <ErrorLabel>{errors.status?.message}</ErrorLabel>
        </InputDiv>

        <InputDiv>
          <PrimaryButton type="submit">Cadastrar</PrimaryButton>
        </InputDiv>
      </ModalDiv>
    </form>
  );
}
