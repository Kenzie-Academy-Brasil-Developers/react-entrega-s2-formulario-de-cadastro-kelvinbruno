import { TechList, TechListItem } from "./styles";
import { Title1Res, InfoSpan } from "../../styles/titles and text blocks";

import { useContext } from "react";
import { LoginContext } from "../../Contexts/Login";

import { TechsContext } from "../../Contexts/Techs";



import Modal from "react-modal";

import EditModal from "../EditModal";

export default function DashboardTechList() {
  const { user } = useContext(LoginContext);

  const { handleOpenEditModal, handleCloseModal, editModalIsOpen } =
    useContext(TechsContext);

  return (
    <div>
      <Modal isOpen={editModalIsOpen} onRequestClose={handleCloseModal}>
        <EditModal />
      </Modal>

      <TechList>
        {user.techs.length > 0 ? (
          user.techs.map((tech) => {
            return (
              <TechListItem
                onClick={(e) => handleOpenEditModal(tech)}
                key={tech.id}
                id={tech.id}
              >
                <Title1Res>{tech.title}</Title1Res>
                <InfoSpan>{tech.status}</InfoSpan>
              </TechListItem>
            );
          })
        ) : (
          <Title1Res>Você não possui nenhuma tecnologia registrada :/</Title1Res>
        )}
      </TechList>
    </div>
  );
}
