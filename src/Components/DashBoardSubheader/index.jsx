import { HeaderStyled } from "../../styles/forms and divs";
import { Title1, InfoSpan } from "../../styles/titles and text blocks";

import { DashBoardOrganizer } from "../../styles/forms and divs";

export default function DashboardSubHeader({ user }) {

  
  const formattedName = user.name.split(" ").slice(0, 2).join(" ");

  return (
    <HeaderStyled height="131px">
      <DashBoardOrganizer>
        <Title1>Olá, {formattedName}</Title1>
        <InfoSpan>{user.course_module}</InfoSpan>
      </DashBoardOrganizer>
    </HeaderStyled>
  );
}
