import { TechList, TechListItem } from "./styles";
import { Title1Res, InfoSpan } from "../../styles/titles and text blocks";

import { UseTechsContext } from "../../Contexts/Techs";

import { useLoginContext } from "../../Contexts/Login";

import Modal from "react-modal";

import EditModal from "../EditModal";

export default function DashboardTechList() {
  const { user } = useLoginContext();

  const { handleOpenEditModal, handleCloseModal, editModalIsOpen } =
    UseTechsContext();

  return (
    <div>
      <Modal isOpen={editModalIsOpen} onRequestClose={handleCloseModal}>
        <EditModal />
      </Modal>

      <TechList>
        {user && user.techs.length > 0 ? (
          user?.techs.map((tech) => {
            return (
              <TechListItem
                onClick={() => handleOpenEditModal(tech)}
                key={tech.id}
                id={tech.id}
              >
                <Title1Res>{tech.title}</Title1Res>
                <InfoSpan>{tech.status}</InfoSpan>
              </TechListItem>
            );
          })
        ) : (
          <Title1Res>
            Você não possui nenhuma tecnologia registrada :/
          </Title1Res>
        )}
      </TechList>
    </div>
  );
}
