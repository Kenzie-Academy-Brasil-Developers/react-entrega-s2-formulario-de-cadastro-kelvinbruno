import { ModalHeaderPattern, ModalHeaderTitle } from "../RegisterModal/styles";

import { useContext } from "react";

import { TechsContext } from "../../Contexts/Techs";

export default function ModalHeader({ titleContent }) {
  const { handleCloseModal } = useContext(TechsContext);

  return (
    <ModalHeaderPattern>
      <ModalHeaderTitle>{titleContent}</ModalHeaderTitle>{" "}
      <i onClick={handleCloseModal} className="fa-solid fa-x"></i>
    </ModalHeaderPattern>
  );
}
