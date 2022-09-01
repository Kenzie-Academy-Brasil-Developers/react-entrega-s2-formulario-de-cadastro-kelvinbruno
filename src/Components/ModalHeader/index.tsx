import { ModalHeaderPattern, ModalHeaderTitle } from "../RegisterModal/styles";



import { UseTechsContext } from "../../Contexts/Techs";


interface IModalHeaderProps{
  titleContent: string;
}

export default function ModalHeader({ titleContent } : IModalHeaderProps) {
  const { handleCloseModal } = UseTechsContext();

  return (
    <ModalHeaderPattern>
      <ModalHeaderTitle>{titleContent}</ModalHeaderTitle>{" "}
      <i onClick={handleCloseModal} className="fa-solid fa-x"></i>
    </ModalHeaderPattern>
  );
}
