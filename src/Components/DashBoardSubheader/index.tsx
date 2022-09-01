import { HeaderStyled } from "../../styles/forms and divs";
import { Title1, InfoSpan } from "../../styles/titles and text blocks";

import { DashBoardOrganizer } from "../../styles/forms and divs";

import { IDev } from "../../validators/login";
 
interface IDashboardSubHeaderProps{
  user: IDev;
}

export default function DashboardSubHeader({ user } : IDashboardSubHeaderProps) {

  
  const formattedName = user.name.split(" ").slice(0, 2).join(" ");

  return (
    <HeaderStyled height={131}>
      <DashBoardOrganizer>
        <Title1>Olá, {formattedName}</Title1>
        <InfoSpan>{user.course_module}</InfoSpan>
      </DashBoardOrganizer>
    </HeaderStyled>
  );
}
