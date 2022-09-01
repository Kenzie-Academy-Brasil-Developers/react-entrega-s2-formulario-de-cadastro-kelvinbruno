import { createContext, useState, useContext, ReactNode } from "react";

import { useLoginContext } from "../Login";

import { toastError, toastSuccess } from "../../Toasts/toasts";

import { KenziehubAPI } from "../../services/api";

import { ITech } from "../../validators/techs";

export const TechsContext = createContext<ITechsContext>({} as ITechsContext);

interface ITechsContext {
  modalIsOpen: boolean;
  editModalIsOpen: boolean;
  handleOpenModal: () => void;
  handleOpenEditModal: (tech: ITech) => void;
  handleCloseModal: () => void;
  customModal: Object;
  registerTech: (data: ITech) => void;
  modifiedTech: ITech | null;
  deleteTech: () => void;
  editTech: (tech: ITech) => void;
}

interface ITechsProviderProps {
  children: ReactNode;
}

const TechsProvider = ({ children }: ITechsProviderProps) => {
  const { updateUserData } = useLoginContext();

  const [modifiedTech, setModifiedTech] = useState<ITech | null>(null);
  const [editModalIsOpen, setEditModalIsOpen] = useState<boolean>(false);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const token = window.localStorage.getItem("@kenziehub:token");
  // KenziehubAPI.defaults.headers.authorization = `Bearer ${token}`;

  const customModal = {
    content: {
      width: "100%",
      height: "100%",
    },
  };

  function handleOpenModal() {
    setIsOpen(true);
  }
  function handleOpenEditModal(tech: ITech) {
    setModifiedTech(tech);

    setEditModalIsOpen(true);
  }

  function handleCloseModal() {
    setIsOpen(false);
    setEditModalIsOpen(false);
  }

  async function registerTech(data: ITech): Promise<void> {
    try {
      const response = await KenziehubAPI.post(`/users/techs`, data, {
        headers: { Authorization: `Bearer ${token}` },
      });

      toastSuccess("Tecnologia criada");
      updateUserData();
    } catch (errors) {
      toastError(`Ops! Algo deu errado durante a criação`);
      console.error(errors);
    }

    // try {
    //   const response = await KenziehubAPI.post(`/users/techs`, data, {
    //     headers: { Authorization: `Bearer ${token}` },
    //   });
    //   const { title }  = response.data;
    //   toastSuccess(`${title} foi cadastrada`);
    //   updateUserData();

    // } catch (errors) {
    //   toastError(`Tech já existe na lista`);
    //   console.error(errors);
    // }
  }

  async function deleteTech(): Promise<void> {
    try {
      const responseDelete = await KenziehubAPI.delete(
        `/users/techs/${modifiedTech?.id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.error(responseDelete);
      updateUserData();
      toastSuccess("Tecnologia excluída");
      setEditModalIsOpen(false);
    } catch (errors) {
      console.error(errors);
      toastError("Ops! Algo deu errado durante a exclusão");
    }
  }

  async function editTech(data: ITech): Promise<void> {
    try {
      const response = await KenziehubAPI.put(
        `/users/techs/${modifiedTech?.id}`,
        data,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const { title } = response.data;
      toastSuccess(`${title} foi alterada`);
      updateUserData();
    } catch (errors) {
      toastError(`Ops! Algo deu errado durante a edição`);
      console.error(errors);
    }
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

export function UseTechsContext(): ITechsContext {
  const context = useContext(TechsContext);

  return context;
}
