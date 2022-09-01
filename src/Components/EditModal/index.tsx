import { useContext } from "react";

import { TechsContext } from "../../Contexts/Techs";

import ModalHeader from "../ModalHeader";

import { ITech } from "../../validators/techs";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { techsSchema } from "../../validators/techs";

import { ModalDiv } from "../../styles/forms and divs";

import { PrimaryButton, SecondButton } from "../../styles/buttons";
import {
  InputDiv,
  FormInput,
  FormSelect,
} from "../../styles/inputs and selects";

import { FormLabel, ErrorLabel } from "../../styles/titles and text blocks";

export default function EditModal() {
  const { modifiedTech, deleteTech, editTech } = useContext(TechsContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ITech>({
    resolver: yupResolver(techsSchema),
  });

  return (
    <form className="form" onSubmit={handleSubmit(editTech)}>
      <ModalDiv>
        <ModalHeader titleContent="Editar Tecnologia" />

        <InputDiv>
          <FormLabel>Nome</FormLabel>
          {modifiedTech && (
            <FormInput
              value={modifiedTech.title}
              {...register("title")}
              placeholder={modifiedTech?.title}
            />
          )}
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
          <PrimaryButton type="submit">Editar</PrimaryButton>
        </InputDiv>
        <InputDiv>
          <SecondButton
            onClick={(e) => {
              e.preventDefault();
              deleteTech();
            }}
          >
            Excluir
          </SecondButton>
        </InputDiv>
      </ModalDiv>
    </form>
  );
}
