import { createContext, useState, useEffect } from "react";

import { useHistory } from "react-router-dom";

import { toastError, toastSuccess } from "../../Toasts/toasts";

import { KenziehubAPI } from "../../services/api";

export const TechsContext = createContext({});

const TechsProvider = ({ children }) => {
  const [modifiedTech, setModifiedTech] = useState(null);
  const [editModalIsOpen, setEditModalIsOpen] = useState(null);

  const token = window.localStorage.getItem("@kenziehub:token");
  KenziehubAPI.defaults.headers.authorization = `Bearer ${token}`;

  const [modalIsOpen, setIsOpen] = useState(false);
  function handleOpenModal() {
    setIsOpen(true);
  }
  function handleOpenEditModal(tech) {
    setModifiedTech(tech);

    setEditModalIsOpen(true);
  }

  function handleCloseModal() {
    setIsOpen(false);
    setEditModalIsOpen(false);
  }

  const customModal = {
    content: {
      width: "100%",
      height: "100%",
    },
  };

  function registerTech(data) {
    KenziehubAPI.post("/users/techs", data)
      .then((response) => {
        toastSuccess("Tecnologia criada com sucesso");
        handleCloseModal();
      })
      .catch((error) => {
        console.error(error);
        toastError("Ops! Algo deu errado durante a criação");
      });
  }

  function deleteTech() {
    KenziehubAPI.delete(`/users/techs/${modifiedTech.id}`)
      .then(() => toastSuccess("Tecnologia deleta com sucesso"))
      .catch(() => toastError("Ops! Algo deu errado durante a exclusão"));
  }

  function editTech(data) {
    KenziehubAPI.post(`/users/techs/${modifiedTech.id}`, data)
      .then(() => toastSuccess("Tecnologia editada com sucesso"))
      .catch(() => toastError("Ops! Algo deu errado durante a alteração"));
  }

  return (
    <TechsContext.Provider
      value={{
        modalIsOpen,
        editModalIsOpen,
        handleOpenModal,
        handleOpenEditModal,
        handleCloseModal,
        customModal,
        registerTech,
        modifiedTech,
        deleteTech,
        editTech,
      }}
    >
      {children}
    </TechsContext.Provider>
  );
};

export default TechsProvider;
