import Logo from "../Logo";
import LogoutButton from "../LogoutButton";
import { HeaderStyled } from "../../styles/forms and divs";

export default function DashboardHeader({logout}) {
  return (
    <HeaderStyled height = '72px'>
      <Logo />
      <LogoutButton logout={logout} />

    </HeaderStyled>
  );
}