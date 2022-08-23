import { MainStyled } from "../../styles/forms and divs";
import { Title1, Title1Variation } from "../../styles/titles and text blocks";
import DashboardTechList from "../DashboardTechList";

import { useState } from "react";

import Modal from "react-modal";

import { AddButton } from "./styles";

import { useContext } from "react";

import { TechsContext } from "../../Contexts/Techs";

import RegisterModal from "../RegisterModal";

import {
  DashBoardTechListOrganizer,
  DashBoardOrganizer,
} from "../../styles/forms and divs";

export default function DashboardMain() {
  const { modalIsOpen, handleCloseModal, handleOpenModal, customModal } =
    useContext(TechsContext);

  return (
    <MainStyled>
      <Modal
        style={customModal}
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
      >
        <RegisterModal />
      </Modal>
      <DashBoardOrganizer>
        <Title1>Tecnologias</Title1>
        <AddButton onClick={handleOpenModal}>
          <i onClick={handleOpenModal} className="fa-solid fa-plus"></i>
        </AddButton>
      </DashBoardOrganizer>
      <DashBoardTechListOrganizer>
        <DashboardTechList></DashboardTechList>
      </DashBoardTechListOrganizer>
    </MainStyled>
  );
}
