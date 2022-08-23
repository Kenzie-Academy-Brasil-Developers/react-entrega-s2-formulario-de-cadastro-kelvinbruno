import { useContext } from "react";

import { TechsContext } from "../../Contexts/Techs";

import Modal from "react-modal";

import ModalHeader from "../ModalHeader";

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
  } = useForm({
    resolver: yupResolver(techsSchema),
  });

  return (
    <form className="form" onSubmit={handleSubmit(editTech)}>
      <ModalDiv>
        <ModalHeader titleContent="Editar Tecnologia" />

        <InputDiv>
          <FormLabel>Nome</FormLabel>
          <FormInput
            value={modifiedTech.title}
            {...register("title")}
            placeholder="Tecnologia"
          />
          <ErrorLabel>{errors.title?.message}</ErrorLabel>
        </InputDiv>

        <InputDiv>
          <FormLabel>Selecionar módulo</FormLabel>
          <FormSelect value={modifiedTech.status} {...register("status")}>
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