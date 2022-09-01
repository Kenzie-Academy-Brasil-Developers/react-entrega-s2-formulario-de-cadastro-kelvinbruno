import Logo from "../Logo";
import LogoutButton from "../LogoutButton";
import { HeaderStyled } from "../../styles/forms and divs";

import { DashBoardOrganizer } from "../../styles/forms and divs";

interface IDashboardHeaderProps{
  logout: () => void;
}

export default function DashboardHeader({logout} : IDashboardHeaderProps) {
  return (
    <HeaderStyled height = {72}>
      <DashBoardOrganizer>
      <Logo />
      <LogoutButton logout={logout} />
      </DashBoardOrganizer>

    </HeaderStyled>
  );
}
